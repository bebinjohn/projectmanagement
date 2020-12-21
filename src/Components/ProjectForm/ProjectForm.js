import React, { Component } from 'react'
import {Form,Input,FormGroup,Col,Label,Button} from 'reactstrap';
import {projectaction} from '../Redux/store/actions/projectaction';
import {connect} from 'react-redux'
import {Link,Redirect} from 'react-router-dom'
 class ProjectForm extends Component {
     state={
         Title:"",
         Name:"",
         content:"",
     }
     userhandler(e){
         this.setState({
            [e.target.id]:e.target.value,
         })
     }
     submithandler(e){
         e.preventDefault();
         this.props.createpro(this.state,this.props.auth)
     }
    render() {
        console.log("I ....")
        if(!this.props.auth) {
        return <Redirect to='/login'/>
        }
       // console.log(this.state);
        return (
            <div className="container">
               
                    <Form style={{width:"50%"}}>
                   <FormGroup row>
                     <Label for="project" sm={2}>Project Title</Label>
                          <Col sm={10}>
                            <Input type="text"  name="title" id="Title" placeholder="Enter the project title" onChange={(event)=>this.userhandler(event)} />
                                 </Col>
                    </FormGroup>
                    <FormGroup row>
                     <Label for="creater" sm={2}>Project Creater</Label>
                          <Col sm={10}>
                            <Input type="text"  name="creater" id="Name" onChange={(event)=>this.userhandler(event)} placeholder="Enter Your Name" />
                                 </Col>
                    </FormGroup>
                    <FormGroup row>
                     <Label for="content" sm={2}>Project Description</Label>
                          <Col sm={10}>
                            <Input type="textarea"  name="content" id="content" onChange={(event)=>this.userhandler(event)} />
                                 </Col>
                    </FormGroup>
                    <FormGroup className="ml-5">
                     <Button color="info" onClick={(event)=>this.submithandler(event)}>
                            <Link to="/" style={{
                                textDecoration:"none",
                                color:"white"
                            }}>
                            submit</Link>
                        </Button>
                
                </FormGroup>
                    </Form>
                </div>
            
        )
    }
}
// u only get the updated state where u call it
const MapstateToprops=(state)=>{
    //console.log(state)
    return{
        auth:state.authnication.auth.uid
    }
}
const MapDispatchToProps=(dispatch)=>{
    return{
    createpro:(project,id)=>dispatch(projectaction(project,id))
    }
}
export default connect(MapstateToprops,MapDispatchToProps) (ProjectForm);
