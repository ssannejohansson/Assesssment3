import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const API_KEY = "d6f447aba854dd613c1a599728b544a4";
const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const shows = [
  { id: "1", title: "Breaking Bad", year: 2008 },
  { id: "2", title: "The Bear", year: 2022 },
  { id: "3", title: "The Handmaid's Tale", year: 2017 },
  { id: "4", title: "The Last of Us", year: 2023 },
  { id: "5", title: "Succession", year: 2018 },
  { id: "6", title: "Chernobyl", year: 2019 },
  { id: "7", title: "Sons of Anarchy", year: 2008 },
  { id: "8", title: "Shameless", year: 2011 },
  { id: "9", title: "Gangs of London", year: 2020 },
  { id: "10", title: "The Wire", year: 2002 },
  { id: "11", title: "Peaky Blinders", year: 2013 },
  { id: "12", title: "Yellowstone", year: 2018 },
  { id: "13", title: "Ozark", year: 2017 },
];

async function fetchPoster(title, year) {
  const url = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(title)}&first_air_date_year=${year}`;
  const res = await fetch(url);
  const data = await res.json();
  const result = data.results?.[0];
  if (!result?.poster_path) {
    console.warn(`  No poster found for: ${title} (${year})`);
    return null;
  }
  return `${BASE_IMAGE_URL}${result.poster_path}`;
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataPath = join(__dirname, "../src/data.ts");
let content = readFileSync(dataPath, "utf-8");

for (const show of shows) {
  console.log(`Fetching poster for: ${show.title}`);
  const imageUrl = await fetchPoster(show.title, show.year);
  if (!imageUrl) continue;

  // Replace the imageUrl for this specific show block by matching title + nearby imageUrl
  const titlePattern = `title: "${show.title}"`;
  const titleIndex = content.indexOf(titlePattern);
  if (titleIndex === -1) {
    console.warn(`  Could not find show block for: ${show.title}`);
    continue;
  }

  // Find the next imageUrl after this title
  const imageUrlIndex = content.indexOf("imageUrl:", titleIndex);
  const lineEnd = content.indexOf("\n", imageUrlIndex);
  const oldLine = content.slice(imageUrlIndex, lineEnd);
  const newLine = `imageUrl: "${imageUrl}",`;

  content = content.slice(0, imageUrlIndex) + newLine + content.slice(lineEnd);
  console.log(`  Updated: ${imageUrl}`);
}

writeFileSync(dataPath, content, "utf-8");
console.log("\ndata.ts updated successfully.");
