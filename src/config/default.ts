export default {
  webApp: {
    host: '0.0.0.0',
    port: 3000,
  },
  logging: {
    defaultLogLevel: 'debug',
    logToConsole: false,
    logFileDir: '../logs/',
    sinks: {
      console: {
        enabled: true,
        logLevel: 'error',
      },
      file: {
        enabled: true,
        logLevel: 'verbose',
      }
    }
  }
};

// -e ts --exec
