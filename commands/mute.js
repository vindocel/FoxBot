const Discord = require("discord.js");
const ms = require("ms");
module.exports = {
    name: "mute",
    aliases: [],
    category: "moderaçao",
    description: "Usado para silenciar um usuario que tenha quebrado alguma regra",
    usage: `$mute <@user> <time>`,
    run: async (client, message, args) => {

    if (message.channel.type === "dm") return;
    if (!message.member.hasPermission('MANAGE_ROLES')) 
    return message.channel.send('<:stop:653479507650674729> Você não tem Permissão para usar esse Comando <:cancelar:653462167076470785>');
      if (!message.guild.me.hasPermission("MANAGE_ROLES"))
      return message.reply("<:stop:653479507650674729> Não Posso mutar esse Usuario <:cancelar:653462167076470785>");    

      message.delete()

      let virgula = ('`')
      let trescrases = ('```')
      let msg = (`<:stop:653479507650674729> Comando invalido, modo correto <:settings:653462170939686932> ${virgula}$mute <@user> <time>${virgula}

<:tempo:653688714840506378>**Tempo's validos** ${trescrases}10s, 20s, 30s, 40s, 50s , 1m, 2m, 3m, 4m, 5m, 6m, 7m, 10m, 20m, 30m, 40m, 50m, 1h, 2h, 3h, 4h, 5h, 6h, 7h, 8h, 10h, 15h, 1d, 2d, 3d${trescrases}
<:msg:653478742072754177>**Referências** ${trescrases}s > segundos, m > minutos, h > horas, d > dias${trescrases}`)
     
    

      if (message.mentions.members.size === 0)
      return message.reply("<:stop:653479507650674729> Você deve mencionar o usuário a ser silenciado <:settings:653462170939686932>`$mute <@user> <time>`");
      if(args[1] == undefined) return message.reply(msg)
  
      let argumento = args[1];
      let time = argumento.split('',3).join('')
      let n = time.search(/((?:10s|20s|30s|40s|50s|60s|01m|02m|03m|04m|05m|6m|7m|10m|20m|30m|40m|50m|60m|1h|2h|3h|4h|5h|6h|7h|8h|10h|15h|1d|2d|3d))/g)
  
      if(n !== 0) return message.reply(msg)
  

    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if(!person) return  message.reply("Usuario invalido " + person)
 
            let mainrole = message.guild.roles.find(role => role.name === "Carneirinho");
            let role = message.guild.roles.find(role => role.name === "Silenciado");
            let crase = ('`')
 
            if(!role) return message.reply("Não consegui encontrar o cargo @Silenciado")

            if(!time){
                return message.reply("Especifique o <:tempo:653688714840506378>`tempo` para o mute <:silenciar:653786958874673173>");
            }
 
            person.removeRole(mainrole.id)
            person.addRole(role.id);
 
            message.channel.send(`<:silenciar:653786958874673173> ${person.user} Foi Mutado por <:tempo:653688714840506378>**${crase}${ms(ms(time))}${crase}**`)

        //embed com aviso
            let Avisoum = new Discord.RichEmbed()
                .setTitle(`**<:silenciar:653786958874673173> Mutado**`)
                .setThumbnail(person.user.displayAvatarURL)
                .setDescription('**Foi mutado em `'+ms(ms(time))+'`**')
                .addField("**Tag**", '```'+person.user.tag+'```', true)
                .addField("**ID**", '```'+person.user.id+'```', true)
                .setColor("RED")
                .setFooter(`Silenciado por ${message.author.username}`, message.author.displayAvatarURL)
                .setTimestamp()
        //embed com aviso

            client.channels.get('653608128646217752').send(Avisoum)
            setTimeout(function(){

        //embed com aviso
            let Avisodois = new Discord.RichEmbed()
                .setTitle(`**🔉 Desmutado**`)
                .setThumbnail(person.user.displayAvatarURL)
                .setDescription('**Tinha sido mutado em `'+ms(ms(time))+'`**')
                .addField("**Tag**", '```'+person.user.tag+'```', true)
                .addField("**ID**", '```'+person.user.id+'```', true)
                .setColor("0x4CAF50")
                .setFooter(`Silenciado por ${message.author.username}`, message.author.displayAvatarURL)
                .setTimestamp()
                .setFooter(`${message.guild.name} • © Todos os direitos reservados.`, message.guild.iconURL)
        //embed com aviso
               
                person.addRole(mainrole.id)
                person.removeRole(role.id);
                client.channels.get('653608128646217752').send(Avisodois)
            }, ms(time));
        }
}