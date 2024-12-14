import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import linkedin_image from "../../assets/Icons/linkedin.png"
import github_image from "../../assets/Icons/github.png"
import "./About.css"
  

const About = ({title, subTitle, description, aboutMore, btnsInfo}) => {
    return (
        <div className="md:flex justify-between gap-8">

            {/* left wrapper */}
            <div className="mb-6 md:mb-0">
                <h3 className="text-6xl md:text-7xl text-white uppercase font-bold">{title}</h3>
            </div>

            {/* right wrapper  */}
            <div className="max-w-[704px]">
                <h3 className="text-2xl md:text-3xl text-white font-medium capitalize mb-4">{subTitle}</h3>
                <p  className="text-base text-[#C7C7C7] mb-12">{description}</p>
                {aboutMore && <Link className="flex items-center gap-3 rounded-2xl text-[#D3E97A] underline text-base font-medium uppercase">about more</Link>}

                {/* btns box  */}
                {
                    btnsInfo && <div className="about_info flex items-center gap-8">
                        <Link className="text-base text-[#0A0A0A] uppercase font-bold">Download Resume</Link>
                        <Link className="w-12 h-12 bg-[#222222] rounded-full flex items-center justify-center"><img src={linkedin_image} /></Link>
                        <Link className="w-12 h-12 bg-[#222222] rounded-full flex items-center justify-center"><img src={github_image} /></Link>
                    </div>
                }
            </div>
            
        </div>
    );
};

About.propTypes= {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    aboutMore: PropTypes.string,
    btnsInfo: PropTypes.bool,
}

export default About;