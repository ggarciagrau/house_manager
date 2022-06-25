import React, { useContext } from "react";
import PlateFormUI from "./PlateFormUI";
import PlatesContext from "../../../contexts/PlatesContext/PlatesContext";
import * as Yup from "yup";

export default () => {
    const platesContext = useContext(PlatesContext);

    const PlateSchema = Yup.object().shape({
        Name: Yup.string()
        .min(2, "El nombre debe tener mínimo dos caracteres")
    });

    const submitForm = (values) => {
        platesContext.CreatePlate(values);
        platesContext.GetPlates();
    }

    return <PlateFormUI {...{ submitForm, PlateSchema }} />
}