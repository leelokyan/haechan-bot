const fs = require('fs');
const Discord = require('discord.js');

exports.run = (client, message, args) => {

	//main sorting function. quicksort, recursive. 
	//i could probably separate this out as well? for readability? 
	

	const currUser = message.author; 
    message.channel.send('BTS sorter starting...')
    	.then((message) => {
			console.log(`Sent message ${message.content}`);
			return message.channel.send('Choose wisely, ' + currUser);    				
		})	
    	.then((message) => {
    		console.log(`Sent message ${message.content}`);
    		return fs.readFileSync('./commands/BTS.txt', 'utf8');
    	})
    	.then((data) => {
    		console.log(data);
	    	let members = data.split('\r\n'); 
	    	console.log(members);
	    	//message.channel.send(members);
	    	//quickSort(members,members,0,members.length);
	    	return members; 
    	})
    	.then((members) => {
    		return quickSort(members,members,0,members.length);
    	})
    	.then(success => console.log(success)); 

    function hi(array) {
    	message.channel.send(array)
    		.then(message => console.log(message))
    		.catch(console.error);
    };

    async function quickSort(names, result, start, end) {
		console.log('in quicksort');

    	if ((end - start) <= 1) return;
    	let pivot = (end + start) / 2;
    	let lcount = start;
    	let rcount = end - 1;

    	for (i = start; i < end; i++) {
    		if (i === pivot) continue;
    		message.channel.send(`${names[pivot]} or ${names[i]}?\n
    			Enter 0 for ${names[pivot]} or 1 for ${names[i]}.`)
    		.then((msg) => {
    			let collectedMsg; 
    			const collector = new Discord.MessageCollector(message.channel, 
    				m => m.author.id === message.author.id, {time: 10000 });
    			collector.on('collect', message => {
    				collectedMsg = message;
	    			
    			});
    			return collectedMsg;
    		})
    		.then(message => {
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
    			return message.content;
    		})
    		.then((content) => {
    			result[lcount] = names[pivot];
    			names = result;
    			quickSort(names,result,start,pivot)
    			.then((success) => {
    				if (success)
    				{
    					quickSort(names,result,pivot + 1, end);
    				}
    				else {
    					return false;
    				}
    			})
    			 
    		})
    		.catch((err) => {return false;})
    		
		}
		return true;
    };
    
    

    /* fs.readFile('./commands/BTS.txt', 'utf8', (err, data) => {
    	if (err) console.log('Failed to read file');
    	console.log(data);
    	let members = data.split('\r\n'); 
    	console.log(members);
    	message.channel.send(data);
    	//quickSort(members,members,0,members.length);

    	console.log(members);
    	
    	hi(); 
	    message.channel.send("done");
	    console.log('done');
    });*/

}

