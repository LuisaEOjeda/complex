module.exports = {
    transform: {
      '^.+\\.[t|j]sx?$': 'babel-jest', // Transforms JavaScript and JSX files using Babel
    },
    transformIgnorePatterns: [
      "/node_modules/(?!axios)/" // Ensure axios and other ES module dependencies are transformed
    ],
  };