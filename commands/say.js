const Discord = require("discord.js");
const bot = new Discord.Client();
module.exports = {
    name: "say",
    aliases: [],
    category: "moderaçao",
    description: "O bot reposta a frese que você quer em destaque",
    usage: `$say <msg>`,
    run: async (client, message, args) => {

    if (message.channel.type === "dm") return;
    // Role Verification (Optional)
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Somente administradores podem usar esse comando. :joy:');
        const saywhat = args.join(" ")
        if (saywhat < 1) return message.channel.send("Digite algum texto para sair no say ||Comando em `BETA`||")
        let pEmbed = new Discord.RichEmbed()
        .addField(`Mensagem`, `> ${saywhat}
        
        Author
        ||${message.author}||`)
        .setFooter(`${message.guild.name} • © Todos os direitos reservados.`)
        .setColor('0x00ff80')
        message.channel.send(pEmbed)
    
    message.delete()
    }
}