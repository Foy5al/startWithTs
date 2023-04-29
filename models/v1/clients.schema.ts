const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
  slug: String,
  clientsTitle: String,
  clientsImg: [
    {
      name: String,
      image: String,
    },
  ],
});

const clientInfo = mongoose.model("clientsCollection", clientSchema);

export default clientInfo;
