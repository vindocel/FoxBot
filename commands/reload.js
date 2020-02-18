module.exports = {
  name: "",
  description: "",
  run: async (client, message, args) => {
  if (message.channel.type === "dm") return;
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Somente administradores podem usar esse comando. :joy:');
  if (!args || args.length < 1)
    return message.reply("⚠️ Escreva o comando que deseja dar reload!");

    const commandName = args[0].toLowerCase();

    if(!client.commands.has(commandName)) {
      return message.reply("⚠️ Comando inexistente!");
    }

    delete require.cache[require.resolve(`./${commandName}.js`)];

    client.commands.delete(commandName);
    const props = require(`./${commandName}.js`);
    client.commands.set(commandName, props);
    message.reply(`<:settings:653462170939686932> O comando ${commandName} foi recarregado com sucesso! <:confirmar:653462167139385374> `);
  }
};