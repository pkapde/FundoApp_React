import React,{Component} from 'react';

class Login extends Component{
    constructor(){
        super();
        this.state={

        }
    }

    handleLogin = () => {};

    render(){
        return(
            <div className="loginController">
                <p>login page</p>
            <button title="Login" onChange={this.handleLogin}></button>
            </div>
        )
    }
}

export default Login;