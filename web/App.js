import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { signIn } from './actions/memberAction';

import logo from './logo.svg';
import style from './styles/index.scss';

import {
    Grid,
    Row,
    Col,
    Image,
    FormGroup,
    ControlLabel,
    FormControl,
    HelpBlock,
    Button
} from 'react-bootstrap';

class App extends React.Component {

    handleSignIn() {

        const member = {
            email: findDOMNode(this.refs.email).value,
            password: findDOMNode(this.refs.password).value
        };

        this.props.signIn(member.email, member.password, () => {
            
        });
    }


    render() {
        // start your code here
        return (
            <Grid>
                <Row>
                    <Col>
                        <Image src={logo} style={{ width: '180px' }} rounded />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup controlId="email" validationState={null}>
                            <ControlLabel>E-mail address</ControlLabel>
                            <FormControl type="text" placeholder="example@appman.co.th" ref="email" />
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup controlId="password" validationState={null}>
                            <ControlLabel>Password</ControlLabel>
                            <FormControl type="password" placeholder="your password..." ref="password" />
                            <FormControl.Feedback />
                        </FormGroup>
                    </Col>
                </Row>
                <p>{this.props.member.mymember.msg}</p>
                <Row>
                    <Button bsStyle="info" onClick={this.handleSignIn.bind(this)}>SIGN UP</Button>
                </Row>
                <Row>
                    <a className="pull-left">Forget password ?</a>
                    <a className="pull-right">Create a new account</a>
                </Row>
            </Grid>
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