const withImages = require('next-images')
const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

const withSASS = require('@zeit/next-sass')
// module.exports = withSass()

const withCSS = require('@zeit/next-css');
module.exports = withSASS(withImages(withCSS(
    {
        exportTrailingSlash: true,
        exportPathMap: function() {
        return {
            '/': { page: '/' }
        };
        }
    }

)));
