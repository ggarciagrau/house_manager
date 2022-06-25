import React, { useState, useContext, useRef } from "react";
import PlatesListUI from "./PlatesListUI";
import PlatesContext from "../../../contexts/PlatesContext/PlatesContext";

export default () => {
    const modalDeleteRef = useRef();
    const [selectedPlate, setSelectedPlate] = useState({});
    const platesContext = useContext(PlatesContext);

    const selectPlate = (data) => {
        setSelectedPlate(data);
        modalDeleteRef.current.show();
    }

    const removePlate = async () => {
        await platesContext.RemovePlate(selectedPlate.Id);
        await platesContext.GetPlates();
        setSelectedPlate({});
        modalDeleteRef.current.hide();
    }

    return (
        <PlatesListUI 
            plates={platesContext.plates}
            selectedPlate={selectedPlate}
            selectPlate={selectPlate}
            modalDeleteRef={modalDeleteRef}
            removePlate={removePlate}
        />
    );
}