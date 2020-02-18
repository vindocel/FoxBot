const Discord = require("discord.js");
module.exports = {
  name: "avatar",
  aliases: [],
  category: "usuario",
  description: "Baixar seu avatar ou baixar o avatar do usuario mencionado",
  usage: `$avatar ou $avatar <@usuario>`,
  run: async (client, message, args) => {

  if (message.channel.type === "dm") return;

    let member = message.mentions.members.first()

    let pEmbednulo = new Discord.RichEmbed()
    .setTitle(`<:image:653462486544023552> ${message.author.username}`)   
    .setDescription(`**Clique [aqui](${message.author.avatarURL}) para baixar a imagem!**`)
    .setImage(message.author.avatarURL)
    .setFooter(`${message.guild.name} • © Todos os direitos reservados.`)
    .setColor("RANDOM")

    if(!member)
      return message.reply(pEmbednulo)

    let pEmbed2 = new Discord.RichEmbed()

    .setTitle(`<:image:653462486544023552> ${member.user.username}`)   
    .setDescription(`**Clique [aqui](${member.user.avatarURL}) para baixar a imagem!**`)
    .setImage(member.user.avatarURL)
    .setFooter(`${message.guild.name} • © Todos os direitos reservados.`)
    .setColor("RANDOM")

    message.channel.send(`${message.author}`,pEmbed2)
  }
}