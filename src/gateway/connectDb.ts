import {
  cert,
  getApps,
  ServiceAccount,
  initializeApp,
} from "firebase-admin/app";
import { creds } from "../credentials";
import { getFirestore } from "firebase-admin/firestore";

export const connectDb = () => {
  if (getApps().length === 0) {
    initializeApp({
      credential: cert(creds as ServiceAccount),
    });
  }
  return getFirestore();
};
