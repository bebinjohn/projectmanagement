import React, {Component} from 'react';
import Notify from './Notification/Notification'
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
                <div className="col-sm-3">
                <Notify/>
                </div>
                <div className="offset-1 col-sm-8">
                <Project data={this.props.project} id={d.uid}/ >
                </div>
                
            </div>
        </div>
    )
}}
const MapstateToprops=(state)=>{
    console.log(state);
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