import React from "react";

/**
 *
 */
function ProgressBar({ currentStep }) {
    return (
        <ul id="progressbar">
            <li className={currentStep >= 1 ? "active" : ""}>
                Person Details step
            </li>
            <li className={currentStep === 2 ? "active" : ""}>Summary step</li>
        </ul>
    );
}

export default ProgressBar;
