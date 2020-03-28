module.exports = {
  webApp: {
    host: '0.0.0.0',
    port: 3000,
  },
  database: {
    host: 'maindb',
    port: 5432,
    userName: 'postgres',
    password: '123'
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
    },
    childLoggers: {
      typeOrm: {
        enabled: true
      },
      requestLogger: {
        enabled: true
      }
    }
  }
};
