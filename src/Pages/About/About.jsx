import AboutComponent from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import banner from "../../assets/Banner/banner_image.jpg";
import Experience from "../../Components/Experience/Experience";
import Capabilities from "../../Components/Capabilities/Capabilities";

const About = () => {
  return (
    <div className="px-4 md:px-0">
      {/* about banner  */}
        <div className="pt-[160px] pb-[120px] max-w-screen-xl mx-auto">
            <AboutComponent
            title="About me"
            subTitle="I am a front-end developer based in Sydney. Has Mechanical Engineering background. "
            description="I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill"
            btnsInfo={true}
            />

            <div className="w-full max-h-[700px] h-full mt-[120px]">
                <img src={banner} className="w-full max-h-[700px] h-full" />
            </div>
        </div>

      {/* my capabilities section  */}
      <div className="pb-[80px] mb-[80px] border-b-[1px] border-[#484848]">
        <Capabilities/>
      </div>

      {/* my experience section  */}
      <div className="pb-[80px] mb-[80px] border-b-[1px] border-[#484848]">
        <Experience/>
      </div>

      {/* contact section  */}
      <div className="max-w-screen-xl mx-auto pb-[60px]">
        <Contact />
      </div>
    </div>
  );
};

export default About;
