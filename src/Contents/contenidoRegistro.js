import React from "react";
import "../secciones/registro.css";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const contenidoRegistro = () => {
  const validationSchema = Yup.object().shape({
    nombres: Yup.string().required('Campo obligatorio'),
    apellidos: Yup.string().required('Campo obligatorio'),
    fechaNacimiento: Yup.date().required('Campo obligatorio'),
    email: Yup.string().email('Correo electrónico inválido').required('Campo obligatorio'),
    pass: Yup.string().required('Campo obligatorio'),
    confirmPass: Yup.string()
      .oneOf([Yup.ref('pass'), null], 'Las contraseñas deben coincidir')
      .required('Campo obligatorio'),
    telefono: Yup.number().min(11).required('Campo obligatorio'),
    tipoDeUsuario: Yup.string().required('Seleccione un tipo de usuario'),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    const { nombres, apellidos, fechaNacimiento, email, pass, telefono, tipoDeUsuario } = values;
    const usuarioData = { nombres, apellidos, fechaNacimiento, email, telefono, tipoDeUsuario };
    const loginData = { email, pass } ;

    axios
      .post('http://localhost:5000/usuarios/create', usuarioData)
      .then((res) => {
        console.log(res);
        axios.post('http://localhost:5000/login/create', loginData)
          .then((res) => {
            console.log(res);
            alert(res.data.message); // Aquí podrías mostrar algún mensaje de éxito al usuario
            resetForm(); // Limpiar el formulario después de enviar la solicitud con éxito
          })
          .catch((err) => {
            console.log(err);
            // Aquí podrías mostrar algún mensaje de error al usuario
          });
      })
      .catch((err) => {
        console.log(err);
        // Aquí podrías mostrar algún mensaje de error al usuario
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={{
        nombres: '',
        apellidos: '',
        fechaNacimiento: '',
        email: '',
        pass: '',
        confirmPassword: '',
        telefono: '',
        tipoDeUsuario: '',
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
        {formik => (
          <Form className="formulario">
            <h2 className='contenedor'>Registrarse</h2>
            <div className="form-group">
            <Field name="nombres" placeholder="Nombres" className="form-field" />
              <ErrorMessage name="nombres" component="div" className="error-message" />
            </div> <div className="form-group">
            <Field type="text" name="apellidos" placeholder="Apellidos" className="form-field" />
          <ErrorMessage name="apellidos" component="div" className="error-message" />
          </div> <div className="form-group">
          <Field type="date" name="fechaNacimiento" placeholder="Fecha de nacimiento" className="form-field" />
          <ErrorMessage name="fechaNacimiento" component="div" className="error-message" />
          </div> <div className="form-group">
          <Field type="email" name="email" placeholder="Correo electrónico" className="form-field" />
          <ErrorMessage name="email" component="div" className="error-message" />
          </div> <div className="form-group">
          <Field type="password" name="pass" placeholder="Contraseña" className="form-field"/>
          <ErrorMessage name="password" component="div" className="error-message" />
          </div> <div className="form-group">
          <Field type="password" name="confirmPass" placeholder="Confirmar Contraseña " className="form-field"/>
          <ErrorMessage name="confirmPassword" component="div" className="error-message" />
          </div> <div className="form-group">
          <Field type="tel" name="telefono" placeholder="Teléfono" className="form-field"/>
          <ErrorMessage name="telefono" component="div" className="error-message" />
          </div> <div className="form-group">
          <Field as="select" name="tipoDeUsuario" className="form-field">
            <option value="">Seleccione un tipo de usuario</option>
            <option value="Candidato">Candidato</option>
            <option value="Reclutador">Reclutador</option>
          </Field>
          <ErrorMessage name="tipoDeUsuario" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <button type="submit" disabled={formik.isSubmitting} className="form-button">
              {formik.isSubmitting ? 'Enviando...' : 'Registrarse'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default contenidoRegistro;