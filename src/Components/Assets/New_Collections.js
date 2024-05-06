import p1_img from "./ladies-item-1.avif"
import p2_img from "./ladies-item-2.jpg"
import p3_img from "./ladies-item-3.avif"
import p4_img from "./ladies-item-4.avif"


import p13_img from "./kids_dress_1.avif"
import p14_img from "./kids_dress_2.avif"
import p15_img from "./kids_dress_3.avif"
import p16_img from "./kids_dress_4.avif"


import p25_img from "./mens_dress_1.jpg"
import p26_img from "./mens_dress_2.jpg"
import p27_img from "./mens_dress_3.jpg"
import p28_img from "./mens_dress_4.jpg"


let new_collection = [
    {
        id: 1,
        name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        category: "women",
        image: p1_img, // Assuming "p1_img" is a string representing the image path
        new_price: 50.0, // Changed "new price" to "new_price" for correct syntax
        old_price: 80.5,
    },
    {
        id: 2,
        name: "Floral Print Ruffle Trim V-neck Blouse",
        category: "women",
        image: p2_img,
        new_price: 45.0,
        old_price: 75.0,
    },

    {
        id: 3,
        name: "Lace Trimmed Sleeveless Blouse",
        category: "women",
        image: p3_img,
        new_price: 55.0,
        old_price: 90.0,
    },

    {
        id: 4,
        name: "Button-Front Midi Dress",
        category: "women",
        image: p4_img,
        new_price: 65.0,
        old_price: 100.0,
    },



    {
        id: 13,
        name: "Kids' Striped Cotton T-Shirt",
        category: "kids",
        image: p13_img,
        new_price: 12.99,
        old_price: 19.99
      },
      {
        id: 14,
        name: "Girls' Floral Print Sundress",
        category: "kids",
        image: p14_img,
        new_price: 24.99,
        old_price: 34.99
      },
      {
        id: 15,
        name: "Boys' Denim Shorts",
        category: "kids",
        image: p15_img,
        new_price: 18.50,
        old_price: 26.99
      },
      {
        id: 16,
        name: "Kids' Light-Up Sneakers",
        category: "kids",
        image: p16_img,
        new_price: 29.99,
        old_price: 39.99
      },



      {
        id: 25,
        name: "Men's Classic Oxford Shirt",
        category: "men",
        image: p25_img,
        new_price: 39.99,
        old_price: 49.99
      },
      {
        id: 26,
        name: "Men's Slim Fit Chinos",
        category: "men",
        image: p26_img,
        new_price: 29.99,
        old_price: 39.99
      },
      {
        id: 27,
        name: "Men's Leather Belt",
        category: "men",
        image: p27_img,
        new_price: 24.50,
        old_price: 34.99
      },
      {
        id: 28,
        name: "Men's Casual Sneakers",
        category: "men",
        image: p28_img,
        new_price: 45.99,
        old_price: 59.99
      }
]

export default new_collection;