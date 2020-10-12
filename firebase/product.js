import { firebase, auth, db } from "../config/firebase";

function addFavorite(id) {
  const currentUser = auth.currentUser.uid;

  return db
    .collection("Users")
    .doc(currentUser)
    .update({
      favorites: firebase.firestore.FieldValue.arrayUnion(id),
    });
}

function removeFavorite(id) {
  const currentUser = auth.currentUser.uid;

  return db
    .collection("Users")
    .doc(currentUser)
    .update({
      favorites: firebase.firestore.FieldValue.arrayRemove(id),
    });
}

function addToCart(newCart) {
  const currentUser = auth.currentUser.uid;

  return db.collection("Users").doc(currentUser).update({
    cart: newCart,
  });
}

export { addFavorite, removeFavorite, addToCart };
