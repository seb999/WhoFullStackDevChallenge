import React, { Component } from 'react';
import * as actionCreator from '../actions/actions';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import CoursePopup from './CoursePopup';

class Course extends Component {
  static displayName = Course.name;
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getCourseList();
  }

  handleAddCourse = () => {
    this.setState({
      popupTitle: "Add new course",
      selectedCourse: null,
      showPopup: true
    });
  }

  handleHidePopup = (data) => {
    this.setState({
      showPopup: false,
    });
  }

  handleEditCourse = (course) => {
    this.setState({
        popupTitle: "Edit Course",
        selectedCourse: course,
        showPopup: true
    });
}

  render() {
    let displayList = this.props.courseList.map((item, index) => (
      <tr key={index}>
        <td>{item.courseId}</td>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>{item.dateAdded}</td>
        <td> <Link to={'/courseDetail/' + item.courseId} data-toggle="tooltip" title="Detail" className="btn"><span style={{ color: "green" }}><i className="fas fa-glasses"></i></span></Link></td>
        <td><button className="btn" onClick={() => this.handleEditCourse(item)}><span style={{ color: "green" }}><i className="fas fa-edit"></i></span></button></td>
      </tr>
    ));

    return (
      <div>
        <h4>Course list</h4>
        <button style={{ float: "left" }} type="button" className="btn btn-success btn-sm" onClick={this.handleAddCourse}><span><i className="fas fa-edit"></i></span> Add new course</button>
        {this.props.isCourseSaved && <div style={{ float: "right", height: "32px", padding: "3px" }} className="alert alert-success" role="alert"> New course saved!</div>}
        {this.props.isCourseUpdated && <div style={{ float: "right", height: "32px", padding: "3px" }} className="alert alert-success" role="alert"> Course updated!</div>}
        <br /> <br />
        <table className="table table-sm table-bordered" >
          <thead className="thead-light">
            <tr>
              <th scope="col">Course Id</th>
              <th scope="col">Course name</th>
              <th scope="col">Course description</th>
              <th scope="col">Added date</th>
              <th scope="col">Detail</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            {displayList}
          </tbody>
        </table>
        <CoursePopup showPopup={this.state.showPopup} popupTitle={this.state.popupTitle} selectedCourse={this.state.selectedCourse} hide={this.handleHidePopup} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    courseList: state.courseList,
    isCourseSaved: state.isCourseSaved,
    isCourseUpdated: state.isCourseUpdated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCourseList: () => dispatch(actionCreator.default.course.getCourseList()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Course);


