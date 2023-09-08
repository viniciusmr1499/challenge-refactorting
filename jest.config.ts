import type { Config } from "jest";

const config: Config = {
  collectCoverage: true,
  transform: {
    "\\.[jt]sx?$": "ts-jest",
  },
  coverageDirectory: "coverage",
  coverageProvider: "v8",
};

export default config;
