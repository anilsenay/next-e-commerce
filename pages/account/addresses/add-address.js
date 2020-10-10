import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styles from "./add.module.scss";

import Input from "@/components/Input";
import Button from "@/components/Button";

import { addAddress } from "@/firebase/addresses";

const schema = yup.object().shape({
  title: yup
    .string()
    .required("* Title is required.")
    .min(2, "* Title is too short"),
  city: yup
    .string()
    .required("* City is required.")
    .min(2, "* City is too short"),
  region: yup.string().required("* Region is required."),
  zipcode: yup.string().required("* Zip Code is required."),
  full_address: yup.string().required("* Address Line is required."),
});

export default function AddAddress({ closeEvent }) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => addAddress(data);

  const closeModal = (target) => {
    target?.id === "container" && closeEvent();
  };

  return (
    <div
      className={styles.container}
      id="container"
      onClick={(e) => closeModal(e.target)}
    >
      <div className={styles.content}>
        <div className={styles.header}>
          <h4>Add New Address</h4>
          <div onClick={closeEvent}>×</div>
        </div>
        <hr />
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column", paddingTop: 30 }}
        >
          <div className={styles.inputContainer}>
            <span>Address Title</span>
            <Input
              name="title"
              noMargin
              register={register}
              placeholder="Home, Office, etc."
              error={errors.title}
            />
          </div>
          {errors.title && (
            <span style={{ color: "red", marginTop: 4, fontSize: 14 }}>
              {errors.title.message}
            </span>
          )}

          <div className={styles.inputContainer}>
            <span>City</span>
            <Input
              name="city"
              noMargin
              register={register}
              placeholder="New York, London, etc."
              error={errors.city}
            />
          </div>
          {errors.city && (
            <span style={{ color: "red", marginTop: 4, fontSize: 14 }}>
              {errors.city.message}
            </span>
          )}

          <div className={styles.inputContainer}>
            <span>Region</span>
            <Input
              name="region"
              noMargin
              register={register}
              placeholder="France, Italy, etc."
              error={errors.region}
            />
          </div>
          {errors.region && (
            <span style={{ color: "red", marginTop: 4, fontSize: 14 }}>
              {errors.region.message}
            </span>
          )}

          <div className={styles.inputContainer}>
            <span>Zip Code</span>
            <Input
              name="zipcode"
              noMargin
              register={register}
              placeholder=""
              error={errors.zipcode}
            />
          </div>
          {errors.zipcode && (
            <span style={{ color: "red", marginTop: 4, fontSize: 14 }}>
              {errors.zipcode.message}
            </span>
          )}

          <div className={styles.inputContainer}>
            <span>Address Line</span>
            <Input
              name="full_address"
              noMargin
              register={register}
              placeholder="123 Main Street, New York, NY 10030, etc."
              error={errors.full_address}
            />
          </div>
          {errors.full_address && (
            <span style={{ color: "red", marginTop: 4, fontSize: 14 }}>
              {errors.full_address.message}
            </span>
          )}
          <Button type="submit" style={{ marginBottom: 0 }}>
            Add Address
          </Button>
        </form>
      </div>
    </div>
  );
}
