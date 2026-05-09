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
  {
    id: "14",
    title: "The Sopranos",
    description:
      "New Jersey mob boss Tony Soprano navigates the competing demands of his criminal organization and his family life, aided by sessions with his psychiatrist.",
    genre: "Crime/Drama",
    year: 1999,
    imageUrl: "https://image.tmdb.org/t/p/w500/57okjmCDbjLrEkRFNHibSWQhyMf.jpg",
    reviews: [
      {
        id: "1",
        title: "The show that changed television forever",
        author: "tony@example.com",
        rating: 5,
        comment:
          "Nothing that came before prepared audiences for this. The writing, the acting, the moral complexity — it set the template for every prestige drama that followed.",
        createdAt: "2024-06-10T18:00:00.000Z",
      },
      {
        id: "2",
        author: "carmela@example.com",
        rating: 5,
        comment:
          "James Gandolfini is simply one of the greatest actors to ever appear on screen. The finale still divides people and that is exactly the point.",
        createdAt: "2024-11-18T20:30:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "15",
    title: "Mindhunter",
    description:
      "In the late 1970s, two FBI agents pioneer the science of criminal profiling by interviewing imprisoned serial killers to understand and catch active ones.",
    genre: "Crime/Thriller",
    year: 2017,
    imageUrl: "https://image.tmdb.org/t/p/w500/egCBgGzHJVDkJKTGElKGkhFdxJH.jpg",
    reviews: [
      {
        id: "1",
        title: "Slow burn perfection",
        author: "holden@example.com",
        rating: 5,
        comment:
          "The interviews with the killers are some of the most gripping scenes ever put to screen. Fincher's direction makes every conversation feel genuinely dangerous.",
        createdAt: "2024-08-07T21:00:00.000Z",
      },
      {
        id: "2",
        author: "bill@example.com",
        rating: 5,
        comment:
          "Criminally underrated and heartbreaking that it was cancelled. The BTK scenes in season two are absolutely chilling.",
        createdAt: "2025-01-14T19:45:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "16",
    title: "Landman",
    description:
      "A fast-talking fixer works to keep a scrappy oil company afloat in the booming and brutal West Texas oil fields, balancing deals, danger, and family.",
    genre: "Drama",
    year: 2024,
    imageUrl: "https://image.tmdb.org/t/p/w500/lWaGFkgEbFB3jCcVwJKS5yJEmap.jpg",
    reviews: [
      {
        id: "1",
        title: "Surprisingly gripping",
        author: "tommy@example.com",
        rating: 4,
        comment:
          "Did not expect much but was hooked within the first episode. The lead performance is electric and the Texas setting feels completely authentic.",
        createdAt: "2025-01-22T20:00:00.000Z",
      },
      {
        id: "2",
        author: "caitlin@example.com",
        rating: 4,
        comment:
          "Sharp dialogue and a world you rarely see on TV. Gets better with every episode as the stakes keep rising.",
        createdAt: "2025-03-08T17:30:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "17",
    title: "Mayor of Kingstown",
    description:
      "The McLusky family serves as power brokers in Kingstown, Michigan, where the prison industry dominates and they are the only hope for justice in a broken system.",
    genre: "Crime/Drama",
    year: 2021,
    imageUrl: "https://image.tmdb.org/t/p/w500/tHsPH9EvVRbzn3VmWpjHlVhgAhJ.jpg",
    reviews: [
      {
        id: "1",
        title: "Dark and uncompromising",
        author: "mike@example.com",
        rating: 5,
        comment:
          "Jeremy Renner is at his absolute best here. The show does not sugarcoat anything about the prison system and is all the more powerful for it.",
        createdAt: "2024-09-14T21:15:00.000Z",
      },
      {
        id: "2",
        author: "iris@example.com",
        rating: 4,
        comment:
          "Brutal and bleak but completely compelling. The world feels real and lived-in in a way few crime dramas manage.",
        createdAt: "2025-02-03T18:50:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "18",
    title: "Animal Kingdom",
    description:
      "A teenager moves in with his estranged relatives after his mother's death, only to discover the Cody family is a dangerous crime family run by a cunning matriarch.",
    genre: "Crime/Drama",
    year: 2016,
    imageUrl: "https://image.tmdb.org/t/p/w500/qQ3sU5mTGSPj5HMuTXMKqSbFgJQ.jpg",
    reviews: [
      {
        id: "1",
        title: "Hidden gem of crime TV",
        author: "smurf@example.com",
        rating: 5,
        comment:
          "Ellen Barkin is absolutely terrifying as Smurf. The family dynamic is completely unique and the show gets darker and bolder with every season.",
        createdAt: "2024-07-19T20:00:00.000Z",
      },
      {
        id: "2",
        author: "pope@example.com",
        rating: 4,
        comment:
          "Slept on by most people but it is genuinely excellent. The tension within the family is more gripping than most of the heists themselves.",
        createdAt: "2024-12-09T16:20:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "19",
    title: "Narcos",
    description:
      "The true story of the rise and fall of Colombian drug lord Pablo Escobar and the DEA agents who dedicated their lives to bringing him down.",
    genre: "Crime/Drama",
    year: 2015,
    imageUrl: "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg",
    reviews: [
      {
        id: "1",
        title: "Stranger than fiction",
        author: "steve@example.com",
        rating: 5,
        comment:
          "Wagner Moura's portrayal of Escobar is nothing short of mesmerising. The fact that most of it actually happened makes it even more extraordinary.",
        createdAt: "2024-05-28T19:30:00.000Z",
      },
      {
        id: "2",
        author: "javier@example.com",
        rating: 5,
        comment:
          "One of the most bingeable shows ever made. The narration pulls you in immediately and the pacing is relentless from start to finish.",
        createdAt: "2024-10-17T21:00:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "20",
    title: "Prison Break",
    description:
      "A structural engineer gets himself deliberately incarcerated to help break out his brother, who has been wrongly sentenced to death for the murder of the Vice President's brother.",
    genre: "Crime/Thriller",
    year: 2005,
    imageUrl: "https://image.tmdb.org/t/p/w500/5E1BhkCgjLBlqx557Z5yzcN0i94.jpg",
    reviews: [
      {
        id: "1",
        title: "Season one is flawless television",
        author: "michael@example.com",
        rating: 5,
        comment:
          "The first season is one of the most tightly plotted and tense things ever made. The tattooed blueprint idea alone is genius.",
        createdAt: "2024-06-30T20:00:00.000Z",
      },
      {
        id: "2",
        author: "lincoln@example.com",
        rating: 4,
        comment:
          "Gets wilder as it goes but the ride is so fun you forgive it everything. Wentworth Miller and Dominic Purcell have incredible chemistry.",
        createdAt: "2025-01-25T17:10:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
];