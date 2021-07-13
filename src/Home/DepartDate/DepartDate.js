import {useMemo} from "react"
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

import "./DepartDate.css"
import {h0} from "../../utilities/h0GetDate"

const DepartDate = (props) => {
  const { time, onClick } = props;

  const h0OfDepart = h0(time);
  const departDate = new Date(h0OfDepart);

  const isToday = h0OfDepart === h0();

  const weekString =
        ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
        'Thursday', 'Firday', 'Saturday'][departDate.getDay()] +
        (isToday ? '(Today)' : '');

 
  const departDateString = useMemo(() => {
    return dayjs(h0OfDepart).format('YYYY-MM-DD');
  }, [h0OfDepart]);

  return (
    <div className="depart-date" onClick={onClick}>
        <input type="hidden" name="date" value= {departDateString} />
        &nbsp; {departDateString} &nbsp;
        <span className="depart-week">{weekString}</span>
    </div>
);
}

export default DepartDate

DepartDate.propTypes = {
  time: PropTypes.number.isRequired,
  // onClick: PropTypes.func.isRequired,
};
