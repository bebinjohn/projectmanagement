import {Card,CardBody,CardHeader} from 'reactstrap';
const notify=()=>{
    return(
        <Card style={{
            height:"500px",
            border:" 2px solid grey"
        }}>
            <CardHeader>
                Notifications
            </CardHeader>
            <CardBody> Hi</CardBody>
        </Card>
    )
}
export default notify;
