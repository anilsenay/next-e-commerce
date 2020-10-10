import { firebase, auth, db } from "../config/firebase";

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

function updatePassword({ currentPassword, newPassword }) {
  const currentUser = auth.currentUser;

  const credential = firebase.auth.EmailAuthProvider.credential(
    firebase.auth().currentUser.email,
    currentPassword
  );

  const update = () => {
    return currentUser
      .updatePassword(newPassword)
      .then(function () {
        // Update successful.
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  const reauth = () => {
    return currentUser.reauthenticateWithCredential(credential);
  };

  return {
    reauth,
    update,
  };
}

export { updateUser, updatePassword };
