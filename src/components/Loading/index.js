import React from "react";
import './index.css'
import PropTypes from "prop-types";

function Loading({loading, error}) {
    return (
        <>
            {loading && (
                <div className="container">
                    <div className="mask"></div>
                    <div className="loading">
                        <div className="circle circle-1">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="circle circle-2">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="circle circle-3">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

Loading.propTypes = {
    loading: PropTypes.bool,
    errors: PropTypes.string,
}

export default Loading;