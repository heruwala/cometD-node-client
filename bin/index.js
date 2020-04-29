#!/usr/bin/env node

require('cometd-nodejs-client').adapt();
var lib = require('cometd');

// Create the CometD object.
var cometd = new lib.CometD();

// Optionally, obtain an extension and register it.
var TimeStampExtension = require('cometd/TimeStampExtension');
cometd.registerExtension('timestamp', new TimeStampExtension());

// Configure the CometD object.
cometd.configure({
    url: 'https://awesome-dhaval-dev-ed.my.salesforce.com/cometd/42.0/',
    requestHeaders: { Authorization: 'OAuth 00D1U000000rl1i!AQkAQAd_rN0elHm.q_1tJr.dBavJC.FAVJbSw_ElT4lfjLjFpSfPfXNQzYuIsKJVMqG6lS2zYYOhNHYYKBzChtYxvEOxTNSB'},
    appendMessageTypeToURL: false,
});

// Handshake with the server.
cometd.handshake(function(h) {
    if (h.successful) {
        // Subscribe to receive messages from the server.
        cometd.subscribe('/event/Log__e', function(m) {
            var dataFromServer = m.data;
            // Use dataFromServer.
            console.log(dataFromServer);
        });
    }
});