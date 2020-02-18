const Discord = require("discord.js");
module.exports = {
        name: "m",
        aliases: [],
        category: "usuario",
        description: "Usado para mostrar lista com nome dos medidores e suas fixas tecnicas",
        usage: `$m ou $m <nome mediador>`,
        run: async (client, message, args) => {

        //sunshine
        let nomesunshine = ('631601995941281793')
        let tagsunshine = client.users.get(`${nomesunshine}`).tag
        let avatarsunshine = client.users.get(`${nomesunshine}`).displayAvatarURL

        //vindocel
        let nomevindocel = ('563223113039609856')
        let tagvindocel = client.users.get(`${nomevindocel}`).tag
        let avatarvindocel = client.users.get(`${nomevindocel}`).displayAvatarURL

         //kaics.dll
         let nomekaics = ('504633677259735040')
         let tagkaics = client.users.get(`${nomekaics}`).tag
         let avatarkaics = client.users.get(`${nomekaics}`).displayAvatarURL

    const serve = client.guilds.get('652586772898775041');
    let cargo1 = ("<@&652592410345472050>") //cargo Mediador
    let cmediacao = ("<#652592431690153984>") //canal 🔄┃mediação
    let crase = ('`')


        //lista com mediadores

let tmediadores = new Discord.RichEmbed()

          .setTitle(':regional_indicator_m::regional_indicator_e::regional_indicator_d::regional_indicator_i::regional_indicator_a::regional_indicator_d::regional_indicator_o::regional_indicator_r::regional_indicator_e::regional_indicator_s:')
          .setDescription(`Todos Mediadores Registrados Possui o Cargo :arrow_right: **${cargo1}**`)
          .addBlankField()
          .addField("📌Nome e ID de Cada Mediador", `
**🔹<@${nomekaics}> | ID: ${crase}<@${nomekaics}>${crase}**

**🔹<@${nomesunshine}> | ID: ${crase}<@${nomesunshine}>${crase}**

**🔹<@${nomevindocel}> | ID: ${crase}<@${nomevindocel}>${crase}**
`)
          .addBlankField()
          .addField("📋Ficha Tecnica Individual de Cada Mediador", '**```$m sunshine``` ```$m vindocel``` ```$m kaics```**')
          .setFooter(`${serve} • © Todos os direitos reservados.`, serve.iconURL)
          .setColor("0x3B88C3")

          if(args >= 0 && args <= 0 ) message.channel.send(tmediadores)

        //lista com mediadores

        //SUNSHINE

let sunshine = new Discord.RichEmbed()

          .setTitle(`**<:mediador:654142273470201877> Ficha Técnica do Mediador <:mediador:654142273470201877>**`)
          .setDescription(`Todos Mediadores Registrados Possui o Cargo :arrow_right: **${cargo1}**`)
          .setThumbnail(avatarsunshine)
          .addField("Tag do Mediador", `**${tagsunshine}**`, true)
          .addField("ID do Mediador", `**${crase}<@${nomesunshine}>${crase}**`, true)
          .addBlankField(true)
          .addField("Horario de Atuação", `**19:00h as 22:00h**`, true)
          .addField("Mais Informações", `**${cmediacao}**`, true)
          .addBlankField(true)
          .addField("**<:dinheiro:653477611980193812> Contratar Serviço** / Escolher Troca ou venda", `--------------------------------------------
<:PayPal:654138849836007449> Pagar com o PayPal [Troca](https://www.paypal.com/) | [Venda](https://www.paypal.com/)

<:PicPay:654138850301575168> Pagar com o PicPay [Troca](https://picpay.com/site) | [Venda](https://picpay.com/site)

<:MPago:654138849550925864> Pagar com o MPago [Troca](https://www.mercadopago.com.br/) | [Venda](https://www.mercadopago.com.br/)
--------------------------------------------`)
          .setFooter(`${serve} • © Todos os direitos reservados.`, serve.iconURL)
          .setColor("0x3B88C3")

          if(args[0] == "sunshine")
          message.channel.send(sunshine)

        //SUNSHINE

        //VINDOCEL

let vindocel = new Discord.RichEmbed()

          .setTitle(`**<:mediador:654142273470201877> Ficha Técnica do Mediador <:mediador:654142273470201877>**`)
          .setDescription(`Todos Mediadores Registrados Possui o Cargo :arrow_right: **${cargo1}**`)
          .setThumbnail(avatarvindocel)
          .addField("Tag do Mediador", `**${tagvindocel}**`, true)
          .addField("ID do Mediador", `**${crase}<@${nomevindocel}>${crase}**`, true)
          .addBlankField(true)
          .addField("Horario de Atuação", `**Não Definida**`, true)
          .addField("Mais Informações", `**${cmediacao}**`, true)
          .addBlankField(true)
          .addField("**<:dinheiro:653477611980193812> Contratar Serviço** / Escolher Troca ou venda", `--------------------------------------------
<:PayPal:654138849836007449> Pagar com o PayPal [Troca](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZDC9NX3V3FY98) | [Venda](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=DC9LMU7QUKD6U)

<:PicPay:654138850301575168> Pagar com o PicPay [Troca](https://app.picpay.com/user/VindoCel/21.0) | [Venda](https://app.picpay.com/user/VindoCel/18.0)

<:MPago:654138849550925864> Pagar com o MPago [Troca](https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=356850119-074558d3-455e-4043-b180-e05f837fb551) | [Venda](https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=356850119-72cd163b-c715-45cc-b3d4-7c18808aaada)
--------------------------------------------`)
          .setFooter(`${serve} • © Todos os direitos reservados.`, serve.iconURL)
          .setColor("0x3B88C3")

          if(args[0] == "vindocel")
          message.channel.send(vindocel)

        //VINDOCEL

        //KAICS

let kaics = new Discord.RichEmbed()

          .setTitle(`**<:mediador:654142273470201877> Ficha Técnica do Mediador <:mediador:654142273470201877>**`)
          .setDescription(`Todos Mediadores Registrados Possui o Cargo :arrow_right: **${cargo1}**`)
          .setThumbnail(avatarkaics)
          .addField("Tag do Mediador", `**${tagkaics}**`, true)
          .addField("ID do Mediador", `**${crase}<@${nomekaics}>${crase}**`, true)
          .addBlankField(true)
          .addField("Horario de Atuação", `**07:00 as 12:00**`, true)
          .addField("Mais Informações", `**${cmediacao}**`, true)
          .addBlankField(true)
          .addField("**<:dinheiro:653477611980193812> Contratar Serviço** / Escolher Troca ou venda", `--------------------------------------------
<:MPago:654138849550925864> Pagar com o MPago [Troca](https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=498477624-a691d3f3-6fe1-4f51-8fcd-72340d2c7cfd) | [Venda](https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=498477624-5c6822a2-1b99-4a65-bfc8-362f1dc4a5a0)
--------------------------------------------`)
          .setFooter(`${serve} • © Todos os direitos reservados.`, serve.iconURL)
          .setColor("0x3B88C3")

          if(args[0] == "kaics")
          message.channel.send(kaics)

        //KAICS

        if (message.channel.type === "dm") return;
        message.delete()
        }
}