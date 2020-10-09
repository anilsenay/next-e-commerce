import { useEffect, useState } from "react";

const useLogin = ({ email, password }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    async function fetchUser() {
      auth.signInWithEmailAndPassword(email, password).catch(function (error) {
        errorMessage = error.message;
        if (errorMessage === "EMAIL_NOT_FOUND") setError("Email is not found!");
        if (errorMessage === "INVALID_PASSWORD") setError("Invalid password!");
      });
    }

    fetchUser();
  }, []);

  return { error };
};

export default useLogin;
