import React from 'react'
import {NavItem} from 'reactstrap';
import {Link} from 'react-router-dom';
const signout=()=>{
    return(
        <React.Fragment>
        <NavItem >
           <Link className=" ml-2" style={{
               textDecoration:"none",
               color:"white",
               fontFamily:"-moz-initial",
               fontSize:"20px"
           }} to="/login">Login</Link>
            
        </NavItem>
        <NavItem color="info" >
        <Link className=" ml-2" style={{
           textDecoration:"none",
           color:"white",
           fontFamily:"-moz-initial",
           fontSize:"20px"
       }} to="/signup">Signup</Link>
        </NavItem>
        </React.Fragment>
    )
}
export default signout;