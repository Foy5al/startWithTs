const mongoose = require("mongoose");

const footerSchema = mongoose.Schema({
  slug: String,
  logo: String,
  logoSlogan: String,
  socialMedia: [
    {
      link: String,
      name: String,
    },
  ],
});

const footerInfo = mongoose.model("footerCollection", footerSchema);

export default footerInfo;
