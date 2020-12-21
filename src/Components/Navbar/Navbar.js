import {Navbar,NavbarBrand,Nav} from 'reactstrap';
import Signin from '../Navbar/signinlink/signin';
import Signout from '../Navbar/signout/signout';
import {isLoaded} from 'react-redux-firebase';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
const navbar=(props)=>{
   // console.log(props);
    var link=null;
    if(props.dat.authnication.auth.uid){
        link=<Signin/>
    }
    else {
        link=<Signout/>
    }
    return(
            <Navbar color="info" dark>
                <NavbarBrand >
        <Link to="/">
        Project
        </Link>
                </NavbarBrand>
                <Nav >
                        {isLoaded( props.dat.authnication.auth)&& link}
                    </Nav>
            </Navbar>
        
    )
}
const MapStateToProps=(state)=>{
    console.log("i",state);
    return{
        dat:state
    }
}
export default connect(MapStateToProps) (navbar);