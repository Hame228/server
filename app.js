const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");


app.use(express.json());
app.use(cors());

const ipAddress = process.env.IP || "0.0.0.0";

const port = 3002;
app.listen(port, () => {
  console.log(`Сервер запущено на порті ${port}`);
});

const mongoUrl = "mongodb+srv://Hame:UmiJuJD2JDpkYiQ7@slimeclicker.eo5qn9j.mongodb.net/?retryWrites=true&w=majority"
//const mongourl = "mongodb+srv://Hame:UmiJuJD2JDpkYiQ7@slimeclicker.eo5qn9j.mongodb.net/?retryWrites=true&w=majority"
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((e) => {
    console.log(e);
  });
  require("./UserDetails");
const User = mongoose.model("UserInfo");

app.get("/", (req, res) => {
    res.send({ status: "Started" });
  });

  app.post("/register", async (req, res) => {
    const { name, email, rickroll, money, whistle, lebiga, strange, activity,strangePrice,
        CritDmg,
        CritDmgPrice,
        CritChance,
        CritChancePrice,
        Passive,
        PassivePrice,
        PassiveTime,
        PassiveTimePrice,
        Clicks,
        Prestige,
        PrestigePrice,
        Slime,
          } = req.body;
    console.log(req.body);
  
    const oldUser = await User.findOne({ email: email });
  
    if (oldUser) {
      return res.send({ data: "User already exists!!" });
    }
    //const encryptedPassword = await bcrypt.hash(password, 10);
  
    try {
      await User.create({
        name: name,
        email: email,
        rickroll,
        whistle,
        lebiga,
        money:money,
        strange:strange,
        strangePrice:strangePrice,
        CritDmg:CritDmg,
        CritDmgPrice:CritDmgPrice,
        CritChance:CritChance,
        CritChancePrice:CritChancePrice,
        Passive:Passive,
        PassivePrice:PassivePrice,
        PassiveTime:PassiveTime,
        PassiveTimePrice:PassiveTimePrice,
        activity: activity,
        Clicks:Clicks,
        Prestige:Prestige,
        PrestigePrice:PrestigePrice,
        Slime: Slime,
      });
      res.send({ status: "ok", data: "User Created" });
    } catch (error) {
      res.send({ status: "error", data: error });
    }
  });



  /*app.get("/register", async(emaill) => {
    //const {email} = req.body;
    //console.log(req.body);
  
    const oldUser = await User.findOne({ email: emaill });
  
    if (oldUser) {
      return res.send({ ab:req.body });
    }
  });*/

  app.post("/login-user", async (req, res) => {
    const { email} = req.body;
    const oldUser = await User.findOne({ email: email });
    console.log(oldUser.rickroll)
    //const abo = await User.get
  
    if (!oldUser) {
      return res.send({ data: "User doesn't exists!!" });
    }
  
    if (res.status(201)) {
      return res.send({data: oldUser.rickroll });
    } else {
      return res.send({ error: "error" });
    }
    /*if (await bcrypt.compare(password, oldUser.password)) {
      const token = jwt.sign({ email: oldUser.email }, JWT_SECRET);
  
      if (res.status(201)) {
        return res.send({ status: "ok", data: token });
      } else {
        return res.send({ error: "error" });
      }
    }*/
  });

  app.post("/login-user1", async (req, res) => {
    const { email} = req.body;
    const oldUser = await User.findOne({ email: email });
    //console.log(oldUser.rickroll)
    //const abo = await User.get
  
    if (!oldUser) {
      return res.send({ data: "User doesn't exists!!" });
    }
  
    if (res.status(201)) {
      return res.send({data: oldUser });
    } else {
      return res.send({ error: "error" });
    }
    /*if (await bcrypt.compare(password, oldUser.password)) {
      const token = jwt.sign({ email: oldUser.email }, JWT_SECRET);
  
      if (res.status(201)) {
        return res.send({ status: "ok", data: token });
      } else {
        return res.send({ error: "error" });
      }
    }*/
  });

  app.post("/videoss", async (req, res) => {
    const {email, rickroll, whistle, lebiga} = req.body;
    const oldUser = await User.findOne({ email: email });
    //console.log(oldUser)
    //const abo = await User.get
  
    if (!oldUser) {
      return res.send({ data: "User doesn't exists!!" });
    }
    try {
      await User.updateOne({
        email: email,
        //email:email,
        //rickroll:rickroll
      }, {
        rickroll:rickroll,
        whistle:whistle,
        lebiga:lebiga
      });
      res.send({ status: "ok", data: "User Updated" });
    } catch (error) {
      res.send({ status: "error", data: error });
    }
    
  });


  app.post("/updateMoney", async (req, res) => {
    const {email, money, Clicks} = req.body;
    const oldUser = await User.findOne({ email: email });
    //console.log(oldUser)
    //const abo = await User.get
  
    if (!oldUser) {
      return res.send({ data: "User doesn't exists!!" });
    }
    try {
      await User.updateOne({
        email: email,
        //email:email,
        //rickroll:rickroll
      }, {
        money:money,
        Clicks:Clicks,
      });
      res.send({ status: "ok", data: "User Updated" });
    } catch (error) {
      res.send({ status: "error", data: error });
    }
    
  });



