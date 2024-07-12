import { AuthContext } from "@/context/authContext";
import { useContext } from "react";

const useAuth = () => {
  const value = useContext(AuthContext);

  if (!value) {
    return new Error("useAuth must be wrapped inside AuthContext");
  }
  return value;
};

export default useAuth;
