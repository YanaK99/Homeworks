import React from "react";

import { countries } from "./countries";

import { formFields } from "../../constants";

/**
 *
 * @param root0
 * @param root0.register
 * @param root0.errors
 */
function PersonDetailsStep({ register, errors, handleNextButtonClick }) {
    return (
        <fieldset>
            <h2 className="fs-title">Create your account</h2>
            <h3 className="fs-subtitle">This is step 1</h3>
            <div className="input-block">
                <input
                    placeholder="First Name"
                    tabIndex={1}
                    {...register(formFields.firstName)}
                />
                {errors.firstName && (
                    <span className="error">{errors.firstName.message}</span>
                )}
            </div>
            <div className="input-block">
                <input
                    placeholder="Last Name"
                    tabIndex={2}
                    {...register(formFields.lastName)}
                />
                {errors.lastName && (
                    <span className="error">{errors.lastName.message}</span>
                )}
            </div>
            <div className="input-block">
                <input
                    type="tel"
                    placeholder="Phone Number"
                    tabIndex={3}
                    {...register(formFields.phone)}
                />
                {errors.phone && (
                    <span className="error">{errors.phone.message}</span>
                )}
            </div>
            <div className="input-block">
                <select
                    {...register(formFields.country)}
                    defaultValue=""
                    tabIndex={4}
                >
                    <option value="" disabled>
                        Choose a country
                    </option>
                    {countries.map((country) => (
                        <option key={country} value={country}>
                            {country}
                        </option>
                    ))}
                </select>
                {errors.country && (
                    <span className="error">{errors.country.message}</span>
                )}
            </div>
            <button
                type="button"
                name="next"
                className="next action-button"
                onClick={handleNextButtonClick}
            >
                Next
            </button>
        </fieldset>
    );
}

export default PersonDetailsStep;
