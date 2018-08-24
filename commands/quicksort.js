function quickSort(names, result, start, end) {
		console.log('in quicksort');
		
		message.channel.send('in quicksort');
		throw new Error("sldkjsld");
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