export const SEED_OBJECTS = [
  {
    id: 1,
    ownerId: 1,
    name: "U Agnieszki",
    city: "Kolobrzeg",
    address: "ul. Korfantego 23",
    phone: "503 423 223",
    description: "Opis obiektu...",
    amenities: ["lazienka w pokoju", "WiFi", "parking"],
    rooms: [
      {
        id: 1,
        name: "Lux torpeda",
        quantity: 10,
        persons: 10,
        pricePerNight: 12,
        pricePerNightWeekend: 200,
        pricePerPerson: 200,
        pricePerPersonWeekend: 200,
      },
    ],
    photos: [],
    points: 12221,
    rating: 9.0,
  },
];

export const SEED_REVIEWS = [];
export const SEED_FAVORITES = [];
