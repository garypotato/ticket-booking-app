export const ACTION_SET_TRAIN_NUMBER = 'ORDER_SET_TRAIN_NUMBER';
export const ACTION_SET_DEPART_STATION = 'ORDER_SET_DEPART_STATION';
export const ACTION_SET_ARRIVE_STATION = 'ORDER_SET_ARRIVE_STATION';
export const ACTION_SET_SEAT_TYPE = 'ORDER_SET_SEAT_TYPE';
export const ACTION_SET_DEPART_DATE = 'ORDER_ET_DEPART_DATE';
export const ACTION_SET_ARRIVE_DATE = 'ORDER_SET_ARRIVE_DATE';
export const ACTION_SET_DEPART_TIME_STR = 'ORDER_SET_DEPART_TIME_STR';
export const ACTION_SET_ARRIVE_TIME_STR = 'ORDER_SET_ARRIVE_TIME_STR';
export const ACTION_SET_DURATION_STR = 'ORDER_SET_DURATION_STR';
export const ACTION_SET_PRICE = 'ORDER_SET_PRICE';
export const ACTION_SET_PASSENGERS = 'ORDER_SET_PASSENGERS';
export const ACTION_SET_MENU = 'ORDER_SET_MENU';
export const ACTION_SET_IS_MENU_VISIBLE = 'ORDER_SET_IS_MENU_VISIBLE';
export const ACTION_SET_SEARCH_PARSED = 'ORDER_SET_SEARCH_PARSED';

export function setDepartStation(departStation) {
  return {
      type: ACTION_SET_DEPART_STATION,
      payload: departStation,
  };
}

export function setArriveStation(arriveStation) {
  return {
      type: ACTION_SET_ARRIVE_STATION,
      payload: arriveStation,
  };
}

export function setTrainNumber(trainNumber) {
  return {
      type: ACTION_SET_TRAIN_NUMBER,
      payload: trainNumber,
  };
}

export function setSeatType(seatType) {
  return {
      type: ACTION_SET_SEAT_TYPE,
      payload: seatType,
  };
}

export function setDepartDate(departDate) {
  return {
      type: ACTION_SET_DEPART_DATE,
      payload: departDate,
  };
}

export function setSearchParsed(searchParsed) {
  return {
      type: ACTION_SET_SEARCH_PARSED,
      payload: searchParsed,
  };
}

export function fetchInitial(url) {
  return (dispatch, getState) => {
    fetch("/mock/order.json")
      .then(res => res.json())
      .then(data => {
        const {
          departTimeStr,
          arriveTimeStr,
          durationStr,
          price,
        } = data;

      dispatch(setDepartTimeStr(departTimeStr));
      dispatch(setArriveTimeStr(arriveTimeStr));
      dispatch(setArriveDate(getState().order.departDate));
      dispatch(setDurationStr(durationStr));
      dispatch(setPrice(price));
    });
  };
}

export function setDepartTimeStr(departTimeStr) {
  return {
      type: ACTION_SET_DEPART_TIME_STR,
      payload: departTimeStr,
  };
}

export function setArriveTimeStr(arriveTimeStr) {
  return {
      type: ACTION_SET_ARRIVE_TIME_STR,
      payload: arriveTimeStr,
  };
}

export function setArriveDate(arriveDate) {
  return {
      type: ACTION_SET_ARRIVE_DATE,
      payload: arriveDate,
  };
}

export function setDurationStr(durationStr) {
  return {
      type: ACTION_SET_DURATION_STR,
      payload: durationStr,
  };
}

export function setPrice(price) {
  return {
      type: ACTION_SET_PRICE,
      payload: price,
  };
}

export function setPassengers(passengers) {
  return {
      type: ACTION_SET_PASSENGERS,
      payload: passengers,
  };
}

let passengerIdSeed = 0;

export function createAdult() {
  return (dispatch, getState) => {
    const { order } = getState();
    const {passengers} = order

    for (let passenger of passengers) {
      const keys = Object.keys(passenger);
      for (let key of keys) {
        if (!passenger[key]) {
          return;
        }
      }
    }

    dispatch(
      setPassengers([
        ...passengers,
        {
          id: ++passengerIdSeed,
          name: '',
          ticketType: 'adult',
          licenceNo: '',
          seat: 'Z',
        },
      ])
    );
  };
}

