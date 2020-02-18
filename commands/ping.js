module.exports = {
	name: "ping",
	aliases: [],
	category: "usuario",
	description: "Usado para mostra seu ping e o do bot com o serve",
	usage: `$ping`,
	run: async (client, message, args) => {
    const ms = await message.channel.send("Ping?");
	const clientms = ms.createdTimestamp - message.createdTimestamp;
	ms.edit('📡 Seu ping é: ' + clientms + 'ms / 🖥 Ping do bot com Server:' + Math.round(client.ping) + 'ms');
	}
}