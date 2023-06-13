const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["personal-porfolio-dan-kelly.s3.ap-southeast-2.amazonaws.com"],
  },
};
