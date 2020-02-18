import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";
import { connect } from 'react-redux';
import * as actionCreator from '../actions/actions';
import { Dispatch } from 'redux';

// interface Props {
//     popupTitle: string,
//     device: Device,
//     token: any,
//     show: boolean,
//     hide(error: string): void,
//     saveTracker(token: any, p: Device): void;
//     updateTracker(token: any, p: Device): void;
// }

class CoursePopup extends Component{

    constructor(props) {
        super(props);
        this.state = { courseId : this.props.courseId };
      }

    componentDidMount() {
       
    }

    componentDidUpdate(nextProps) {
        //Detect if we update a tracker
        if (this.props !== nextProps) {
            this.setState({
                courseId: this.props.courseId,
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSave = (e) => {
        e.preventDefault();
       
         //Add new device to local db
        //  var myDevice: Device = ({
        //     deviceId: this.state.deviceId,
        //     deviceEUI: this.state.deviceEui,
        //     deviceDescription: this.state.deviceDescription,
        //     ttnDevID: ttnDevID,
        // });
        //this.props.addCourse(myDevice);
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
                        <form id="newTrackerForm" className="form-signin" onSubmit={this.handleSaveDevice}>

                            <input id="deviceId" value={this.state.deviceId} type="text" className="form-control" placeholder="device Id" readOnly hidden></input>

                            <div className="form-label-group">
                                <label>EUI</label>
                                <input id="deviceEui" value={this.state.deviceEui} type="text" className="form-control" placeholder="EUI code" required onChange={this.handleChange}></input>
                            </div>

                            <div className="form-label-group">
                                <label>Add a description for your tracker</label>
                                <input id="deviceDescription" value={this.state.deviceDescription} type="text" className="form-control" placeholder="Description" required onChange={this.handleChange}></input>
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
        userId: state.userId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // saveTracker: (device) => dispatch<any>(actionCreator.default.tracker.saveNewTracker(token, device)),
        // updateTracker: (device: any) => dispatch<any>(actionCreator.default.tracker.updateTracker(token, device)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePopup);