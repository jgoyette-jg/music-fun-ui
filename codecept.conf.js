exports.config = {
  tests: './ac_tests/*_ac_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://musicfun.kubernetesclustertest.com',
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