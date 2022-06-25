import React from "react";
import { Formik, Form, Field } from "formik";

export default ({ submitForm, PlateSchema }) => {

    return (
        <>
            <h1>Formulario platos</h1>
            <Formik
                initialValues={{ Name: "" }}
                onSubmit={submitForm}
                validationSchema={PlateSchema}>
                    {({ errors, touched }) => (
                        <Form>
                            <div className="form-group mb-1">
                                <label htmlFor="name">Nombre:</label>
                                <Field type="text" name="Name" id="name" className="form-control" required />
                                {errors.Name && touched.Name ? (
                                <div>{errors.Name}</div> 
                                ) : null}
                            </div>
                            <div className="form-group">
                                <button type="submit" className="form-control btn btn-primary">Enviar</button>
                            </div>
                        </Form>
                    )}
            </Formik>
        </>
    )
}