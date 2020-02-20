import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";
import { connect } from 'react-redux';
import * as actionCreator from '../actions/actions';
import { Dispatch } from 'redux';

class CoursePopup extends Component {
    constructor(props) {
        super(props);
        this.state = { courseId: 0, name: "" };
    }

    componentDidMount() {
       this.props.getAuthorList();
    }

    componentDidUpdate(nextProps) {
        console.log(this.props.selectedCourse);
         //Detect if we are in Edit mode
         if (this.props !== nextProps && this.props.selectedCourse!=null) {
            this.setState({
                courseId: this.props.selectedCourse.courseId,
                name: this.props.selectedCourse.name,
                description: this.props.selectedCourse.description,
                authorId:  this.props.selectedCourse.authorId,
            })
        }
        if(this.props !== nextProps && this.props.selectedCourse==null)
            this.setState({
                courseId: 0,
                name: "",
                description: "",
                authorId:  0,
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSave = (e) => {
        e.preventDefault();
        var myCourse = ({
            courseId: this.state.courseId,
            Name: this.state.name,
            Description: this.state.description,
            AuthorId: this.state.authorId,
        });
        if (myCourse.courseId == 0) {
            this.props.saveCourse(myCourse);
        } 
        else{
            this.props.updateCourse(myCourse);
        }
        this.props.hide("");
    }

    handleAuthorClick = (item, e) => {
        e.preventDefault();
        this.setState({
            selectedAuthor: item
        })
    }

    render() {
        return (
            <div>
                <Modal show={this.props.showPopup} onHide={() => this.props.hide("")}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.popupTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <form id="newTrackerForm" className="form-signin" onSubmit={this.handleSave}>

                            <input id="courseId" value={this.state.courseId} type="text" className="form-control" readOnly hidden></input>

                            <div className="form-label-group">
                                <label>Course name</label>
                                <input id="name" value={this.state.name} type="text" className="form-control" placeholder="Course name" required onChange={this.handleChange}></input>
                            </div>

                            <div className="form-label-group">
                                <label>Description of course</label>
                                <textarea rows="3" id="description" value={this.state.description} type="text" className="form-control" placeholder="Course description" required onChange={this.handleChange}></textarea>
                            </div>

                            <div className="form-label-group">
                                <label>Author</label>
                                <select id="authorId" className="form-control" onChange={this.handleChange} value={this.state.authorId}>
                                    <option value="0" key="999">--</option>
                                    {this.props.authorList.map((item, index) => {
                                        return <option value={item.authorId} key={index}>{item.name}</option>
                                    })}
                                </select>
                            </div>
                        </form>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.props.hide("")}>
                            Close
                                </Button>
                        <Button variant="primary" type="submit" form="newTrackerForm" >
                            Save Changes
                                </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

//map the props of this class to the root redux state
const mapStateToProps = (state) => {
    return {
        authorList: state.authorList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveCourse: (myCourse) => dispatch(actionCreator.default.course.saveCourse(myCourse)),
        updateCourse: (myCourse) => dispatch(actionCreator.default.course.updateCourse(myCourse)),
        getAuthorList: () => dispatch(actionCreator.default.author.getAuthorList()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePopup);