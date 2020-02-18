const Discord = require('discord.js')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('banco.json')
const db = low(adapter)
module.exports = {
    name: "ban",
    aliases: [],
    category: "moderaçao",
    description: "Usado para banir um usuario que tenha quebrado alguma regra do servidor",
    usage: `$ban <@User ou ID> <Motivo>`,
    run: async (client, message, args) => {
        const canal = ("<#652592429047873546>") //canal 📵┃regras 

        if (message.channel.type === "dm") return;
        
        message.delete();
        if (!message.channel.permissionsFor(client.user).has('SEND_MESSAGES')) return message.author.send(`<:stop:653479507650674729> ${message.author}, eu não tenho permissão de \`Enviar Mensagens\` no canal de texto que foi executado o comando.`).catch(() => { })
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(`<:stop:653479507650674729> ${message.author}, ` + "Você não tem Permissão para usar esse Comando <:cancelar:653462167076470785>")
        if (!message.guild.member(client.user.id).hasPermission("BAN_MEMBERS")) return message.channel.send(`<:stop:653479507650674729> ${message.author}, ` + "eu não tenho permissão de `Banir Membros`. <:cancelar:653462167076470785>")
        if (!args[0]) return message.reply('<:stop:653479507650674729> informe um usuário e o motivo. `$ban <@User ou ID> <Motivo>` <:settings:653462170939686932>').then(d_msg => { d_msg.delete(9000);})
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);

        let motivo = args.slice(1).join(' ')

        let argumento = (`${'```'}diff
- ${motivo}
${'```'}`)

        if (!motivo) return message.channel.send("<:stop:653479507650674729> O motivo não foi informado <:cancelar:653462167076470785>").then(d_msg => { d_msg.delete(9000);})
        if (!member) {
            return await client.fetchUser(args[0]).then(memb => {

                if (!memb) return message.channel.send(`${message.author}, <:stop:653479507650674729> usuário mencionado Invalido <:cancelar:653462167076470785>`).then(d_msg => { d_msg.delete(9000);})
                
                const crase = ('`')
                let Embed = new Discord.RichEmbed()
                .setAuthor(`${memb.username} | Banido(a)`, "https://i.ibb.co/ZKqxQM2/ban.png")
                .setThumbnail(memb.displayAvatarURL)
                .setDescription(`**O usuario foi Banido por não respeitar as ${canal}**`)
                .addField("**Tag do Usuário**", `${crase}${memb.tag}${crase}`, true)
                .addField("**ID do Usuário**", `${crase}${memb.id}${crase}`, true)
                .setColor("0xd31a09")
                .addField("<:msg:653478742072754177> **Motivo**", argumento) // aqui seria ${reason}
                .setFooter(`Banido por ${message.author.username}`, message.author.displayAvatarURL)
                .setTimestamp()

                client.channels.get('652592433619795969').send(Embed);
                message.channel.send(`**<a:Yess:653462184990605322> ${crase}${memb.tag}${crase} Foi Banido(a), para mais detalhes entre na sala <#652592433619795969>**`).then(d_msg => { d_msg.delete(9000);});

                message.guild.ban(memb.id, { reason: `Banido por ${message.author.tag} - Motivo: ${motivo}` })

                
                let bancoum = db.get(message.guild.id).find({id: ""+memb.id+""}).value()
                let bancoStringum = String(bancoum)
                if (bancoStringum == "undefined") return
                
                db.get(message.guild.id).remove({id: ""+memb.id+""}).write();
                    
            //reload
                //warn
                const commandNamewarnum = ('warn')

                delete require.cache[require.resolve(`./${commandNamewarnum}.js`)];

                client.commands.delete(commandNamewarnum);
                const propswarnum = require(`./${commandNamewarnum}.js`);
                client.commands.set(commandNamewarnum, propswarnum);
                //unwarn
                const commandNameunwarnum = ('unwarn')

                delete require.cache[require.resolve(`./${commandNameunwarnum}.js`)];

                client.commands.delete(commandNameunwarnum);
                const propsunwarnum = require(`./${commandNameunwarnum}.js`);
                client.commands.set(commandNameunwarnum, propsunwarnum);
            //fim reload

            }).catch(err => {
                if (err.code == 10013) {
                    message.reply('<:stop:653479507650674729> insira um usuário válido.').then(d_msg => { d_msg.delete(9000);})
                } else if (err.code == 50035) {
                    message.reply('<:stop:653479507650674729> insira um usuário válido.').then(d_msg => { d_msg.delete(9000);})
                } else {
                    return console.log(err.code);
                }
            })
        }
        if (member.id === message.author.id) return message.reply("<:stop:653479507650674729> você não pode banir a si mesmo.")
        if (member.id === client.user.id) return message.reply("<:stop:653479507650674729> eu não posso me banir.")
        if (member.highestRole.position > message.member.highestRole.position && message.author.id !== message.guild.ownerID) return message.reply("<:stop:653479507650674729> você não pode banir esse usuário.");
        if (member.highestRole.position === message.member.highestRole.position && message.author.id !== message.guild.ownerID) return message.reply('<:stop:653479507650674729> você não pode banir esse usuário.')
        if (member.highestRole.position > message.guild.members.get(client.user.id).highestRole.position || member.highestRole.position === message.guild.members.get(client.user.id).highestRole.position) return message.reply('<:stop:653479507650674729> eu não posso banir esse usuário.')
        if (!member.bannable) return message.reply('<:stop:653479507650674729> eu não posso banir esse usuário.')

        const crase = ('`')

        let pEmbed = new Discord.RichEmbed()
            .setAuthor(`${member.user.username} | Banido(a)`, "https://i.ibb.co/ZKqxQM2/ban.png")
            .setThumbnail(member.user.displayAvatarURL)
            .setDescription(`**O usuario foi Banido por não respeitar as ${canal}**`)
            .addField("**Tag do Usuário**", `${crase}${member.user.tag}${crase}`, true)
            .addField("**ID do Usuário**", `${crase}${member.user.id}${crase}`, true)
            .setColor("0xd31a09")
            .addField("<:msg:653478742072754177> **Motivo**", argumento) // aqui seria ${reason}
            .setFooter(`Banido por ${message.author.username}`, message.author.displayAvatarURL)
            .setTimestamp()

        client.channels.get('652592433619795969').send(pEmbed)
        message.channel.send(`**<a:Yess:653462184990605322> ${crase}${member.user.tag}${crase} Foi Banido(a), para mais detalhes entre na sala <#652592433619795969>**`).then(d_msg => { d_msg.delete(9000);})
        member.ban(`Punido por ${message.author.tag} - Motivo: ${motivo}`)

        let bancodois = db.get(message.guild.id).find({id: ""+member.user.id+""}).value()
        let bancoStringdois = String(bancodois)
        if (bancoStringdois == "undefined") return
                
                    db.get(message.guild.id).remove({id: ""+member.user.id+""}).write();
            //reload
                //warn
                const commandNamewarndois = ('warn')

                delete require.cache[require.resolve(`./${commandNamewarndois}.js`)];

                client.commands.delete(commandNamewarndois);
                const propswarndois = require(`./${commandNamewarndois}.js`);
                client.commands.set(commandNamewarndois, propswarndois);
                //unwarn
                const commandNameunwarndois = ('unwarn')

                delete require.cache[require.resolve(`./${commandNameunwarndois}.js`)];

                client.commands.delete(commandNameunwarndois);
                const propsunwarndois = require(`./${commandNameunwarndois}.js`);
                client.commands.set(commandNameunwarndois, propsunwarndois);
            //fim reload

    }
};