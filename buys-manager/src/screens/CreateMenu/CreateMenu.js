import React from "react";
import CreateMenuUI from "./CreateMenuUI";
import useDayConcepts from "../../hooks/useDayConcepts";

export default () => {
    const {
        retrieveDayConcepts
    } = useDayConcepts();

    (async () => {
        console.log(await retrieveDayConcepts());
    })();

    return <CreateMenuUI />
}