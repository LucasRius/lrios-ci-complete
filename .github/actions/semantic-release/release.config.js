const config = {
  branches: ['main', 'master'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    ['@semantic-release/git', {
      assets: ['dist/**/*.{js,css}', 'docs', 'package.json'],
      // CORREÇÃO AQUI: Use backticks (`) em vez de aspas simples (')
      message: `chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}`,
    }],
    '@semantic-release/github',
  ],
};

module.exports = config;
