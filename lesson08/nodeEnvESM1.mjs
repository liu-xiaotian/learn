// import ESM2 from "./nodeEnvESM2.mjs";
// import ESM3 from "./nodeEnvESM3.mjs";

let config;
let path = 1 === 1 ? "./nodeEnvESM2.mjs" : "./nodeEnvESM3.mjs";

try {
  const module = await import(path);
  config = module.default;
} catch (err) {
  console.log(err);
}

// if (true) {
//   config = await import("");
// } else {
//   config = await import("");
// }

console.log(config);

// import("./nodeEnvESM2.mjs").then();
