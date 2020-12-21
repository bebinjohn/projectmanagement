export const authaction=(cred)=>{
    //console.log("In action");
        return (dispatch,getState,{getFirebase})=>{
            const firebase=getFirebase();
            firebase.auth().signInWithEmailAndPassword(
                cred.Email,
                cred.Password
            ).then(()=>{
                dispatch({type:"AUTH",value:cred})
            }).catch((e)=>{
                dispatch({type:"AUTH_ERROR"})
            })
        }
}

export const Signout =()=>{
    return (dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch({type:"SIGN_OUT"})
        }).catch(()=>{
            dispatch({type:"SIGN_OUT_ERR"})
        })
    }
} 

export const signup=(data)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase=getFirebase();
        const  firestore=getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            data.Email,
            data.password
        ).then((response)=>{
            return firestore.collection('user').doc(response.user.uid).set({
                Firstname:data.Firstname,
                Lastname:data.Lastname,
                Initial:data.Firstname[0] + data.Lastname[0]
            })
        }).then(()=>{
            dispatch({type:"SIGN_UP"})
        }).catch((e)=>{
            dispatch({type:"SIGN_UP_ERR",value:e})
        })
    }
}