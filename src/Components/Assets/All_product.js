import p1_img from "./ladies-item-1.avif"
import p2_img from "./ladies-item-2.jpg"
import p3_img from "./ladies-item-3.avif"
import p4_img from "./ladies-item-4.avif"
import p5_img from "./ladies-item-5.avif"
import p6_img from "./ladies-item-6.avif"
import p7_img from "./ladies-item-7.avif"
import p8_img from "./ladies-item-8.avif"
import p9_img from "./ladies-item-9.avif"
import p10_img from "./ladies-item-10.avif"
import p11_img from "./ladies-item-11.avif"
import p12_img from "./ladies-item-12.avif"



import p13_img from "./kids_dress_1.avif"
import p14_img from "./kids_dress_2.avif"
import p15_img from "./kids_dress_3.avif"
import p16_img from "./kids_dress_4.avif"
import p17_img from "./kids_dress_5.avif"
import p18_img from "./kids_dress_6.avif"
import p19_img from "./kids_dress_7.avif"
import p20_img from "./kids_dress_8.avif"
import p21_img from "./kids_dress_9.avif"
import p22_img from "./kids_dress_10.avif"
import p23_img from "./kids_dress_11.avif"
import p24_img from "./kids_dress_12.avif"



import p25_img from "./mens_dress_1.jpg"
import p26_img from "./mens_dress_2.jpg"
import p27_img from "./mens_dress_3.jpg"
import p28_img from "./mens_dress_4.jpg"
import p29_img from "./mens_dress_5.jpg"
import p30_img from "./mens_dress_6.jpg"
import p31_img from "./mens_dress_7.jpg"
import p32_img from "./mens_dress_8.jpg"
import p33_img from "./mens_dress_9.jpg"
import p34_img from "./mens_dress_10.jpg"
import p35_img from "./mens_dress_11.jpg"
import p36_img from "./mens_dress_12.jpg"

let all_product = [
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
    id: 5,
    name: "Skinny Jeans with Frayed Hem",
    category: "women",
    image: p5_img,
    new_price: 40.0,
    old_price: 65.0,
  },

  {
    id: 6,
    name: "Off-Shoulder Maxi Dress",
    category: "women",
    image: p6_img,
    new_price: 70.0,
    old_price: 110.0,
  },

  {
    id: 7,
    name: "High-Waisted Wide Leg Pants",
    category: "women",
    image: p7_img,
    new_price: 55.0,
    old_price: 85.0,
  },

  {
    id: 8,
    name: "Wrap Front Crop Top",
    category: "women",
    image: p8_img,
    new_price: 30.0,
    old_price: 50.0,
  },

  {
    id: 9,
    name: "Knit Sweater with Cable Pattern",
    category: "women",
    image: p9_img,
    new_price: 40.0,
    old_price: 60.0,
  },

  {
    id: 10,
    name: "Satin Slip Dress",
    category: "women",
    image: p10_img,
    new_price: 50.0,
    old_price: 80.0,
  },

  {
    id: 11,
    name: "Embroidered Denim Jacket",
    category: "women",
    image: p11_img,
    new_price: 60.0,
    old_price: 95.0,
  },
  {
    id: 12,
    name: "Buy WOMEN NIGHTY ARE PURE COTTON WITH PINK",
    category: "women",
    image: p12_img,
    new_price: 60.0,
    old_price: 95.0,
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
    id: 17,
    name: "Girls' Unicorn Print Leggings",
    category: "kids",
    image: p17_img,
    new_price: 14.99,
    old_price: 21.99
  },
  {
    id: 18,
    name: "Boys' Dinosaur Graphic Hoodie",
    category: "kids",
    image: p18_img,
    new_price: 22.99,
    old_price: 32.99
  },
  {
    id: 19,
    name: "Kids' Rainbow Striped Socks",
    category: "kids",
    image: p19_img,
    new_price: 6.99,
    old_price: 10.99
  },
  {
    id: 20,
    name: "Girls' Frilly Tutu Skirt",
    category: "kids",
    image: p20_img,
    new_price: 17.99,
    old_price: 25.99
  },
  {
    id: 21,
    name: "Boys' Camouflage Cargo Pants",
    category: "kids",
    image: p21_img,
    new_price: 21.50,
    old_price: 29.99
  },
  {
    id: 22,
    name: "Kids' Animal Print Onesie",
    category: "kids",
    image: p22_img,
    new_price: 27.99,
    old_price: 37.99
  },
  {
    id: 23,
    name: "Girls' Glittery Ballet Flats",
    category: "kids",
    image: p23_img,
    new_price: 15.99,
    old_price: 22.99
  },
  {
    id: 24,
    name: "Boys' Striped Polo Shirt",
    category: "kids",
    image: p24_img,
    new_price: 16.99,
    old_price: 24.99
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
  },
  {
    id: 29,
    name: "Men's Classic Crewneck Sweater",
    category: "men",
    image: p29_img,
    new_price: 34.99,
    old_price: 44.99
  },
  {
    id: 30,
    name: "Men's Slim Fit Jeans",
    category: "men",
    image: p30_img,
    new_price: 49.99,
    old_price: 59.99
  },
  {
    id: 31,
    name: "Men's Sporty Hoodie",
    category: "men",
    image: p31_img,
    new_price: 29.99,
    old_price: 39.99
  },
  {
    id: 32,
    name: "Men's Basic V-Neck T-Shirt",
    category: "men",
    image: p32_img,
    new_price: 12.99,
    old_price: 19.99
  },
  {
    id: 33,
    name: "Men's Formal Dress Shoes",
    category: "men",
    image: p33_img,
    new_price: 59.99,
    old_price: 69.99
  },
  {
    id: 34,
    name: "Men's Lightweight Jacket",
    category: "men",
    image: p34_img,
    new_price: 39.99,
    old_price: 49.99
  },
  {
    id: 35,
    name: "Men's Plaid Flannel Shirt",
    category: "men",
    image: p35_img,
    new_price: 24.99,
    old_price: 34.99
  },
  {
    id: 36,
    name: "Men's Cargo Pants",
    category: "men",
    image: p36_img,
    new_price: 32.99,
    old_price: 42.50
  }


];

export default  all_product;
