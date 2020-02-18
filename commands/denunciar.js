const Discord = require("discord.js");
const bot = new Discord.Client();
module.exports = {
    name: "denunciar",
    aliases: [],
    category: "usuario",
    description: "Usado para abrir um ticket privado para fazer uma denuncia.",
    usage: `$denunciar`,
    run: async (client, message, args) => {

    if (message.channel.type === "dm") return;
    let userTickets = new Map();

    if (userTickets.has(message.author.id) || 
    message.guild.channels.some(channel => channel.name.toLowerCase() === '🆘┃ticket-' + message.author.id)) {
        const idCanal = message.guild.channels.find(channel => channel.name.toLowerCase() === `🆘┃ticket-${message.author.id}`);
        message.author.send(`<:stop:653479507650674729> **Você ja esta com um ticket de denuncia em Aberto ----> <#${idCanal.id}>**`);
    } 
    else {
        let guild = message.guild;
  
        guild.createChannel(`🆘┃ticket-${message.author.id}`, {
            type: 'text',
            permissionOverwrites: [
                {
                    allow: 'VIEW_CHANNEL',
                    id: message.author.id
                },
                {
                    deny: 'VIEW_CHANNEL',
                    id: guild.id
                },
                {
                    allow: 'VIEW_CHANNEL',
                    id: '652592411003846697'
                }
            ]
        }).then(ch => {
            userTickets.set(message.author.id, ch.id);
            ch.send("<a:sino:654177101322256395> **"+message.author+" Aguarde ate que um <@&652592411003846697> venha analisar sua denuncia** @everyone")
            ch.setTopic("<:regras:653621687157391370> **Para fechar essa denuncia use o comando **{ ***$fechardenuncia*** }")
        }).catch(err => console.log(err));
    }
    }

}