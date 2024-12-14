
import './Footer.css'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className="max-w-screen-xl mx-auto pb-12 footer px-4 md:px-4">
            <p className="text-base text-black capitalize">&copy; {year}<span>lifeonthecode</span></p>
        </div>
    );
};

export default Footer;