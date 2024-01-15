const mongoose = require("mongoose");

const UserDetailSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    rickroll: String,
    whistle: String,
    lebiga: String,
    money: String,
    strange: String,
    activity: String,
  },
  {
    collection: "UserInfo",
  }
);
mongoose.model("UserInfo", UserDetailSchema);
