import { readdirSync } from "fs";
import { resolve } from "path";

const files = readdirSync(resolve("public/characters"));

export default (req, res) => {
  const random = Math.ceil(Math.random() * (files.length - 0) + 0);
  res.statusCode = 200;
  res.json({ filename: files[random] });
};
