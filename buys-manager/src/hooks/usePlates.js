import React from "react";
import Get from "../services/plates/Get";
import Post from "../services/plates/Post";
import Delete from "../services/plates/Delete";

export default () => {

    const retrievePlates =  () => Get();

    const createPlate = (data) => Post(data);

    const removePlate = (id) => Delete(id);

    return {
        retrievePlates,
        createPlate,
        removePlate
    }
}