import React, { Component } from 'react'
import {Form,Input,FormGroup,Col,Button} from 'reactstrap';
import {connect}from 'react-redux';
import {authaction} from '../Redux/store/actions/Authaction';
import './Login.css';
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
            <div className="container" >
                   
                    <Form  className="b col-12 ">
                    <div style={{textAlign:"center",
         fontSize:"30px",fontFamily:"Arbutus"}}className="mt-2">LOGIN</div>
                   <FormGroup className="mt-5"row> 
                     
                          <Col sm={10}>
                            <Input style={{fontFamily:"Candal"}} className="input"type="email" required name="email" id="Email" placeholder=" Email" onChange={(event)=>this.userhandler(event)} />
                                 </Col>
                    </FormGroup>
                    <FormGroup row>
                     
                          <Col sm={10}>
                            <Input style={{fontFamily:"Candal"}} type="password" className="input" required name="email" id="Password" onChange={(event)=>this.userhandler(event)} placeholder="Password" />
                                 </Col>
                    </FormGroup>
                    <FormGroup>
                     <Button style={{fontFamily:"Candal"}} color="info" onClick={(event)=>this.submithandler(event)} className=" mt-4">
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
