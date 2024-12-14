import { Link } from "react-router-dom";
import Title from "../Title/Title";

const Experience = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="md:flex justify-between">
                {/* title  */}
                <Title title="My Experience" />

                {/* content  */}
                <div className="max-w-[600px] w-full">
                    <div className="mb-[50px]">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-xl md:text-2xl text-white font-medium capitalize">Freelance Developer</h4>
                            <span className="text-base md:text-xl text-[#C7C7C7] capitalize">Nov 2024 — Present </span>
                        </div>
                        <p className="text-base md:text-xl text-[#C7C7C7]">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-xl md:text-2xl text-white font-medium capitalize">Front-End Intern</h4>
                            <span className="text-base md:text-xl text-[#C7C7C7] capitalize">Nov 2024 — Present </span>
                        </div>
                        <Link className="text-base text-[#D3E97A] capitalize mb-4 block">Lifeonthecode</Link>
                        <p className="text-base md:text-xl text-[#C7C7C7]">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Experience;