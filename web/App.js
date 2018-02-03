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
        this.props.member.mymember.msg = null;

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
            <div style={{
                padding: '10px'
            }}>
                <div style={{
                    margin: '0 auto', width: '350px', backgroundColor: '#f8f8ff'
                    , boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
                    padding: '10px'
                }}>
                    <Grid style={{ width: '100%' }}>
                        <div style={{ margin: '0 auto', width: '180px' }}>
                            <Image className={this.state.logoState} src={logo} />
                        </div>
                        <br />
                        <Row>
                            <Col>
                                <FormGroup controlId="email" validationState={null}>
                                    <ControlLabel>E-mail address</ControlLabel>
                                    <FormControl style={{ background: 'transparent' }} type="text" placeholder="example@appman.co.th" ref="email" onFocus={this.onFocus.bind(this)} className="sm-round-corner" />
                                    <FormControl.Feedback />
                                </FormGroup>
                                <FormGroup controlId="password" validationState={null}>
                                    <ControlLabel>Password</ControlLabel>
                                    <FormControl style={{ background: 'transparent' }} type="password" placeholder="your password..." ref="password" onFocus={this.onFocus.bind(this)} className="sm-round-corner" />
                                    <FormControl.Feedback />
                                </FormGroup>
                            </Col>
                        </Row>
                        <p style={{ color: 'red' }}>{this.props.member.mymember.msg}</p>
                        <div className="text-center">
                            <Button bsSize='large' className="button" onClick={this.handleSignIn.bind(this)}>SIGN IN</Button>
                        </div>
                        <br />
                        <Row>
                            <a className="pull-left"><b>Forget password ?</b></a>
                            <a className="pull-right"><b>Create a new account</b></a>
                        </Row>
                    </Grid>
                </div>
            </div>
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