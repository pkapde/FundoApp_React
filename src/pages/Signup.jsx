import React,{Component} from 'react';
import {Card, TextField} from '@material-ui/core';

class Signup extends Component{
    constructor(){
        super();
        this.state={
               firstName:'',
               lastName:'',
               email:'',
               password:'',
               confirmPassword:''
        }
    }

    handleFirstName=(event)=>{
        //fName=event.target.value;
        console.log(event.target.value);
        this.setState({
            firstName:event.target.value
        } ,console.log("after",event.target.value)
        )
    };

    handleLastName=(event)=>{
        this.setState({
            lastName:event.target.value
        },console.log("after",event.target.value))
    };

    handleEmail=(event)=>{
        this.setState({
            email:event.target.value
        },console.log("after",event.target.value))
    };

    handlePassword=(event)=>{
        this.setState({
            password:event.target.value
        },console.log("after",event.target.value))
    };

    handleConfirmPassword=(event)=>{
        this.setState({
            confirmPassword:event.target.value
        },console.log("after",event.target.value))
    };

    render(){
        return(            
            <div className="signupController">
                <Card className ="cardContainer">
                    <TextField id="firstName" label="FirstName" variant="outlined" onChange = {this.handleFirstName} />   
                    <TextField id="lastName" label="LastName" variant="outlined" onChange = {this.handleLastName} />
                    <TextField id="email" label="Email" variant="outlined" onChange = {this.handleEmail} />
                    <TextField id="password" label="Password" variant="outlined" onChange = {this.handlePassword} />
                    <TextField id="confirmPassword" label="Confirm Password" variant="outlined" onChange = {this.handleConfirmPassword} />
                    <br/>
                    <button class="signUpBtn">SignUp</button>
                </Card>            
           
            </div>
            
        )
    }
}
export default Signup;