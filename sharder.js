const Discord = require('discord.js');
const Manager = new Discord.ShardingManager('./bear.js');
const numOfShards = parseInt(process.argv[2]);

console.log(`Starting Bearbot with ${numOfShards | '2'} shards!`);
Manager.spawn(numOfShards || 2); // 5,000 guilds by default
