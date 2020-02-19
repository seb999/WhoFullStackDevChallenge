import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";
import { connect } from 'react-redux';
import * as actionCreator from '../actions/actions';
import { Dispatch } from 'redux';

class AuthorPopup extends Component {
    constructor(props) {
        super(props);
        this.state = { courseId: 0, selectedAuthor: "" };
    }

    componentDidUpdate(nextProps) {
        //Detect if we are in Edit mode
        if (this.props !== nextProps) {
            this.setState({
                authorId: this.props.selectedAuthor.authorId,
                name: this.props.selectedAuthor.name,
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
        var myAuthor = ({
            authorId: this.state.authorId,
            name: this.state.name,
        });
        if (myAuthor.authorId == 0) {
            this.props.saveAuthor(myAuthor);
        } 
        else{
            this.props.updateAuthor(myAuthor);
        }
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

                        <form id="newAuthorForm" className="form-signin" onSubmit={this.handleSave}>

                            <input id="authorId" value={this.state.authorId} type="text" className="form-control" readOnly hidden></input>

                            <div className="form-label-group">
                                <label>Full Name</label>
                                <input id="name" value={this.state.name} type="text" className="form-control" placeholder="Full name" required onChange={this.handleChange}></input>
                            </div>
                        </form>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.props.hide("")}>
                            Close
                                </Button>
                        <Button variant="primary" type="submit" form="newAuthorForm" >
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
        saveAuthor: (myAuthor) => dispatch(actionCreator.default.author.saveAuthor(myAuthor)),
        updateAuthor: (myAuthor) => dispatch(actionCreator.default.author.updateAuthor(myAuthor)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorPopup);