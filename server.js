const express = require("express");
var cors = require("cors");
const multer = require("multer");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");
const { promisify } = require("util");

const connectDB = require("./config/db");
const unlinkAsync = promisify(fs.unlink);

const Restaurant = require("./models/Restaurant");
const app = express();

app.use(cors());
app.use(express.static(__dirname + "/dist/my-app"));

//load config
dotenv.config({ path: "./config/config.env" });
// multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const path = "./public/uploads";
    fs.mkdirSync(path, { recursive: true });
    cb(null,path);
  },
  filename: function (req, file, cb) {
    const uniquePrefix = Date.now();
    cb(null, uniquePrefix + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

const port = process.env.PORT || process.env.Port;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/restaurants", async (req, res) => {
  try {
    const resturants = await Restaurant.find({}).lean();
    res.json({
      status: 200,
      message: "data retrieved successfuly",
      data: resturants,
    });
  } catch (error) {
    res.json({
      status: 400,
      message: "failed to retrieve",
    });
  }
});
app.post("/addRestaurant", upload.single("image"), async (req, res) => {
  if (req.file) {
    req.body.image = req.file.filename;
  }
  try {
    req.body.coordinate = JSON.parse(req.body.coordinate);
    const resturant = await Restaurant.create(req.body);
    res.json({
      status: 200,
      message: "resturant added successfuly",
      data: resturant,
    });
  } catch (error) {
    res.json({
      status: 400,
      message: "failed to add resturant",
    });
  }
});
app.delete("/deleteRestaurant/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedResturant = await Restaurant.findByIdAndDelete(id);
    await unlinkAsync("./public/uploads/" + deletedResturant.image);
    res.json({
      status: 200,
      message: "data delete successfuly",
      data: deletedResturant,
    });
  } catch (error) {
    res.json({
      status: 400,
      message: "failed to delete resturant",
    });
  }
});
// app.get("*", function (req, res) {
//     const fullPath = path.join(__dirname + "/dist/my-app/index.html");
//     console.log(" Fetching from.." + fullPath);
//     res.sendFile(fullPath);
//   });

connectDB();

app.listen(port, console.log(`server running on port ${port}  `));
