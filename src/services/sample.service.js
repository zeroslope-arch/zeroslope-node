var SampleModel = require("../models/sample.model");

const service = {};

// ==================================================

service.list = () => Promise.resolve([]);

service.read = recordId => Promise.resolve({});

service.create = model => Promise.resolve({});

service.update = (recordId, model) => Promise.resolve({});

service.delete = recordId => Promise.resolve({});

// ==================================================

module.exports = service;
