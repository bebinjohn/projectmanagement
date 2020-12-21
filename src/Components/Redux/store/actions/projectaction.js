
export  const projectaction=(project,id)=>{
    //console.log(new Date());
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore=getFirestore();
        firestore.collection('project').add({
            ...project,
            date:new Date(),
            b_id:id
        }).then(()=>{
            dispatch({
                type:"ADD_PROJECT",
                project:project
               }) 
        }).catch((e)=>{
                console.log(e)
        })
        
    }
}