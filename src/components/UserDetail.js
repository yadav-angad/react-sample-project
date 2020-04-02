import React from "react";
import { getUserDetails } from "../reducers/pageReducer";
import { Link } from "react-router-dom";

const UserDetail = props => {
  const id = props.match.params.userId;
  let userDetails = getUserDetails(id);

  function renderUserDetails() {
    const { firstName, lastName, avatar, email, gender, phone } = userDetails;
    return (
      <div className="displayFlexColumn">
        <div className="content">
          <div className="displayFlexColumn">
            <label className="fontStyle2Rem">
              {firstName} {lastName}
            </label>
          </div>
          <div className="displayFlexColumn ">
            <img className="divBorder" src={avatar}></img>
          </div>
          <div>
            <label className="fontStyle1Point2Rem"> Email : </label>
            <label> {email} </label>
          </div>
          <div>
            <label className="fontStyle1Point2Rem"> Gender : </label>
            <label> {gender} </label>
          </div>
          <div>
            <label className="fontStyle1Point2Rem"> Phone : </label>
            <label> {phone} </label>
          </div>
        </div>
        <div>
          <Link key={id} to={`/user`} className="displayFlexRow returnButton">Return</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="content">
        <div>{renderUserDetails()}</div>
      </div>
    </>
  );
};

export default UserDetail;
