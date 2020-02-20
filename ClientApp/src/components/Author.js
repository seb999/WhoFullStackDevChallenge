import React, { Component } from 'react';
import * as actionCreator from '../actions/actions';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import AuthorPopup from './AuthorPopup';

class Author extends Component {
  static displayName = Author.name;
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getAuthorList();
  }

  handleAddAuthor = () => {
    this.setState({
      popupTitle: "Add new Author",
      selectedAuthor: null,
      showPopup: true
    });
  }

  handleEditAuthor = (author) => {
    this.setState({
        popupTitle: "Edit Author",
        selectedAuthor: author,
        showPopup: true
    });
}

  handleHidePopup = (data) => {
    this.setState({
      showPopup: false,
    });

  }

  render() {
    let displayList = this.props.authorList.map((item, index) => (
      <tr key={index}>
        <td>{item.authorId}</td>
        <td>{item.name}</td>
        <td>{item.dateAdded}</td>
        <td><button className="btn" onClick={() => this.handleEditAuthor(item)}><span style={{ color: "green" }}><i className="fas fa-edit"></i></span></button></td>
      </tr>
    ));

    return (
      <div>
        <h4>Author list</h4>
        <button style={{ float: "left" }} type="button" className="btn btn-success btn-sm" onClick={this.handleAddAuthor}><span><i className="fas fa-edit"></i></span> Add new Author</button>
        {this.props.isAuthorSaved && <div style={{ float: "right", height: "32px", padding: "3px" }} className="alert alert-success" role="alert"> New Author saved!</div>}
        {this.props.isAuthorUpdated && <div style={{ float: "right", height: "32px", padding: "3px" }} className="alert alert-success" role="alert"> Author updated!</div>}
        <br /> <br />
        <table className="table table-sm table-bordered" >
          <thead className="thead-light">
            <tr>
              <th scope="col">Author Id</th>
              <th scope="col">Author name</th>
              <th scope="col">Added date</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {displayList}
          </tbody>
        </table>
        <AuthorPopup showPopup={this.state.showPopup} popupTitle={this.state.popupTitle} selectedAuthor={this.state.selectedAuthor} hide={this.handleHidePopup} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authorList: state.authorList,
    isAuthorSaved: state.isAuthorSaved,
    isAuthorUpdated: state.isAuthorUpdated,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAuthorList: () => dispatch(actionCreator.default.author.getAuthorList()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Author);


