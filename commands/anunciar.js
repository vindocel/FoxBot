const Discord = require("discord.js");
module.exports = {
    name: "anunciar",
    aliases: [],
    category: "SVip+",
    description: "Fazer um anuncio personalizado de sua conta/bundle",
    usage: `$anunciar c | para anuncio com imagem, $anunciar s para anuncio sem imagem. `,
    run: async (client, message, args) => {

    if (message.channel.type === "dm") return;

    //boloquio por cargo
    if(!message.member.roles.some(r=>["652592408550178827", "652592412102885386"].includes(r.id)))
        return message.reply(`<:stop:653479507650674729> Você Não tem Permissao para Usar este Comando, mais caso queria usar entre aqui <#652592442494812171>`);

    let splitarg = args.join(" ").split(" | ")

    let sigla = splitarg[0]
    let conteudo1 = splitarg[1]
    let conteudo2 = splitarg[2]
    let conteudo3 = splitarg[3]

    if(!sigla){
    message.reply("<:stop:653479507650674729> Use o formato ``$anunciar c`` para anuncio com imagem e ``$anunciar s`` para anuncio sem imagem <:settings:653462170939686932>")
        return
}

    if(!conteudo1){
    message.reply("<:stop:653479507650674729> Use o formato ``$anunciar c | <#nome_da_sua_loja> | <descrição> | <link da imagem.jpg>`` para anuncios com imagem e ``$anunciar s | <#nome_da_sua_loja> | <descrição>`` para anuncio sem imagem <:settings:653462170939686932>")
        return
}

    if(!conteudo2){
    message.reply("<:stop:653479507650674729> Use o formato ``$anunciar c | <#nome_da_sua_loja> | <descrição> | <link da imagem.jpg>`` para anuncios com imagem e ``$anunciar s | <#nome_da_sua_loja> | <descrição>`` para anuncio sem imagem <:settings:653462170939686932>")
    return
}

    const serve = message.guild.name;

    //divisor
    message.delete()

    let anuncioc = new Discord.RichEmbed()

    .addField('<:dinheiro:653477611980193812>====== Propaganda ======<:dinheiro:653477611980193812>', 'Também quer poder Enviar um anuncio ? [Clique Aqui](https://discord.gg/xGs8geV)')
    .addField('<:platina:653478742118629376>Anunciante', `${message.author}<:verificado:653479507616858112>`, true)
    .addField('<:place:653480070593380362>Loja', `** ${conteudo1}<:diamante:653478742131212326> **`, true)
    .addField('<:msg:653478742072754177>Descrição', `${conteudo2}`)
    .setImage(`${conteudo3}`)
    .setFooter(`${serve} • © Todos os direitos reservados.`)
    .setColor('0xffd100')

    if(splitarg[0] == "c")
    client.channels.get('653423495694254080').send(anuncioc)
    if(splitarg[0] == "c")
    client.channels.get('652592438602366986').send('@everyone', anuncioc)
    if(splitarg[0] == "c")
    client.channels.get('652592440905039913').send(anuncioc)


    let anuncios = new Discord.RichEmbed()

    .addField('<:dinheiro:653477611980193812>====== Propaganda ======<:dinheiro:653477611980193812>', 'Também quer poder Enviar um anuncio ? [Clique Aqui](https://discord.gg/xGs8geV)')
    .addField('<:platina:653478742118629376>Anunciante', `${message.author}<:verificado:653479507616858112>`, true)
    .addField('<:place:653480070593380362>Loja', `** ${conteudo1}<:diamante:653478742131212326> **`, true)
    .addField('<:msg:653478742072754177>Descrição', `${conteudo2}`)
    .setFooter(`${serve} • © Todos os direitos reservados.`)
    .setColor('0xffd100')

    if(splitarg[0] == "s")
    client.channels.get('653423495694254080').send(anuncios)
    if(splitarg[0] == "s")
    client.channels.get('652592438602366986').send('@everyone', anuncios)
    if(splitarg[0] == "s")
    client.channels.get('652592440905039913').send(anuncios)
    }
}