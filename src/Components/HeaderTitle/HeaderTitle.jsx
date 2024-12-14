import PropTypes from "prop-types";

const HeaderTitle = ({title, subTitle}) => {
    return (
        <div className="max-w-[600px] w-full">
            <h3 className="md:text-5xl text-4xl text-white font-semibold uppercase mb-5">{title}</h3>

            {subTitle && <h3 className="text-xl text-[#C7C7C7] leading-7">{subTitle}</h3>}
        </div>
    );
};

HeaderTitle.propTypes= {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}

export default HeaderTitle;