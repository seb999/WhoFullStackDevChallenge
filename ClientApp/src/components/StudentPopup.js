import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";
import { connect } from 'react-redux';
import * as actionCreator from '../actions/actions';
import { Dispatch } from 'redux';

class StudentPopup extends Component {
    constructor(props) {
        super(props);
        this.state = { courseId: 0, selectedAuthor: "" };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSave = (e) => {
        e.preventDefault();
        var myStudent = ({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
        });
        this.props.saveStudent(myStudent);
        this.props.hide("");
    }

    render() {
        return (
            <div>
                <Modal show={this.props.showPopup} onHide={() => this.props.hide("")}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.popupTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <form id="newStudentForm" className="form-signin" onSubmit={this.handleSave}>

                            <input id="studentId" value={this.state.studentId} type="text" className="form-control" readOnly hidden></input>

                            <div className="form-label-group">
                                <label>First name</label>
                                <input id="firstName" value={this.state.firstName} type="text" className="form-control" placeholder="first name" required onChange={this.handleChange}></input>
                            </div>

                            <div className="form-label-group">
                                <label>Last Name</label>
                                <input id="lastName" value={this.state.courseDescription} type="text" className="form-control" placeholder="last name" required onChange={this.handleChange}></input>
                            </div>

                        </form>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.props.hide("")}>
                            Close
                                </Button>
                        <Button variant="primary" type="submit" form="newStudentForm" >
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveStudent: (myStudent) => dispatch(actionCreator.default.student.saveStudent(myStudent)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentPopup);