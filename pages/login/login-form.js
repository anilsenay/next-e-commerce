import React from "react";
import { useForm } from "react-hook-form";

import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";

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
      <span style={{ fontWeight: "bold" }}>
        <Link href="/forgot-password">Forgot Password?</Link>
      </span>
    </form>
  );
}
