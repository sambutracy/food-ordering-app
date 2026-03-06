export type MockRestaurant = {
  restaurantName: string;
  city: string;
  country: string;
  deliveryPrice: number;
  estimatedDeliveryTime: number;
  cuisines: string[];
  imageUrl: string;
  menuItems: { name: string; price: number }[];
};

// Kaggle-style synthetic sample records (structure inspired by food-delivery datasets)
export const mockRestaurants: MockRestaurant[] = [
  {
    restaurantName: "Nairobi Grill House",
    city: "Nairobi",
    country: "Kenya",
    deliveryPrice: 250,
    estimatedDeliveryTime: 35,
    cuisines: ["Grill", "African"],
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    menuItems: [
      { name: "Nyama Choma Platter", price: 1600 },
      { name: "Kachumbari Salad", price: 350 },
      { name: "Ugali", price: 220 },
    ],
  },
  {
    restaurantName: "Savannah Bites",
    city: "Nairobi",
    country: "Kenya",
    deliveryPrice: 180,
    estimatedDeliveryTime: 28,
    cuisines: ["Fast Food", "Burgers"],
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    menuItems: [
      { name: "Double Cheese Burger", price: 990 },
      { name: "Loaded Fries", price: 520 },
      { name: "Chicken Wings", price: 780 },
    ],
  },
  {
    restaurantName: "Swahili Spice Kitchen",
    city: "Mombasa",
    country: "Kenya",
    deliveryPrice: 220,
    estimatedDeliveryTime: 40,
    cuisines: ["Seafood", "Swahili"],
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    menuItems: [
      { name: "Pilau Rice", price: 650 },
      { name: "Coconut Fish Curry", price: 1150 },
      { name: "Mahamri", price: 200 },
    ],
  },
  {
    restaurantName: "Campus Cravings",
    city: "Kisumu",
    country: "Kenya",
    deliveryPrice: 150,
    estimatedDeliveryTime: 25,
    cuisines: ["Street Food", "Snacks"],
    imageUrl: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17",
    menuItems: [
      { name: "Samosa Combo", price: 320 },
      { name: "Bhajia", price: 290 },
      { name: "Masala Chips", price: 450 },
    ],
  },
  {
    restaurantName: "Pasta & Pesto",
    city: "Nakuru",
    country: "Kenya",
    deliveryPrice: 210,
    estimatedDeliveryTime: 32,
    cuisines: ["Italian"],
    imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
    menuItems: [
      { name: "Chicken Alfredo", price: 1250 },
      { name: "Pesto Penne", price: 980 },
      { name: "Garlic Bread", price: 390 },
    ],
  },
  {
    restaurantName: "Bombay Tiffin",
    city: "Nairobi",
    country: "Kenya",
    deliveryPrice: 200,
    estimatedDeliveryTime: 30,
    cuisines: ["Indian"],
    imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
    menuItems: [
      { name: "Butter Chicken", price: 1300 },
      { name: "Paneer Tikka", price: 980 },
      { name: "Naan Basket", price: 360 },
    ],
  },
];
