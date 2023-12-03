import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

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
          <Field type="text" name="titulo" placeholder="Título" />
          <ErrorMessage name="titulo" component="div" className="error-message" />

          <Field type="text" name="descripcion" placeholder="Descripción" />
          <ErrorMessage name="descripcion" component="div" className="error-message" />

          <Field type="number" name="salario" placeholder="Salario" />
          <ErrorMessage name="salario" component="div" className="error-message" />

          <Field type="text" name="estado" placeholder="Estado (Abierto o Cerrado)" />
          <ErrorMessage name="estado" component="div" className="error-message" />

          <Field type="date" name="fechaPublicacion" placeholder="Fecha de Publicación" />
          <ErrorMessage name="fechaPublicacion" component="div" className="error-message" />

          <Field type="date" name="fechaCierre" placeholder="Fecha de Cierre (opcional)" />
          <ErrorMessage name="fechaCierre" component="div" className="error-message" />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Publicar'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default PublicarOferta;
