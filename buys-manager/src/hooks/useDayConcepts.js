import React from "react";
import Get from "../services/day_concepts/Get";

export default () => {

    const retrieveDayConcepts = () => Get();

    return {
        retrieveDayConcepts
    }
}