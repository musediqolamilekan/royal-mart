import firstTopPick from "../assets/shops/topPick-1.jpg";
import secondTopPick from "../assets/shops/topPick-2.jpg";
import thirdTopPick from "../assets/shops/topPick-3.jpg";
import fourthTopPick from "../assets/shops/topPick-4.jpg";

import firstSneaker from "../assets/shops/men/sneakers/1.jpg";
import secondSneaker from "../assets/shops/men/sneakers/2.jpg";
import thirdSneaker from "../assets/shops/men/sneakers/3.jpg";
import fourthSneaker from "../assets/shops/men/sneakers/4.jpg";
import fifthSneaker from "../assets/shops/men/sneakers/5.jpg";
import sixthSneaker from "../assets/shops/men/sneakers/6.jpg";

// Helper function to generate slugs
const generateSlug = (category, name) =>
  `${category}/${name.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and').replace(/[^a-z0-9-]/g, '')}`;

const products = [
  {
    src: firstTopPick,
    name: "Men's Fashion 2-in-1 Short Sleeve&Shorts Set - Grey",
    price: 176.90,
    discount: 30,
    category: 'belowSales',
    type: 'clothing',
    slash: 46.90,
    placeOfOrigin: 'China',
    ageGroup: 'Adults',
    supplyType: 'In-Stock Items',
    material: 'Cotton',
    gender: 'Women',
    leadTime: 'Not Support',
    modelNumber: 'S9018',
    ethnicRegion: 'Africa',
    description: 'Dubai Abaya Muslim Dress',
    rating: 4.5,
    link: `/product/${generateSlug('belowSales', "Men's Fashion 2-in-1 Short Sleeve&Shorts Set - Grey")}`,
  },
  {
    src: secondTopPick,
    name: "Sequels Collection Sequels All Black Sweatshirt With White Stripes",
    price: 10.87,
    discount: 10,
    category: 'belowSales',
    type: 'clothing',
    slash: 9.87,
    placeOfOrigin: 'China',
    ageGroup: 'Adults',
    supplyType: 'In-Stock Items',
    material: 'Cotton',
    gender: 'Unisex',
    type: 'Sweatshirt',
    leadTime: 'Not Support',
    modelNumber: 'S9020',
    ethnicRegion: 'Africa',
    description: 'Stylish All Black Sweatshirt with White Stripes',
    rating: 4.0,
    link: `/product/${generateSlug('belowSales', "Sequels Collection Sequels All Black Sweatshirt With White Stripes")}`,
  },
  {
    src: thirdTopPick,
    name: "3 In 1 Men's Sport Gym Nicker.",
    price: 247.89,
    discount: 15,
    category: 'belowSales',
    type: 'clothing',
    slash: 97.89,
    placeOfOrigin: 'China',
    ageGroup: 'Adults',
    supplyType: 'In-Stock Items',
    material: 'Polyester',
    gender: 'Men',
    type: 'Gym Nicker',
    leadTime: 'Not Support',
    modelNumber: 'S9030',
    ethnicRegion: 'Africa',
    description: 'Comfortable and durable sport gym nicker',
    rating: 3.5,
    link: `/product/${generateSlug('belowSales', "3 In 1 Men's Sport Gym Nicker.")}`,
  },
  {
    src: fourthTopPick,
    name: "Naviforce Brown Luxury Men's Leather Strap Wrist Watch",
    price: 670.80,
    discount: 70,
    category: 'belowSales',
    type: 'clothing',
    slash: 70.80,
    placeOfOrigin: 'China',
    ageGroup: 'Adults',
    supplyType: 'In-Stock Items',
    material: 'Leather',
    gender: 'Men',
    type: 'Wrist Watch',
    leadTime: 'Not Support',
    modelNumber: 'S9040',
    ethnicRegion: 'Africa',
    description: 'Luxury leather strap wrist watch',
    rating: 4.8,
    link: `/product/${generateSlug('belowSales', "Naviforce Brown Luxury Men's Leather Strap Wrist Watch")}`,
  },
  {
    src: firstSneaker,
    name: "Classic White Sneakers",
    price: 80.00,
    discount: 10,
    category: 'menShop',
    slash: 90.00,
    placeOfOrigin: 'China',
    ageGroup: 'Adults',
    supplyType: 'In-Stock Items',
    material: 'Leather',
    gender: 'Unisex',
    type: 'sneakers',
    leadTime: 'Not Support',
    modelNumber: 'S9050',
    ethnicRegion: 'Africa',
    description: 'Classic white sneakers for everyday wear',
    rating: 4.2,
    link: `/product/${generateSlug('menShop', "Classic White Sneakers")}`,
  },
  {
    src: secondSneaker,
    name: "Black Running Shoes",
    price: 60.00,
    category: 'menShop',
    discount: 15,
    slash: 70.00,
    placeOfOrigin: 'China',
    type: 'clothing',
    ageGroup: 'Adults',
    supplyType: 'In-Stock Items',
    material: 'Mesh',
    gender: 'Unisex',
    type: 'sneakers',
    leadTime: 'Not Support',
    modelNumber: 'S9060',
    ethnicRegion: 'Africa',
    description: 'Comfortable black running shoes for all-day wear',
    rating: 4.0,
    link: `/product/${generateSlug('menShop', "Black Running Shoes")}`,
  },
  {
    src: thirdSneaker,
    name: "Red Casual Sneakers",
    price: 75.00,
    category: 'menShop',
    discount: 20,
    slash: 95.00,
    placeOfOrigin: 'China',
    ageGroup: 'Adults',
    supplyType: 'In-Stock Items',
    material: 'Canvas',
    gender: 'Unisex',
    type: 'sneakers',
    leadTime: 'Not Support',
    modelNumber: 'S9070',
    ethnicRegion: 'Africa',
    description: 'Stylish red casual sneakers',
    rating: 3.8,
    link: `/product/${generateSlug('menShop', "Red Casual Sneakers")}`,
  },
  {
    src: fourthSneaker,
    name: "Blue Sports Shoes",
    price: 85.00,
    category: 'menShop',
    discount: 25,
    slash: 100.00,
    placeOfOrigin: 'China',
    ageGroup: 'Adults',
    supplyType: 'In-Stock Items',
    material: 'Mesh',
    gender: 'Unisex',
    type: 'sneakers',
    leadTime: 'Not Support',
    modelNumber: 'S9080',
    ethnicRegion: 'Africa',
    description: 'Durable blue sports shoes',
    rating: 4.5,
    link: `/product/${generateSlug('menShop', "Blue Sports Shoes")}`,
  },
  {
    src: fifthSneaker,
    name: "Green Hiking Boots",
    price: 90.00,
    category: 'menShop',
    discount: 30,
    slash: 110.00,
    placeOfOrigin: 'China',
    ageGroup: 'Adults',
    supplyType: 'In-Stock Items',
    material: 'Leather',
    gender: 'Unisex',
    type: 'sneakers',
    leadTime: 'Not Support',
    modelNumber: 'S9090',
    ethnicRegion: 'Africa',
    description: 'Rugged green hiking boots for outdoor adventures',
    rating: 4.6,
    link: `/product/${generateSlug('menShop', "Green Hiking Boots")}`,
  },
  {
    src: sixthSneaker,
    name: "Grey Training Shoes",
    price: 65.00,
    category: 'menShop',
    discount: 10,
    slash: 75.00,
    placeOfOrigin: 'China',
    ageGroup: 'Adults',
    supplyType: 'In-Stock Items',
    material: 'Synthetic',
    gender: 'Unisex',
    type: 'sneaker',
    leadTime: 'Not Support',
    modelNumber: 'S9100',
    ethnicRegion: 'Africa',
    description: 'Comfortable grey training shoes',
    rating: 4.0,
    link: `/product/${generateSlug('menShop', "Grey Training Shoes")}`,
  },
];

const feedbackData = {
  overallRating: 3.5,
  totalRatings: 808,
  ratingBreakdown: [325, 125, 125, 97, 136],
  reviews: [
    {
      rating: 5,
      text: 'I love it. It is a very good product',
      date: '28-05-2024',
      user: 'Akinyemi'
    },
    {
      rating: 4,
      text: 'Good. It is a good material',
      date: '27-05-2024',
      user: 'Bukola'
    },
    {
      rating: 2,
      text: 'Not okay. Too tight not as advertised. Despite of chosen Large size.',
      date: '27-05-2024',
      user: 'Shamsideen'
    }
  ]
};

export { products, feedbackData };
