const sum = require('./app');

if (sum(2,3) === 5) {
  console.log("CI Test Passed Successfully");
  process.exit(0);
} else {
  console.log("Test failed");
  process.exit(1);
}
