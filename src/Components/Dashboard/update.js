import React, { Component } from 'react'
import {Form,Input,FormGroup,Col,Label,Button} from 'reactstrap';
import {connect} from 'react-redux'
import {Link,Redirect} from 'react-router-dom'
import {update} from '../Redux/store/actions/projectaction';
import '../Auth/Login.css';

class Update extends Component {
    state={
        Title:"",
        content:"",
    }
    userhandler(e){
        this.setState({
           [e.target.id]:e.target.value,
        })
    }
    submithandler(e){
        e.preventDefault();
        this.props.update(this.state,this.props.id,this.props.auth);
    }
   render() {
       //console.log("I ....")
      if (!this.props.auth) {
       return <Redirect to='/login'/>
       }
      
      // console.log(this.state);
       return (
           <div className="container">
                   <Form className="b1" style={{height:"410px"}}>
                   <div style={{textAlign:"center",
           fontSize:"30px",fontFamily:"Arbutus"}}className="mt-2">UPDATE</div>
           <div className="b2">
                  <FormGroup row className="mt-5">
                   
                         <Col sm={10}>
                           <Input style={{ fontFamily:"Candal"}}type="text" className="input" name="title" id="Title" placeholder="Enter the project title" onChange={(event)=>this.userhandler(event)} />
                                </Col>
                   </FormGroup>
                   <FormGroup row className="mt-4">
                    <Label style={{ fontFamily:"Candal"}}className="ml-4">project status:</Label>
                         <Col>
                         <Input type="select" name="select" id="status" style={{width:"135px"}}>
                              <option>Working</option>
                            <option>Finished</option>
        </Input>
                     </Col>
                   </FormGroup>
                   
                   <FormGroup row>
                    <Label style={{ fontFamily:"Candal"}} for="content" className="ml-4 mt-2" >Project Description</Label>
                         <Col sm={10}>
                           <Input type="textarea" style={{
                               border:"1px solid black"
                           }} name="content" id="content" onChange={(event)=>this.userhandler(event)} />
                                </Col>
                   </FormGroup>
                   <FormGroup >
                    <Button color="info" onClick={(event)=>this.submithandler(event)}>
                           <Link to="/" style={{
                               textDecoration:"none",
                               color:"white",
                               fontFamily:"Candal"
                           }}>
                           submit</Link>
                       </Button>
               
               </FormGroup>
               </div>
                   </Form>
               </div>
           
       )
   }
}
const MapstateToprops=(state,otherprops)=>{
    //console.log(state)
    return{
        auth:state.authnication.auth.uid,
        id:otherprops.match.params.id
    }
}
const MapDispatchToProps=(dispatch)=>{
    return{
    update:(project,id,user_id)=>dispatch(update(project,id,user_id))
    }
}
export default connect(MapstateToprops,MapDispatchToProps) (Update);
