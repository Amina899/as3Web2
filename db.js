const { Client } = require('cassandra-driver');

const client = new Client({
    contactPoints: ['localhost'], // Use 'localhost' since ScyllaDB is running in a Docker container
    localDataCenter: 'datacenter1',
    keyspace: 'your_keyspace', // Replace with your keyspace name
});

module.exports = client;

