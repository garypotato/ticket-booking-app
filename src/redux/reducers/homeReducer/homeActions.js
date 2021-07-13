export const HOME_ACTION_SET_FROM = 'HOME_SET_FROM';
export const HOME_ACTION_SET_TO = 'HOME_SET_TO';
export const HOME_ACTION_SET_IS_CITY_SELECTOR_VISIBLE =
    'HOME_SET_IS_CITY_SELECTOR_VISIBLE';
export const HOME_ACTION_SET_CURRENT_SELECTING_LEFT_CITY =
    'HOME_SET_CURRENT_SELECTING_LEFT_CITY';
export const HOME_ACTION_SET_CITY_DATA = 'HOME_SET_CITY_DATA';
export const HOME_ACTION_SET_IS_LOADING_CITY_DATA = 'HOME_SET_IS_LOADING_CITY_DATA';
export const HOME_ACTION_SET_IS_DATE_SELECTOR_VISIBLE =
    'HOME_SET_IS_DATE_SELECTOR_VISIBLE';
export const HOME_ACTION_SET_HIGH_SPEED = 'HOME_SET_HIGH_SPEED';
export const HOME_ACTION_SET_DEPART_DATE = 'HOME_SET_DEPART_DATE';

export function setFrom(from) {
    return {
        type: HOME_ACTION_SET_FROM,
        payload: from,
    };
}

export function setTo(to) {
    return {
        type: HOME_ACTION_SET_TO,
        payload: to,
    };
}

export function setIsLoadingCityData(isLoadingCityData) {
    return {
        type: HOME_ACTION_SET_IS_LOADING_CITY_DATA,
        payload: isLoadingCityData,
    };
}

export function showCitySelector(currentSelectingLeftCity) {
  return dispatch => {
      dispatch({
          type: HOME_ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
          payload: true,
      });

      dispatch({
          type: HOME_ACTION_SET_CURRENT_SELECTING_LEFT_CITY,
          payload: currentSelectingLeftCity,
      });
  };
}

export function hideCitySelector() {
    return {
        type: HOME_ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
        payload: false,
    };
}

export function setCityData(cityDate) {
    return {
        type: HOME_ACTION_SET_CITY_DATA,
        payload: cityDate,
    };
}

export function setSelectedCity(city) {
    return (dispatch, getState) => {
        const { home } = getState();
        const { currentSelectingLeftCity } = home;

        if (currentSelectingLeftCity) {
            dispatch(setFrom(city));
        } else {
            dispatch(setTo(city));
        }

        dispatch(hideCitySelector());
    };
}

export function fetchCityData() {
    return (dispatch, getState) => {
        const { home } = getState();
        const {isLoadingCityData} = home

        if (isLoadingCityData) {
            return;
        }

        const cache = JSON.parse(
            localStorage.getItem('city_data_cache') || '{}'
        );

        if (Date.now() < cache.expires) {
            dispatch(setCityData(cache.data));
            return;
        }

        dispatch(setIsLoadingCityData(true));

        fetch("/mock/cities.json")
            .then(res => res.json())
            .then(cityData => {
                dispatch(setCityData(cityData));

                localStorage.setItem(
                    'city_data_cache',
                    JSON.stringify({
                        expires: Date.now() + 60 * 1000,
                        data: cityData,
                    })
                );

                dispatch(setIsLoadingCityData(false));
            })
            .catch(() => {
                dispatch(setIsLoadingCityData(false));
            });
    };
}

export function exchangeFromTo() {
    return (dispatch, getState) => {
        const { home}  = getState();
        dispatch(setFrom(home.to));
        dispatch(setTo(home.from));
    };
}

export function showDateSelector() {
    return {
        type: HOME_ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
        payload: true,
    };
}

export function hideDateSelector() {
    return {
        type: HOME_ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
        payload: false,
    };
}

export function setDepartDate(departDate) {
    return {
        type: HOME_ACTION_SET_DEPART_DATE,
        payload: departDate,
    };
}

export function toggleHighSpeed() {
    return (dispatch, getState) => {
        const { home } = getState();
        dispatch({
            type: HOME_ACTION_SET_HIGH_SPEED,
            payload: !home.highSpeed,
        });
    };
}