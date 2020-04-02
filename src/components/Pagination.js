import React from "react";
import { Link } from "react-router-dom";
import ButtonFirst from '../images/first-page.png';
import ButtonPrevious from '../images/previous-page.png';
import ButtonNext from '../images/next-page.png';
import ButtonLast from '../images/last-page.png';
import {userList, getUserByName} from '../reducers/pageReducer';

var recordPerPage = 10;
var totalRecord = userList.length;
var totalPageCount = (totalRecord / recordPerPage);
var from = 0;
var until = 0;
let counter = 0;

const Pagination = (props) => {

  function renderUser() {
    let currentPage = props.currentPageNumber;
    from = ((currentPage - 1) * recordPerPage);
    until = (currentPage * recordPerPage);
    let userSet = userList.slice(from, until);
    if(props.searchedText.trim().length > 0) {
      let userDetails = getUserByName(props.searchedText.trim());
      totalRecord = userDetails.length;
      totalPageCount = (totalRecord / recordPerPage);
      userSet = userDetails.slice(from, until);
      getPageRecord(totalRecord);
    }

    return userSet.map(user => {
      const { id, firstName, lastName, avatar } = user;
      return (
        <Link key={id} to={`/user/${id}`} className="displayFlexRow userList">
          <div className="displayFlexColumn">
            <img className="imageBorder" src={avatar} alt="image" />
          </div>
          <div className="displayFlexColumn">
            {firstName} {lastName}
          </div>
        </Link>
      );
    });
  }

  function getPageRecord(totalRecord) {
    console.log('counter : ', counter++);
    console.log('totalRecord : ', totalRecord);
    let currentPage =  props.currentPageNumber;
    let untilRecord = (recordPerPage * props.currentPageNumber);
    let fromRecord = (currentPage - 1) === 0 ? 1 : (((currentPage - 1) * recordPerPage) + 1);
    return (
      <div className="displayFlexRow">
        <label className="resultLabel">
            {fromRecord} - {untilRecord} | {totalRecord} records
        </label>
      </div>
    );
  }

    return (
      <div>
        <h3>{props.selectedUser}</h3>
        <div className="displayFlexRow">
          <div className = "displayFlexRow inputDiv margin5px">
            <input type="text" 
              name="searchText" 
              placeholder="Enter Name to Search..." 
              value={props.searchedUser}
                onKeyUp={(e) => {
                    props.searchUserAction(e.target.value);
                }} />
          </div>
        </div>
        <div className="displayFlexRow">
          {getPageRecord(totalRecord)}
        </div>
        <div>{renderUser()}</div>
        <div className = "displayFlexRowRight">
            <button className="margin5px" onClick={() => {
                props.firstPageAction(1)}}><img className="imageWidth imageAlignment" src={ButtonFirst} alt="First Page" /></button>
            <button className="margin5px" onClick={() => {
                props.previousPageAction(1)}}> <img className="imageWidth imageAlignment" src={ButtonPrevious} alt="Previous Page" /> </button>
            <button className="margin5px" onClick={() => {
                props.nextPageAction(1)}}> <img className="imageWidth imageAlignment" src={ButtonNext} alt="Next Page" /> </button>
            <button className="margin5px" onClick={() => {
                props.lastPageAction(totalPageCount)}}> <img className="imageWidth imageAlignment" src={ButtonLast} alt="Last Page" /> </button>
          </div>
      </div>
    );
}

export default Pagination;
