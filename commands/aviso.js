const Discord = require("discord.js");
module.exports = {
    name: "aviso",
    aliases: [],
    category: "moderaçao",
    description: "Usado para emitir um aviso em um canal expecifico",
    usage: `$aviso <msg>`,
    run: async (client, message, args) => {

    if (message.channel.type === "dm") return;
        message.delete()

//boloquio por cargo

if(!message.member.roles.some(r=>["652592408550178827", "652592409582239744", "652592410345472050", "652592411003846697"].includes(r.id)))
        return message.reply(`<:stop:653479507650674729> Você Não tem Permissao para Usar este Comando, <:cancelar:653462167076470785>`);
    
    let reason2 = args.slice(0)
    const reason = args.join(' ').slice(0, 950);

    if(!reason2){
        message.reply("<:stop:653479507650674729> Use o formato ``$aviso <mensagem>`` ")
        return
    }

        const serve = message.guild.name;

//divisor


let avisos = new Discord.RichEmbed()

.addField(`<a:sino:654177101322256395> AVISO <a:sino:654177101322256395>`, `${reason}

Author
||${message.author}||`)
.setFooter(`${serve} • © Todos os direitos reservados.`)
.setColor('0xffd100')

client.channels.get('652592430754955302').send('@everyone', avisos) // ID do Canal

    }
}