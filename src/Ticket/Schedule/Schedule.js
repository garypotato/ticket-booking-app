import { memo, useState, useEffect } from "react"
import PropTypes from 'prop-types';
import classnames from 'classnames';
import leftPad from 'left-pad';

import "./Schedule.css"

const ScheduleRow = (props) => {
  const {
    index,
    station,
    arriveTime,
    departTime,
    stay,

    isStartStation,
    isEndStation,
    isDepartStation,
    isArriveStation,
    beforeDepartStation,
    afterArriveStation,
  } = props;
  return (
    <li>
        <div
            className={classnames('icon', {
                'icon-red': isDepartStation || isArriveStation,
            })}
        >
            {isDepartStation
                ? 'D'
                : isArriveStation
                ? 'T'
                : leftPad(index, 2, 0)}
        </div>
        <div
            className={classnames('row', {
                grey: beforeDepartStation || afterArriveStation,
            })}
        >
            <span
                className={classnames('station', {
                    red: isArriveStation || isDepartStation,
                })}
            >
                {station}
            </span>
            <span
                className={classnames('arrtime', {
                    red: isArriveStation,
                })}
            >
                {isStartStation ? 'Dep.' : arriveTime}
            </span>
            <span
                className={classnames('deptime', {
                    red: isDepartStation,
                })}
            >
                {isEndStation ? 'Arr.' : departTime}
            </span>
            <span className="stoptime">
                {isStartStation || isEndStation ? '-' : stay + 'mins'}
            </span>
        </div>
    </li>
  );
}

const Schedule = (props) => {
  const { date, trainNumber, departStation, arriveStation } = props;

  const [scheduleList, setScheduleList] = useState([]);

  useEffect(() => {
    const data = [{
      station: 'Sydney',
      arriveTime: null,
      departTime: '07:20',
      stay: null,
    }, {
      station: 'Albury',
      arriveTime: '07:54',
      departTime: '07:56',
      stay: 2,
    }, {
      station: 'Melbourne',
      arriveTime: '11:51',
      departTime: '11:53',
      stay: 2,
    }, {
      station: 'Warrnambool',
      arriveTime: '13:08',
      departTime: null,
      stay: null,
    }]

    let departRow;
      let arriveRow;

    for (let i = 0; i < data.length; ++i) {
      if (!departRow) {
        if (data[i].station === departStation) {
          departRow = Object.assign(data[i], {
            beforeDepartStation: false,
            isDepartStation: true,
            afterArriveStation: false,
            isArriveStation: false,
          });
        } else {
          Object.assign(data[i], {
            beforeDepartStation: true,
            isDepartStation: false,
            afterArriveStation: false,
            isArriveStation: false,
          });
        }
      } else if (!arriveRow) {
        if (data[i].station === arriveStation) {
            arriveRow = Object.assign(data[i], {
              beforeDepartStation: false,
              isDepartStation: false,
              afterArriveStation: false,
              isArriveStation: true,
            });
        } else {
            Object.assign(data[i], {
              beforeDepartStation: false,
              isDepartStation: false,
              afterArriveStation: false,
              isArriveStation: false,
          });
        }
      } else {
        Object.assign(data[i], {
          beforeDepartStation: false,
          isDepartStation: false,
          afterArriveStation: true,
          isArriveStation: false,
        });
      }

    Object.assign(data[i], {
        isStartStation: i === 0,
        isEndStation: i === data.length - 1,
      });
    }

    setScheduleList(data);
  }, [date, trainNumber, departStation, arriveStation]);

  return (
    <div className="schedule">
      <div className="dialog">
        <h1>Timetable</h1>
        <div className="head">
          <span className="station">Station</span>
          <span className="deptime">Arr.</span>
          <span className="arrtime">Dep.</span>
          <span className="stoptime">Stop</span>
        </div>
        <ul>
          {scheduleList.map((schedule, index) => {
            return (
              <ScheduleRow
                key={schedule.station}
                index={index + 1}
                {...schedule}
              />
            );
          })}
        </ul>
      </div>
    </div>
    
  )
}

export default memo(Schedule)

Schedule.propTypes = {
  date: PropTypes.number.isRequired,
  trainNumber: PropTypes.string.isRequired,
  departStation: PropTypes.string.isRequired,
  arriveStation: PropTypes.string.isRequired,
};