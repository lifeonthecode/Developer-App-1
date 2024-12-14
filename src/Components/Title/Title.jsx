import PropTypes from "prop-types";

const Title = ({title}) => {
    return (
        <div className="mb-6 md:mb-0">
            <h3 className="text-4xl md:text-5xl text-white font-semibold uppercase">{title}</h3>
        </div>
    );
};

Title.propTypes = {
    title: PropTypes.string.isRequired
}

export default Title;