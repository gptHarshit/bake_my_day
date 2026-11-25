// BakeMyDay menu — yahi ek file edit karo to poori site update ho jayegi.
// price: null  => "Not available right now" dikhega.

export const dryCakes = [
  { name: "Vanilla Cake", price: 290 },
  { name: "Pineapple Cake", price: 290 },
  { name: "Strawberry Cake", price: 290 },
  { name: "Chocolate Cake", price: 350 },
  { name: "Marble Cake", price: 310 },
  { name: "Kaju Malai Cake", price: 350 },
  { name: "Coconut Cake", price: 320 },
  { name: "Paan Cake", price: 360 },
  { name: "Mawa Cake", price: null },
  { name: "Atta Jaggery", price: 280 },
  { name: "Atta Plum Cake", price: 350 },
  { name: "Besan Badam Cake", price: 350 },
  { name: "Chocolate Orange Cake", price: 400 },
  { name: "Atta Dates Cake", price: 340 },
];

export const regularCakes = [
  { name: "Vanilla Cake", premix: 300, scratch: 330 },
  { name: "Pineapple Cake", premix: 320, scratch: 350 },
  { name: "Butterscotch Cake", premix: 320, scratch: 350 },
  { name: "Strawberry Cake", premix: 320, scratch: 350 },
  { name: "Blueberry Cake", premix: 350, scratch: 380 },
  { name: "Chocolate Cake", premix: 350, scratch: 400 },
  { name: "Chocolate Orange Cake", premix: 400, scratch: 460 },
  { name: "Truffle Cake", premix: 500, scratch: 560 },
  { name: "Oreo Cake", premix: 380, scratch: 430 },
  { name: "KitKat Cake", premix: 400, scratch: 450 },
  { name: "Black Forest Cake", premix: 360, scratch: null },
  { name: "White Forest Cake", premix: 380, scratch: null },
  { name: "Dream Cake", premix: 400, scratch: 450 },
  {
    name: "Cassata Cake",
    note: "Vanilla + Kaju + Pineapple",
    premix: 360,
    scratch: 410,
  },
  { name: "Kaju Malai Cake", premix: 400, scratch: 490 },
  { name: "Coconut Cake", premix: 350, scratch: 390 },
  { name: "Paan Cake", premix: 350, scratch: 400 },
];

export const redVelvet = {
  name: "Red Velvet Cake",
  options: [
    { label: "With regular cream", price: 380 },
    { label: "With cream cheese + white choco chip", price: 580 },
  ],
};

export const indianCakes = [
  { name: "Gulab Jamun Cake", premix: 380, scratch: 430 },
  { name: "Rasmalai Cake", premix: 400, scratch: 450 },
  { name: "Motichoor Rabdi Cake", premix: 450, scratch: 500 },
];

export const desserts = [
  {
    name: "Dark Chocolate Taco",
    prices: [
      { label: "Small", price: 80 },
      { label: "Large", price: 130 },
    ],
  },
  {
    name: "White Chocolate Taco",
    prices: [
      { label: "Small", price: 90 },
      { label: "Large", price: 140 },
    ],
  },
  { name: "Tiramisu", prices: [{ label: "", price: 260 }] },
  {
    name: "Bento Cake",
    note: "Available in multiple flavours",
    prices: [{ label: "Starting at", price: 200 }],
  },
];

export const rupee = (n) => `₹${n}`;
