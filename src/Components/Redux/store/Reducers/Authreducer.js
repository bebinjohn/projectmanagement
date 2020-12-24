const init=null;
const Authreducer=(state=init,action)=>{
    if(action.type==="AUTH"){
        alert("Login Successful!! Go to Dashboard to see your projects");
        return {
            ...state,
            auth:true
        }
       }
    if(action.type==="AUTH_ERROR"){
        alert("Login unSuccessful");
    }
    if(action.type==="SIGN_OUT"){
        alert("Signout Successful");
    }
    if(action.type==="SIGN_UP"){
        alert("account created!! Create your project");
    }
    if(action.type==="SIGN_UP_ERR"){
        alert(action.value.message)
    }
    return state;
}
export default Authreducer;