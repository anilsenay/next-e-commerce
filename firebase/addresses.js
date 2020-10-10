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

export { addAddress };
