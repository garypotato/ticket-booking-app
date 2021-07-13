import PropTypes from 'prop-types';
import { memo } from "react"

const Passenger = memo(function Passenger(props) {
  const {
      id,
      name,
      followAdultName,
      ticketType,
      licenceNo,
      gender,
      birthday,
      onRemove,
      onUpdate,
      showGenderMenu,
      showFollowAdultMenu,
      showTicketTypeMenu,
  } = props;

  const isAdult = ticketType === 'adult';

  return (
      <li className="passenger">
          <i className="delete" onClick={() => onRemove(id)}>
              —
          </i>
          <ol className="items">
              <li className="item">
                  <label className="label name">Name</label>
                  <input
                      type="text"
                      className="input name"
                      placeholder="Passenger Name"
                      value={name}
                      onChange={e => onUpdate(id, { name: e.target.value })}
                  />
                  <label
                      className="ticket-type"
                      onClick={() => showTicketTypeMenu(id)}
                  >
                      {isAdult ? 'Adult' : 'Child'}
                  </label>
              </li>
              {isAdult && (
                  <li className="item">
                      <label className="label licenceNo">ID No.</label>
                      <input
                          type="text"
                          className="input licenceNo"
                          placeholder="Driver licence No"
                          value={licenceNo}
                          onChange={e =>
                              onUpdate(id, { licenceNo: e.target.value })
                          }
                      />
                  </li>
              )}
              {!isAdult && (
                  <li className="item arrow">
                      <label className="label gender">Gender</label>
                      <input
                          type="text"
                          className="input gender"
                          placeholder="Please Select"
                          onClick={() => showGenderMenu(id)}
                          value={
                              gender === 'male'
                                  ? 'Male'
                                  : gender === 'female'
                                  ? 'Female'
                                  : ''
                          }
                          readOnly
                      />
                  </li>
              )}
              {!isAdult && (
                  <li className="item">
                      <label className="label birthday">Birthday</label>
                      <input
                          type="text"
                          className="input birthday"
                          placeholder="eg. 19951015"
                          value={birthday}
                          onChange={e =>
                              onUpdate(id, { birthday: e.target.value })
                          }
                      />
                  </li>
              )};
              {!isAdult && (
                  <li className="item arrow">
                      <label className="label followAdult">Parent</label>
                      <input
                          type="text"
                          className="input followAdult"
                          placeholder="Please Select"
                          value={followAdultName}
                          onClick={() => showFollowAdultMenu(id)}
                          readOnly
                      />
                  </li>
              )}
          </ol>
      </li>
  );
});

export default Passenger

Passenger.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  followAdult: PropTypes.number,
  followAdultName: PropTypes.string,
  ticketType: PropTypes.string.isRequired,
  licenceNo: PropTypes.string,
  gender: PropTypes.string,
  birthday: PropTypes.string,
  onRemove: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  showGenderMenu: PropTypes.func.isRequired,
  showFollowAdultMenu: PropTypes.func.isRequired,
  showTicketTypeMenu: PropTypes.func.isRequired,
};