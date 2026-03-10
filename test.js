const sum = require('./app');

if (sum(2,3) === 5) {
  console.log("Test passed");
  process.exit(0);
} else {
  console.log("Test failed");
  process.exit(1);
}
