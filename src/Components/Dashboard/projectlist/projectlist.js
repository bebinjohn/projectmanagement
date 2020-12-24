import { Link } from 'react-router-dom';
import moment from 'moment';
import {connect} from 'react-redux'
import {Card,CardBody,CardHeader,Button} from 'reactstrap';
import '../../Auth/Login.css';
import {delepro} from '../../Redux/store/actions/projectaction';
import './spinner.css';
const project=(props)=>{
    
    const dele=(id)=>{
        console.log("I am clicked")
        props.delete(id);
    }
    if(props.data!==undefined)
    {
        //console.log(props.user);
    const card=props.data.map((d,index)=>{
        //console.log(d.date);
        if(d.b_id===props.id){
        const date=moment(d.date.toDate().toString()).calendar();
        return(
            <div key={d.id} className=" mt-5 ml-4 "  >
                <div >
                    <Card className="card">
                        <Link to={"/project"+d.id} style={{
                    textDecoration:"none",
                    color:"black"
                }} >
                    <CardHeader style={{fontFamily:"Lobster",fontSize:"20px",textAlign:"center"}}>
                        {d.Title}
                    </CardHeader>
                    <CardBody style={{fontFamily:"cursive"}}>
                        {d.content}
                    </CardBody>

                        </Link>
                     <hr>
                            </hr>
                            <div className="container">
                            <div className="row">
                                <div style={{fontFamily:"Lobster",fontSize:"18px"}} className="col-12 col-sm-12 col-lg-5">
                                {date} 
                                </div> 
                                <div className="col-lg-7  pro-mar">
                            <Button   color="info"><Link style={{textDecoration:"none",color:"white",fontFamily:"Candal"}} to={"/update"+d.id}>update</Link></Button>
                            <Button style={{fontFamily:"Candal"}} className="ml-3" onClick={()=> dele(d.id)} color="danger">Delete</Button>
                            </div>
                            </div>
                            </div>
                    </Card>
        </div>
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
else return <div className="spinner" >
   <div className="lds-roller" >
<div>
    <div></div><div></div><div></div><div></div>
</div>
</div>
</div>
}
const MapDispatchToProps=(dispatch)=>{   
    return{
    delete:(id)=>dispatch(delepro(id))
    }
}
export default connect(null,MapDispatchToProps) (project);
