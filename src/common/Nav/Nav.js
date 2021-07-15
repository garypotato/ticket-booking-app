import {memo, useMemo} from "react"
import classnames from 'classnames';
import dayjs from "dayjs"

import "./Nav.css"

const Nav = (props) => {

  const { date, prev, next, isPrevDisabled, isNextDisabled } = props;

  const currentString = useMemo(() => {
    const d = dayjs(date);
    return d.format('YYYY-MM-DD') + " " + d.locale('en').format('dddd');
}, [date]);

  return (
    <div className="nav">
      <i 
        onClick={prev}
        className= {classnames("far fa-arrow-alt-circle-left nav-prev", {
            'nav-disabled': isPrevDisabled,
        })} 
      />
      <span className="nav-current">{currentString}</span>
      <i  
        onClick={next}
        className={classnames('nav-next far fa-arrow-alt-circle-right', {
          'nav-disabled': isNextDisabled,
      })}
      />
    </div>
  );
}

export default memo(Nav)