import data from "./data.json";

const random = (min = 0, max = 1000) =>
  Math.floor(Math.random() * (max + 1)) + min;

let currentData = [];

function mapWithRank(row, i) {
  return { ...row, ranking: i + 1 };
}

export function getInitialData() {
  currentData = data.map(mapWithRank);
  return currentData;
}

