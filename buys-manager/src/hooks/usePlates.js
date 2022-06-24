import React from "react";
import Post from "../services/plates/Post";
import Get from "../services/plates/Get";

export default () => {

    const createPlate = (data) => Post(data);

    const retrievePlates =  () => Get();

    return {
        retrievePlates,
        createPlate
    }
}