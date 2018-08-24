exports.run = (client, message, args) => {
	message.channel.send('do you love me?')
	.then((msg) => {
		return message.channel.awaitMessages(m => m.author.id === message.author.id, {max:1});
	})
	.then((collected) => {
		if (collected.first() == "yes") {
			message.channel.send("I love you, too!");
		} else {
			message.channel.send('ok :(');
		}
	})
	.catch(console.error);
}