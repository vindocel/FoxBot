const Discord = require("discord.js");
const bot = new Discord.Client();
module.exports = {
    name: "help",
    aliases: [],
    category: "usuario",
    description: "usado para ver detalhes sobre comandos",
    usage: `$help <comando>`,
    run: async (client, message, args) => {

        const crase = ('`')
        const serve = client.guilds.get('652586772898775041');

        let embedTodos = new Discord.RichEmbed()

            .setTitle('<:Terminal:654661251753836546> **Comandos  Help!**')
            .setDescription('**Para detalhes sobre os Comandos abaixo use `$help <comando>`**')
            .addField('<:msg:653478742072754177> **Comandos:**', `
🟡 ${crase}$anunciar${crase} **Comando Exclusivo para usuarios Vip**

🟢 ${crase}$regras${crase} **Comando para todos os usuarios**

🟢 ${crase}$ping${crase} **Comando para todos os usuarios**

🟢 ${crase}$denunciar${crase} **Comando para todos os usuarios**

🟢 ${crase}$fechardenuncia${crase} **Comando para todos os usuarios**

🟢 ${crase}$m${crase} **Comando para todos os usuarios**

🟢 ${crase}$avatar${crase} **Comando para todos os usuarios**

🔴 ${crase}$apagar${crase} **Comando Exclusivo da Staff**

🔴 ${crase}$aviso${crase} **Comando Exclusivo da Staff**

🔴 ${crase}$ban${crase} **Comando Exclusivo da Staff**

🔴 ${crase}$unban${crase} **Comando Exclusivo da Staff**

🔴 ${crase}$kick${crase} **Comando Exclusivo da Staff**

🔴 ${crase}$mute${crase} **Comando Exclusivo da Staff**

🔴 ${crase}$say${crase} **Comando Exclusivo da Staff**

🔴 ${crase}$warn${crase} **Comando Exclusivo da Staff**

🔴 ${crase}$unwarn${crase} **Comando Exclusivo da Staff**`)
            .setFooter(`${serve} • © Todos os direitos reservados.`, serve.iconURL)

        if(args.slice(0).join(' ') >= 0) {
          return message.reply(embedTodos),
          message.delete();
        }

        const commandName = args[0].replace(/\$|<|>/gi, '').toLowerCase();;
        if(!client.commands.has(commandName)) {
          return message.reply("<:stop:653479507650674729> **Comando inexistente!**");
        }
    

        let craseTres = ('```');
        let comando = require(`./${commandName}`)
        let name = comando.name
        let description = comando.description
        let category = comando.category
        let usage = comando.usage

        let embemdSVip = new Discord.RichEmbed()
              .setTitle(`<:Terminal:654661251753836546> **Help Comando!**`)
              .addField('<:ABC:666664595578159104> **Nome:**', `${craseTres}${name}${craseTres}`, true)
              .addField('<:Ticket:663516789111652372> **Categoria:**', `${craseTres}${category}${craseTres}`,true)
              .addField('<:msg:653478742072754177> **Descrição:**', `${craseTres}${description}${craseTres}`)
              .addField('<:settings:653462170939686932> **Como Usar:**', `${craseTres}${usage}${craseTres}`)
              .setColor('0xffd100')
              .setFooter(`${serve} • © Todos os direitos reservados.`, serve.iconURL)

        let embemdUsuario = new Discord.RichEmbed()
              .setTitle(`<:Terminal:654661251753836546> **Help Comando!**`)
              .addField('<:ABC:666664595578159104> **Nome:**', `${craseTres}${name}${craseTres}`, true)
              .addField('<:Ticket:663516789111652372> **Categoria:**', `${craseTres}${category}${craseTres}`,true)
              .addField('<:msg:653478742072754177> **Descrição:**', `${craseTres}${description}${craseTres}`)
              .addField('<:settings:653462170939686932> **Como Usar:**', `${craseTres}${usage}${craseTres}`)
              .setColor('0x0ebe45')
              .setFooter(`${serve} • © Todos os direitos reservados.`, serve.iconURL)

        let embemdStaff = new Discord.RichEmbed()
              .setTitle(`<:Terminal:654661251753836546> **Help Comando!**`)
              .addField('<:ABC:666664595578159104> **Nome:**', `${craseTres}${name}${craseTres}`, true)
              .addField('<:Ticket:663516789111652372> **Categoria:**', `${craseTres}${category}${craseTres}`,true)
              .addField('<:msg:653478742072754177> **Descrição:**', `${craseTres}${description}${craseTres}`)
              .addField('<:settings:653462170939686932> **Como Usar:**', `${craseTres}${usage}${craseTres}`)
              .setColor('0xd31a09')
              .setFooter(`${serve} • © Todos os direitos reservados.`, serve.iconURL)
      
        if(category === 'SVip+') {

          return message.channel.send(embemdSVip),
          message.delete();

        } else if(category === 'usuario') {

          return message.channel.send(embemdUsuario),
          message.delete();

        } else if (category === 'moderaçao') {

          return message.channel.send(embemdStaff),
          message.delete();

        }
    
    }
}