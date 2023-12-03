import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const CrearCV = () => {
  const validationSchema = Yup.object().shape({
    experiencia: Yup.string().required('Campo obligatorio'),
    educacion: Yup.string().required('Campo obligatorio'),
    habilidades: Yup.string().required('Campo obligatorio'),
    perfilProfesional: Yup.string().required('Campo obligatorio'),   
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    const { experiencia, educacion, habilidades, perfilProfesional } = values;
    const idUsuario = '21';
    const cvData = { idUsuario, experiencia, educacion, habilidades, perfilProfesional };

    axios
      .post('http://localhost:5000/candidatos/create', cvData)
      .then((res) => {
        console.log(res);
        alert('CV creada con éxito'); // Mensaje de éxito
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
        experiencia: '',
        educacion: '',
        habilidades: '',
        perfilProfesional: '',
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="mb-3">
            <Field name="experiencia" type="text" className="form-control" placeholder="Experiencia" />
            <ErrorMessage name="experiencia" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <Field name="educacion" type="text" className="form-control" placeholder="Educación" />
            <ErrorMessage name="educacion" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <Field name="habilidades" type="text" className="form-control" placeholder="Habilidades" />
            <ErrorMessage name="habilidades" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <Field name="perfilProfesional" type="text" className="form-control" placeholder="Perfil Profesional" />
            <ErrorMessage name="perfilProfesional" component="div" className="text-danger" />
          </div>

          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Crear CV'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CrearCV;