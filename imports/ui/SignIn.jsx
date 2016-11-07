import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }
    handleLogin(e){
        e.preventDefault();

        that=this;
        var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
        var password = ReactDOM.findDOMNode(this.refs.password).value.trim();

        Meteor.loginWithPassword(email,password, function (err) {
            if(err){
                that.setState({
                    message: err.reason
                });
            }
            else{
                FlowRouter.go('/dashboard');
            }
        });

    };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleLogin.bind(this)}>
                    <input ref="email" type="text" placeholder="email"/>
                    <input ref="password" type="password" placeholder="password" name="" id=""/>
                    <button type="submit" className="btn btn-md btn-success">Sign In</button>
                    <p>{this.state.message}</p>

                </form>

            </div>
        );
    }
}