import React from "react";
import { Link } from "react-router-dom";

const Unauthorized =() =>{
    return (
    <div className = 'container'>   
    <div className="row">
        <div className="col-12 text-center">
            <span className="display-1">401</span>
            <div className='mb-4 lead'>Unauthorized page</div>

            <Link to="/" className='btn btn-link'>Go to homepage</Link>
            </div>
        </div>
    </div>
                
    )
}
export default Unauthorized;