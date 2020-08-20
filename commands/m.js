const Discord = require("discord.js");
module.exports = {
        name: "m",
        aliases: [],
        category: "usuario",
        description: "Usado para mostrar a lista com o nome dos mediadores e suas fichas técnicas",
        usage: `$m ou $m <nome mediador>`,
        run: async (client, message, args) => {

        //vindocel
        let nomevindocel = ('563223113039609856')
        let tagvindocel = client.users.get(`${nomevindocel}`).tag
        let avatarvindocel = client.users.get(`${nomevindocel}`).displayAvatarURL

         //kaics.dll
         let nomekaics = ('504633677259735040')
         let tagkaics = client.users.get(`${nomekaics}`).tag
         let avatarkaics = client.users.get(`${nomekaics}`).displayAvatarURL

         //VictorTG
         let nomevictor = ('400413573496569857')
         let tagvictor = client.users.get(`${nomevictor}`).tag
         let avatarvictor = client.users.get(`${nomevictor}`).displayAvatarURL

    const serve = client.guilds.get('652586772898775041');
    let cargo1 = ("<@&652592410345472050>") //cargo Mediador
    let cmediacao = ("<#652592431690153984>") //canal 🔄┃mediação
    let crase = ('`')


        //lista com mediadores

let tmediadores = new Discord.RichEmbed()

          .setTitle(':regional_indicator_m::regional_indicator_e::regional_indicator_d::regional_indicator_i::regional_indicator_a::regional_indicator_d::regional_indicator_o::regional_indicator_r::regional_indicator_e::regional_indicator_s:')
          .setDescription(`Todos os mediadores registrados possuem o cargo :arrow_right: **${cargo1}**`)
          .addBlankField()
          .addField("📌Nome e ID de Cada Mediador", `
**🔹<@${nomevictor}> | ID: ${crase}${nomevictor}${crase}**

**🔹<@${nomekaics}> | ID: ${crase}${nomekaics}${crase}**

**🔹<@${nomevindocel}> | ID: ${crase}${nomevindocel}${crase}**
`)
          .addBlankField()
          .addField("📋Ficha Tecnica Individual de Cada Mediador", '**```$m vindocel``` ```$m victortg``` ```$m kaics```**')
          .setFooter(`${serve} • © Todos os direitos reservados.`, serve.iconURL)
          .setColor("0x3B88C3")

          if(args >= 0 && args <= 0 ) message.channel.send(tmediadores)

        //lista com mediadores

        //VICTORTG

let victortg = new Discord.RichEmbed()

          .setTitle(`**<:mediador:654142273470201877> Ficha Técnica do Mediador <:mediador:654142273470201877>**`)
          .setDescription(`**Horário de atuação deste mediador é das ${crase}13:00h às 18:00h${crase}**`)
          .setThumbnail(avatarvictor)
          .addField("Tag do Mediador", `**${crase}${tagvictor}${crase}**`, true)
          .addField("ID do Mediador", `**${crase}${nomevictor}${crase}**`, true)
          .addField("**<:dinheiro:653477611980193812> Contratar Serviço** / Escolher Troca ou venda", `--------------------------------------------
<:PayPal:654138849836007449> Pagar com o PayPal [Troca](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=K52RAMV7RYCUA) | [Venda](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UV8X8RWBKGQJY)

<:MPago:654138849550925864> Pagar com o MPago [Troca](https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=195372461-64edb267-f69e-48a9-b333-c9fac7b07254) | [Venda](https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=195372461-1ba4563d-3886-4d44-ba64-2213127087f5)
--------------------------------------------`)
          .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL)
          .setColor("0x3B88C3")
          .setTimestamp()

          if(args[0] == "victortg")
          message.channel.send(victortg)

        //VICTORTG

        //VINDOCEL

let vindocel = new Discord.RichEmbed()

          .setTitle(`**<:mediador:654142273470201877> Ficha Técnica do Mediador <:mediador:654142273470201877>**`)
          .setDescription(`**Este mediador não possui horário de mediação definida**`)
          .setThumbnail(avatarvindocel)
          .addField("Tag do Mediador", `**${crase}${tagvindocel}${crase}**`, true)
          .addField("ID do Mediador", `**${crase}${nomevindocel}${crase}**`, true)
          .addField("**<:dinheiro:653477611980193812> Contratar Serviço** / Escolher Troca ou venda", `--------------------------------------------
<:PayPal:654138849836007449> Pagar com o PayPal [Troca](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZDC9NX3V3FY98) | [Venda](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=DC9LMU7QUKD6U)

<:PicPay:654138850301575168> Pagar com o PicPay [Troca](https://app.picpay.com/user/VindoCel/21.0) | [Venda](https://app.picpay.com/user/VindoCel/18.0)

<:MPago:654138849550925864> Pagar com o MPago [Troca](https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=356850119-074558d3-455e-4043-b180-e05f837fb551) | [Venda](https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=356850119-72cd163b-c715-45cc-b3d4-7c18808aaada)
--------------------------------------------`)
          .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL)
          .setColor("0x3B88C3")
          .setTimestamp()

          if(args[0] == "vindocel")
          message.channel.send(vindocel)

        //VINDOCEL

        //KAICS

let kaics = new Discord.RichEmbed()

          .setTitle(`**<:mediador:654142273470201877> Ficha Técnica do Mediador <:mediador:654142273470201877>**`)
          .setDescription(`**Horário de atuação deste mediador é das ${crase}07:00h às 13:00h${crase}**`)
          .setThumbnail(avatarkaics)
          .addField("Tag do Mediador", `**${crase}${tagkaics}${crase}**`, true)
          .addField("ID do Mediador", `**${crase}${nomekaics}${crase}**`, true)
          .addField("**<:dinheiro:653477611980193812> Contratar Serviço** / Escolher Troca ou venda", `--------------------------------------------
<:MPago:654138849550925864> Pagar com o MPago [Troca](https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=498477624-a691d3f3-6fe1-4f51-8fcd-72340d2c7cfd) | [Venda](https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=498477624-5c6822a2-1b99-4a65-bfc8-362f1dc4a5a0)
--------------------------------------------`)
          .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL)
          .setColor("0x3B88C3")
          .setTimestamp()

          if(args[0] == "kaics")
          message.channel.send(kaics)

        //KAICS

        if (message.channel.type === "dm") return;
        message.delete()
        }
}
