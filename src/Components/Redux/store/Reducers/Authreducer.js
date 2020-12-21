const init=null;
const Authreducer=(state=init,action)=>{
    if(action.type==="AUTH"){
        alert("Login Successful");
    }
    if(action.type==="AUTH_ERROR"){
        alert("Login unSuccessful");
    }
    if(action.type==="SIGN_OUT"){
        alert("signout Successful");
    }
    if(action.type==="SIGN_UP"){
        alert("account created");
    }
    if(action.type==="SIGN_UP_ERR"){
        alert(action.value.message)
    }
    return state;
}
export default Authreducer;