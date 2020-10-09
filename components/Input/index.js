import React, { useState } from "react";

import styles from "./input.module.scss";

export default function Input({ register, required = true, error, ...props }) {
  const [focus, setFocus] = useState(false);
  return (
    <input
      className={styles.container}
      style={{ borderColor: error && "red", backgroundColor: focus && "white" }}
      ref={register({ required })}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      {...props}
    />
  );
}
