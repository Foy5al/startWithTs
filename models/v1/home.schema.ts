const mongoose = require("mongoose");

const homeSchema = mongoose.Schema({
  slug: String,
  logo: String,
  heroTitle: String,
  heroSlogan: String,
  heroImg: [
    {
      url: String,
    },
  ],
  solutionTitle: String,
  solutionDetails: String,
  solutionLink: String,
  solutionImg: String,
  solutionSlogan: String,
  learnTitle: String,
  learnDetails: String,
  learnReview: {
    name: String,
    designation: String,
    companyName: String,
    image: String,
    review: String,
    featured: String,
  },
});

const homeInfo = mongoose.model("homeCollection", homeSchema);

export default homeInfo;
