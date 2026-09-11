const { commitlint, releaseIt } = require("commit-conventions");

module.exports = process.env.ACTION_CONFIG === "commitlint"  ? commitlint : releaseIt;
