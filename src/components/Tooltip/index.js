import React,{useState} from "react";
import './index.css'
import PropTypes from "prop-types";
import Table from "../Table";

const Tooltip = ({ children, text, ...rest }) => {
    const [show, setShow] = useState(false);
    return (
        <div className="tooltip-container">
            <div className={show ? "tooltip-box visible" : "tooltip-box"}>
                {text}
                <span className="tooltip-arrow" />
            </div>
            <div
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                {...rest}
            >
                {children}
            </div>
        </div>
    );
};

Tooltip.propTypes = {
    children: PropTypes.any,
    text: PropTypes.string,
    rest: PropTypes.any,
}

export default Tooltip;

