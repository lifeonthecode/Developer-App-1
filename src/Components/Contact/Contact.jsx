import { Link } from "react-router-dom";
import github from "../../assets/Icons/github.png"
import linkedin from "../../assets/Icons/linkedin.png"
import x from "../../assets/Icons/x.png"
import instagram from "../../assets/Icons/instagram.png"
import Form from "../Form/Form";

const Contact = () => {
    return (
        <div className="md:flex justify-between gap-6 space-y-10 md:space-y-0">
            {/* left wrapper  */}
            <div className="max-w-[600px] w-full">
                <h3 className="text-5xl text-white font-semibold uppercase mb-4">Let’s connect</h3>
                <p className="text-xl text-[#C7C7C7] font-normal leading-6 mb-2">Say hello at <span className="text-[#D3E97A] underline">demo@gmail.com</span></p>
                <p className="text-xl text-[#C7C7C7] font-normal leading-6 mb-10">For more info, here’s my <span className="text-[#D3E97A] underline">Lifeonthecode</span></p>

                {/* social media icons */}
                <div className="flex items-center gap-6">
                    <Link><img className="w-6 h-6 object-cover" src={linkedin} /></Link>
                    <Link><img className="w-6 h-6 object-cover" src={github} /></Link>
                    <Link><img className="w-6 h-6 object-cover" src={x} /></Link>
                    <Link><img className="w-6 h-6 object-cover" src={instagram} /></Link>
                </div>
            </div>

            {/* right wrapper  */}
            <div className="max-w-[600px] w-full">
                <Form/>
            </div>
            
        </div>
    );
};

export default Contact;