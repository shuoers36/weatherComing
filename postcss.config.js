module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-px2rem')({
      remUnit: 40,
      remPrecision: 5
    }),
  ]
};