const Image = require("@11ty/eleventy-img");

function imageShortcode(src, classes, alt, sizes, raw) {
  // Defensive check for undefined or null `src`
  if (!src) {
    console.warn("Image source is undefined or null, skipping image generation.");
    return ''; // Return an empty string to avoid rendering issues
  }

  if (alt === undefined) {
    // You bet we throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
  }

  let options = {};

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

  // Generate images, while this is async we don’t wait
  Image(src, options);

  let imageAttributes = {
    class: classes,
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };
  // Get metadata even the images are not fully generated
  let metadata = Image.statsSync(src, options);
  return Image.generateHTML(metadata, imageAttributes);
}

function imageUrlShortcode(src) {
  // Defensive check for undefined or null `src`
  if (!src) {
    console.warn("Image source is undefined or null, skipping image URL generation.");
    return ''; // Return an empty string to avoid issues
  }

  let options = {
    widths: [600],
    formats: ["jpeg"]
  };

  Image(src, options);

  let metadata = Image.statsSync(src, options);
  return src;
}

module.exports = {
  image: imageShortcode,
  imageUrl: imageUrlShortcode
};
