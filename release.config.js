const { commitlint, releaseIt } = require("@jorkab/commit-conventions");

module.exports = process.env.ACTION_CONFIG === "commitlint" ? commitlint : releaseIt;
