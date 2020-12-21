import React from 'react'
import {Card,CardBody,CardHeader,CardFooter,CardSubtitle,CardText} from 'reactstrap';
import {connect} from 'react-redux';
import {compose}from 'redux';
import {Redirect} from 'react-router-dom';
import {firestoreConnect} from 'react-redux-firebase'
function projectdetails(props) {
    if(!props.auth.uid) return <Redirect to="/login"/>
    const pro=props.project;

    return (
        <div>
             <Card style={{height:"150px"}}>
        <CardHeader>
                {pro.Title}
            </CardHeader>
            <CardBody>
                <CardSubtitle>
                    {pro.Name}
                    </CardSubtitle>
                    <CardText>
                        {pro.content}
                    </CardText>
                     </CardBody>
            <CardFooter>
                <div>
                    posted by bebin
                </div>

                <div>
                    { new Date().toISOString()}
                </div>
            </CardFooter>
        </Card>
        </div>
    )
}
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
