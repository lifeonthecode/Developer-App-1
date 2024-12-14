
import './Header.css'
import { useEffect } from "react";
import NavBar from "../NavBar/NavBar";

const Header = () => {



    useEffect(() => {

        // window.addEventListener('scroll', isSticky);
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header_section');
            window.scrollY >= 250 ? header.classList.add('is_sticky') : header.classList.remove('is_sticky')
        });


    }, []);


    return (
        <div className='header_section px-4 md:px-0 min-h-20 flex items-center justify-between'>
            <NavBar/>
        </div>
    )
};

export default Header;