import logo from '../logo.svg'
import {NavLink} from 'react-router-dom'

const Navbar=() =>{
    return(
        <nav className='navbar navbar-expand navbar-dark bg-dark'>
            <a href='https://react.dev' className='navbar-brand ms-1'>
                <img src={logo} className='App-logo' alt='logo' />
                React
            </a>
            <div className='navbar-nav me-auto'>
				
					<li className='nav-item'>
						<NavLink to="/admin" href='##' className='nav-link'>
							관리자
						</NavLink>
					</li>
				
                <li className='nav-item'>
					<NavLink to="/home" href='##' className='nav-link'>
						홈페이지
					</NavLink>
				</li>
			</div>
            <div className='navbar-nav ms-auto me-5'>
                <li className='nav-item'>
                    <NavLink href='##' className='nav-link'>
                        로그인
                    </NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink href='##' className='nav-link'>
                        가입하기
                    </NavLink>
                </li>
            </div>
        </nav>
    )
};
export default Navbar;