import React, { Component } from 'react';
import * as actionCreator from '../actions/actions';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import StudentPopup from './StudentPopup';

class Student extends Component {
  static displayName = Student.name;
  constructor(props) {
    super(props);
    this.state = { selectedStudent: null };
  }

  componentDidMount() {
    this.props.getStudentList();
    this.props.getCourseList();
  };

  handleHidePopup = (data) => {
    this.setState({
      showPopup: false,
    });
  };

  handleShowCourse = (student) => {
    this.setState({
      selectedStudent: student,
    });
  };

  handleAddStudent = (student) => {
    this.setState({
      popupTitle: "Add new student",
      showPopup: true
    });
  };

  handleCourseChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleAddStudentCourse = () => {
    this.props.saveStudentCourse(this.state.courseId, this.state.selectedStudent.studentId);
  };

  render() {
    let courseList;
    if (this.state.selectedStudent != null) {
      courseList = this.state.selectedStudent.studentCourse.map((item, index) => (
        <li className="list-group-item" key={index}>{item.course.name}</li>
      ));
    }
    else {
      courseList = null;
    }

    let displayList = this.props.studentList.map((item, index) => (
      <tr key={index}>
        <td>{item.studentId}</td>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.dateAdded}</td>
        <td><button className="btn" onClick={() => this.handleShowCourse(item)}><span style={{ color: "green" }}><i className="fas fa-glasses"></i></span></button></td>
      </tr>
    ));

    return (
      <div>
        <h4>Student list</h4>
        <button style={{ float: "left" }} type="button" className="btn btn-success btn-sm" onClick={this.handleAddStudent}><span><i className="fas fa-edit"></i></span> Add new student</button>
        {this.props.isStudentSaved && <div style={{ float: "right", height: "32px", padding: "3px" }} className="alert alert-success" role="alert"> New student saved!</div>}
        {this.props.isStudentCourseSaved && <div style={{ float: "right", height: "32px", padding: "3px" }} className="alert alert-success" role="alert"> New course endorsed by student!</div>}
        <br /> <br />
        <div className="row">
          <div className="col-md-8">
            <table className="table table-sm table-bordered" >
              <thead className="thead-light">
                <tr>
                  <th scope="col">Student Id</th>
                  <th scope="col">First name</th>
                  <th scope="col">Last name</th>
                  <th scope="col">Added date</th>
                  <th scope="col">Course</th>
                </tr>
              </thead>
              <tbody>
                {displayList}
              </tbody>
            </table>
            <StudentPopup showPopup={this.state.showPopup} popupTitle={this.state.popupTitle} hide={this.handleHidePopup} />
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <h5 className="card-title">List of courses</h5>
                  </div>
                  <div className="col-md-6">
                    {this.state.selectedStudent != null ?
                      <button style={{ float: "right" }} type="button" data-toggle="collapse" href="#collapseExample" className="btn btn-success btn-sm"><span><i className="fas fa-edit" ></i></span> Add course</button>
                      :
                      <button style={{ float: "right" }} type="button" className="btn btn-success btn-sm" disabled><span><i className="fas fa-edit" ></i></span> Add course</button>
                    }
                  </div>
                </div>
                <div className="collapse" id="collapseExample">
                  <div className="card card-body">
                    <label>Course</label>
                    <select id="courseId" className="form-control" onChange={this.handleCourseChange} style={{ display: "inline-flex" }}>
                      <option value="0" key="999">--</option>
                      {this.props.courseList.map((item, index) => {
                        return <option value={item.courseId} key={index}>{item.name}</option>
                      })}
                    </select>
                    <button type="button" className="btn btn-success btn-sm" onClick={() => this.handleAddStudentCourse()} data-toggle="collapse" href="#collapseExample"><span><i className="fas fa-plus"></i></span>Add</button>
                  </div>
                  <br />
                </div>
                <ul className="list-group">
                  {courseList != null ? courseList : ""}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    studentList: state.studentList,
    courseList: state.courseList,
    isStudentSaved: state.isStudentSaved,
    isStudentCourseSaved: state.isStudentCourseSaved,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStudentList: () => dispatch(actionCreator.default.student.getStudentList()),
    getCourseList: () => dispatch(actionCreator.default.course.getCourseList()),
    saveStudentCourse: (courseId, studentId) => dispatch(actionCreator.default.student.saveStudentCourse(courseId, studentId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Student);