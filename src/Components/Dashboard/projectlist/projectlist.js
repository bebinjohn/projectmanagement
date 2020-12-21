import { Link } from 'react-router-dom';
import moment from 'moment';
import {Card,CardBody,CardHeader,CardSubtitle,CardText,CardFooter} from 'reactstrap';
const project=(props)=>{
    
    if(props.data!==undefined)
    {
        //console.log(props.user);
    const card=props.data.map((d,index)=>{
        //console.log(d.date);
        if(d.b_id===props.id){
        const date=moment(d.date.toDate().toString()).calendar();
        return(
            <div key={d.id}className="col-sm-6" >
                <Link to={"/project"+d.id} style={{
                    textDecoration:"none",
                    color:"black"
                }}>
        <Card style={{height:"150px"}}>
        <CardHeader>
                {d.Title}
            </CardHeader>
            <CardBody>
                <CardText>
                {d.content}
                </CardText>
            </CardBody>
            <CardFooter>
                   posted by: {d.Name}
                   <br></br>
                   {date}
                </CardFooter>
        </Card>
        </Link>
        </div>
        )
            }
            else return <div></div>
    })
    return(
        <div className="container">
            <div className="row">
                {card}
        </div>
        </div>
    )

    
}
else return <div>
    loading...
</div>
}

export default project;