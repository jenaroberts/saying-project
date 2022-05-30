import express from "express";
import cors from "cors";
import { createSaying, getAllSayings } from "./services/sayings.service";
const app = express();
app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
  await createSaying(req.body);
  res.status(200);
});

app.get("/", async (req, res) => {
  const sayings = await getAllSayings();
  res.send(sayings);
});

app.listen(5050, () => {
  console.log("listening on port 5050");
});
