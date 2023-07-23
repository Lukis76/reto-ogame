"use client";

import Image from "next/image";
import { useState } from "react";
// import toast from "react-hot-toast";
import { LoginWith } from "../../components/LoginWith";
import { IconFacebook } from "../../components/icons/iconFacebook";
import { IconGoogle } from "../../components/icons/iconGoogle";
import { InformationBubble } from "../../components/informationubble";
import { LoginForm } from "./login";
import { RegisterForm } from "./register";

enum SELECT {
  LOGIN = "login",
  REGISTER = "register",
}

const AuthenticationPage = () => {
  const [selectForm, setSelectForm] = useState(SELECT.LOGIN);

  const handleSelected = (select: SELECT): void => {
    const btnLogin = document.querySelector("#login")!;
    const btnRegister = document.querySelector("#register")!;

    if (select === SELECT.LOGIN && selectForm === SELECT.REGISTER) {
      setSelectForm(() => SELECT.LOGIN);
      btnLogin.classList.add("bg-black");
      btnLogin.classList.remove("bg-slate-900");
      btnRegister.classList.remove("bg-black");
      btnRegister.classList.add("bg-slate-900");
      // toast.error("No se ha podido completar la operacion");
    } else if (select === SELECT.REGISTER && selectForm === SELECT.LOGIN) {
      setSelectForm(() => SELECT.REGISTER);
      btnRegister.classList.add("bg-black");
      btnRegister.classList.remove("bg-slate-900");
      btnLogin.classList.remove("bg-black");
      btnLogin.classList.add("bg-slate-900");
    }
  };

  return (
    <>
      <Image
        src="/main_BG2.9f1a8d26.jpg"
        alt="main_BG2.9f1a8d26.jpg"
        width={1920}
        height={1080}
        loading="lazy"
        className="fixed inset-0  right-0 top-0 z-0 object-cover text-transparent"
      />
      <section className="relative z-10 flex h-screen w-full flex-col items-center justify-center">
        <div>
          <div>
            <button
              id="login"
              className="bg-black px-10 py-4 text-center"
              onClick={() => handleSelected(SELECT.LOGIN)}
            >
              Iniciar sesion
            </button>
            <button
              id="register"
              className="bg-slate-900 px-10 py-4 text-center"
              onClick={() => handleSelected(SELECT.REGISTER)}
            >
              Registrarse
            </button>
          </div>
          {selectForm === SELECT.REGISTER && <RegisterForm />}
          {selectForm === SELECT.LOGIN && <LoginForm />}

          <LoginWith provider="google" icon={<IconFacebook />} />
          <LoginWith provider="facebook" icon={<IconGoogle />} />
          {/* <InformationBubble type="error"></InformationBubble> */}
        </div>
      </section>
    </>
  );
};

export default AuthenticationPage;
