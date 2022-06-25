import React from "react";
import BootstrapModal from "../../../components/BootstrapModal";

export default ({ plates, selectedPlate, selectPlate, removePlate, modalDeleteRef }) => {

    return (
        <div>
            <h1>Listado platos</h1>
            <BootstrapModal name="deletePlate" title="Eliminar plato" ref={modalDeleteRef} confirmLabel="Eliminar" confirmAction={removePlate}>
                ¿Está seguro que desea eliminar el plato <b>{selectedPlate.Name}</b>?
            </BootstrapModal>
            <div className="container">
                <div className="row">
                    {plates.map((plate, index) => {
                        return (
                            <div className="col-sm-6 col-md-4 mt-2" key={index}>
                                <div key={index} className="card">
                                    <h5 className="card-header">{plate.Name}</h5>
                                    <div className="card-body">
                                        <button className="btn btn-primary me-1"><i className="fa-solid fa-pencil"></i></button>
                                        <button className="btn btn-danger" onClick={() => selectPlate(plate)}><i className="fa-solid fa-trash-can"></i></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}