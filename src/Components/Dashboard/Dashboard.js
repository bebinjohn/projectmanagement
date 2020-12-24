import React, {Component} from 'react';
import Project from './projectlist/projectlist'
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';
import {firestoreConnect} from 'react-redux-firebase'
class  Das extends Component{
    render(){
        //console.log(this.props)
        const d =this.props.auth
       if(!d.uid) {return <Redirect to="/login"/>}
    
    
    return(
        <div className="container">
            <div className="row">
                <div>
                <Project data={this.props.project} id={d.uid}/ >
               
                
            </div>
        </div>
        </div>
    )
}
}
const MapstateToprops=(state)=>{
    console.log("s",state);
    return{
        project:state.data.ordered.project,
        auth:state.authnication.auth,
       
    }
}
export default compose(
    firestoreConnect([
        {collection:'project'}
       
    ]),
    connect(MapstateToprops,null)
)(Das);