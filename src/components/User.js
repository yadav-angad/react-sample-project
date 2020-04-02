import React from "react";
import PaginationConnector from "../connectors/paginationConnector";

const User = () => {
  return (
    <>
      <div className="content">
        <PaginationConnector currentPageNumber={1} />
      </div>
    </>
  );
};

export default User;
