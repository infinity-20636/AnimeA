
import './AuthComp.scss';
import { type FC } from "react";
import * as Yup from "yup";
import {Form, Field, Formik } from "formik"; 
import { login } from "@/api/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export interface AuthProps {}

const authSchema = Yup.object().shape({
  login: Yup.string()
    .min(4, "длина логина недостаточна")
    .max(15, "длина не должна превышать 15 символов")
    .matches(
      /^[a-zA-Z][a-zA-Z0-9]*$/,
      "логин должен начинаться с буквы и должен состоять из латиницы и цифр"
    )
    .required("обязательные поля"),
  password: Yup.string()
    .min(6, "длина пароля недостаточна")
    .required("обязательные поля"),
});
export interface IFormValues {
  login: string;
  password: string;
}

export interface IAuthCompProps {

}
const AuthComp: FC<IAuthCompProps> = ({})=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initialValues: IFormValues = {
      login: "",
      password: "",
    };
    const handleSubmit = (values: IFormValues) => {
      if (values.login === "admin" && values.password === "123456") {
      dispatch(login());
              navigate('/')
      } else {
        console.log("данные не верны");
      }
      console.log(values.login);
      console.log(values.password);
    };
    return (
    
      <div className="auth">
        <Formik
          validationSchema={authSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="wrapper__auth">
              <Field name="login" className="wrapper__auth-input"  placeholder="email..."/>
              <span className='wrapper__auth-span'>{errors.login && touched.login ? errors.login : null}</span>
              <Field name="password" className="wrapper__auth-input"  placeholder="password..."/>
              <span className='wrapper__auth-span'>
                {errors.password && touched.password ? errors.password : null}
              </span>
              <button className="wrapper__auth-btn" type="submit">LET`S GO</button>
            </Form>
          )}
        </Formik>
      </div>
  
    );
  };
export default AuthComp