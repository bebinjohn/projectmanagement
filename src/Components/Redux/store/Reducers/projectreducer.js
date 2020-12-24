const init={
    projects:[
        {id:0,Title:"Gaming",Name:"a",content:"Project1"},
        {id:1,Title:"Gaming1",Name:"b",content:"Project2"},
        {id:2,Title:"Gamin2g",Name:"c",content:"Project3"},        
    ]
};
const Projectreducer=(state=init,action)=>{
    switch (action.type){
        case "ADD_PROJECT":{
            //console.log(action.project)
            break;
            
        }
        case "DELE_PRO":{
            break;
        }
        case "UPDATE":{
            break;
        }
        default:return state;
    }
    return state;
}
export default Projectreducer;