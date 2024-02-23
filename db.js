const { Client } = require('scylladb-driver');

// ScyllaDB Cloud connection
const contactPoints = [
    'node-0.gce-us-east-1.4a038f4b6f7dcc6f7c25.clusters.scylla.cloud',
    'node-1.gce-us-east-1.4a038f4b6f7dcc6f7c25.clusters.scylla.cloud',
    'node-2.gce-us-east-1.4a038f4b6f7dcc6f7c25.clusters.scylla.cloud'
]; // Replace with your cluster endpoint
const username = 'scylla';
const password = 'gnbLq8UKijd3X1r';

// Create a new instance of the ScyllaDB client
const client = new Client({
    contactPoints,
    credentials: { username, password }
});

module.exports = client;
