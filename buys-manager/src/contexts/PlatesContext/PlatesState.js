import React, { useReducer } from "react";
import PlatesContext from "./PlatesContext";
import PlatesReducer from "./PlatesReducer";

import usePlates from "../../hooks/usePlates";

export default (props) => {
    const {
        retrievePlates,
        createPlate
    } = usePlates();

    const initialState = {
        plates: GetPlates(),
        targetEntity: {}
    }

    const [state, dispatch] = useReducer(PlatesReducer, initialState);

    const CreatePlate = async (data) => {
        let plate = await createPlate(data);
        dispatch({ type: "POST_PLATE", payload: plate });
        return plate;
    }

    async function GetPlates() {
        let plates = await retrievePlates();
        dispatch({ type: "GET_PLATES", payload: plates });
        return plates;
    }

    return (
        <PlatesContext.Provider
            value={{
                plates: state.plates,
                CreatePlate
            }}>
            {props.children}
        </PlatesContext.Provider>
    )
}