import { db, auth } from "@/config/firebase";
import { useState, useEffect } from "react";

const useCart = (id) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFromFirestore() {
      auth.currentUser &&
        db
          .collection("Users")
          .doc(auth.currentUser?.uid)
          .onSnapshot(function (doc) {
            setData(doc.data().cart);
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

export { useCart };
