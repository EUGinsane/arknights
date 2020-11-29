export default (req, res) => {
  const random = Math.ceil(Math.random() * 413);
  res.statusCode = 200;
  res.json({ filename: `${random}.png` });
};
