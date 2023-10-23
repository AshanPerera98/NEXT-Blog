/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        env_variable_1: "value 1",
        env_variable_2: "value 2",
        env_variable_3: "value 3",
      },
    };
  }

  return {
    reactStrictMode: true,
  };
};

module.exports = (phase) => nextConfig(phase);
