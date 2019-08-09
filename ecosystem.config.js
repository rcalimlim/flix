module.exports = {
  apps: [{
    name: 'quick-flix',
    script: './server/server.js',
  }],
  deploy: {
    production: {
      user: 'ross',
      host: '134.209.69.8',
      key: '~/.ssh/rosscalimlim.me',
      ref: 'origin/master',
      repo: 'git@github.com:rcalimlim/quick-flix.git',
      path: '/home/ross/server/quick-flix',
      'post-deploy': 'npm install && npx webpack --config ./webpack.config.js && pm2 startOrRestart ecosystem.config.js',

    },
  },
};
