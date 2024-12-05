import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

const AuthGuard=({children, roles}) =>{
    const currentUser=useSelector(state => state.user);
    const authorize=() => {
        // If user is not logged in, 401 page will be displayed
        if(!currentUser){
            return <Navigate to="/401" />
        }
        
        if(roles?.indexOf(currentUser.role)===-1){
            return <Navigate to="/401" />
        }
        return children;
    }
    return authorize();
}
export default AuthGuard;