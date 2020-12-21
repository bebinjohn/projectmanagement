import Authred from './Authreducer';
import Projectred from './projectreducer'
import {combineReducers} from 'redux';

const combine=()=>combineReducers({
        auth:Authred,
        pro:Projectred
    })

export default combine;