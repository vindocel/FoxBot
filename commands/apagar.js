const Discord = require('discord.js')
module.exports = {
    name: "apagar",
    aliases: [],
    category: "moderaçao",
    description: "usado para apagar as menssagens do canal",
    usage: `$apagar <valor>`,
    run: async (client, message, args) => {
    
    if (message.channel.type === "dm") return;

    if (!message.member.hasPermission('MANAGE_MESSAGES')) 
    return message.channel.send('<:stop:653479507650674729> Você não tem Permissão para usar esse Comando <:cancelar:653462167076470785>');
  if (!message.guild.me.hasPermission("MANAGE_MESSAGES"))
      return message.reply("<:stop:653479507650674729> Estou sem permissao <:cancelar:653462167076470785>");
  
    let user = message.mentions.users.first()
    let reasonReal = parseInt(args[0])
    let addmaisUm = 1
    let reason = (reasonReal + addmaisUm)
    const serve = message.guild.name;

    if(args >= 0 && args <= 0 ) 
    return message.reply("É necessario colocar um numero de 1 à 99 <:settings:653462170939686932>")
    if (isNaN(reasonReal))
    return message.channel.send("É necessario colocar um numero de 1 à 99 <:settings:653462170939686932>")
    if (reasonReal < 1)
    return message.channel.send("esse numero é muito baixo <:settings:653462170939686932>")
    if (reasonReal > 99)
    return message.channel.send("esse numero é muito alto <:settings:653462170939686932>")


    //começo
    let massagem ="";
    let viagem ="";
    let pEmbed = new Discord.RichEmbed()
        
	.setAuthor('Limpeza', 'https://i.ibb.co/GHrSmFR/vasolra.png')
	.addField("Mensagens Apagadas", `${reasonReal}`, true)
	.addField("Chat Limpo Por", `${message.author}`, true)
	.setFooter(`${serve} • © Todos os direitos reservados.`)
	.setColor("0x6597DE")

    message.channel.fetchMessages({
        limit: reason,
    }).then((messages) => {
            try {
                if (!user) {
                    massagem = messages.filter(m => m.author.id).array().slice(0, reason)
                    viagem = massagem.filter(a => a.pinned === false)
                }
                    message.channel.bulkDelete(viagem).then(async function (r) {

                    message.channel.send(pEmbed).then(d_msg => { d_msg.delete(5000);});
                }).catch(erro => {
                    return message.reply("<:stop:653479507650674729> Você não pode excluir mensagens com mais de 14 dias").then(d_msg => { d_msg.delete(9000);}),
                    message.delete();

                })
            } catch (err) {
                console.log(err.code)
                return message.reply("ocorreu um erro...")
            }
        })
    //fim

    }
}
