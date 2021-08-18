import classnames from 'classnames';
import {useMemo, useReducer, useState} from "react"
import PropTypes from 'prop-types';

import "./BottomModal.css"
import Option from "./Option/Option"
import Slider from "./Slider/Slider"

function checkedReducer(state, action) {
  const { type, payload } = action;
  let newState;

  switch (type) {
      case 'toggle':
          newState = { ...state };
          if (payload in newState) {
              delete newState[payload];
          } else {
              newState[payload] = true;
          }
          return newState;
      case 'reset':
          return {};
      default:
  }

  return state;
}

const BottomModal = (props) => {

  const {
    ticketTypes,
    trainTypes,
    departStations,
    arriveStations,
    checkedTicketTypes,
    checkedTrainTypes,
    checkedDepartStations,
    checkedArriveStations,
    departTimeStart,
    departTimeEnd,
    arriveTimeStart,
    arriveTimeEnd,
    setCheckedTicketTypes,
    setCheckedTrainTypes,
    setCheckedDepartStations,
    setCheckedArriveStations,
    setDepartTimeStart,
    setDepartTimeEnd,
    setArriveTimeStart,
    setArriveTimeEnd,
    toggleIsFiltersVisible,
  } = props;

  const [
    localCheckedTicketTypes,
    localCheckedTicketTypesDispatch,
  ] = useReducer(checkedReducer, checkedTicketTypes, checkedTicketTypes => {
    return {
      ...checkedTicketTypes,
    };
  });

  const [localCheckedTrainTypes, localCheckedTrainTypesDispatch] = useReducer(
      checkedReducer,
      checkedTrainTypes,
      checkedTrainTypes => {
          return {
              ...checkedTrainTypes,
          };
      }
  );

  const [
      localCheckedDepartStations,
      localCheckedDepartStationsDispatch,
  ] = useReducer(
      checkedReducer,
      checkedDepartStations,
      checkedDepartStations => {
          return {
              ...checkedDepartStations,
          };
      }
  );

  const [
      localCheckedArriveStations,
      localCheckedArriveStationsDispatch,
  ] = useReducer(
      checkedReducer,
      checkedArriveStations,
      checkedArriveStations => {
          return {
              ...checkedArriveStations,
          };
      }
  );

  const [localDepartTimeStart, setLocalDepartTimeStart] = useState(
    departTimeStart
  );
  const [localDepartTimeEnd, setLocalDepartTimeEnd] = useState(departTimeEnd);
  const [localArriveTimeStart, setLocalArriveTimeStart] = useState(
    arriveTimeStart
  );
  const [localArriveTimeEnd, setLocalArriveTimeEnd] = useState(arriveTimeEnd);

  const isResetDisabled = useMemo(() => {
    return (
        Object.keys(localCheckedTicketTypes).length === 0 &&
        Object.keys(localCheckedTrainTypes).length === 0 &&
        Object.keys(localCheckedDepartStations).length === 0 &&
        Object.keys(localCheckedArriveStations).length === 0 &&
        localDepartTimeStart === 0 &&
        localDepartTimeEnd === 24 &&
        localArriveTimeStart === 0 &&
        localArriveTimeEnd === 24
      );
    }, [
      localCheckedTicketTypes,
      localCheckedTrainTypes,
      localCheckedDepartStations,
      localCheckedArriveStations,
      localDepartTimeStart,
      localDepartTimeEnd,
      localArriveTimeStart,
      localArriveTimeEnd,
    ]);

  function reset() {
    if (isResetDisabled) {
        return;
    }

    localCheckedTicketTypesDispatch({ type: 'reset' });
    localCheckedTrainTypesDispatch({ type: 'reset' });
    localCheckedDepartStationsDispatch({ type: 'reset' });
    localCheckedArriveStationsDispatch({ type: 'reset' });
    setLocalDepartTimeStart(0);
    setLocalDepartTimeEnd(24);
    setLocalArriveTimeStart(0);
    setLocalArriveTimeEnd(24);
  }

  function sure() {
    setCheckedTicketTypes(localCheckedTicketTypes);
    setCheckedTrainTypes(localCheckedTrainTypes);
    setCheckedDepartStations(localCheckedDepartStations);
    setCheckedArriveStations(localCheckedArriveStations);

    setDepartTimeStart(localDepartTimeStart);
    setDepartTimeEnd(localDepartTimeEnd);

    setArriveTimeStart(localArriveTimeStart);
    setArriveTimeEnd(localArriveTimeEnd);

    toggleIsFiltersVisible();
  }

  const optionGroup = [
    {
        title: 'Seat Class',
        options: ticketTypes,
        checkedMap: localCheckedTicketTypes,
        dispatch: localCheckedTicketTypesDispatch,
    },
    {
        title: 'Train',
        options: trainTypes,
        checkedMap: localCheckedTrainTypes,
        dispatch: localCheckedTrainTypesDispatch,
    },
    {
        title: 'Starting Station',
        options: departStations,
        checkedMap: localCheckedDepartStations,
        dispatch: localCheckedDepartStationsDispatch,
    },
    {
        title: 'Terminal',
        options: arriveStations,
        checkedMap: localCheckedArriveStations,
        dispatch: localCheckedArriveStationsDispatch,
    },
  ];

  return(
    <div className="bottom-modal">
      <div className="bottom-dialog">
        <div className="bottom-dialog-content">
          <div className="title">
            <span
              className={classnames('reset', {
                disabled: isResetDisabled,
              })}
              onClick={reset}
            >
              Reset Filter
            </span>
            <span className="ok" onClick={sure}>
                Confirm
            </span>
          </div>
          <div className="options">
            {optionGroup.map(group => (
                <Option {...group} key={group.title} />
            ))}
            <Slider
              title="Depart Time(Only work in Mobile Mode)"
              currentStartHours={localDepartTimeStart}
              currentEndHours={localDepartTimeEnd}
              onStartChanged={setLocalDepartTimeStart}
              onEndChanged={setLocalDepartTimeEnd}
            />
            <Slider
              title="Arrive Time(Only work in Mobile Mode)"
              currentStartHours={localArriveTimeStart}
              currentEndHours={localArriveTimeEnd}
              onStartChanged={setLocalArriveTimeStart}
              onEndChanged={setLocalArriveTimeEnd}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomModal

BottomModal.propTypes = {
  ticketTypes: PropTypes.array.isRequired,
  trainTypes: PropTypes.array.isRequired,
  departStations: PropTypes.array.isRequired,
  arriveStations: PropTypes.array.isRequired,
  checkedTicketTypes: PropTypes.object.isRequired,
  checkedTrainTypes: PropTypes.object.isRequired,
  checkedDepartStations: PropTypes.object.isRequired,
  checkedArriveStations: PropTypes.object.isRequired,
  departTimeStart: PropTypes.number.isRequired,
  departTimeEnd: PropTypes.number.isRequired,
  arriveTimeStart: PropTypes.number.isRequired,
  arriveTimeEnd: PropTypes.number.isRequired,
  setCheckedTicketTypes: PropTypes.func.isRequired,
  setCheckedTrainTypes: PropTypes.func.isRequired,
  setCheckedDepartStations: PropTypes.func.isRequired,
  setCheckedArriveStations: PropTypes.func.isRequired,
  setDepartTimeStart: PropTypes.func.isRequired,
  setDepartTimeEnd: PropTypes.func.isRequired,
  setArriveTimeStart: PropTypes.func.isRequired,
  setArriveTimeEnd: PropTypes.func.isRequired,
  toggleIsFiltersVisible: PropTypes.func.isRequired,
};