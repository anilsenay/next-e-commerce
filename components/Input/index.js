import React, { useState } from "react";

import styles from "./input.module.scss";


/**
 * @param {Object} props
 * @param {string} props.name
 * @param {import("react-hook-form").UseFormRegister<import("react-hook-form").FieldValue>} props.register
 * @param {boolean} props.required
 * @returns {JSX.Element}
 */
export default function Input({
  name,
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
      name={name}
      { ...register(name, { required })}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      {...props}
    />
  );
}
