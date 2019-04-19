const glob = require('glob');
const path = require('path');

const basePath = path.join(process.cwd(), './src/resolvers');

describe('Resolvers', () => {
  // Find all our resolver files
  console.log('test');
  const files = glob.sync(`${basePath}**/*.test.js`);
  
  files.forEach(file => {
    describe(file, () => {
      const resolvers = require(file);
      console.log('test ran');
      Object.entries(resolvers).forEach(([name, fn]) => {
        it(name, () => Promise.resolve(fn()));
      });
    });
  });
});