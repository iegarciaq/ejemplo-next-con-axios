import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import axios from 'axios';
import { useState } from 'react';


const initialValues = {
    email: "",
    password: "",
    name: "",
    birthday: "",
    nickname: "",
    avatar_url: "",
};

const SignupFormSchema = Yup.object().shape({
    email: Yup.string().email("Correo inválido").required("Correo electrónico obligatorio"),
    password: Yup.string().required("password is required"),
    name: Yup.string().required("name is required"),
    nickname: Yup.string().required("nickname is required"),
    avatar_url: Yup.string().required("avatar is required"),
});

function SignupForm() {

    // AQUÍ EL HOOK 😊
    const [modifiedData, setModifiedData] = useState({
        email: "",
        password: "",
        name: "",
        birthday: "",
        nickname: "",
        avatar_url: ""
    });
    
    // AQUÍ EL HOOK DE LOS ERRORES 😱
    const [errorRestaurants, setErrorRestaurants] = useState(null);


    // AQUÍ PEGAR FUNCIÓN 😊
    const handleSubmit = async e => {
        e.preventDefault();
        console.log(modifiedData);
        try {
            const response = await axios.post('http://localhost:8080/player/register', {
                data: modifiedData,
            });
            console.log(response);
        } catch (error) {
            setErrorRestaurants(error);
        }
    };

    
    // AQUÍ PEGAR FUNCIÓN 😊
    const handleChange = ({ target: { name, value } }) => {
        setModifiedData(prev => ({
          ...prev,
          [name]: value,
        }));
      };

    return (
        <>
            <Formik
                initialValues={initialValues}
                // validationSchema={SignupFormSchema}
                onSubmit={(fields) => {
                    // alert(
                    //     "SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4)
                    // );
                }}
            >
                {({ errors, status, touched }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-12 mb-3">
                                <label className="form-label">email</label>
                                <Field
                                    name="email"
                                    type="email"
                                    value={modifiedData.email}
                                    onChange={handleChange}
                                    className={
                                        "form-control" +
                                        (errors.email && touched.email
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                            <div className="col-12 mb-3">
                                <label className="form-label">password</label>
                                <Field
                                    name="password"
                                    type="password"
                                    onChange={handleChange}
                                    value={modifiedData.password}
                                    className={
                                        "form-control" +
                                        (errors.password && touched.password
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>

                            <div className="col-12 mb-3">
                                <label className="form-label">name</label>
                                <Field
                                    name="name"
                                    onChange={handleChange}
                                    type="text"
                                    value={modifiedData.name}
                                    className={
                                        "form-control" +
                                        (errors.name && touched.name
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="name"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                            <div className="col-12 mb-3">
                                <label className="form-label">birthday</label>
                                <Field
                                    onChange={handleChange}
                                    name="birthday"
                                    value={modifiedData.birthday}
                                    type="date"
                                    className={
                                        "form-control" +
                                        (errors.birthday && touched.birthday
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="birthday"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                            <div className="col-12 mb-3">
                                <label className="form-label">nickname</label>
                                <Field
                                    name="nickname"
                                    onChange={handleChange}
                                    type="text"
                                    value={modifiedData.nickname}
                                    className={
                                        "form-control" +
                                        (errors.nickname && touched.nickname
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="nickname"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                            <div className="col-12 mb-3">
                                <label className="form-label">avatar_url</label>
                                <Field
                                    name="avatar_url"
                                    onChange={handleChange}
                                    type="text"
                                    value={modifiedData.avatar_url}
                                    className={
                                        "form-control" +
                                        (errors.avatar_url && touched.avatar_url
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="avatar_url"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                        </div>

                        <div className="mt-3 d-grid gap-2">
                            <button
                                type="submit"
                                className="btn btn-primary mr-2"
                            >
                                Sign Up
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}
export default SignupForm;
