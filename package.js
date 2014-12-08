Package.describe({
  name: 'thepumpinglemma:cloudfront-private-url-creator',
  summary: 'Meteor package that wraps the cloudfront-private-url-creator package from NPM.',
  version: '1.0.0',
  git: 'https://github.com/ThePumpingLemma/meteor-cloudfront-private-url-creator.git'
});

Npm.depends({
  'cloudfront-private-url-creator': '1.0.51'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.export('CloudfrontPrivateUrlCreator', ['server'])
  api.addFiles('thepumpinglemma:cloudfront-private-url-creator.js', ['server']);
});

