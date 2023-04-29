const mongoose = require("mongoose");

const productSchama = mongoose.Schema({
  slug: String,
  productSectionTitle: String,
  productSectionDes: String,
  products: {
    title: String,
    link: String,
    image: String,
  },
});

const productsInfo = mongoose.model("productsCollection", productSchama);

export default productsInfo;
