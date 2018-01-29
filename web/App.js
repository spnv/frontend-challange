import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { signIn } from './actions/memberAction';

import logo from './logo.svg';

import {
    Grid,
    Row,
    Col,
    Image,
    FormGroup,
    ControlLabel,
    FormControl,
    HelpBlock,
    Modal,
    Button
} from 'react-bootstrap';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            logoState: null
        }
    }

    handleSignIn() {

        this.setState({ logoState: 'logo-spin' });
        console.log(this.state.logoState)

        const member = {
            email: findDOMNode(this.refs.email).value,
            password: findDOMNode(this.refs.password).value
        };

        this.props.signIn(member.email, member.password, () => {
            this.setState({ logoState: null });
        });
    }

    onFocus(e) {
    }

    render() {
        // start your code here
        return (
            <Modal.Dialog>
                <Modal.Body className="background">
                    {/* <Grid> */}
                    <Row>
                        <Col>
                            <Image className={this.state.logoState} src={logo} style={{ width: '180px' }} />
                        </Col>
                    </Row>
                    <Row>
                        {/* <Col> */}
                        <FormGroup controlId="email" validationState={null}>
                            <ControlLabel>E-mail address</ControlLabel>
                            <FormControl type="text" placeholder="example@appman.co.th" ref="email" onFocus={this.onFocus.bind(this)} className="sm-round-corner" />
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup controlId="password" validationState={null}>
                            <ControlLabel>Password</ControlLabel>
                            <FormControl type="password" placeholder="your password..." ref="password" onFocus={this.onFocus.bind(this)} className="sm-round-corner" />
                            <FormControl.Feedback />
                        </FormGroup>
                        {/* </Col> */}
                    </Row>
                    <p style={{ color: 'red' }}>{this.props.member.mymember.msg}</p>
                    <Row>
                        <Button className="button" onClick={this.handleSignIn.bind(this)}>SIGN UP</Button>
                    </Row>
                    <Row>
                        <a className="pull-left">Forget password ?</a>
                        <a className="pull-right">Create a new account</a>
                    </Row>
                    {/* </Grid> */}
                </Modal.Body>
            </Modal.Dialog>
        );
    }
}

function mapStateToProps(state) {
    return { member: state.member }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        signIn: signIn
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);