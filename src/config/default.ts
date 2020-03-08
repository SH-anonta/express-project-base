module.exports = {
  webApp: {
    host: '0.0.0.0',
    port: 3000,
  },
  logging: {
    defaultLogLevel: 'debug',
    logFileDir: '../logs/',
    sinks: {
      console: {
        enabled: true,
        logLevel: 'error',
      },
      file: {
        enabled: true,
        logLevel: 'info',
      }
    }
  }
};
