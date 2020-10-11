import { db } from "@/config/firebase";
import { useState, useEffect } from "react";

const useProduct = (id) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("use product worked");

  useEffect(() => {
    async function fetchFromFirestore() {
      db.collection("Products")
        .doc(id)
        .get()
        .then(function (doc) {
          setData(doc.data());
          setLoading(false);
        })
        .catch((e) => setError(e));
    }

    fetchFromFirestore();
  }, [id]);

  return {
    data,
    loading,
    error,
  };
};

export { useProduct };
