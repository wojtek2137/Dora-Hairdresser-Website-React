import "./ToggleButton.css";

const ToggleButton = (props) => {
    return (
        <button
            className="toggle-button"
            onClick={props.toggleBtn}
        >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </button>
    );
};

export default ToggleButton;
