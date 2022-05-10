//todo: Add support to uploading and compressing video.
//* Added "ffmpeg" for video manipulation.

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const ImageController = require("./controller/image.controller");

const app = express();
const storage = multer.memoryStorage();
const upload = multer({ storage });
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use(express.static("./public"));

app.post("/publish", upload.single("image"), async (req, res) => {
  const { file } = req;
  const imageCtrl = ImageController({ file, quality:50 });
  const link = await imageCtrl.save();

  return res.json({ link });
});

app.listen(PORT, () => {
  console.log(`App runing on: https://localhost:${PORT}`);
});
