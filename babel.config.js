module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  "plugins": [
    ["module-resolver", {
      "root": ["./src"],
      "alias": {
        "@styles": "./src/styles",
        "@screens": "./src/screens",
        "@assets": "./src/assets",
        "@components": "./src/components",
        "@models": "./src/models",
        "@utils": "./src/utils",
      }
    }]
  ]
};
