import p1_img from "./ladies-item-1.avif"
import p2_img from "./ladies-item-2.jpg"
import p3_img from "./ladies-item-3.avif"
import p4_img from "./ladies-item-4.avif"



let data_product = [
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
      }
]

export default  data_product;