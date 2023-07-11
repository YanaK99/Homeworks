import "./App.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";

import { PersonDetailsStep } from "./component/PersonDetailsStep";
import { ProgressBar } from "./component/ProgressBar";
import { SummaryStep } from "./component/SummaryStep";

const defaultValues = {
    firstName: "",
    lastName: "",
    phone: "",
    country: "",
};

const schema = yup.object().shape({
    firstName: yup
        .string()
        .min(2, "Too Short!")
        .max(24, "Too Long!")
        .required(),
    lastName: yup.string().min(2, "Too Short!").max(24, "Too Long!").required(),
    phone: yup
        .number()
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .min(8)
        .required("A phone number is required"),
    country: yup.string().required("Country is a required field"),
    email: yup.string().email("Must be a valid email").max(255),
});

/**
 *
 */
function App() {
    const formMethods = useForm({
        defaultValues,
        resolver: yupResolver(schema),
    });
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        trigger,
        reset,
        watch,
    } = formMethods;

    const [step, setStep] = useState(1);

    const onSubmit = (data) => {
        console.log(data);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleSubmit(onSubmit)();
        }
    };
    const handleNextButtonClick = async () => {
        const isValidForm = await trigger();

        if (isValidForm) {
            setStep((previousStep) => previousStep + 1);
        }
    };

    const watchCheckbox = watch("subscribe", false);

    const handlePreviousButtonClick = () => {
        setStep((previousStep) => previousStep - 1);
    };

    const handleReset = () => {
        reset({ defaultValues });
        setStep(1);
    };

    return (
        <FormProvider {...formMethods}>
            <form
                id="msform"
                onSubmit={handleSubmit(onSubmit)}
                onKeyPress={handleKeyPress}
            >
                <ProgressBar currentStep={step} />

                {step === 1 && (
                    <PersonDetailsStep
                        register={register}
                        errors={errors}
                        handleNextButtonClick={handleNextButtonClick}
                        onSubmit={onSubmit}
                    />
                )}

                {step === 2 && (
                    <SummaryStep
                        watchCheckbox={watchCheckbox}
                        handlePreviousButtonClick={handlePreviousButtonClick}
                        handleNextButtonClick={handleNextButtonClick}
                        handleReset={handleReset}
                        isSubmitting={isSubmitting}
                        register={register}
                        errors={errors}
                        watch={watch}
                    />
                )}
            </form>
        </FormProvider>
    );
}

export default App;
