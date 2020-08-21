const Discord = require("discord.js");
module.exports = {
    name: "anunciar",
    aliases: [],
    category: "SVip",
    description: "Fazer um anuncio personalizado de sua conta/bundle",
    usage: `$anunciar c | para anuncio com imagem, $anunciar s para anuncio sem imagem. `,
    run: async (client, message, args) => {

    if (message.channel.type === "dm") return;

    //boloquio por cargo
    if(!message.member.roles.some(r=>["652592408550178827", "654667200124289034"].includes(r.id)))
        return message.reply(`<:stop:653479507650674729> Você Não tem Permissao para Usar este Comando, mais caso queria usar entre aqui <#652592442494812171>`).then(d_msg => { d_msg.delete(9000);});

        // detectar canal /imagem

        const reason = args.slice(0).join(' ');
  
        const canalMencionado = message.mentions.channels.first();

        //pegar link de imagem
        const regexLinkPattern = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
        const regexLink = new RegExp(regexLinkPattern);
        const match = regexLink.exec(reason);
        //fim
     
        if (match === null) {
            message.channel.send("<a:sino:654177101322256395> Você precisa adicionar uma <:image:653462486544023552>`IMAGEM` valida que tenha o final `.jpg .gif .png`").then(d_msg => { d_msg.delete(9000);});
            return
        }

        if (!canalMencionado) {
         message.channel.send("<:stop:653479507650674729> Você precisa mencionar sua loja ex `#loja-victor`").then(d_msg => { d_msg.delete(9000);});
            return
        }
        const reasonFiltrada = reason.replace(/\<\#\d{18}\>/gi, "")
              .replace(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/gi, "")
      

         // detectar canal /imagem

    const serve = message.guild.name;

    //divisor
    message.delete()

    let anuncioc = new Discord.RichEmbed()

    .addField('<:dinheiro:653477611980193812>====== Propaganda ======<:dinheiro:653477611980193812>', 'Também quer poder Enviar um anuncio ? [Clique Aqui](https://discord.gg/xGs8geV)')
    .addField('<:platina:653478742118629376>Anunciante', `${message.author}<:verificado:653479507616858112>`, true)
    .addField('<:place:653480070593380362>Loja', `** <#${canalMencionado.id}><:diamante:653478742131212326> **`, true)
    .addField('<:msg:653478742072754177>Descrição', `${reasonFiltrada}`)
    .setImage(match[0])
    .setFooter(`${serve} • © Todos os direitos reservados.`)
    .setColor('0xffd100')



    client.channels.get('652592438602366986').send('@everyone', anuncioc)

    client.channels.get('652592440905039913').send(anuncioc)

    }
}
