export const PER_SHIPMENT_MULTIPLE = {
  "Every Week": 4,
  "Every 2 Weeks": 2,
  "Every Month": 1,
};

export const PER_SHIPMENT_PRICE = {
  "250g": {
    "Every Week": 7.2,
    "Every 2 Weeks": 9.6,
    "Every Month": 12,
  },
  "500g": {
    "Every Week": 13,
    "Every 2 Weeks": 17.5,
    "Every Month": 22,
  },
  "1000g": {
    "Every Week": 22,
    "Every 2 Weeks": 32,
    "Every Month": 42,
  },
};

export const PLAN_TYPE_DATA = {
  drinkType: {
    title: "How do you drink your coffee?",
    options: [
      { title: "Capsule", description: "Compatible with Nespresso systems and similar brewers" },
      { title: "Filter", description: "For pour over or drip methods like Aeropress, Chemex, and V60" },
      { title: "Espresso", description: "Dense and finely ground beans for an intense, flavorful experience" },
    ],
  },
  coffeeType: {
    title: "What type of coffee?",
    options: [
      { title: "Decaf", description: "Just like regular coffee, except the caffeine has been removed" },
      { title: "Caffeinated", description: "Regular coffee with the full caffeine content" },
    ],
  },
  quantity: {
    title: "How much would you like?",
    options: [
      { title: "250g", description: "Perfect for the solo drinker. Yields about 12 delicious cups." },
      { title: "500g", description: "Perfect option for a couple. Yields about 40 delectable cups." },
      { title: "1000g", description: "Perfect for offices and events. Yields about 90 delightful cups." },
    ],
  },
  grindOption: {
    title: "Want us to grind them?",
    options: [
      { title: "Wholebean", description: "Best choice if you cherish the full sensory experience" },
      { title: "Filter", description: "For drip or pour-over coffee methods such as V60 or Aeropress" },
      { title: "Cafetiere", description: "Course ground beans specially suited for french press coffee" },
    ],
  },
  deliveryFrequency: {
    title: "How often should we deliver?",
    options: [
      { title: "Every Week", description: "$14.00 per shipment. Includes free first-class shipping." },
      { title: "Every 2 Weeks", description: "$17.25 per shipment. Includes free priority shipping." },
      { title: "Every Month", description: "$22.50 per shipment. Includes free priority shipping." },
    ],
  },
};
