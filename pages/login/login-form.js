import React from "react";
import { useForm } from "react-hook-form";

import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";
import SocialMediaButton from "@/components/SocialMediaButton";

export default function LoginForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      {/* register your input into the hook by invoking the "register" function */}
      <Input name="email" ref={register} placeholder="E-mail" />

      {/* include validation with required or other standard HTML validation rules */}
      <Input
        name="password"
        ref={register({ required: true })}
        placeholder="Password"
        type="password"
      />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <Button type="submit">Login</Button>
      <span style={{ fontWeight: "bold", marginBottom: 60 }}>
        <Link href="/forgot-password">Forgot Password?</Link>
      </span>

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
        Login with social media
      </span>
      <div style={{ display: "flex" }}>
        <SocialMediaButton style={{ marginRight: 20 }} icon="google">
          Google
        </SocialMediaButton>
        <SocialMediaButton icon="apple">Apple</SocialMediaButton>
      </div>
    </form>
  );
}
