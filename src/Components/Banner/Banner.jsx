import { Link } from "react-router-dom";
import './Banner.css'

import linkedin_imag from "../../assets/Icons/linkedin.png"
import github_image from "../../assets/Icons/github.png"
import banner_image from "../../assets/Banner/banner_image.jpg"


const Banner = () => {
    return (
        <div className="md:flex justify-between items-center gap-6 ">
            
            {/* content wrapper  */}
            <div className="content_wrapper max-w-[544px] w-full mb-8 md:mb-0">
                <h3 className="text-4xl md:text-5xl text-white font-bold uppercase leading-normal">hi, i am <br/> 
                <span>LIFEONTHECODE.</span></h3>

                <p className="text-xl text-[#C7C7C7] font-normal leading-6 mt-6">A front-end developer passionate about building accessible and user friendly websites.</p>

                {/* btn box  */}
                <div className="btns_box mt-8 flex gap-8 items-center">
                    <button className="text-base text-[#0A0A0A] uppercase font-bold"><Link className="leading-none">contact me</Link></button>


                    <button className="w-12 h-12 bg-[#222222] rounded-full flex items-center justify-center"><Link className="leading-none"><img src={linkedin_imag} /></Link></button>
                    
                    <button className="w-12 h-12 bg-[#222222] rounded-full flex items-center justify-center"><Link to='https://github.com/lifeonthecode' target="black_" className="leading-none"><img src={github_image} /></Link></button>
                </div>
            </div>


            {/* image wrapper  */}
            <div className="max-w-[600px] min-h-[600px]">
                <img className="max-w-[600px] min-h-[600px] w-full h-full border-[2px] border-[#D3E97A] rounded-2xl" src={banner_image} />
            </div>
        </div>
    );
};

export default Banner;