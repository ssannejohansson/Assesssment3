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
    imageUrl: "https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
    reviews: [
      {
        id: "1",
        title: "The greatest show ever made",
        author: "alex@example.com",
        rating: 5,
        comment:
          "Absolutely flawless from start to finish. Walter White's transformation is one of the most compelling character arcs in TV history.",
        createdAt: "2024-11-03T10:22:00.000Z",
      },
      {
        id: "2",
        title: "A slow burn that pays off",
        author: "maya@example.com",
        rating: 5,
        comment:
          "Takes a few episodes to get going but once it does you cannot stop watching. The writing is incredibly tight.",
        createdAt: "2024-12-14T18:45:00.000Z",
      },
      {
        id: "3",
        author: "jonas@example.com",
        rating: 4,
        comment:
          "Brilliant, though the finale left me with mixed feelings. Still a must-watch.",
        createdAt: "2025-01-07T09:10:00.000Z",
      },
    ],
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
    imageUrl: "https://image.tmdb.org/t/p/w500/eKfVzzEazSIjJMrw9ADa2x8ksLz.jpg",
    reviews: [
      {
        id: "1",
        title: "Stressful in the best way",
        author: "priya@example.com",
        rating: 5,
        comment:
          "I had to pause multiple times just to breathe. The kitchen scenes are so intense and real. Season 2 is a masterpiece.",
        createdAt: "2025-01-20T14:30:00.000Z",
      },
      {
        id: "2",
        author: "tom@example.com",
        rating: 4,
        comment:
          "Not what I expected from a show about a restaurant but in the best possible way. The ensemble cast is incredible.",
        createdAt: "2025-02-05T20:15:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "3",
    title: "The Handmaid's Tale",
    description:
      "Set in the totalitarian theocracy of Gilead, a woman forced into sexual slavery must navigate a world where women have lost all rights and freedoms.",
    genre: "Drama/Dystopian",
    year: 2017,
    imageUrl: "https://image.tmdb.org/t/p/w500/eGUT7j3n3rn5yGihlCgwUnD70HV.jpg",
    reviews: [
      {
        id: "1",
        title: "Haunting and important",
        author: "emma@example.com",
        rating: 5,
        comment:
          "Elisabeth Moss is phenomenal. The world-building is terrifying precisely because it feels so plausible. Essential viewing.",
        createdAt: "2024-10-11T09:30:00.000Z",
      },
      {
        id: "2",
        author: "lena@example.com",
        rating: 4,
        comment:
          "Incredibly well made but deeply uncomfortable — which is exactly the point. Later seasons dip a little but season 1 is flawless.",
        createdAt: "2025-01-15T21:00:00.000Z",
      },
    ],
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
    imageUrl: "https://image.tmdb.org/t/p/w500/dmo6TYuuJgaYinXBPjrgG9mB5od.jpg",
    reviews: [
      {
        id: "1",
        title: "Emotional and breathtaking",
        author: "zoe@example.com",
        rating: 5,
        comment:
          "The third episode alone is one of the greatest pieces of television ever made. I cried for an hour straight.",
        createdAt: "2024-09-19T21:00:00.000Z",
      },
      {
        id: "2",
        author: "dan@example.com",
        rating: 5,
        comment:
          "Perfectly cast, beautifully shot and genuinely terrifying at times. Pedro Pascal is incredible in this role.",
        createdAt: "2025-01-11T17:20:00.000Z",
      },
    ],
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
    imageUrl: "https://image.tmdb.org/t/p/w500/z0XiwdrCQ9yVIr4O0pxzaAYRxdW.jpg",
    reviews: [
      {
        id: "1",
        title: "The best show of the decade",
        author: "harriet@example.com",
        rating: 5,
        comment:
          "Sharp, savage and wickedly funny. The writing is on another level and every character is perfectly drawn. The finale destroyed me.",
        createdAt: "2024-08-03T12:30:00.000Z",
      },
      {
        id: "2",
        author: "leo@example.com",
        rating: 5,
        comment:
          "Nothing on TV comes close to this. The dialogue alone is worth the watch — every scene crackles with tension and dark humour.",
        createdAt: "2024-11-22T19:00:00.000Z",
      },
      {
        id: "3",
        title: "Uncomfortable but brilliant",
        author: "iris@example.com",
        rating: 4,
        comment:
          "You will not like any of the characters and yet you cannot look away. Genuinely one of the most original shows ever made.",
        createdAt: "2025-02-07T10:10:00.000Z",
      },
    ],
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
    reviews: [
      {
        id: "1",
        title: "Terrifying and essential",
        author: "max@example.com",
        rating: 5,
        comment:
          "The most unsettling thing I have ever watched because every second of it is real. Meticulously researched and powerfully acted.",
        createdAt: "2024-06-18T15:45:00.000Z",
      },
      {
        id: "2",
        author: "anna@example.com",
        rating: 5,
        comment:
          "Absolutely harrowing. Jared Harris gives a career-defining performance. A show everyone should watch at least once.",
        createdAt: "2024-10-30T20:20:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "7",
    title: "Sons of Anarchy",
    description:
      "A close-knit outlaw motorcycle club struggles to maintain order in their small California town while dealing with inner conflict, rival gangs, and the law.",
    genre: "Crime/Drama",
    year: 2008,
    imageUrl: "https://image.tmdb.org/t/p/w500/kiy8BHtIHAslh81rvFcZ4wbNGdY.jpg",
    reviews: [
      {
        id: "1",
        title: "Gritty and addictive",
        author: "ryan@example.com",
        rating: 5,
        comment:
          "The lead performance is outstanding. The show pulls you in from episode one and never really lets go. One of the best crime dramas on TV.",
        createdAt: "2024-09-08T17:20:00.000Z",
      },
      {
        id: "2",
        author: "nina@example.com",
        rating: 4,
        comment:
          "Brutal, emotional and surprisingly Shakespearean. The later seasons get messy but the ride is absolutely worth it.",
        createdAt: "2024-11-30T13:45:00.000Z",
      },
      {
        id: "3",
        title: "Not for everyone but I loved it",
        author: "marco@example.com",
        rating: 4,
        comment:
          "Dark themes handled with real depth. The club dynamics and loyalty conflicts keep every episode interesting.",
        createdAt: "2025-02-12T10:05:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "8",
    title: "Shameless",
    description:
      "The dysfunctional Gallagher family, led by deadbeat dad Frank, navigates poverty, crime, and chaos on the South Side of Chicago with raw humour and heart.",
    genre: "Comedy/Drama",
    year: 2011,
    imageUrl: "https://image.tmdb.org/t/p/w500/ifo31fMWLmyOVpdak9K0kY4jldQ.jpg",
    reviews: [
      {
        id: "1",
        title: "Messy, chaotic, brilliant",
        author: "kate@example.com",
        rating: 5,
        comment:
          "The family feels so real. It is funny, heartbreaking and completely unhinged all at once. Early seasons are some of the best TV ever made.",
        createdAt: "2024-08-22T15:10:00.000Z",
      },
      {
        id: "2",
        author: "jack@example.com",
        rating: 4,
        comment:
          "Starts incredibly strong. Frank is one of the most entertaining characters on television even when you want to strangle him.",
        createdAt: "2025-01-03T19:30:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "9",
    title: "Gangs of London",
    description:
      "After the assassination of the most powerful crime boss in London, the city's criminal underworld is thrown into chaos as rival gangs battle for control.",
    genre: "Crime/Action",
    year: 2020,
    imageUrl: "https://image.tmdb.org/t/p/w500/fVgwa6wGw9ddGM5O7mqrrwB6gHK.jpg",
    reviews: [
      {
        id: "1",
        title: "The most intense show on TV",
        author: "finn@example.com",
        rating: 5,
        comment:
          "The action sequences are absolutely insane — some of the best choreography I have ever seen in a TV show. The story keeps you hooked throughout.",
        createdAt: "2024-10-05T20:00:00.000Z",
      },
      {
        id: "2",
        author: "sara@example.com",
        rating: 4,
        comment:
          "Brutal and relentless. Not for the faint-hearted but the performances and direction are outstanding.",
        createdAt: "2025-01-28T18:15:00.000Z",
      },
    ],
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
    imageUrl: "https://image.tmdb.org/t/p/w500/4lbclFySvugI51fwsyxBTOm4DqK.jpg",
    reviews: [
      {
        id: "1",
        title: "The gold standard of TV drama",
        author: "victor@example.com",
        rating: 5,
        comment:
          "Nothing before or since has matched the depth and realism of The Wire. It is less a TV show and more a social document.",
        createdAt: "2024-05-09T09:00:00.000Z",
      },
      {
        id: "2",
        author: "grace@example.com",
        rating: 4,
        comment:
          "Dense and slow to start but incredibly rewarding. By season two you are completely hooked and cannot imagine watching anything else.",
        createdAt: "2024-09-25T16:50:00.000Z",
      },
    ],
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
    imageUrl: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    reviews: [
      {
        id: "1",
        title: "Style, violence and great storytelling",
        author: "noah@example.com",
        rating: 5,
        comment:
          "The atmosphere is unlike anything else on TV. Post-war Birmingham has never looked so cinematic and menacing.",
        createdAt: "2024-07-01T18:00:00.000Z",
      },
      {
        id: "2",
        author: "lily@example.com",
        rating: 4,
        comment:
          "The lead carries every scene effortlessly. The show stumbles slightly in later seasons but the core cast keeps it compelling.",
        createdAt: "2025-01-19T14:25:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "12",
    title: "Yellowstone",
    description:
      "A powerful ranching family fights to protect their sprawling Montana ranch from land developers, a nearby reservation, and America's first national park.",
    genre: "Drama/Western",
    year: 2018,
    imageUrl: "https://image.tmdb.org/t/p/w500/peNC0eyc3TQJa6x4TdKcBPNP4t0.jpg",
    reviews: [
      {
        id: "1",
        title: "Modern western at its finest",
        author: "cole@example.com",
        rating: 5,
        comment:
          "The scenery alone is worth watching for. Add in the family power struggles and the lead performance and you have something truly special.",
        createdAt: "2024-07-14T14:00:00.000Z",
      },
      {
        id: "2",
        author: "beth@example.com",
        rating: 4,
        comment:
          "Slow to start but builds into something gripping. The writing gets sharper every season.",
        createdAt: "2024-12-01T11:30:00.000Z",
      },
      {
        id: "3",
        title: "Addictive drama",
        author: "oscar@example.com",
        rating: 5,
        comment:
          "Cannot stop watching. The family dynamics are fascinating and every episode ends on a moment that makes you need the next one immediately.",
        createdAt: "2025-03-10T20:45:00.000Z",
      },
    ],
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
    imageUrl: "https://image.tmdb.org/t/p/w500/pCGyPVrI9Fzw6rE1Pvi4BIXF6ET.jpg",
    reviews: [
      {
        id: "1",
        title: "Breaking Bad level tension",
        author: "sam@example.com",
        rating: 5,
        comment:
          "The whole family is fantastic but Julia Garner steals every single scene she is in. One of the most gripping crime dramas in years.",
        createdAt: "2024-08-14T20:00:00.000Z",
      },
      {
        id: "2",
        author: "mia@example.com",
        rating: 4,
        comment:
          "Dark, tense and full of twists. Gets better with each season and the finale is genuinely satisfying.",
        createdAt: "2025-03-05T11:40:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
];