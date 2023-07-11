import React from "react";
import "./SummaryStep.css";
import { useFormContext } from "react-hook-form";

import { formFields } from "../../constants";

/**
 *
 * @param root0
 * @param root0.handlePreviousButtonClick
 * @param root0.handleNextButtonClick
 * @param root0.handleReset
 * @param root0.isSubmitting
 * @param root0.register
 * @param root0.errors
 * @param root0.watchCheckbox
 */
function SummaryStep({
    handlePreviousButtonClick,
    isSubmitting,
    register,
    errors,
    watchCheckbox,
    handleReset,
}) {
    const { getValues } = useFormContext();

    const formValues = getValues();

    return (
        <fieldset>
            <h2 className="fs-title">Summary step</h2>
            <div className="person-data">
                <h3 className="person-title">Person Details:</h3>
                <p>First Name: {formValues.firstName}</p>
                <p>Last Name: {formValues.lastName}</p>
                <p>Phone Number: {formValues.phone}</p>
                <p>Country: {formValues.country}</p>
            </div>
            <div className="checkbox-block">
                <input type="checkbox" {...register(formFields.subscribe)} />{" "}
                Subscribe
            </div>
            {watchCheckbox && (
                <div>
                    <input
                        placeholder="E-mail"
                        type="text"
                        {...register(formFields.email)}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
            )}
            <button
                type="button"
                name="previous"
                className="previous action-button"
                onClick={handlePreviousButtonClick}
            >
                Previous
            </button>
            <button
                type="submit"
                name="next"
                className="next action-button"
                disabled={isSubmitting}
            >
                Submit
            </button>
            <button
                type="button"
                name="reset"
                className="reset action-button"
                onClick={handleReset}
            >
                Reset
            </button>
        </fieldset>
    );
}

export default SummaryStep;
