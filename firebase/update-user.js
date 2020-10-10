import { auth, db } from "../config/firebase";

function updateUser({ email, name, surname, phoneNumber }) {
  const currentUser = auth.currentUser.uid;

  return db
    .collection("Users")
    .doc(currentUser)
    .update({
      name,
      surname,
      email,
      phoneNumber: phoneNumber || "",
    });
}

export { updateUser };
