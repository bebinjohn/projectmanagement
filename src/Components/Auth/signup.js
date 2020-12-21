import React, { Component } from 'react'
import {Form,Input,FormGroup,Col,Label,Button} from 'reactstrap';
import {connect}from 'react-redux';
import {signup} from '../Redux/store/actions/Authaction';
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
                <Form style={{width:"50%"}}>
                <FormGroup row>
                     <Label for="Email" sm={2}>FirstName</Label>
                          <Col sm={10}>
                            <Input type="text" required name="email" id="Firstname" placeholder="Enter the Firstname" onChange={(event)=>this.userhandler(event)} />
                                 </Col>
                    </FormGroup>
                    <FormGroup row>
                     <Label for="Email" sm={2}>LastName</Label>
                          <Col sm={10}>
                            <Input type="text" required name="email" id="Lastname" placeholder="Enter the LastName" onChange={(event)=>this.userhandler(event)} />
                                 </Col>
                    </FormGroup>
                    <FormGroup row>
                     <Label for="Email" sm={2}>Email</Label>
                          <Col sm={10}>
                            <Input type="email" required name="email" id="Email" placeholder="Enter the email" onChange={(event)=>this.userhandler(event)} />
                                 </Col>
                    </FormGroup>
                    <FormGroup row>
                     <Label for="Email" sm={2}>Password</Label>
                          <Col sm={10}>
                            <Input type="password" required name="email" id="password" placeholder="Enter the Password" onChange={(event)=>this.userhandler(event)} />
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
 const MapDispatchToprops=(dispatch)=>{
     return{
         signup:(data)=> dispatch(signup(data))
     }
 }
export default connect(null,MapDispatchToprops)(Signup);
