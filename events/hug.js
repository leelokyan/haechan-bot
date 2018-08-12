exports.run = (client, message, args) => {
	message.channel.send(message.author + ' sends ' + 
	message.mentions.members.first() + ' a hug! (づ｡◕‿‿◕｡)づ');
}
//untested