const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(cors());

// creating a whiskey API
app.get("/public/home", (req, res) => {
  const whiskey = [
    {
      image: "",
      name: "The Emerald Isle",
      category: "Irish",
      quality: "Premium",
      seller: "The Craft Irish Whiskey Co.",
      price: "$2,000,000.00",
    },

    {
      image: "",
      name: "The Macallan Lalique 50-Year-Old Single Malt Scotch Whisky",
      category: "Scotch",
      quality: "Premium",
      seller: "Quality Whiskey",
      price: "$253,291.00",
    },

    {
      image: "",
      name: "Old Rip Van Winkle 25 Year Old Kentucky Straight Bourbon Whiskey",
      category: "Bourbon",
      quality: "Premium",
      seller: "Quality Whiskey",
      price: "$53,712.00",
    },

    {
      image: "",
      name: "Yamazaki 55",
      category: "Japanese",
      quality: "Premium",
      seller: "Liquor Mountain Ginza 777",
      price: "$800,000.00",
    },

    {
      image: "",
      name: "Bushmills Black Bush",
      category: "Irish",
      quality: "Standart",
      seller: "Irish & Bourbon Whiskey",
      price: "$30.00",
    },
  ];

  res.json(whiskey);
});

// bodyparser
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// mongodb config
const db = require("../src/config/keys").mongoURI;

// connecting db to mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => console.log(error));

// listening
const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`You server is running on ${port}`));
