//get all sayings
//add a saying

import { CollectionReference } from "firebase-admin/firestore";
import { connectDb } from "../gateway/connectDb";
interface Saying {
  CreatedAt: Date;
  Saying: string;
}
const getCol = () => {
  const db = connectDb();
  return db.collection("WordOfWisdom") as CollectionReference<Saying>;
};
export const getAllSayings = async () => {
  const col = getCol();
  const snapshot = await col.orderBy("CreatedAt").get();
  return snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const createSaying = async (saying: Saying) => {
  const col = getCol();
  await col.add(saying);
};
