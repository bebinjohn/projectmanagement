import React from 'react'
import {NavItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Signout} from '../../Redux/store/actions/Authaction';
import './signin.css'
const signin=(props)=>{
    return(
        <React.Fragment>
            <NavItem >
            <Link className=" ml-2" style={{
               textDecoration:"none",
               color:"white"
           }} onClick={props.signout} >Logout</Link>
            </NavItem >
            <NavItem >
            <Link className=" ml-2"style={{
               textDecoration:"none",
               color:"white"
           }}  to="/proform">Createproject</Link>
            </NavItem>
            </React.Fragment>
    )
}
const MapDispatchToProps=(dispatch)=>{
    return{
        signout:()=>dispatch(Signout())
    }
}
export default connect(null,MapDispatchToProps)(signin);