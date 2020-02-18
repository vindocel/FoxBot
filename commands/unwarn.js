const Discord = require("discord.js");
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('banco.json')
const db = low(adapter)
module.exports = {
    name: "unwarn",
    aliases: [],
    category: "moderaçao",
    description: "remove o ultimo aviso dado",
    usage: `$unwarn <@usuario>`,
    run: async (client, message, args) => {
    if (message.channel.type === "dm") return;

    if(!message.member.roles.some(r=>["652592408550178827", "652592409582239744", "652592410345472050", "652592411003846697"].includes(r.id)))
        return message.reply(`<:stop:653479507650674729> Você Não tem Permissao para Usar este Comando, <:cancelar:653462167076470785>`);

    if (message.mentions.members.size === 0)
    return message.reply('<:stop:653479507650674729> **Você precisa especificar o usuario a levar o aviso** `$warn <usuario> <motivo>`')


    const users = message.mentions.members.first();
    let banco = db.get(message.guild.id).find({id: ""+users.id+""}).value()
    let bancoString = String(banco)

    if (bancoString == "undefined") {

        message.delete();
        message.channel.send("<:verificadob:654665910384066560> **"+users+" é fixa limpa**").then(d_msg => { d_msg.delete(9000);})
    } 
    if (bancoString == "undefined") return

    if (banco.aviso == 1) {
        let removeAvisoum = new Discord.RichEmbed()
            .setAuthor(`${users.user.username} | Aviso Removido`, 'https://i.ibb.co/5c0NBH2/remove-Lista.png')
            .setThumbnail(message.mentions.users.first().displayAvatarURL)
            .addField('Tag do Usuário', '`'+users.user.tag+'`', true)
            .addField('ID do Usuário', '`'+users.user.id+'`', true)
            .addField('<:regras:653621687157391370> 1° Aviso por `'+banco.avisadorum+'`', '```'+banco.motivoum+'```')
            .setColor('0x4CAF50')
            .setFooter(`Aviso removido por ${message.author.username}`, message.author.displayAvatarURL)

        client.channels.get('653608128646217752').send(removeAvisoum)
        db.get(message.guild.id).remove({id: ""+users.id+""}).write();
        message.delete();
        message.channel.send("<a:sino:654177101322256395> **"+users+" Tinha 1 aviso, que foi removido**").then(d_msg => { d_msg.delete(9000);})
    } else if (banco.aviso == 2) {
        
        let removeAvisodois = new Discord.RichEmbed()
            .setAuthor(`${users.user.username} | Aviso Removido`, 'https://i.ibb.co/5c0NBH2/remove-Lista.png')
            .setThumbnail(message.mentions.users.first().displayAvatarURL)
            .addField('Tag do Usuário', '`'+users.user.tag+'`', true)
            .addField('ID do Usuário', '`'+users.user.id+'`', true)
            .addField('<:regras:653621687157391370> 2° Aviso por `'+banco.avisadordois+'`', '```'+banco.motivodois+'```')
            .setColor('0x4CAF50')
            .setFooter(`Aviso removido por ${message.author.username}`, message.author.displayAvatarURL)

        client.channels.get('653608128646217752').send(removeAvisodois)

        db.get(message.guild.id).find({id: ""+users.id+""}).assign({
            motivodois: "nada ainda",
            avisadordois: "nada ainda",
            aviso: "1"
        }).write();
        message.channel.send("<a:sino:654177101322256395> **"+users+" Tinha 2 avisos, agora tem apenas 1**").then(d_msg => { d_msg.delete(9000);})
        message.delete();
    }

    //reload
    const commandName = ('warn')

    delete require.cache[require.resolve(`./${commandName}.js`)];

    client.commands.delete(commandName);
    const props = require(`./${commandName}.js`);
    client.commands.set(commandName, props);
    //fim reload
    //ban
    const commandNamebandois = ('ban')

    delete require.cache[require.resolve(`./${commandNamebandois}.js`)];

    client.commands.delete(commandNamebandois);
    const propsbandois = require(`./${commandNamebandois}.js`);
    client.commands.set(commandNamebandois, propsbandois);
    //fim ban
    }
    
}