module.exports = {
  presets: ["react-native"],
  // rest of config
  plugins: [
    // other plugins
    [
      "babel-plugin-react-native-nodeify-hack",
      'babel-plugin-rewrite-require',
      {
        aliases: {
          stream: 'readable-stream',
        },
      },
    ],
  ],
};