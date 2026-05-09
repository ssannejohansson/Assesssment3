/* ----------------------
TYPES 
---------------------- */

export interface Review {
  id: string;
  title?: string; // Optional title
  author: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Show {
  id: string;
  title: string;
  description: string;
  genre: string;
  year: number;
  imageUrl: string;
  reviews: Review[];
  createdAt: string;
  createdBy: string;
}

/* ----------------------
IN-MEMORY DATA STORE 
---------------------- */

export const shows: Show[] = [
  {
    id: "1",
    title: "Breaking Bad",
    description:
      "A high school chemistry teacher diagnosed with cancer teams up with a former student to secure his family's future by manufacturing methamphetamine.",
    genre: "Drama",
    year: 2008,
    imageUrl: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    reviews: [],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "2",
    title: "The Bear",
    description:
      "A young chef from the fine dining world returns to Chicago to run his family's sandwich shop, navigating chaos, trauma, and the pursuit of greatness.",
    genre: "Drama/Comedy",
    year: 2022,
    imageUrl: "https://image.tmdb.org/t/p/w500/sHFlbKS3WLqMnp9t2ghADIJFnuQ.jpg",
    reviews: [],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "3",
    title: "Severance",
    description:
      "Employees at Lumon Industries have their work and personal memories surgically divided, raising questions about identity, autonomy, and corporate control.",
    genre: "Sci-Fi/Thriller",
    year: 2022,
    imageUrl: "https://image.tmdb.org/t/p/w500/tBGuOKN2u07FEFRkQKHjnpTsGaY.jpg",
    reviews: [],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "4",
    title: "The Last of Us",
    description:
      "A hardened smuggler and a teenage girl must survive a post-apocalyptic America overrun by a fungal infection that turns humans into aggressive creatures.",
    genre: "Drama/Horror",
    year: 2023,
    imageUrl: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    reviews: [],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "5",
    title: "Succession",
    description:
      "The Roy family controls one of the world's largest media empires, but their patriarch's aging sparks a brutal battle for power among his children.",
    genre: "Drama",
    year: 2018,
    imageUrl: "https://image.tmdb.org/t/p/w500/e2X8oodKMBqSFPrDt5mhHOEWdFP.jpg",
    reviews: [],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "6",
    title: "Chernobyl",
    description:
      "A dramatization of the 1986 nuclear disaster at Chernobyl and the courageous men and women who made enormous sacrifices to contain it.",
    genre: "Historical Drama",
    year: 2019,
    imageUrl: "https://image.tmdb.org/t/p/w500/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg",
    reviews: [],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "7",
    title: "Dark",
    description:
      "A family saga with a supernatural twist set in a German town where the disappearance of children exposes a time travel conspiracy spanning several generations.",
    genre: "Sci-Fi/Mystery",
    year: 2017,
    imageUrl: "https://image.tmdb.org/t/p/w500/apbrbWs5M6AZNB0ATNYB6FBoPVT.jpg",
    reviews: [],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "8",
    title: "Fleabag",
    description:
      "A witty and grief-stricken woman navigates modern London life, breaking the fourth wall to share her darkly comic inner world with the audience.",
    genre: "Comedy/Drama",
    year: 2016,
    imageUrl: "https://image.tmdb.org/t/p/w500/2SFT3MYT7VBWMaiEhD6LuSNjMvu.jpg",
    reviews: [],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "9",
    title: "Shogun",
    description:
      "In feudal Japan, a shipwrecked English navigator becomes entangled in a power struggle between rival warlords competing to become the next ruler.",
    genre: "Historical Drama",
    year: 2024,
    imageUrl: "https://image.tmdb.org/t/p/w500/7O4iVfOMQmdCSKMFVWcPjRsjR1L.jpg",
    reviews: [],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "10",
    title: "The Wire",
    description:
      "The Baltimore drug scene is examined from the perspectives of both law enforcement and drug dealers, exploring systemic failures in American cities.",
    genre: "Crime/Drama",
    year: 2002,
    imageUrl: "https://image.tmdb.org/t/p/w500/4bfSMsucAeYSGMKMp1J3SbMtbED.jpg",
    reviews: [],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "11",
    title: "Peaky Blinders",
    description:
      "A gangster family epic set in 1919 Birmingham, following the Shelby crime family as they navigate rival gangs, police, and political intrigue.",
    genre: "Crime/Drama",
    year: 2013,
    imageUrl: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkPaQNb.jpg",
    reviews: [],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "12",
    title: "Black Mirror",
    description:
      "An anthology series exploring a twisted, high-tech near-future where humanity's greatest innovations and darkest instincts collide.",
    genre: "Sci-Fi/Anthology",
    year: 2011,
    imageUrl: "https://image.tmdb.org/t/p/w500/7PRddO7z7MCmTruZjejCxa6al1Z.jpg",
    reviews: [],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "13",
    title: "Ozark",
    description:
      "A financial advisor drags his family from Chicago to the Ozarks, where he must launder money to appease a drug cartel and keep his family alive.",
    genre: "Crime/Drama",
    year: 2017,
    imageUrl: "https://image.tmdb.org/t/p/w500/pCGyPEbxgCCaCF0gxGptg4iStTb.jpg",
    reviews: [],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
];