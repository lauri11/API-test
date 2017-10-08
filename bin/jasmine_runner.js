let Jasmine = require('jasmine');
let jasmine = new Jasmine();
let config = require('./../spec/support/jasmine.json');
let reporters = require('jasmine-reporters');

jasmine.loadConfig(config);

let junitReporter = new reporters.JUnitXmlReporter({
    savePath: __dirname + '/../reports',
    consolidateAll: false
});

jasmine.addReporter(junitReporter);

jasmine.execute();