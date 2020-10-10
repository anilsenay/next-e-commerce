import React, { useState } from "react";

import styles from "./input.module.scss";

export default function Input({
  register,
  required = true,
  error,
  noMargin,
  ...props
}) {
  const [focus, setFocus] = useState(false);
  return (
    <input
      className={styles.container}
      style={{
        borderColor: error && "red",
        backgroundColor: focus && "white",
        margin: noMargin && 0,
      }}
      ref={register && register({ required })}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      {...props}
    />
  );
}
