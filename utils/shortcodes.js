const Image = require("@11ty/eleventy-img");

function imageShortcode(src, classes, alt, sizes, raw) {
  if(alt === undefined) {
    // You bet we throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
  }

  let options = {}

  if (raw === true) {
    options = {
      widths: ["auto"],
      formats: ["auto"],
      urlPath: "/assets/",
      outputDir: "./dist/assets/",
      sharpOptions: {
        animated: true
      }
    };  
  } else {
    options = {
      widths: [320, 640, 1280],
      formats: ["jpg"],
      urlPath: "/assets/",
      outputDir: "./dist/assets/"
    };  
  }

  // generate images, while this is async we don’t wait
  Image(src, options);

  let imageAttributes = {
    class: classes,
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };
  // get metadata even the images are not fully generated
  metadata = Image.statsSync(src, options);
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = {
    image: imageShortcode
}
