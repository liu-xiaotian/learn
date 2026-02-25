let config;
if (true) {
  config = require("./nodeEnvCMJ2.cjs");
} else {
  config = require("./nodeEnvCMJ3.cjs");
}

console.log(config);
