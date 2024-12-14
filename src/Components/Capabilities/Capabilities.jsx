import { Link } from "react-router-dom";
import Title from "../Title/Title";

const Capabilities = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="md:flex justify-between">
              {/* title  */}
              <Title title="my capabilities" />
              {/* content  */}
              <div className="max-w-[600px] w-full">
                <p className="text-base text-[#C7C7C7] mb-8">
                  I am always looking to add more skills.Morbi egestas neque eu
                  blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex
                  at purus faucibus tristique ut et dolor.{" "}
                </p>

                {/* skills  */}
                <div className="flex flex-wrap items-center gap-6 justify-between">
                  <Link className="text-base text-white uppercase py-3 px-10 rounded-[50px] border border-[#D3E97A]">
                    html
                  </Link>
                  <Link className="text-base text-white uppercase py-3 px-10 rounded-[50px] border border-[#D3E97A]">
                    css
                  </Link>
                  <Link className="text-base text-white uppercase py-3 px-10 rounded-[50px] border border-[#D3E97A]">
                    javascript
                  </Link>
                  <Link className="text-base text-white uppercase py-3 px-10 rounded-[50px] border border-[#D3E97A]">
                    jquery
                  </Link>
                  <Link className="text-base text-white uppercase py-3 px-10 rounded-[50px] border border-[#D3E97A]">
                    react
                  </Link>
                  <Link className="text-base text-white uppercase py-3 px-10 rounded-[50px] border border-[#D3E97A]">
                    express
                  </Link>
                  <Link className="text-base text-white uppercase py-3 px-10 rounded-[50px] border border-[#D3E97A]">
                    figma
                  </Link>
                  <Link className="text-base text-white uppercase py-3 px-10 rounded-[50px] border border-[#D3E97A]">
                    tailwind css
                  </Link>
                </div>
              </div>
          </div>
        </div>
    );
};

export default Capabilities;