import { auth, db, firebase } from "../config/firebase";

const addAddress = ({ title, city, region, zipcode, full_address }) => {
  db.collection("Addresses")
    .add({
      title,
      city,
      region,
      zipcode,
      full_address,
    })
    .then((doc) => {
      db.collection("Users")
        .doc(auth.currentUser.uid)
        .update({
          addresses: firebase.firestore.FieldValue.arrayUnion(doc.id),
        })
        .finally(() => window.location.reload(false)); // reload page
    });
};

const updateAddress = ({ id, title, city, region, zipcode, full_address }) => {
  return db.collection("Addresses").doc(id).update({
    title,
    city,
    region,
    zipcode,
    full_address,
  });
};

const deleteAddress = ({ id }) => {
  return db
    .collection("Addresses")
    .doc(id)
    .delete()
    .then(() => {
      db.collection("Users")
        .doc(auth.currentUser.uid)
        .update({
          addresses: firebase.firestore.FieldValue.arrayRemove(id),
        })
        .finally(() => window.location.reload(false)); // reload page
    });
};

export { addAddress, updateAddress, deleteAddress };
