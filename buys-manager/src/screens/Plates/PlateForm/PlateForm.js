import React from "react";
import PlateFormUI from "./PlateFormUI";
import * as Yup from "yup";

export default () => {

    const PlateSchema = Yup.object().shape({
        name: Yup.string()
        .min(2, "El nombre debe tener mínimo dos caracteres")
    });

    const submitForm = (values) => {
        console.log(values)
    }

    return <PlateFormUI {...{ submitForm, PlateSchema }} />
}