var development = {
    collectPeriod: 1000,
    caching: 'memory',
    db:{
        host: 'localhost',
        port: 27017,
        database: 'smyrna',
        username: 'smyrna',
        password: 'smyrna'
    },
    log: {
      tracking: false,
      geofencing: false,
      memory: false,
      cache: false
    }
};

var production = {
    collectPeriod: 1000,
    cache: 'memory',
    db:{
        host: 'localhost',
        port: 27017,
        database: 'smyrna',
        username: 'smyrna',
        password: 'smyrna'
    },
    log: {
      tracking: false,
      geofencing: false,
      memory: false,
      cache: false
    }
};

var environments = {};
environments['development'] = development;
environments['production'] = production;

module.exports = environments[process.env.NODE_ENV || "development"];
