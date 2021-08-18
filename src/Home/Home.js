/* eslint-disable react-hooks/exhaustive-deps */
import {useCallback, useMemo} from "react"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import "./Home.css"
import Header from "../common/Header/Header" 
import Journey from "./Journey/Journey"
import DepartDate from "./DepartDate/DepartDate"
import HighSpeed from "./HighSpeed/HighSpeed"
import Submit from "./Submit/Submit"
import CitySelector from "./CitySelector/CitySelector"
import DateSelector from "./DateSelector/DateSelector"
import {h0} from "../utilities/h0GetDate"
import {
  showCitySelector,
  exchangeFromTo,
  hideCitySelector,
  fetchCityData,
  setSelectedCity,
  showDateSelector,
  hideDateSelector,
  setDepartDate,
  toggleHighSpeed
} from '../redux/reducers/homeReducer/homeActions';

const Home = (props) => {
  const {
    from,
    to,
    departDate,
    highSpeed,
    isCitySelectorVisible,
    isDateSelectorVisible,
    isLoadingCityData,
    cityData,
    dispatch,
  } = props;

  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  const cbs = useMemo(() => {
    return bindActionCreators(
        {
          exchangeFromTo,
          showCitySelector,
        },
        dispatch
    );
  }, []);

  const citySelectorCbs = useMemo(() => {
    return bindActionCreators(
      {
        onBack: hideCitySelector,
        fetchCityData,
        onSelect: setSelectedCity,
      },
      dispatch
    );
  }, [dispatch]);

  const departDateCbs = useMemo(() => {
    return bindActionCreators(
      {
        onClick: showDateSelector,
      },
      dispatch
    );
  }, []);

  const dateSelectorCbs = useMemo(() => {
    return bindActionCreators(
      {
        onBack: hideDateSelector,
      },
      dispatch
    );
  }, []);

  const onSelectDate = useCallback(day => {
    if (!day) {
      return;
    }

    if (day < h0()) {
        return;
    }

    dispatch(setDepartDate(day));
    dispatch(hideDateSelector());
  }, []);

  const highSpeedCbs = useMemo(() => {
    return bindActionCreators(
      {
        toggle: toggleHighSpeed,
      },
      dispatch
    );
  }, []);

  return (
    <div className="home-wrapper"> 
      <div className="header-wrapper">
        <Header title="Please use Mobile Mode" onBack={onBack}/>
      </div>
      <form action="/query" className="form"> 
        <Journey from={from} to={to} {...cbs} />
        <DepartDate time={departDate} {...departDateCbs}/>
        <HighSpeed highSpeed={highSpeed} {...highSpeedCbs}/>
        <Submit />
        <div className="link-wrapper">
          <button type="button" className="button">
            <a className="gitHub-link" href="https://github.com/garypotato/train_Ticket"> 
                About this App
            </a>
          </button>
        </div>
      </form>
      
      <CitySelector 
        show={isCitySelectorVisible}
        isLoading={isLoadingCityData}
        cityData={cityData}
        {...citySelectorCbs}
      />
      <DateSelector
        show={isDateSelectorVisible}
        {...dateSelectorCbs}
        onSelect={onSelectDate}
      />
      
    </div>
  )
}

export default connect(
  function mapStateToProps(state) {
      return state.home;
  },
  function mapDispatchToProps(dispatch) {
      return { dispatch };
  }
)(Home);