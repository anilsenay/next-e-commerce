import { useEffect, useState } from "react";
import { auth, db } from "../config/firebase";

const useAddresses = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFromFirestore() {
      auth.currentUser &&
        db
          .collection("Users")
          .doc(auth.currentUser.uid)
          .get()
          .then(function (doc) {
            const addresses = doc.data().addresses;
            if (addresses) {
              db.collection("Addresses")
                .get()
                .then(function (querySnapshot) {
                  const addressArray = querySnapshot.docs
                    .filter((doc) => addresses.includes(doc.id))
                    .map(function (doc) {
                      return { id: doc.id, ...doc.data() };
                    });
                  setData(addressArray);
                  setLoading(false);
                });
            }
          });
    }

    fetchFromFirestore();
  }, [auth.currentUser]);

  return {
    data,
    loading,
    error,
  };
};

const useAddress = (id) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFromFirestore() {
      auth.currentUser &&
        db
          .collection("Addresses")
          .doc(id)
          .get()
          .then(function (doc) {
            setData(doc.data());
            setLoading(false);
          })
          .catch((e) => setError(e));
    }

    fetchFromFirestore();
  }, [auth.currentUser]);

  return {
    data,
    loading,
    error,
  };
};

export { useAddresses, useAddress };
