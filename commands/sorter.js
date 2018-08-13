const fs = require('fs');

exports.run = (client, message, args) => {
	//const currUser = userID; 
    message.channel.send('BTS sorter starting...');
    message.channel.send('Choose wisely, ' + message.author);
    
    fs.readFile('./commands/BTS.txt', 'utf8', (err, data) => {
    	if (err) console.log('Failed to read file');
    	console.log(data);
    	let members = data.split('\r\n'); 
    	console.log(members);
    });
}