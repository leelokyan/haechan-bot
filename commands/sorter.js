const fs = require('fs');
const Discord = require('discord.js');

exports.run = (client, message, args) => {

	//main sorting function. quicksort, recursive. 
	//i could probably separate this out as well? for readability? 
	

	//const currUser = userID; 
    message.channel.send('BTS sorter starting...');
    message.channel.send('Choose wisely, ' + message.author);
    
    fs.readFile('./commands/BTS.txt', 'utf8', (err, data) => {
    	if (err) console.log('Failed to read file');
    	console.log(data);
    	let members = data.split('\r\n'); 
    	console.log(members);
    	message.channel.send(data);
    	quickSort(members,members,0,members.length);

    	console.log(members);
    	
    	
    });

    let quickSort = function(names, result, start, end) {
    		console.log('in quicksort');
    		throw new Error("sldkjsld");
    		message.channel.send('in quicksort');
	    	if ((end - start) <= 1) return;
	    	let pivot = (end + start) / 2;
	    	let lcount = start;
	    	let rcount = end - 1;

	    	for (i = start; i < end; i++) {
	    		if (i === pivot) continue;
	    		message.channel.send(`${names[pivot]} or ${names[i]}?\n
	    			Enter 0 for ${names[pivot]} or 1 for ${names[i]}.`);
	    		const collector = new Discord.MessageCollector(message.channel, 
	    			m => m.author.id === message.author.id, {time: 10000 });
	    		collector.on('collect', message => {
	    			if (message.content == 1) {
	    				result[lcount] = names[i];
	    				lcount++;
	    				collector.close();
	    			} else if (message.content == 0) {
	    				result[rcount] = names[i];
	    				rcount--;
	    				collector.close();
	    			} else {

	    			}

	    		});

    		result[lcount] = names[pivot];

    		names = result; 
    		quickSort(names,result,start,pivot);
    		quickSort(names,result,pivot + 1, end);
    	}
    };

    	

}