app.post("/updateSlime", async (req, res) => {
    const {email, money, Slime} = req.body;
    const oldUser = await User.findOne({ email: email });
    //console.log(oldUser)
    //const abo = await User.get
  
    if (!oldUser) {
      return res.send({ data: "User doesn't exists!!" });
    }
    try {
      await User.updateOne({
        email: email,
        //email:email,
        //rickroll:rickroll
      }, {
        money:money,
        Slime:Slime,
      });
      res.send({ status: "ok", data: "User Updated" });
    } catch (error) {
      res.send({ status: "error", data: error });
    }
    
  });



app.post("/updateall", async (req, res) => {
    const {email, money,strange,strangePrice,
        CritDmg,
        CritDmgPrice,
        CritChance,
        CritChancePrice,
        Passive,
        PassivePrice,
        PassiveTime,
        PassiveTimePrice,
        Prestige,
        PrestigePrice,} = req.body;
    const oldUser = await User.findOne({ email: email });
    //console.log(oldUser)
    //const abo = await User.get
  
    if (!oldUser) {
      return res.send({ data: "User doesn't exists!!" });
    }
    try {
      await User.updateOne({
        email: email,
        //email:email,
        //rickroll:rickroll
      }, {
        money:money,
        strange:strange,
        strangePrice:strangePrice,
        CritDmg:CritDmg,
        CritDmgPrice:CritDmgPrice,
        CritChance:CritChance,
        CritChancePrice:CritChancePrice,
        Passive:Passive,
        PassivePrice:PassivePrice,
        PassiveTime:PassiveTime,
        PassiveTimePrice:PassiveTimePrice,
        Prestige:Prestige,
        PrestigePrice:PrestigePrice,
      });
      res.send({ status: "ok", data: "User Updated" });
    } catch (error) {
      res.send({ status: "error", data: error });
    }
    
  });




 app.post("/updateStrange", async (req, res) => {
    const {email,money, strange, strangePrice} = req.body;
    const oldUser = await User.findOne({ email: email });
    //console.log(oldUser)
    //const abo = await User.get
  
    if (!oldUser) {
      return res.send({ data: "User doesn't exists!!" });
    }
    try {
      await User.updateOne({
        email: email,
        //email:email,
        //rickroll:rickroll
      }, {
        money:money,
        strange:strange,
        strangePrice:strangePrice
      });
      res.send({ status: "ok", data: "User Updated" });
    } catch (error) {
      res.send({ status: "error", data: error });
    }
    
  });


 app.post("/updateCritDmg", async (req, res) => {
    const {email,money, CritDmg, CritDmgPrice} = req.body;
    const oldUser = await User.findOne({ email: email });
    //console.log(oldUser)
    //const abo = await User.get
  
    if (!oldUser) {
      return res.send({ data: "User doesn't exists!!" });
    }
    try {
      await User.updateOne({
        email: email,
        //email:email,
        //rickroll:rickroll
      }, {
        money:money,
        CritDmg:CritDmg,
        CritDmgPrice:CritDmgPrice
      });
      res.send({ status: "ok", data: "User Updated" });
    } catch (error) {
      res.send({ status: "error", data: error });
    }
    
  });




 app.post("/updateCritChance", async (req, res) => {
    const {email,money, CritChance,CritChancePrice} = req.body;
    const oldUser = await User.findOne({ email: email });
    //console.log(oldUser)
    //const abo = await User.get
  
    if (!oldUser) {
      return res.send({ data: "User doesn't exists!!" });
    }
    try {
      await User.updateOne({
        email: email,
        //email:email,
        //rickroll:rickroll
      }, {
        money:money,
        CritChance:CritChance,
        CritChancePrice:CritChancePrice
      });
      res.send({ status: "ok", data: "User Updated" });
    } catch (error) {
      res.send({ status: "error", data: error });
    }
    
  });




 app.post("/updatePassive", async (req, res) => {
    const {email,money, Passive,PassivePrice} = req.body;
    const oldUser = await User.findOne({ email: email });
    //console.log(oldUser)
    //const abo = await User.get
  
    if (!oldUser) {
      return res.send({ data: "User doesn't exists!!" });
    }
    try {
      await User.updateOne({
        email: email,
        //email:email,
        //rickroll:rickroll
      }, {
        money:money,
       Passive:Passive,
       PassivePrice:PassivePrice
      });
      res.send({ status: "ok", data: "User Updated" });
    } catch (error) {
      res.send({ status: "error", data: error });
    }
    
  });




