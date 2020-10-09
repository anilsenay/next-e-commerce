import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Input from "@/components/Input";
import Button from "@/components/Button";
import SocialMediaButton from "@/components/SocialMediaButton";
import { emailRegister, registerDatabase } from "firebase/register";
import googleAuth from "firebase/google-auth";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("* Name is required.")
    .min(2, "* Name is too short"),
  surname: yup
    .string()
    .required("* Surname is required.")
    .min(2, "* Surname is too short"),
  email: yup.string().email().required("* Email is required."),
  password: yup
    .string()
    .required("* Password is required.")
    .min(8, "* Password is too short - should be 8 chars minimum."),
});

export default function RegisterForm() {
  const [registerError, setRegisterError] = useState();
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = ({ email, password, name, surname }) =>
    emailRegister({ email, password })
      .then((response) => {
        registerDatabase({
          id: response.user.uid,
          email,
          name,
          surname,
        })
          .then(() =>
            setRegisterError(
              "You have registered succesfully. You can login now"
            )
          )
          .catch((e) => setRegisterError(e.message));
      })
      .catch((error) => setRegisterError(error.message));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column", paddingTop: 30 }}
    >
      {/*   Social Media Buttons  */}
      <hr style={{ width: "100%", height: 1, color: "#f6f6f655" }} />
      <span
        style={{
          textAlign: "center",
          marginTop: -35,
          padding: 15,
          backgroundColor: "white",
          display: "flex",
          alignSelf: "center",
          width: "max-content",
          fontWeight: "500",
        }}
      >
        Register with social media
      </span>

      <div style={{ display: "flex" }}>
        <SocialMediaButton
          style={{ marginRight: 20 }}
          icon="google"
          onClick={googleAuth}
        >
          Google
        </SocialMediaButton>
        <SocialMediaButton icon="apple">Apple</SocialMediaButton>
      </div>

      <hr
        style={{ width: "100%", height: 1, color: "#f6f6f655", marginTop: 50 }}
      />
      <span
        style={{
          textAlign: "center",
          marginTop: -35,
          padding: 15,
          backgroundColor: "white",
          display: "flex",
          alignSelf: "center",
          width: "max-content",
          fontWeight: "500",
        }}
      >
        Register with E-mail
      </span>

      <Input
        name="name"
        register={register}
        placeholder="Name"
        error={errors.name}
      />
      {errors.name && (
        <span style={{ color: "red", marginTop: 4, fontSize: 14 }}>
          {errors.name.message}
        </span>
      )}
      <Input
        name="surname"
        register={register}
        placeholder="Surname"
        error={errors.surname}
      />
      {errors.surname && (
        <span style={{ color: "red", marginTop: 4, fontSize: 14 }}>
          {errors.surname.message}
        </span>
      )}
      <Input
        name="email"
        register={register}
        placeholder="E-mail"
        error={errors.email}
      />
      {errors.email && (
        <span style={{ color: "red", marginTop: 4, fontSize: 14 }}>
          {errors.email.message}
        </span>
      )}
      <Input
        name="password"
        register={register}
        placeholder="Password"
        type="password"
        error={errors.password}
      />
      {errors.password && (
        <span style={{ color: "red", marginTop: 4, fontSize: 14 }}>
          {errors.password.message}
        </span>
      )}
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      {registerError && (
        <span
          style={{
            color: "red",
            marginTop: 20,
            fontSize: 14,
            marginBottom: -10,
          }}
        >
          {registerError}
        </span>
      )}

      <Button type="submit">Register</Button>
      <div style={{ fontSize: 12, display: "flex" }}>
        By clicking Register, you agree to use out Terms and that you have read
        our Data Use Policy, including our Cookie Use
      </div>
    </form>
  );
}
