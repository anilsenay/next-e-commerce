import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "@/firebase/context";

import styles from "./account.module.scss";
import AccountSidebar from "@/components/AccountSidebar";
import Layout from "@/components/Layout";
import Input from "@/components/Input";
import Button from "@/components/Button";

import { updateUser } from "@/firebase/update-user";

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
  phone: yup
    .string()
    .notRequired()
    .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g, {
      message: "Invalid Phone Number",
      excludeEmptyString: true,
    }),
});

export default function AccountPage() {
  const { user } = useAuth();

  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ email, phone, name, surname }) => {
    updateUser({ email, phone, name, surname }).finally(() =>
      window.location.reload(false)
    );
  };

  return (
    <Layout noCategories>
      <AccountSidebar />
      <main className={styles.container}>
        <h1 className={styles.title}>My Account</h1>
        <div className={styles.content}>
          <div className={styles.accountContainer}>
            <h4>Account Details</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.inputContainer}>
                <span>Name</span>
                <Input
                  name="name"
                  defaultValue={user?.name}
                  noMargin
                  register={register}
                  placeholder="Name"
                  error={errors.name}
                />
              </div>
              {errors.name && (
                <span style={{ color: "red", marginTop: 4, fontSize: 14 }}>
                  {errors.name.message}
                </span>
              )}
              <div className={styles.inputContainer}>
                <span>Surname</span>
                <Input
                  name="surname"
                  defaultValue={user?.surname}
                  noMargin
                  register={register}
                  placeholder="Surname"
                  error={errors.surname}
                />
              </div>
              {errors.surname && (
                <span style={{ color: "red", marginTop: 4, fontSize: 14 }}>
                  {errors.surname.message}
                </span>
              )}
              <div className={styles.inputContainer}>
                <span>Email</span>
                <Input
                  name="email"
                  defaultValue={user?.email}
                  noMargin
                  register={register}
                  placeholder="E-mail"
                  error={errors.email}
                />
              </div>
              {errors.email && (
                <span style={{ color: "red", marginTop: 4, fontSize: 14 }}>
                  {errors.email.message}
                </span>
              )}
              <div className={styles.inputContainer}>
                <span>Phone Number</span>
                <Input
                  name="phone"
                  defaultValue={user?.phoneNumber}
                  noMargin
                  register={register}
                  error={errors.phone}
                />
              </div>
              {errors.phone && (
                <span style={{ color: "red", marginTop: 4, fontSize: 14 }}>
                  {errors.phone.message}
                </span>
              )}
              <Button type="submit" name="update_button" value="Update">
                Update
              </Button>
            </form>
          </div>
          <hr />
          <div className={styles.passwordContainer}>
            <h4>Change Password</h4>
            <div className={styles.inputContainer}>
              <span>Current Password</span>
              <Input placeholder="Current Password" noMargin />
            </div>
            <div className={styles.inputContainer}>
              <span>New Password</span>
              <Input placeholder="New Password" noMargin />
            </div>
            <div className={styles.inputContainer}>
              <span>Confirm New Password</span>
              <Input placeholder="Confirm New Password" noMargin />
            </div>
            <Button>Confirm</Button>
          </div>
        </div>
      </main>
    </Layout>
  );
}
