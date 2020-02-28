const Discord = require('discord.js')
module.exports = (client, message, dados) => {

  //atualizações do Fortnite
  if(message.channel.id === "671693230781497344"){
    try {
    const msgImagem = (message.attachments)
    let msgCrua = message.content.split('',950).join('')
    let excluirLink = msgCrua.replace(/(https?:\/\/.?)*?(discord\.(gg|io|me|li)|discordapp\.com\/(.+[a-z].+[0-9]))/gi, '')
    let removeEver = excluirLink.replace(/@everyone/gi, '')
    let msgContent = removeEver
        .replace(/<:sinalverde:612480227913760806>/gi, "<:sinalverde:672227599451160608>")
        .replace(/<:sinalazul:612480207223521310>/gi, "<:sinalazul:672228881587109889>")
        .replace(/<:sinallaranja:612480162155724802>/gi, "<:sinallaranja:672228881729847316>")
        .replace(/<:sinalvermelho:612480186444808251>/gi, "<:sinalvermelho:672228882417713153>")
        .replace(/<:download:612480028248375307>/gi, "<:download:672232328172535808>")
        .replace(/<:platMobile:532685848093655040>/gi, "<:platMobile:672251851940429853>")
        .replace(/<:platPC:532685782167715842>/gi, "<:platPC:672251852175179812>")
        .replace(/<:platSwitch:532685819480244234>/gi, "<:platSwitch:672251856667410453>")
        .replace(/<:platPs4:532685915395588097>/gi, "<:platPs4:672251856671473668>")
        .replace(/<:platXbox:532685876975894548>/gi, "<:platXbox:672251856747233296>")
        .replace(/<:vbucks:559669236784431115>/gi, "<:vbucks:683092620515475517>")
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
  //Fim atualizações do Fortnite

  //Loja Fortnite

  //data atual
  var currentDay = new Date();
  var currentDD = String(currentDay.getDate()).padStart(2, '0');
  var currentMM = String(currentDay.getMonth() + 1).padStart(2, '0'); //January is 0!
  var currentYYYY = currentDay.getFullYear();
  
  currentDay = (currentDD + '/' + currentMM + '/' + currentYYYY)
  //fim data atual

  if(message.channel.id === "682447151544139784"){
    try {
    const msgImagemLoja = (message.attachments)
    let msgCruaLoja = message.content.split('',950).join('')
    let excluirLinkLoja = msgCruaLoja.replace(/(https?:\/\/.?)*?(discord\.(gg|io|me|li)|discordapp\.com\/(.+[a-z].+[0-9]))/gi, '')
    let msgContentLoja = excluirLinkLoja.replace(/@everyone/gi, '')
    if(typeof msgImagemLoja.array()[0] !== "undefined") {
        let embedLoja = new Discord.RichEmbed()
               .setTitle(`💡 ${currentDay}`)
               .setImage(msgImagemLoja.array()[0].url)
               .setColor('0x39b9fa')
               .setFooter(`${client.guilds.get('652586772898775041')}`)

      client.channels.get('652592478373019648').send('<@&683095900943679488>', embedLoja)
    } else {
      client.channels.get('652592478373019648').send('<@&683095900943679488> '+'\n'+ msgContentLoja)
    }
  } catch (err) {
    console.log(err.code)
   }
  }
  //Fim loja Fortnite


  if (message.author.bot) return;

  if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)){
    return message.reply("Olá meu prefixo é `$`")}

    //comando apagar convites de servidor
    const crase = ('`')
    const trescrases = ('```')
    let reacao = message.content.split('',950).join('')
    let Aviso = new Discord.RichEmbed()
  
    .setTitle(`**<:firewall:653616767738052627> Mensagem | INDEVIDA <:firewall:653616767738052627>**`)
    .setDescription(`Usuario tentou enviar um convite no canal <#${message.channel.id}>`)
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
