import React, { Component } from 'react'
import {Form,Input,FormGroup,Col,Label,Button} from 'reactstrap';
import {connect}from 'react-redux';
import {authaction} from '../Redux/store/actions/Authaction';
 class Login extends Component {
     state={
         Email:"",
         Password:""
     }
     userhandler(e){
         this.setState({
            [e.target.id]:e.target.value
         })
     }
     submithandler(e){
         e.preventDefault();
         this.props.authuser(this.state)
     }
    render() {
       // console.log(this.state);
        return (
            <div className="container">
               
                    <Form style={{width:"50%"}}>
                   <FormGroup row>
                     <Label for="Email" sm={2}>Email</Label>
                          <Col sm={10}>
                            <Input type="email" required name="email" id="Email" placeholder="Enter the email" onChange={(event)=>this.userhandler(event)} />
                                 </Col>
                    </FormGroup>
                    <FormGroup row>
                     <Label for="Password" sm={2}>Password</Label>
                          <Col sm={10}>
                            <Input type="password" required name="email" id="Password" onChange={(event)=>this.userhandler(event)} placeholder="Enter the password" />
                                 </Col>
                    </FormGroup>
                    <FormGroup className="ml-5">
                     <Button color="info" onClick={(event)=>this.submithandler(event)}>
                            Submit
                        </Button>
                
                </FormGroup>
                    </Form>
                </div>
            
        )
    }
}
const MapDispatchToProps=(dispatch)=>{
    console.log("In map")
    return{
        authuser:(cred)=> dispatch(authaction(cred))
    }
}
export default connect(null,MapDispatchToProps)(Login);
