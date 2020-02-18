const Discord = require('discord.js')
module.exports = {
  name: "kick",
  aliases: [],
  category: "moderaçao",
  description: "Usado para expulsar um usuario que tenha quebrado alguma regra do servidor",
  usage: `$kick <@user> <Motivo>`,
  run: async (client, message, args) => {

  if (message.channel.type === "dm") return;
  if (!message.member.hasPermission('KICK_MEMBERS')) 
  return message.channel.send('<:stop:653479507650674729> Você não tem Permissão para usar esse<:cancelar:653462167076470785> ');
    if (!message.guild.me.hasPermission("KICK_MEMBERS"))
    return message.reply("<:stop:653479507650674729> Não Posso Expulsar esse Usuario<:cancelar:653462167076470785> ");    

    message.delete()

    if (message.mentions.members.size === 0)
      return message.reply("<:stop:653479507650674729> Você deve mencionar o usuário a levar Kick `$kick <@user> <Motivo>` <:settings:653462170939686932>");    

      if(args.slice(1).join(' ') >= 0)
      return message.reply("<:stop:653479507650674729> Nenhum Motivo fornecido `$kick <@user> <Motivo>` <:settings:653462170939686932>");
  
    let reason = args.slice(1).join(' ')
    const avataruser = message.mentions.users.first().displayAvatarURL;
    const serve = message.guild.name;
    const canal = ("<#652592429047873546>") //canal 📵┃regras  
    const crase = ('`')
    const kickMember = message.mentions.members.first();
  
    let pEmbed = new Discord.RichEmbed()
  
    .setAuthor(`${kickMember.user.username} | Expulso(a)`, "https://i.ibb.co/SxvX57X/Sair.png")
    .setThumbnail(avataruser)
    .setDescription(`**O usuario foi Expulso por ${message.author}**`)
    .addField("**Tag do Usuário**", `${crase}${kickMember.user.tag}${crase}`, true)
    .addField("**ID do Usuário**", `${crase}<@${kickMember.user.id}>${crase}`, true)
    .setColor("0xED3237")
    .addField("<:msg:653478742072754177> **Motivo**", '```'+reason+'```') // aqui seria ${reason}
    .setFooter(`${serve} • © Todos os direitos reservados.`, message.guild.iconURL)
    .setTimestamp()


    kickMember.kick(args.slice(1).join(" ")).then(member => {
      message.channel.send(`**<a:Yess:653462184990605322> ${crase}${kickMember.user.tag}${crase} Foi Expulso(a) por não obedecer as ${canal}, para mais detalhes entre na sala <#652592433619795969>**`);
      client.channels.get('652592433619795969').send(pEmbed)

    });
  }
  };