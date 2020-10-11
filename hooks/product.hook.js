import { db } from "@/config/firebase";
import { useState, useEffect } from "react";

const useProduct = (id) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

const useCategoryProducts = (category) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFromFirestore() {
      db.collection("Products")
        .where("category", "==", category)
        .get()
        .then(function (querySnapshot) {
          const products = querySnapshot.docs.map(function (doc) {
            return { id: doc.id, ...doc.data() };
          });
          setData(products);
          setLoading(false);
        })
        .catch((e) => setError(e));
    }

    fetchFromFirestore();
  }, [category]);

  return {
    data,
    loading,
    error,
  };
};

export { useProduct, useCategoryProducts };
