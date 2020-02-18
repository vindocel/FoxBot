const Discord = require('discord.js')
module.exports = {
    name: "unban",
    aliases: [],
    category: "moderaçao",
    description: "Usado para desbanir um usuario que esteja banido",
    usage: `$unban <Nick ou ID> <Motivo>`,
    run: async (client, message, args) => {

        if (message.channel.type === "dm") return;
        message.delete();
        if (!message.channel.permissionsFor(client.user).has('SEND_MESSAGES')) return message.author.send(`<:stop:653479507650674729> ${message.author}, eu não tenho permissão de \`Enviar Mensagens\` no canal de texto que foi executado o comando.`).catch(() => { })
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(`<:stop:653479507650674729> ${message.author}, ` + "Você não tem Permissão para usar esse Comando <:cancelar:653462167076470785>")
        if (!message.guild.member(client.user.id).hasPermission("BAN_MEMBERS")) return message.channel.send(`<:stop:653479507650674729> ${message.author}, ` + "eu não tenho permissão de `Banir Membros`. <:cancelar:653462167076470785>")
        if (!args[0]) return message.reply('<:stop:653479507650674729> informe um usuário e o motivo. `$unban <Nick ou ID> <Motivo>` <:settings:653462170939686932>').then(d_msg => { d_msg.delete(9000);})

        let User = args[0];
        let Reason = args.slice(1).join(` `);
            if (!Reason) return message.reply('<:stop:653479507650674729> informe o motivo de estar o(a) desbanindo <:cancelar:653462167076470785>').then(d_msg => { d_msg.delete(9000);})
        let crasetriplas = ('```')
        let persoReason = (`${crasetriplas}diff
+ ${Reason}
${crasetriplas}`)

        message.guild.fetchBans()
        .then(bans => {
            if (bans.some(u => User.includes(u.username))) {
        let user = bans.find(user => user.username === User)
            if (user === null) return message.reply(`<:stop:653479507650674729> Usuario Não encontrado, tente localizar ele por ID`).then(d_msg => { d_msg.delete(9000);})
        message.guild.unban(user.id, `Desbanido por ${message.author.tag} - Motivo: ${Reason}`);
                
            let embedName = new Discord.RichEmbed()

                .setAuthor(`${user.username} | Desbanido`, 'https://i.ibb.co/yf1Fs3L/Entrar.png')
                .setThumbnail(user.displayAvatarURL)
                .addField('**Tag do Usuário**', '`'+user.tag+'`', true)
                .addField('**ID do Usuário**', '`'+user.id+'`', true)
                .addField('<:msg:653478742072754177> **Motivo**', persoReason)
                .setFooter(`Desbanido por ${message.author.username}`, message.author.displayAvatarURL)
                .setColor('0x4CAF50')
            client.channels.get('653608128646217752').send(embedName)
            message.channel.send('**<a:Yess:653462184990605322> `'+user.tag+'` Foi Desbanido(a) com Sucesso**').then(d_msg => { d_msg.delete(9000);});
            }
            else if (bans.some(u => User.includes(u.id))) {

        message.guild.unban(User, `Desbanido por ${message.author.tag} - Motivo: ${Reason}`);

            let usuarioID = client.users.get(User)
            let embedID = new Discord.RichEmbed()

                .setAuthor(`${usuarioID.username} | Desbanido`, 'https://i.ibb.co/yf1Fs3L/Entrar.png')
                .setThumbnail(usuarioID.displayAvatarURL)
                .addField('**Tag do Usuário**', '`'+usuarioID.tag+'`', true)
                .addField('**ID do Usuário**', '`'+User+'`', true)
                .addField('<:msg:653478742072754177> **Motivo**',  persoReason)
                .setFooter(`Desbanido por ${message.author.username}`, message.author.displayAvatarURL)
                .setColor('0x4CAF50')
            client.channels.get('653608128646217752').send(embedID)
            message.channel.send('**<a:Yess:653462184990605322> `'+usuarioID.tag+'` Foi Desbanido(a) com Sucesso**').then(d_msg => { d_msg.delete(9000);});
            }
            else {
        return message.reply(`<:confirmar:653462167139385374> Esta pessoa não esta banida`).then(d_msg => { d_msg.delete(9000);});
        }
    }).catch(err => {
            return console.log(err);

    })
    
    }
};