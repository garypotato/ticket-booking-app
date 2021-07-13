import {memo} from "react"
import "./Submit.css"

const Submit = (props) => {
  return (
    <div className="submit">
        <button type="submit" className="submit-button">
            {' '}Search{' '}
        </button>
    </div>
  );
}

export default memo(Submit)