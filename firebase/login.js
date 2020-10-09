import { auth } from "../config/firebase";

export default function emailLogin({ email, password }) {
  return auth.signInWithEmailAndPassword(email, password);
}
