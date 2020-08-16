const Discord = require("discord.js");
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('banco.json')
const db = low(adapter)
module.exports = {
    name: "warn",
    aliases: [],
    category: "moderaçao",
    description: "adiciona um aviso vinculado ao usuario que tenha descumprido alguma regra",
    usage: `$warn <@usuario> <motivo>`,
    run: async (client, message, args) => {
    if (message.channel.type === "dm") return;

    if(!message.member.roles.some(r=>["652592408550178827", "652592409582239744", "652592410345472050", "652592413420027926", "652592411003846697"].includes(r.id)))
        return message.reply(`<:stop:653479507650674729> Você Não tem Permissao para Usar este Comando, <:cancelar:653462167076470785>`);

    if (message.mentions.members.size === 0)
    return message.reply('<:stop:653479507650674729> **Você precisa especificar o usuario a levar o aviso** `$warn <usuario> <motivo>`')
    if(args.slice(1).join(' ') >= 0)
      return message.reply("<:stop:653479507650674729> **Voce precisa fornecer um motivo** `$warn <usuario> <motivo>`")

    const users = message.mentions.members.first();
    let reason = args.slice(1).join(' ')
    let banco = db.get(message.guild.id).find({id: ""+users.id+""}).value()
    let bancoString = String(banco)

    if (bancoString == "undefined") {

        db.get(message.guild.id).push({
            id: ""+users.id+"",
            nome: ""+users.user.tag+"",
            motivoum: ""+reason+"",
            motivodois: "nada ainda",
            avisadorum: ""+message.author.username+"",
            avisadordois: "nada ainda",
            aviso: "1"
        }).write();

        let removeAvisoum = new Discord.RichEmbed()
            .setAuthor(`${users.user.username} | Foi Avisado`, 'https://i.ibb.co/MPLnrjr/Lista.png')
            .setThumbnail(message.mentions.users.first().displayAvatarURL)
            .addField('Tag do Usuário', '`'+users.user.tag+'`', true)
            .addField('ID do Usuário', '`'+users.user.id+'`', true)
            .addField('<:regras:653621687157391370> 1° Aviso', '```'+reason+'```')
            .setColor('0xED3237')
            .setFooter(`Avisado por ${message.author.username}`, message.author.displayAvatarURL)

        client.channels.get('653608128646217752').send(removeAvisoum)

        message.delete();
        message.channel.send("<a:sino:654177101322256395> **"+users+" acaba de receber seu 1° aviso**").then(d_msg => { d_msg.delete(9000);})
        
        //reload
        const commandName = ('unwarn')

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
    if (bancoString == "undefined") return

    if (banco.aviso == 1) {
        db.get(message.guild.id).find({id: ""+users.id+""}).assign({
            motivodois: ""+reason+"",
            avisadordois: ""+message.author.username+"",
            aviso: "2"
        }).write();

        let removeAvisodois = new Discord.RichEmbed()
            .setAuthor(`${users.user.username} | Foi Avisado`, 'https://i.ibb.co/MPLnrjr/Lista.png')
            .setThumbnail(message.mentions.users.first().displayAvatarURL)
            .addField('Tag do Usuário', '`'+users.user.tag+'`', true)
            .addField('ID do Usuário', '`'+users.user.id+'`', true)
            .addField('<:regras:653621687157391370> 2° Aviso', '```'+reason+'```')
            .setColor('0xED3237')
            .setFooter(`Avisado por ${message.author.username}`, message.author.displayAvatarURL)
        client.channels.get('653608128646217752').send(removeAvisodois)

        message.delete();
        message.channel.send("<a:sino:654177101322256395> **"+users+" acaba de receber seu 2° aviso**").then(d_msg => { d_msg.delete(9000);})
    } else if (banco.aviso == 2) {

        const crase = ('`')
        let embed = new Discord.RichEmbed()

        .setAuthor(`${users.user.username} | Expulso(a)`, "https://i.ibb.co/MPLnrjr/Lista.png")
        .setThumbnail(message.mentions.users.first().displayAvatarURL)
        .setDescription(`**O usuario atingiu limite de aviso**`)
        .addField("**TAG do Usuário**", `${crase}${users.user.tag}${crase}`, true)
        .addField("**ID do Usuário**", `${crase}${users.user.id}${crase}`, true)
        .setColor("0xED3237")
        .addField("<:regras:653621687157391370> **1° Aviso por `"+banco.avisadorum+"`**", '```'+banco.motivoum+'```')
        .addField("<:regras:653621687157391370> **2° Aviso por `"+banco.avisadordois+"`**", '```'+banco.motivodois+'```')
        .addField("<:regras:653621687157391370> **3° Aviso por `"+message.author.username+"`**", '```'+reason+'```')
        .setFooter(`${message.guild.name} • © Todos os direitos reservados.`, message.guild.iconURL)
        .setTimestamp()

        client.channels.get('652592433619795969').send(embed)
        message.channel.send("<a:atencaomaster:653462740840480768> **`"+users.user.tag+"` acaba de receber seu 3° aviso e foi expulso do servidor** <:cancelar:653462167076470785>").then(d_msg => { d_msg.delete(9000);})
        db.get(message.guild.id).remove({id: ""+users.id+""}).write();
        users.kick();
        message.delete();
    }

        //reload
        const commandName = ('unwarn')

        delete require.cache[require.resolve(`./${commandName}.js`)];

        client.commands.delete(commandName);
        const props = require(`./${commandName}.js`);
        client.commands.set(commandName, props);
        //fim reload
        //ban
        const commandNamebanum = ('ban')

        delete require.cache[require.resolve(`./${commandNamebanum}.js`)];

        client.commands.delete(commandNamebanum);
        const propsbanum = require(`./${commandNamebanum}.js`);
        client.commands.set(commandNamebanum, propsbanum);
        //fim ban
        
    }
}
