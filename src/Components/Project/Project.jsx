import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import arrowLeft from "../../assets/Icons/arrow_right.png"
import githubImage from "../../assets/Icons/github.png"


const Project = () => {
    const [projects, setProject] = useState([]);
    console.log(projects)
    useEffect(() => {
        fetch('features.json')
        .then((res) => res.json())
        .then((data) => {
            setProject(data)
        })

    }, []);

    return (
        < >
            {
                projects?.map(project => {
                    console.log(projects.length-1, projects.indexOf(projects.length-1), 'hollow')
                    
                    return (
                        <div className="md:flex items-center justify-between gap-8 space-y-8 md:space-y-0" key={project.id}>
                            
                            {/* project image wrapper  */}
                            <div className="max-w-[600px] max-h-[600px] w-full h-full">
                                <img className="w-full h-full" src={project?.image} />
                            </div>

                            {/* project text wrapper  */}
                            <div className="max-w-[576px]  w-full h-full">
                                <h3 className="text-2xl md:text-3xl text-white font-medium capitalize mb-4">{project?.title}</h3>
                                <p className="text-base text-[#C7C7C7] mb-8">{project?.description}</p>
                                <h5 className="text-base text-white font-medium uppercase mb-4">Project info</h5>
                                {/* project info  */}
                                <div className="flex items-center justify-between py-3 border-t border-[#D3E97A] my-3">
                                    <span className="text-base text-white font-medium capitalize">Year</span>
                                    <span className="text-base text-white font-medium capitalize">{project?.projects?.year}</span>
                                </div>
                                {
                                    project?.projects?.client && <div className="flex items-center justify-between py-3 border-t border-[#D3E97A] my-3">
                                    <span className="text-base text-white font-medium capitalize">Client</span>
                                    <span className="text-base text-white font-medium capitalize">{project?.projects?.client}</span>
                                </div>
                                }
                                <div className={`flex items-center justify-between py-3
                                 border-t  border-b border-[#D3E97A] my-3`}>
                                    <span className="text-base text-white font-medium capitalize">Role</span>
                                    <span className="text-base text-white font-medium capitalize">{project?.projects?.role}</span>
                                </div>

                                {/* link box  */}
                                <div className="flex items-center gap-7 mt-10">
                                    <Link to={project?.live_demo_url} className="flex items-center gap-3 rounded-2xl text-[#D3E97A] underline text-base font-medium uppercase">live Demo <img src={arrowLeft} /></Link>
                                    <Link to={project?.github_url} className="flex items-center gap-3 rounded-2xl text-[#D3E97A] underline text-base font-medium uppercase">github <img src={githubImage} /></Link>
                                </div>
                                
                            </div>

                        </div>
                    )
                })
            }
        </>
    );
};

export default Project;