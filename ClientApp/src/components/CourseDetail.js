import React, { Component } from 'react';
import * as actionCreator from '../actions/actions';
import { connect } from 'react-redux';

class CourseDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getCourse(this.props.match.params.courseId);
  }

  render() {
    return (
      <div>
        <h4>Course detail</h4>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.props.course.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Description</h6>
            <p className="card-text">{this.props.course.description}</p>
            <h6 className="card-subtitle mb-2 text-muted">Author</h6>
            <h6 className="card-subtitle mb-2 text-muted">{this.props.course.author != null ? this.props.course.author.name : ""}</h6>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    course: state.course,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCourse: (courseId) => dispatch(actionCreator.default.course.getCourse(courseId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail);