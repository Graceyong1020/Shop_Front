import axios from "axios";
import {BASE_API_URL} from "../common/constants";

const BASE_URL = BASE_API_URL + '/api/authentication'; // base url을 설정 

const loginService = (user) => {
    return axios.post(BASE_URL + '/sign-in', user);
}

const registerService = (user) => {
    return axios.post(BASE_URL + '/sign-up', user);
}
export {loginService, registerService}; // 로그인과 회원가입 서비스를 외부에서 사용할 수 있도록 export