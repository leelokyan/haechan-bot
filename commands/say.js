exports.run = (client, message, args) => {
	const sayMessage = args.join(" ");
	const msgchannel = message.channel;
    message.delete().catch(O_o=>{});
    msgchannel.send(sayMessage);
}
//changed base code to add delete cmd, might not work. 