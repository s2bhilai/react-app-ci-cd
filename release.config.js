module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/s2bhilai/react-app-ci-cd",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/github",
    ],
};
