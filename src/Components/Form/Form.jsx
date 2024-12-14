
const Form = () => {
    return (
        <>
            {/* name  */}
            <div className="flex flex-col space-y-3 mb-6">
                <label className="text-base text-[#C7C7C7] capitalize font-medium" htmlFor="name">name</label>
                <input type="text" className="w-full h-[51px] pl-4 py-3 bg-[#1A1A1A] outline-none border-0" id="name" placeholder="Lifeonthecode" />
            </div>
            {/* email  */}
            <div className="flex flex-col space-y-3 mb-6">
                <label className="text-base text-[#C7C7C7] capitalize font-medium" htmlFor="email">email</label>
                <input type="text" className="w-full h-[51px] pl-4 py-3 bg-[#1A1A1A] outline-none border-0" id="email" placeholder="Email" />
            </div>
            {/* subject  */}
            <div className="flex flex-col space-y-3 mb-6">
                <label className="text-base text-[#C7C7C7] capitalize font-medium" htmlFor="subject">Subject</label>
                <input type="text" className="w-full h-[51px] pl-4 py-3 bg-[#1A1A1A] outline-none border-0" id="subject" placeholder="Subject" />
            </div>
            {/* text area  */}
            <div className="flex flex-col space-y-3 mb-8">
                <label className="text-base text-[#C7C7C7] capitalize font-medium" htmlFor="message">Message</label>
                <textarea className="w-full h-[156px] pl-4 py-3 bg-[#1A1A1A] outline-none border-0" placeholder="Message"></textarea>
            </div>
            {/* submit button  */}
            <button type="submit" className="max-w-[140px] w-full h-[54px] bg-[#D3E97A] rounded-3xl text-xl text-[#0A0A0A] font-semibold uppercase flex items-center justify-center">submit</button>
        </>
    );
};

export default Form;