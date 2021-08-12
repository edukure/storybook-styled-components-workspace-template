const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@edukure/ui']);

module.exports = withPlugins([withTM], {
  trailingSlash: true,
});
