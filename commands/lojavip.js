const Discord = require("discord.js");
module.exports = {
    name: "",
    description: "",
    run: async (client, message, args) => {

    if (message.channel.type === "dm") return;
    message.delete()
    //mensagem para comprar loja vip
    let assimples = ('`')
    let crases = ('```')
    if(args[0] == "lojavip")
    return message.channel.send(`> **<:platina:653478742118629376>\/\/\/\/\/\/\/<:platina:653478742118629376>LojaVip<:platina:653478742118629376>\/\/\/\/\/\/\/<:platina:653478742118629376>**
${crases}asciidoc
= Formas de Pagamento =
${crases}
> <:PayPal:654138849836007449>** | PayPal > <:PicPay:654138850301575168> | PicPay > <:MPago:654138849550925864> | Mercado Pago**
${crases}asciidoc
= Planos =
${crases}
> **${assimples}1 mês${assimples} de loja VIP : ${assimples}20 R$${assimples}<:dinheiro:653477611980193812>**
    
> **${assimples}2 meses${assimples} de loja VIP : ${assimples}30 R$${assimples}<:dinheiro:653477611980193812>**
    
> **${assimples}3 meses${assimples} de loja VIP : ${assimples}35 R$${assimples}<:dinheiro:653477611980193812>**
${crases}asciidoc
= Benefícios =
${crases}
> <:verificadob:654665910384066560> **Uma loja totalmente exclusiva**
    
> <:verificadob:654665910384066560> **Poder dar ${assimples}@everyone${assimples} uma vez por dia em sua loja exclusiva**

> <:verificadob:654665910384066560> **Poder anunciar seus ${assimples}Bundles${assimples} em sua loja exclusiva**
    
> <:verificadob:654665910384066560> **Uma tag exclusiva para quem é VIP <@&654667200124289034> **

> <:verificadob:654665910384066560> **Ganha permissão para usar o comando ${assimples}$anunciar${assimples} podendo usar 1 VEZ ao dia**
${crases} ${crases}`)

    //titulo------------------------------------------------------------------------------
    let pEmbed = new Discord.RichEmbed()

    .setTitle(`:small_red_triangle_down: Compre **LojaVip Basic** aqui :small_red_triangle_down:`)
    .setColor(`0xE75A70`)

    if(args >= 0 && args <= 0 ) message.channel.send(pEmbed)
    //Tudo Junto--------------------------------------------------------------------------

    //Paypal
    let pEmbedp1 = new Discord.RichEmbed()
    .setDescription(`<:PayPal:654138849836007449> | Pagar com PayPal: [1 Mês](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2MCAD9BE72F48) | [2 Meses](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=V524DT5RFJWVL) | [3 Meses](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3ULCMZ63EKPUJ)`)
    .setColor("0x009BDD")
    
    if(args >= 0 && args <= 0 ) message.channel.send(pEmbedp1)

    //Picpay
    let pEmbedp2 = new Discord.RichEmbed()

    .setDescription(`<:PicPay:654138850301575168> | Pagar com PicPay: [1 Mês](https://picpay.me/victor.tuma.garcia1/20.0) | [2 Meses](https://picpay.me/victor.tuma.garcia1/30.0) | [3 Meses](https://picpay.me/victor.tuma.garcia1/35.0)`)
    .setColor("0x2FAC61")

    if(args >= 0 && args <= 0 ) message.channel.send(pEmbedp2)

    //Mercadopago
    let pEmbedp3 = new Discord.RichEmbed()

    .setDescription(`<:MPago:654138849550925864> | Pagar com MPago: [1 Mês](https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=195372461-039eb6cd-2179-4b79-8001-566aff177172) | [2 Mês](https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=195372461-482c4174-92ee-4d6e-8871-afca39b3122d) | [3 Mês](https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=195372461-013451da-2999-4455-b32d-ccdef9260c1c)`)
    .setColor("0x4564A3")

   
    if(args >= 0 && args <= 0 )
    return message.channel.send(pEmbedp3)

    //Fim do codigo referente ao Loja | 1 mês | 2 meses | 3 meses | --------------------------

    //anuncio com declaração de quem comprou a loja
    let crasestri = ('`')

    let lojavip1 = new Discord.RichEmbed()

    .setTitle(`🔹 LojaVip 🔹`)
    .setThumbnail(message.mentions.users.first().displayAvatarURL)
    .addField(`<:dinheiro:653477611980193812> **Comprador**`, `${message.mentions.users.first()}`, true)
    .addField('<:tempo:653688714840506378> **Tempo**', `----1 Mês----`, true)
    .addField('🔷 **Plano Vip** ', `Agora o ${crasestri}${message.mentions.users.first().tag}${crasestri} ira ter uma loja exclusiva só para ele, caso voce também queira uma comprar uma loja exclusiva para voce acesse <#652592442494812171>`)
    .setColor('0x3B88C3')
    if(args[0] == "1mes")
    return message.channel.send(lojavip1)

    let lojavip2 = new Discord.RichEmbed()

    .setTitle(`🔹 LojaVip 🔹`)
    .setThumbnail(message.mentions.users.first().displayAvatarURL)
    .addField(`<:dinheiro:653477611980193812> **Comprador**`, `${message.mentions.users.first()}`, true)
    .addField('<:tempo:653688714840506378> **Tempo**', `---2 Meses---`, true)
    .addField('🔷 **Plano Vip** ', `Agora o ${crasestri}${message.mentions.users.first().tag}${crasestri} ira ter uma loja exclusiva só para ele, caso voce também queira uma comprar uma loja exclusiva para voce acesse <#652592442494812171>`)
    .setColor('0x3B88C3')
    if(args[0] == "2meses")
    return message.channel.send(lojavip2)

    let lojavip3 = new Discord.RichEmbed()

    .setTitle(`🔹 LojaVip 🔹`)
    .setThumbnail(message.mentions.users.first().displayAvatarURL)
    .addField(`<:dinheiro:653477611980193812> **Comprador**`, `${message.mentions.users.first()}`, true)
    .addField('<:tempo:653688714840506378> **Tempo**', `---3 Meses---`, true)
    .addField('🔷 **Plano Vip** ', `Agora o ${crasestri}${message.mentions.users.first().tag}${crasestri} ira ter uma loja exclusiva só para ele, caso voce também queira uma comprar uma loja exclusiva para voce acesse <#652592442494812171>`)
    .setColor('0x3B88C3')
    if(args[0] == "3meses")
    return message.channel.send(lojavip3)

}
}
