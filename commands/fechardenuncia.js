const Discord = require("discord.js");
const bot = new Discord.Client();
module.exports = {
    name: "fechardenuncia",
    aliases: [],
    category: "usuario",
    description: "Usado para fechar o ticket de denuncia que foi criado",
    usage: `$fechardenuncia para quem abriu o ticket e $fechardenuncia <@usuario> para o staff fechar a denuncia de quem abriu`,
    run: async (client, message, args) => {

    if (message.channel.type === "dm") return;
let userTickets = new Map();
let user = message.mentions.users.first()

    if(userTickets.has(message.author.id)) {
        if(message.channel.id === userTickets.get(message.author.id)) {
            message.channel.delete('Denuncia Fechada')
            .then(channel => {
                console.log(channel.name + "Denuncia deletado");
                userTickets.delete(message.author.id);
            })
            .catch(err => console.log(err));
        }
    }
    /*
     * Aqui, verificaremos o servidor para ver se foram criados tickets adicionais que o bot pode ter perdido devido a
     * travando, reiniciando, etc. Esta parte excluirá TODOS os tickets que seguem o formato de
     * "<username> s-ticket" porque foi assim que codificamos. Você pode modificar isso obviamente.
     * em breve atualizar as menssagens de canais deletados
     */
    if(message.guild.channels.some(channel => channel.name.toLowerCase() === '🆘┃ticket-' + message.author.id)) {
        message.guild.channels.forEach(channel => {
            if(channel.name.toLowerCase() === '🆘┃ticket-' + message.author.id) {
                channel.delete().then(ch => console.log('Denuncia deletado ' + ch.id))
                .catch(err => console.log(err));
            }
        });
    }
 
    if(!message.mentions.members.first()) return
    if(userTickets.has(user.id)) { // Verifique se o usuário possui um ticket, verificando se o mapa tem seu ID como chave.
        if(message.channel.id === userTickets.get(user.id)) {
            message.channel.delete('Denuncia Fechada') // Exclua o ticket.
            .then(channel => {
                console.log(channel.name + "Denuncia deletado");
                userTickets.delete(user.id);
            })
            .catch(err => console.log(err));
        }
    }
    /*
     * Aqui, verificaremos o servidor para ver se foram criados tickets adicionais que o bot pode ter perdido devido a
     * travando, reiniciando, etc. Esta parte excluirá TODOS os tickets que seguem o formato de
     * "<username> s-ticket" porque foi assim que codificamos. Você pode modificar isso obviamente.
     */
    if(message.guild.channels.some(channel => channel.name.toLowerCase() === '🆘┃ticket-' + user.id)) {
        message.guild.channels.forEach(channel => {
            if(channel.name.toLowerCase() === '🆘┃ticket-' + user.id) {
                channel.delete().then(ch => console.log('Denuncia deletado ' + ch.id))
                .catch(err => console.log(err));
            }
        });
    }
    }
}
