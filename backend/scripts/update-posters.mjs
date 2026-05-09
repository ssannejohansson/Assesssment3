import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const API_KEY = process.env.TMDB_API_KEY;
const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const shows = [
  { id: "14", title: "The Sopranos", year: 1999 },
  { id: "15", title: "Mindhunter", year: 2017 },
  { id: "16", title: "Landman", year: 2024 },
  { id: "17", title: "Mayor of Kingstown", year: 2021 },
  { id: "18", title: "Animal Kingdom", year: 2016 },
  { id: "19", title: "Narcos", year: 2015 },
  { id: "20", title: "Prison Break", year: 2005 },
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