app.post("/updatePassiveTime", async (req, res) => {
    const {email,money, PassiveTime,PassiveTimePrice} = req.body;
    const oldUser = await User.findOne({ email: email });
    //console.log(oldUser)
    //const abo = await User.get
  
    if (!oldUser) {
      return res.send({ data: "User doesn't exists!!" });
    }
    try {
      await User.updateOne({
        email: email,
        //email:email,
        //rickroll:rickroll
      }, {
        money:money,
       PassiveTime:PassiveTime,
       PassiveTimePrice:PassiveTimePrice
      });
      res.send({ status: "ok", data: "User Updated" });
    } catch (error) {
      res.send({ status: "error", data: error });
    }
    
  });



app.post("/updateActivity", async (req, res) => {
    const {email,activity} = req.body;
    const oldUser = await User.findOne({ email: email });
    //console.log(oldUser)
    //const abo = await User.get
  
    if (!oldUser) {
      return res.send({ data: "User doesn't exists!!" });
    }
    try {
      await User.updateOne({
        email: email,
        //email:email,
        //rickroll:rickroll
      }, {
        activity:activity,
      });
      res.send({ status: "ok", data: "User Updated" });
    } catch (error) {
      res.send({ status: "error", data: error });
    }
    
  });


  app.post("/updateName", async (req, res) => {
    const {email, name} = req.body;
    const oldUser = await User.findOne({ email: email });
    //console.log(oldUser)
    //const abo = await User.get
  
    if (!oldUser) {
      return res.send({ data: "User doesn't exists!!" });
    }
    try {
      await User.updateOne({
        email: email,
        //email:email,
        //rickroll:rickroll
      }, {
        name:name,
      });
      res.send({ status: "ok", data: "User Updated" });
    } catch (error) {
      res.send({ status: "error", data: error });
    }
    
  });




  app.post("/sendVideo", async (req, res) => {
    const {email, rickroll} = req.body;
    const oldUser = await User.findOne({ email: email });
    const abio = await User.find({})
    //console.log(oldUser)
    //const abo = await User.get
  
    if (!oldUser) {
      return res.send({ data: "User doesn't exists!!" });
    }
    try {
      await User.updateOne({
        email: email,
        //email:email,
        //rickroll:rickroll
      }, {
        rickroll:rickroll,
      });
      res.send({ status: "ok", data: "User Updated", banna:abio });
    } catch (error) {
      res.send({ status: "error", data: error });
    }
    
  });

app.post("/sendWhistle", async (req, res) => {
    const {email, whistle} = req.body;
    const oldUser = await User.findOne({ email: email });
    const abio = await User.find({})
    //console.log(oldUser)
    //const abo = await User.get
  
    if (!oldUser) {
      return res.send({ data: "User doesn't exists!!" });
    }
    try {
      await User.updateOne({
        email: email,
        //email:email,
        //rickroll:rickroll
      }, {
        whistle:whistle,
      });
      res.send({ status: "ok", data: "User Updated", banna:abio });
    } catch (error) {
      res.send({ status: "error", data: error });
    }
    
  });

app.post("/sendLebiga", async (req, res) => {
    const {email, lebiga} = req.body;
    const oldUser = await User.findOne({ email: email });
    const abio = await User.find({})
    //console.log(oldUser)
    //const abo = await User.get
  
    if (!oldUser) {
      return res.send({ data: "User doesn't exists!!" });
    }
    try {
      await User.updateOne({
        email: email,
        //email:email,
        //rickroll:rickroll
      }, {
        lebiga:lebiga,
      });
      res.send({ status: "ok", data: "User Updated", banna:abio });
    } catch (error) {
      res.send({ status: "error", data: error });
    }
    
  });


app.post("/sendData", async (req, res) => {
    const abio = await User.find({})
    res.send({ status: "ok", data: "User Updated", banna:abio }); 
  });

app.listen(8080, () => {
    console.log("Node js server started.");
  });
