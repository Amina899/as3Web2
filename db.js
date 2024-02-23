const { Client } = require('cassandra-driver');

const client = new Client({
    contactPoints: ['2.132.176.53/32'], // Replace with the IP addresses of your ScyllaDB nodes
    localDataCenter: 'datacenter1', // Replace with your datacenter name
    keyspace: 'my_keyspace', // Replace with your keyspace name
    credentials: { username: 'scylla', password: 'gnbLq8UKijd3X1r' } // Replace with your credentials
});
