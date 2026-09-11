const commitlint = {
    extends: ['@commitlint/config-conventional'],
};

const releaseIt = {
    "git":{
        "requireCleanWorkingDir": true,
        "requireBranch": "main",
        "commitMessage": "chore(release): v${version} [skip ci]",
        "tagName": "v${version}"
    },
    "github": {
        "release": true,
        "releaseName": "v${version}"
    },
    "npm": {
        "publish": false
    },
    "plugins": {
        "@release-it/conventional-changelog": {
            "preset": "angular",
            "infile": "CHANGELOG.md"
        }
    }
}

module.exports = process.env.ACTION_CONFIG === "commitlint"  ? commitlint : releaseIt;
