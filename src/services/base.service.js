import axios from "axios";
import {clearCurrentUSer} from "../store/actions/user";
import store from "../store/configStore";

const authHeader=()=>{
    const currentUser=store.getState().user;
    return {
        'Content-Type': 'application/json',
        'authorization': 'Bearer '+currentUser?.token,
    }
}