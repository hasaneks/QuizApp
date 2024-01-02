module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['react-native-reanimated/plugin'],
    [
      'module-resolver',
      {
        root: ['./src/'],
        alias: {
          assets: './src/assets',
          components: './src/components',
          container: '.src/container',
          mockupData: './src/mockupData',
          navigation: './src/navigation',
          pages: './src/pages',
          redux: '.src/redux',
          style: './src/style',
          utils: './src/utils',
          features: './src/redux/features',
          icons: './src/assets/svg'
        }
      }
    ]
  ]
}
