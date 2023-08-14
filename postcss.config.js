module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 75,
      unitPrecision: 5,
      propList: ['*'],
      exclude: (filePath) => {
        return filePath.includes('/px/');
      },
    },
  },
};
