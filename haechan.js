const Discord = require ('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const config = require("./auth.json");
const prefix = config.prefix; 

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (message) => {
	if (message.author.bot) return; 
	if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift(); 
       
        //args = args.splice(1);
        try {
            let commandFile = require(`./commands/${cmd}.js`);
            commandFile.run(client,message,args);
        } catch (err) 
        {
            console.error(err);
        }
     }
});

client.on("error", (e) => console.error(e));

client.login(config.token);