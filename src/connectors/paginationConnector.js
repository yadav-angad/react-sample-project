import { connect } from "react-redux";
import {
  nextPageAction,
  firstPageAction,
  lastPageAction,
  previousPageAction,
  searchedUserAction
} from "../actions/actions";
import Pagination from "../components/Pagination";

const mapStateToProps = ({ pR }) => {
  console.log("pR : ", pR);
  return {
    currentPageNumber: pR.currentPageNumber,
    searchedText: pR.searchedText
  };
};

const mapDispatchToProps = dispatch => ({
  firstPageAction: () => dispatch(firstPageAction(1)),
  previousPageAction: currentPage => dispatch(previousPageAction(currentPage)),
  nextPageAction: currentPage => dispatch(nextPageAction(currentPage)),
  lastPageAction: currentPage => dispatch(lastPageAction(currentPage)),
  searchUserAction: searchedUser => dispatch(searchedUserAction(searchedUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
