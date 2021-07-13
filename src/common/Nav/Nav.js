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
      <span
        onClick={prev}
        className={classnames('nav-prev', {
            'nav-disabled': isPrevDisabled,
        })}
      >
        Prev date
      </span>
      <span className="nav-current">{currentString}</span>
      <span
        onClick={next}
        className={classnames('nav-next', {
            'nav-disabled': isNextDisabled,
        })}
      >
        Next date
      </span>
    </div>
  );
}

export default memo(Nav)