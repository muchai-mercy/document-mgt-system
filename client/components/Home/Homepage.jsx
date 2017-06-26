import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Pagination from "react-js-pagination";
import { browserHistory, Link } from "react-router";
import * as documentActions from "../../actions/documentActions.js";
import DocumentList from "../Documents/DocumentList.jsx";
// import SearchDoc from "../Documents/SearchDocument.jsx";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.props.documents;
  }
  componentDidMount() {
    this.props.actions.publicDocuments();
  }
render() {
    return (
    <div>
    <Link to="documents" className="btn btn-primary btn-lg"> My Docs </Link>
        <DocumentList documents={this.props.documents} />
      </div>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  documents: PropTypes.array.isRequired,
};
const mapStateToProps = (state, ownProps) => {
  return { documents: state.documents };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(documentActions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
