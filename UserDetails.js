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
    strangePrice: String,
    CritDmg: String,
    CritDmgPrice: String,
    CritChance: String,
    CritChancePrice: String,
    Passive: String,
    PassivePrice: String,
    PassiveTime: String,
    PassiveTimePrice: String,
    activity: String,
    Clicks: String,
    Prestige: String,
    PrestigePrice: String,
    Slime: String,
  },
  {
    collection: "UserInfo",
  }
);
mongoose.model("UserInfo", UserDetailSchema);
