module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['react-native-reanimated/plugin'],
    [
      'module-resolver',
      {
        root: ['./src/'],
        alias: {
          components: './src/components',
          pages: './src/pages',
          assets: './src/assets',
          style: './src/style',
          icons: './src/assets/svg',
          mockupData: './src/mockupData',
          helpers: './src/helpers',
          features: './src/redux/features',
          navigation: './src/navigation',
          hooks: './src/hooks',
          models: './src/models'
        }
      }
    ]
  ]
}
