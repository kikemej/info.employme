import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const PublicarOferta = () => {
  const validationSchema = Yup.object().shape({
    titulo: Yup.string().required('Campo obligatorio'),
    descripcion: Yup.string().required('Campo obligatorio'),
    salario: Yup.number().required('Campo obligatorio'),
    estado: Yup.string().required('Campo obligatorio'),
    fechaPublicacion: Yup.date().required('Campo obligatorio'),
    fechaCierre: Yup.date(),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    const { titulo, descripcion, salario, estado, fechaPublicacion, fechaCierre } = values;
    const ofertaData = { titulo, descripcion, salario, estado, fechaPublicacion, fechaCierre };

    axios
      .post('http://localhost:5000/vacantes/create', ofertaData)
      .then((res) => {
        console.log(res);
        alert('Vacante Publicada con éxito'); // Mensaje de éxito
        resetForm(); // Limpiar el formulario después de enviar la solicitud con éxito
      })
      .catch((err) => {
        console.error(err);
        // Aquí podrías mostrar algún mensaje de error al usuario
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={{
        titulo: '',
        descripcion: '',
        salario: '',
        estado: '',
        fechaPublicacion: '',
        fechaCierre: '',
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="mb-3">
            <Field name="titulo" type="text" className="form-control" placeholder="Título" />
            <ErrorMessage name="titulo" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <Field name="descripcion" as="textarea" className="form-control" placeholder="Descripción" />
            <ErrorMessage name="descripcion" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <Field name="salario" type="number" className="form-control" placeholder="Salario" />
            <ErrorMessage name="salario" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <Field name="estado" as="select" className="form-select">
              <option value="">Seleccionar estado</option>
              <option value="Abierto">Abierto</option>
              <option value="Cerrado">Cerrado</option>
            </Field>
            <ErrorMessage name="estado" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <Field name="fechaPublicacion" type="date" className="form-control" />
            <ErrorMessage name="fechaPublicacion" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <Field name="fechaCierre" type="date" className="form-control" />
            <ErrorMessage name="fechaCierre" component="div" className="text-danger" />
          </div>

          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Publicar'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default PublicarOferta;