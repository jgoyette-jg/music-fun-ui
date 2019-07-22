exports.config = {
  tests: './ac_tests/*_ac_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:3000',
      show: false,
      chrome: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'music-fun'
}