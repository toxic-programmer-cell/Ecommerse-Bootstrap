const products= [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    category: "beauty",
    price: 9.99,
    discountPercentage: 10.48,
    rating: 2.56,
    stock: 99,
    tags: [],
    brand: "Essence",

    reviews: [
      {
        rating: 3,
        comment: "Would not recommend!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Eleanor Collins",
        reviewerEmail: "eleanor.collins@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Very satisfied!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Lucas Gordon",
        reviewerEmail: "lucas.gordon@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Highly impressed!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Eleanor Collins",
        reviewerEmail: "eleanor.collins@x.dummyjson.com",
      },
    ],

    images:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    description:
      "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    category: "beauty",
    price: 19.99,
    discountPercentage: 18.19,
    rating: 2.86,
    stock: 34,
    tags: ["beauty", "eyeshadow"],
    brand: "Glamour Beauty",
    reviews: [
      {
        rating: 5,
        comment: "Great product!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Savannah Gomez",
        reviewerEmail: "savannah.gomez@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Awesome product!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Christian Perez",
        reviewerEmail: "christian.perez@x.dummyjson.com",
      },
      {
        rating: 1,
        comment: "Poor quality!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Nicholas Bailey",
        reviewerEmail: "nicholas.bailey@x.dummyjson.com",
      },
    ],
    images:
      "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",

    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
  },
  {
    id: 3,
    title: "Powder Canister",
    description:
      "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
    category: "beauty",
    price: 14.99,
    discountPercentage: 9.84,
    rating: 4.64,
    stock: 89,
    tags: ["beauty", "face powder"],
    brand: "Velvet Touch",
    reviews: [
      {
        rating: 4,
        comment: "Would buy again!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Alexander Jones",
        reviewerEmail: "alexander.jones@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Highly impressed!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Elijah Cruz",
        reviewerEmail: "elijah.cruz@x.dummyjson.com",
      },
      {
        rating: 1,
        comment: "Very dissatisfied!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Avery Perez",
        reviewerEmail: "avery.perez@x.dummyjson.com",
      },
    ],
    images:
      "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp",

    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
  },
  {
    id: 4,
    title: "Red Lipstick",
    description:
      "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
    category: "beauty",
    price: 12.99,
    discountPercentage: 12.16,
    rating: 4.36,
    stock: 91,
    tags: ["beauty", "lipstick"],
    brand: "Chic Cosmetics",
    reviews: [
      {
        rating: 4,
        comment: "Great product!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Liam Garcia",
        reviewerEmail: "liam.garcia@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Great product!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Ruby Andrews",
        reviewerEmail: "ruby.andrews@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Would buy again!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Clara Berry",
        reviewerEmail: "clara.berry@x.dummyjson.com",
      },
    ],
    images:
      "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp",

    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
  },
  {
    id: 5,
    title: "Red Nail Polish",
    description:
      "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
    category: "beauty",
    price: 8.99,
    discountPercentage: 11.44,
    rating: 4.32,
    stock: 79,
    tags: ["beauty", "nail polish"],
    brand: "Nail Couture",
    reviews: [
      {
        rating: 2,
        comment: "Poor quality!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Benjamin Wilson",
        reviewerEmail: "benjamin.wilson@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Great product!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Liam Smith",
        reviewerEmail: "liam.smith@x.dummyjson.com",
      },
      {
        rating: 1,
        comment: "Very unhappy with my purchase!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Clara Berry",
        reviewerEmail: "clara.berry@x.dummyjson.com",
      },
    ],
    images:
      "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp",

    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp",
  },
  {
    id: 6,
    title: "Calvin Klein CK One",
    description:
      "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
    category: "fragrances",
    price: 49.99,
    discountPercentage: 1.89,
    rating: 4.37,
    stock: 29,
    tags: ["fragrances", "perfumes"],
    brand: "Calvin Klein",
    reviews: [
      {
        rating: 2,
        comment: "Very disappointed!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Layla Young",
        reviewerEmail: "layla.young@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Fast shipping!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Daniel Cook",
        reviewerEmail: "daniel.cook@x.dummyjson.com",
      },
      {
        rating: 3,
        comment: "Not as described!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Jacob Cooper",
        reviewerEmail: "jacob.cooper@x.dummyjson.com",
      },
    ],
    images:
      "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",

    thumbnail:
      "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp",
  },
  {
    id: 7,
    title: "Chanel Coco Noir Eau De",
    description:
      "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
    category: "fragrances",
    price: 129.99,
    discountPercentage: 16.51,
    rating: 4.26,
    stock: 58,
    tags: ["fragrances", "perfumes"],
    brand: "Chanel",

    reviews: [
      {
        rating: 4,
        comment: "Highly impressed!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Ruby Andrews",
        reviewerEmail: "ruby.andrews@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Awesome product!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Leah Henderson",
        reviewerEmail: "leah.henderson@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Very happy with my purchase!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Xavier Wright",
        reviewerEmail: "xavier.wright@x.dummyjson.com",
      },
    ],

    images:
      "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp",

    thumbnail:
      "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp",
  },
  {
    id: 8,
    title: "Dior J'adore",
    description:
      "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
    category: "fragrances",
    price: 89.99,
    discountPercentage: 14.72,
    rating: 3.8,
    stock: 98,
    tags: ["fragrances", "perfumes"],
    brand: "Dior",

    reviews: [
      {
        rating: 5,
        comment: "Great value for money!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Nicholas Bailey",
        reviewerEmail: "nicholas.bailey@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Great value for money!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Penelope Harper",
        reviewerEmail: "penelope.harper@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Great product!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Emma Miller",
        reviewerEmail: "emma.miller@x.dummyjson.com",
      },
    ],

    images:
      "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp",

    thumbnail:
      "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp",
  },
  {
    id: 9,
    title: "Dolce Shine Eau de",
    description:
      "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
    category: "fragrances",
    price: 69.99,
    discountPercentage: 0.62,
    rating: 3.96,
    stock: 4,
    tags: ["fragrances", "perfumes"],
    brand: "Dolce & Gabbana",
    reviews: [
      {
        rating: 4,
        comment: "Would buy again!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Mateo Bennett",
        reviewerEmail: "mateo.bennett@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Highly recommended!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Nolan Gonzalez",
        reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Very happy with my purchase!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Aurora Lawson",
        reviewerEmail: "aurora.lawson@x.dummyjson.com",
      },
    ],
    images:
      "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp",

    thumbnail:
      "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp",
  },
  {
    id: 10,
    title: "Gucci Bloom Eau de",
    description:
      "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
    category: "fragrances",
    price: 79.99,
    discountPercentage: 14.39,
    rating: 2.74,
    stock: 91,
    tags: ["fragrances", "perfumes"],
    brand: "Gucci",
    reviews: [
      {
        rating: 1,
        comment: "Very dissatisfied!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Cameron Perez",
        reviewerEmail: "cameron.perez@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Very happy with my purchase!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Daniel Cook",
        reviewerEmail: "daniel.cook@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Highly impressed!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Addison Wright",
        reviewerEmail: "addison.wright@x.dummyjson.com",
      },
    ],
    images:
      "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp",

    thumbnail:
      "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp",
  },
  {
    id: 11,
    title: "Annibale Colombo Bed",
    description:
      "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    category: "furniture",
    price: 1899.99,
    discountPercentage: 8.57,
    rating: 4.77,
    stock: 88,
    tags: ["furniture", "beds"],
    brand: "Annibale Colombo",
    reviews: [
      {
        rating: 2,
        comment: "Would not recommend!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Christopher West",
        reviewerEmail: "christopher.west@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Highly impressed!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Vivian Carter",
        reviewerEmail: "vivian.carter@x.dummyjson.com",
      },
      {
        rating: 1,
        comment: "Poor quality!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Mason Wright",
        reviewerEmail: "mason.wright@x.dummyjson.com",
      },
    ],
    images:
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp",

    thumbnail:
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp",
  },
  {
    id: 12,
    title: "Annibale Colombo Sofa",
    description:
      "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
    category: "furniture",
    price: 2499.99,
    discountPercentage: 14.4,
    rating: 3.92,
    stock: 60,
    tags: ["furniture", "sofas"],
    brand: "Annibale Colombo",
    reviews: [
      {
        rating: 3,
        comment: "Very unhappy with my purchase!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Christian Perez",
        reviewerEmail: "christian.perez@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Fast shipping!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Lillian Bishop",
        reviewerEmail: "lillian.bishop@x.dummyjson.com",
      },
      {
        rating: 1,
        comment: "Poor quality!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Lillian Simmons",
        reviewerEmail: "lillian.simmons@x.dummyjson.com",
      },
    ],
    images:
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp",

    thumbnail:
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp",
  },
];

export default products;
