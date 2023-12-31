/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  testPathIgnorePatterns: [".d.ts", ".js"],
  collectCoverage: true,
  coverageDirectory: "coverage",
};