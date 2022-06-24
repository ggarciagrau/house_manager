import React from "react";
import { Formik, Form, Field } from "formik";

export default ({ submitForm, PlateSchema }) => {

    return (
        <>
            <h1>Plate form</h1>
            <Formik
                initialValues={{ name: "" }}
                onSubmit={submitForm}
                validationSchema={PlateSchema}>
                    {({ errors, touched }) => (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="name">Nombre:</label>
                                <Field type="text" name="name" id="name" className="form-control" required />
                                {errors.name && touched.name ? (
                                <div>{errors.name}</div> 
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