require('babel-register');
const seleniumPath = require('selenium-server').path;
const chromedriverPath = require('chromedriver').path;
const config = require('../../config');

const BASEURL = 'http://localhost:';

// http://nightwatchjs.org/guide#settings-file
module.exports = {
  src_folders: ['test/e2e/specs'],
  output_folder: 'test/e2e/reports',
  custom_assertions_path: ['test/e2e/custom-assertions'],

  selenium: {
    start_process: true,
    server_path: seleniumPath,
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': chromedriverPath,
    },
  },

  test_settings: {
    default: {
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      globals: {
        devServerURL: BASEURL + (process.env.PORT || config.dev.port),
      },
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
    },
  },
};
