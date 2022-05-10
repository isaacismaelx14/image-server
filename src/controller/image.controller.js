const sharp = require("sharp");
const fs = require("fs");

/**
 *
 * @param {config} settings
 * quality default = 50
 * @returns
 */
function ImageController({ quality, file, saveFolder }) {
  if (!quality) quality = 50;
  if (!saveFolder) saveFolder = "uploads";

  const { buffer, originalname } = file;
  const timestamp = Date.now().toString();
  const name = originalname.replace(" ", "_").toLowerCase();
  const ref = `${timestamp}-${name}.webp`;
  const route = `./public/${saveFolder}/`;

  fs.access(route, (error) => {
    if (error) {
      fs.mkdirSync(route);
    }
  });

  const save = async () => {
    await sharp(buffer)
      .webp({ quality })
      .toFile(route + ref);
    return `uploads/${ref}`;
  };

  return {
    save,
  };
}

module.exports = ImageController;