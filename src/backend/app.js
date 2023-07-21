const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

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
  ];

  res.json(whiskey);
});

app.listen(PORT, () =>
  console.log(`You server is running on http://localhost:${PORT}/public/home`)
);
