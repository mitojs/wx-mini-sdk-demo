const path = require('path');

module.exports = {
  configureWebpack: () => {
    return {
      resolve: {
        alias: {
          src: path.resolve(__dirname, 'src'),
        },
      },
    };
  },
};
