import React from "react";
import Get from "../services/DayConcepts/Get";

export default () => {

    const retrieveDayConcepts = () => Get();

    return {
        retrieveDayConcepts
    }
}