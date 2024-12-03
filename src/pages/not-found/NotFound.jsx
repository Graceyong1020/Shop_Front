import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (<div className='container'>
        <div className="row">
            <div className="col-12 text-center">
                <span className="display-1>">404</span>
                <div className='mb-4 lead'>페이지를 찾을 수 없습니다.</div>

                <Link to="/" className='btn btn-link'>홈페이지로 이동</Link>
            </div>
        </div>
    </div>


    )

}
export default NotFound;