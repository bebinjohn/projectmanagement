import React, { Component } from 'react'
import {Form,Input,FormGroup,Col,Button} from 'reactstrap';
import {connect}from 'react-redux';
import {signup} from '../Redux/store/actions/Authaction';
import './Login.css';
 class Signup extends Component {
     state={
         Email:"",
         password:"",
         Firstname:"",
         Lastname:""
     }
     userhandler(e){
         this.setState({
            [e.target.id]:e.target.value
         })
     }
     submithandler(e){
        e.preventDefault();
        this.props.signup(this.state)
    }
    render() {
        return (
            <div className="container">
                <Form  className="b1 col-12 ">
                    <div style={{textAlign:"center",
            fontSize:"30px",fontFamily:"Arbutus"}}className="mt-2">SIGNUP</div>
            <div className="b2">
               
                <FormGroup className="mt-4"row>
                    
                          <Col sm={10}>
                            <Input className="input" type="text" required name="email" id="Firstname" placeholder="Enter the Firstname" onChange={(event)=>this.userhandler(event)} />
                                 </Col>
                    </FormGroup>
                    <FormGroup row>
                     
                          <Col sm={10}>
                            <Input  type="text" className="input" required name="email" id="Lastname" placeholder="Enter the LastName" onChange={(event)=>this.userhandler(event)} />
                                 </Col>
                    </FormGroup>
                    <FormGroup row>
                    
                          <Col sm={10}>
                            <Input type="email" className="input"required name="email" id="Email" placeholder="Enter the email" onChange={(event)=>this.userhandler(event)} />
                                 </Col>
                    </FormGroup>
                    <FormGroup row>
                    
                          <Col sm={10}>
                            <Input  type="password" className="input" required name="email" id="password" placeholder="Enter the Password" onChange={(event)=>this.userhandler(event)} />
                                 </Col>
                    </FormGroup>
                    <FormGroup>
                        
                            <Button style={{fontFamily:"Candal"}} color="info" onClick={(event)=>this.submithandler(event)}>
                                Submit
                            </Button>
                    
                    </FormGroup>
                    </div>
                </Form>
               
            </div>
           )
    }
}
 const MapDispatchToprops=(dispatch)=>{
     return{
         signup:(data)=> dispatch(signup(data))
     }
 }
export default connect(null,MapDispatchToprops)(Signup);
