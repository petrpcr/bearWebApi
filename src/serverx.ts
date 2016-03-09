/// <reference path='../declarations/node.d.ts' />
/// <reference path='../declarations/ws.d.ts' />
/// <reference path='./models/models.ts' />

'use strict';

import WebSocket = require('ws');
import md = require('./models/models');
//import http = require("http");
import * as http from "http";

var port: number = process.env.PORT || 3000;
var WebSocketServer = WebSocket.Server;
var server = new WebSocketServer({ port: port });

server.on('connection', ws => {
	ws.on('message', message => {
		try {
			var userMessage: md.UserMessage = new md.UserMessage(message);
			broadcast(JSON.stringify(userMessage));
		} catch (e) {
			console.error(e.message);
		}
	});
});

function broadcast(data: string): void {
	server.clients.forEach(client => {
		client.send(data);
	});	
};

console.log('Server is running on port', port);