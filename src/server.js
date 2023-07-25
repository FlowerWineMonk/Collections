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
    },

    {
      image: "",
      name: "The Macallan Lalique 50-Year-Old Single Malt Scotch Whisky",
      category: "Scotch",
      quality: "Premium",
    },

    {
      image: "",
      name: "Old Rip Van Winkle 25 Year Old Kentucky Straight Bourbon Whiskey",
      category: "Bourbon",
      quality: "Premium",
    },

    {
      image: "",
      name: "Yamazaki 55",
      category: "Japanese",
      quality: "Premium",
    },

    {
      image: "",
      name: "Bushmills Black Bush",
      category: "Irish",
      quality: "Standart",
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
