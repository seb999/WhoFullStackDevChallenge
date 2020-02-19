import React, { Component } from 'react';
import * as actionCreator from '../actions/actions';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"; 
// import CoursePopup from './CoursePopup';

class Student extends Component {
  static displayName = Student.name;

  constructor(props) {
    super(props);
    this.state = {  selectedStudent : null };
  }

  componentDidMount() {
    this.props.getStudentList();
  }

  handleAddCourse = () => {
    this.setState({
        popupTitle: "Add new student",
        selectedStudent: { deviceId: 0, author:0 },
        showPopup: true
    });
}

handleHidePopup = (data) => {

  this.setState({
    showPopup: false,
});

}

handleShowCourse = (student) => {
  
  console.log(student)

  this.setState({
    popupTitle: "Add new student",
    selectedStudent: student,
});
}

  render() {
    let courseList;
    if(this.state.selectedStudent != null) {
      courseList = this.state.selectedStudent.studentCourse.map((item, index) => (
        <li class="list-group-item">{item.course.name}</li>
      ));
    }
    else{
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
        <button style={{ float: "left" }} type="button" className="btn btn-success btn-sm" onClick={this.handleAddCourse}><span><i className="fas fa-edit"></i></span> Add new student</button>
        <br/> <br/>
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

        {/* <CoursePopup showPopup={this.state.showPopup} popupTitle={this.state.popupTitle} selectedCourse={this.state.selectedCourse} hide={this.handleHidePopup} /> */}
        </div>

        <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">List of courses</h5>
            <ul class="list-group">
             {courseList!= null ? courseList : ""}
           </ul>
            {/* <h6 className="card-subtitle mb-2 text-muted">{this.props.course.author != null ? this.props.course.author.name : ""}</h6> */}
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStudentList: () => dispatch(actionCreator.default.student.getStudentList()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Student);


