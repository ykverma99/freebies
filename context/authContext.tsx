import { auth, db } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { createContext, ReactNode, useEffect, useState } from "react";

export interface IUser {
  userId?: string;
  fullName?: string;
  email: string;
  profilePic?: string;
}

export interface AuthType {
  user: IUser | null;
  isAuthenticate: boolean;
  login: (
    email: string,
    password: string
  ) => Promise<{ status: boolean; msg?: any }>;
  logout: () => Promise<{ status: boolean }>;
  register: (
    email: string,
    password: string,
    fullName: string
  ) => Promise<{ status: boolean; data?: any; msg?: any }>;
}

export const AuthContext = createContext<AuthType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setuser] = useState<IUser | null>(null);
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  useEffect(() => {
    const isUser = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsAuthenticate(true);
        const userDocRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userDocRef);

        if (docSnap.exists()) {
          const userData = {
            userId: user.uid,
            fullName: docSnap.data().fullName,
            email: user.email as string,
          };
          setuser(userData);
        } else {
          setIsAuthenticate(false);
          setuser(null);
        }
      }
    });
    return isUser;
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      return { status: true };
    } catch (error) {
      return { status: false, msg: error };
    }
  };

  // register user
  const register = async (
    email: string,
    password: string,
    fullName: string
  ) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", res.user.uid), {
        fullName,
        email,
        password,
      });

      return { status: true, data: res.user };
    } catch (error) {
      return { status: false, msg: error };
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      return { status: true };
    } catch (error) {
      return { status: false, msg: error };
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticate, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
