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
  {
    id: "14",
    title: "The Sopranos",
    description:
      "New Jersey mob boss Tony Soprano navigates the competing demands of his criminal organization and his family life, aided by sessions with his psychiatrist.",
    genre: "Crime/Drama",
    year: 1999,
    imageUrl: "https://image.tmdb.org/t/p/w500/rTc7ZXdroqjkKivFPvCPX0Ru7uw.jpg",
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
    imageUrl: "https://image.tmdb.org/t/p/w500/eg2eepJtJeRtCZEUJvIYyb2PnYD.jpg",
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
    imageUrl: "https://image.tmdb.org/t/p/w500/hYthRgS1nvQkGILn9YmqsF8kSk6.jpg",
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
    imageUrl: "https://image.tmdb.org/t/p/w500/6rWIip9MZELAA0SKii5WqsBDCYW.jpg",
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
    imageUrl: "https://image.tmdb.org/t/p/w500/rzvdKrnSRKPFI0pgqMQknDPpRC9.jpg",
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
    imageUrl: "https://image.tmdb.org/t/p/w500/wnmNPaLvhnMeOqnWlhNkYCZxtda.jpg",
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