import react, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import {Button} from './Button';
<script src="https://kit.fontawesome.com/3c152d7eb7.js" crossorigin="anonymous"></script>



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    },[]);


    window.addEventListener('resize', showButton);

    return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                '#TAG' <body><i className="fa-solid fa-rugby-ball"></i></body>
            </Link>
            <div className='menu-icon'>
                <i className={click ?'fas fa-times' : 'fa-regular fa-bars'} />
            </div>
            <ul className={click ?'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/other' className='nav-links' onClick={closeMobileMenu}>
                        Other
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
    </nav>
    </>
    );
};

export default Navbar;