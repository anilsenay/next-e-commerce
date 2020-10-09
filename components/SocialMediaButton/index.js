import React from "react";

import styles from "./social-button.module.scss";
import GoogleIcon from "@/icons/google";
import AppleIcon from "@/icons/apple";

export default function SocialMediaButton({ icon, children, ...props }) {
  return (
    <button className={styles.container} {...props}>
      {icon === "google" && <GoogleIcon />}
      {icon === "apple" && <AppleIcon />}
      {children}
    </button>
  );
}
