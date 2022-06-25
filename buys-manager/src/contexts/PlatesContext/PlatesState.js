import React, { useReducer , useEffect} from "react";
import PlatesContext from "./PlatesContext";
import PlatesReducer from "./PlatesReducer";

import usePlates from "../../hooks/usePlates";
import Get from "../../services/plates/Get";

export default (props) => {
    const {
        retrievePlates,
        createPlate,
        removePlate
    } = usePlates();

    const initialState = {
        plates: [],
        targetEntity: {}
    }

    useEffect(() => {
        GetPlates();
    }, []);

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

    const RemovePlate = async (id) => {
        return await removePlate(id);
    }

    return (
        <PlatesContext.Provider
            value={{
                plates: state.plates,
                GetPlates,
                CreatePlate,
                RemovePlate
            }}>
            {props.children}
        </PlatesContext.Provider>
    )
}