export function createChild() {
  return (dispatch, getState) => {
      const { order } = getState();
      const {passengers} = order
      let adultFound = null;

      for (let passenger of passengers) {
        const keys = Object.keys(passenger);
        for (let key of keys) {
          if (!passenger[key]) {
            return;
          }
        }

        if (passenger.ticketType === 'adult') {
          adultFound = passenger.id;
        }
      }

      if (!adultFound) {
          alert('请至少正确添加一个同行成人');
          return;
      }

      dispatch(
          setPassengers([
              ...passengers,
              {
                  id: ++passengerIdSeed,
                  name: '',
                  gender: 'none',
                  birthday: '',
                  followAdult: adultFound,
                  ticketType: 'child',
                  seat: 'Z',
              },
          ])
      );
  };
}

export function removePassenger(id) {
  return (dispatch, getState) => {
    const { order } = getState();

    const newPassengers = order.passengers.filter(passenger => {
        return passenger.id !== id && passenger.followAdult !== id;
    });

    dispatch(setPassengers(newPassengers));
  };
}

export function updatePassenger(id, data, keysToBeRemoved = []) {
  return (dispatch, getState) => {
    const { order } = getState();
    const {passengers} = order

    for (let i = 0; i < passengers.length; ++i) {
      if (passengers[i].id === id) {
        const newPassengers = [...passengers];
        newPassengers[i] = Object.assign({}, passengers[i], data);

        for (let key of keysToBeRemoved) {
            delete newPassengers[i][key];
        }

        dispatch(setPassengers(newPassengers));

        break;
      }
    }
  };
}

export function setMenu(menu) {
  return {
      type: ACTION_SET_MENU,
      payload: menu,
  };
}



export function setIsMenuVisible(isMenuVisible) {
  return {
      type: ACTION_SET_IS_MENU_VISIBLE,
      payload: isMenuVisible,
  };
}

export function showMenu(menu) {
  return dispatch => {
      dispatch(setMenu(menu));
      dispatch(setIsMenuVisible(true));
  };
}

export function hideMenu() {
  return setIsMenuVisible(false);
}

export function showTicketTypeMenu(id) {
  return (dispatch, getState) => {
    const { order } = getState();
    const {passengers} = order

    const passenger = passengers.find(passenger => passenger.id === id);

    if (!passenger) {
        return;
    }

    dispatch(
      showMenu({
        onPress(ticketType) {
            if ('adult' === ticketType) {
              dispatch(
                updatePassenger(
                  id,
                  {
                      ticketType,
                      licenceNo: '',
                  },
                  ['gender', 'followAdult', 'birthday']
                )
              );
            } else {
                const adult = passengers.find(
                  passenger =>
                    passenger.id === id &&
                    passenger.ticketType === 'adult'
                );

                if (adult) {
                  dispatch(
                    updatePassenger(
                      id,
                      {
                        ticketType,
                        gender: '',
                        followAdult: adult.id,
                        birthday: '',
                      },
                      ['licenceNo']
                    )
                  );
              } else {
                alert('None of adult passenger');
              }
            }

            dispatch(hideMenu());
        },
        options: [
            {
                title: 'Adult Ticket',
                value: 'adult',
                active: 'adult' === passenger.ticketType,
            },
            {
                title: 'Child Ticket',
                value: 'child',
                active: 'child' === passenger.ticketType,
            },
        ],
      })
    );
  };
}

export function showFollowAdultMenu(id) {
  return (dispatch, getState) => {
    const { order } = getState();
    const {passengers} = order

    const passenger = passengers.find(passenger => passenger.id === id);

    if (!passenger) {
        return;
    }

    dispatch(
      showMenu({
        onPress(followAdult) {
          dispatch(updatePassenger(id, { followAdult }));
          dispatch(hideMenu());
        },
        options: passengers
          .filter(passenger => passenger.ticketType === 'adult')
          .map(adult => {
              return {
                title: adult.name,
                value: adult.id,
                active: adult.id === passenger.followAdult,
              };
          }),
      })
    );
  };
}

export function showGenderMenu(id) {
  return (dispatch, getState) => {
    const { order } = getState();
    const {passengers} = order
    const passenger = passengers.find(passenger => passenger.id === id);

    if (!passenger) {
      return;
    }

    dispatch(
      showMenu({
        onPress(gender) {
          dispatch(updatePassenger(id, { gender }));
          dispatch(hideMenu());
        },
        options: [
          {
            title: 'Male',
            value: 'male',
            active: 'male' === passenger.gender,
          },
          {
            title: 'Female',
            value: 'female',
            active: 'female' === passenger.gender,
          },
        ],
      })
    );
  };
}