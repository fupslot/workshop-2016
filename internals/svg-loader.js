var __svg__ = {
  path: '../assets/svg/**/*.svg',
  name: 'assets/svg/[hash].assets.svg'
};

// require basic or custom sprite loader
require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);
