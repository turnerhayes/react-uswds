const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = ({ config }) => {
  config.plugins.push(
    new MiniCssExtractPlugin(),
  );

  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
      ],
    },
    {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: require.resolve("css-loader"),
          options: {
            importLoaders: 1,
          },
        },
        {
          loader: require.resolve("sass-loader"),
          options: {
            sourceMap: true,
          },
        }
      ]
    },
  );

  config.resolve.extensions.push('.ts', '.tsx');
  
  return config;
};
