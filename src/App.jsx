import About from "./Components/About/About"
import Banner from "./Components/Banner/Banner"
import Contact from "./Components/Contact/Contact"
import Features from "./Components/Features/Features"
import HeaderTitle from "./Components/HeaderTitle/HeaderTitle"


function App() {
    return (
        <div className="px-4 md:px-0">

            {/* banner section  */}
            <div className="pt-[30px] pb-[80px] border-b-[1px] border-[#484848]">
                <div className="max-w-screen-xl mx-auto">
                    <Banner/>
                </div>
            </div>

            {/* features section  */}
            <div className="pt-[80px] pb-[80px] border-b-[1px] border-[#484848]">
                <div className="max-w-screen-xl mx-auto">
                    {/* header Title section  */}
                    <div className="mb-[80px]">
                        <HeaderTitle title="Featured Projects" subTitle="Here are some of the selected projects that showcase my passion for front-end development." />
                    </div>

                    {/* Features Project Section  */}
                    <Features/>
                </div>
            </div>


            {/* About Section  */}
            <div className="pt-[110px] pb-[150px] border-b-[1px] border-[#484848]">
                <div className="max-w-screen-xl mx-auto">
                    <About title="About me" subTitle="I am a front-end developer based in Sydney. Has Mechanical Engineering background. " description="I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill." aboutMore="More about me"  />
                </div>
            </div>


            

            {/* Contact Section  */}
            <div className="pt-[110px] pb-[60px]">
                <div className="max-w-screen-xl mx-auto">
                    <Contact/>
                </div>
            </div>


        </div>
    )
}

export default App
