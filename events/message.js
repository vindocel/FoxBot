const Discord = require('discord.js')
module.exports = (client, message, dados) => {

  if(message.channel.id === "671693230781497344"){
    try {
    const msgImagem = (message.attachments)
    let msgCrua = message.content.split('',950).join('')
    let excluirLink = msgCrua.replace(/(https?:\/\/.?)*?(discord\.(gg|io|me|li)|discordapp\.com\/(.+[a-z].+[0-9]))/gi, '')
    let msgContent = excluirLink.replace(/@everyone/gi, '')
    if(typeof msgImagem.array()[0] !== "undefined") {
      let enviarImagem = new Discord.Attachment(msgImagem.array()[0].url)
      client.channels.get('672284677528354836').send('<@&672285040448897067>' +'\n'+ msgContent, enviarImagem)
    } else {
      client.channels.get('672284677528354836').send('<@&672285040448897067> '+'\n'+ msgContent)
    }
  } catch (err) {
    console.log(err.code)
   }
  }

  if (message.author.bot) return;

  if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)){
    return message.reply("Olá meu prefixo é `$`")}

    //comando apagar convites de servidor
    const crase = ('`')
    const trescrases = ('```')
    let reacao = message.content.split('',950).join('')
    let Aviso = new Discord.RichEmbed()
  
    .setTitle(`**<:firewall:653616767738052627> Mensagem | INDEVIDA <:firewall:653616767738052627>**`)
    .setDescription(`Usuario tento enviar um convite no canal <#${message.channel.id}>`)
    .setThumbnail(message.author.AvatarURL)
    .addField("**tag**", `${message.author.tag}`, true)
    .addField("**id**", `${crase}<@${message.author.id}>${crase}`, true)
    .addField("**<:msg:653478742072754177>Messagem Apagada**", `${trescrases}${reacao}${trescrases}`)
    .setColor("0x3b88c3")
    .setFooter(`${client.guilds.get('652586772898775041')} • © Todos os direitos reservados.`, client.guilds.get('652586772898775041').iconURL)

    if (message.content.search(/(?:https?:\/\/)?(?:discordapp\.com\/invite|discord\.io|discord\.gg)\/\w+/i) > -1) {
      if(message.member.roles.has("652592408550178827")) return 
        message.delete()
        return message.reply("**<:stop:653479507650674729> Você não Possui `Permissão` para enviar convites aqui**"),
        client.channels.get('653608128646217752').send(Aviso)
      }
    //comando apagar convites de servidor
  if (message.content.indexOf(client.config.prefix) !== 0) return;

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command);

  if (!cmd) return;

  cmd.run(client, message, args);
};