const PLACEHOLDER = '|__PLACEHOLDER__|';

const replaceConfig = [
  {
    name: 'App name',
    symbol: '<%= appName %>',
    replace: '<string name="app_name">Blog</string>',
    replacement: `<string name="app_name">${PLACEHOLDER}</string>`
  },
  {
    name: 'Target SDK version',
    symbol: '<%= androidTargetSdkVersion %>',
    replace: 'targetSdk : 29',
    replacement: `targetSdk : ${PLACEHOLDER}`
  },
  {
    name: 'Min SDK version',
    symbol: '<%= androidMinSdkVersion %>',
    replace: 'minSdkVersion 23',
    replacement: `minSdkVersion ${PLACEHOLDER}`
  }
];

const createReplacement = config => {
  return config.replacement.replace(PLACEHOLDER, config.symbol);
};

module.exports = {
  replaceConfig,
  createReplacement
};