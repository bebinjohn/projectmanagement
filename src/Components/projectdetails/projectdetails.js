import React from 'react'
import {connect} from 'react-redux';
import {compose}from 'redux';
import moment from 'moment';
import './project.css';
import {Redirect} from 'react-router-dom';
import {firestoreConnect} from 'react-redux-firebase'
function projectdetails(props) {
    if(!props.auth.uid) return <Redirect to="/login"/>
    const pro=props.project;
    const date=moment(pro.date.toDate().toString()).calendar();
    return (
        <div className="container c ">
            <div className="row ">
                    <div className="c1">
                        <div style={{fontFamily:"Lobster",fontSize:"30px"}}>
                            {pro.Title}
                        </div>
                        <hr ></hr>
                        <div style={{fontFamily:"Lobster",fontSize:"25px"}} >
                            Status
                        </div>
                        <div style={{fontFamily:"cursive",fontSize:"18px"}}>
                            {pro.status}
                        </div>
                        <hr></hr>
                        <div style={{fontFamily:"Lobster",fontSize:"25px"}} className="mt-3">
                            Project Description
                        </div>
                        <div style={{fontFamily:"cursive",fontSize:"18px"}} >
                            {pro.content}
                        </div>
                        <hr></hr>
                        <div style={{fontFamily:"Lobster",fontSize:"20px"}} >
                            {date}
                        </div>
                    </div>
            </div>
        </div>
    )}
const MapstateToprops=(state,otherprops)=>{
    const id=otherprops.match.params.id;
    return{
        project:state.data.data.project[id],
        auth:state.authnication.auth
    }
}
export default compose(
    firestoreConnect([
        {collection:'project'}
    ]),
    connect(MapstateToprops,null)
    )(projectdetails);
