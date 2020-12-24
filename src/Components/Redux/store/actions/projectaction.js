
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

export const delepro=(id)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore=getFirestore();
        firestore.collection('project').doc(id).delete().then(()=>{
            dispatch({
                type:"DELE_PRO"
            })
        }).catch((e)=>{
            console.log(e);
        })
    }
}

export const update=(project,id,user_id)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore=getFirestore();
    firestore.collection('project').doc(id).update({
        ...project,
        date:new Date(),
        b_id:user_id
    }).then(()=>{
        dispatch({
            type:"UPDATE"
        })
        }).catch((e)=>{
            console.log("error")
    })
    }

}