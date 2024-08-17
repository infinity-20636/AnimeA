import { type FC } from "react";
import "./Auth.scss";
import AuthComp from "@/components/Auth/AuthComp";


export interface AuthProps {}

const Auth: FC<AuthProps> = () => {
  
  return (
  <section className="wrapper__AuthComp">
  <AuthComp/>
  </section>
  );
};

export default Auth;
