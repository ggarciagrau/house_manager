import React, { forwardRef, useImperativeHandle } from "react";

export default forwardRef(({ name, title, hideLabel, confirmLabel, hideAction, confirmAction, children }, ref) => {

    useImperativeHandle(ref, () => ({
        show: () => document.getElementById(name + "ButtonShow").click(),
        hide: () => document.getElementById(name + "ButtonHide").click()
    }));

    return (
        <>
            <button id={name + "ButtonShow"} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#" + name} style={{ display: "none" }}>
            </button>
            <div className="modal fade" id={name} tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby={name + "ModalLabel"} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={name + "ModalLabel"}>{title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                        <div className="modal-footer">
                            <button id={name + "ButtonHide"} type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={hideAction}>{hideLabel || "Cerrar"}</button>
                            <button type="button" className="btn btn-primary" onClick={confirmAction}>{confirmLabel || "Confirmar"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
})