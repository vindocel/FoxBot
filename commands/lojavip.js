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
> **${assimples}1 Mês${assimples} de loja VIP : ${assimples}20 R$${assimples}<:dinheiro:653477611980193812>**
    
> **${assimples}2 Meses${assimples} de loja VIP : ${assimples}30 R$${assimples}<:dinheiro:653477611980193812>**
    
> **${assimples}3 Meses${assimples} de loja VIP : ${assimples}35 R$${assimples}<:dinheiro:653477611980193812>**
${crases}asciidoc
= Benefícios =
${crases}
> <:verificadob:654665910384066560> **Uma loja totalmente exclusiva**
    
> <:verificadob:654665910384066560> **Poder dar ${assimples}@everyone${assimples} uma vez por semana em sua loja exclusiva**

> <:verificadob:654665910384066560> **Pode anunciar seus ${assimples}Bundles${assimples} em sua loja exclusiva**
    
> <:verificadob:654665910384066560> **Uma tag Exclusiva para quem é VIP <@&654667200124289034> **
${crases} ${crases}`)
    //mesagem para comprar loja vip+
    if(args[0] == "lojavip+")
    return message.channel.send(`> **<:Ouro:654660864955121665>\/\/\/\/\/\/\/<:Ouro:654660864955121665>LojaVip+<:Ouro:654660864955121665>\/\/\/\/\/\/\/<:Ouro:654660864955121665>**
${crases}autohotkey
% Formas de Pagamento %
${crases}
> <:PayPal:654138849836007449>** | PayPal > <:PicPay:654138850301575168> | PicPay > <:MPago:654138849550925864> | Mercado Pago**
${crases}autohotkey
% Planos %
${crases}
> **${assimples}3 Meses${assimples} de loja VIP+ : ${assimples}50 R$${assimples}<:dinheiro:653477611980193812>**
    
> **${assimples}6 Meses${assimples} de loja VIP+ : ${assimples}90 R$${assimples}<:dinheiro:653477611980193812>**
    
> **${assimples}1 Ano${assimples} de loja VIP+ : ${assimples}Em Breve${assimples}<:cancelar:653462167076470785>**
${crases}autohotkey
% Benefícios %
${crases}
> <:verificado:653479507616858112> **Uma loja totalmente exclusiva**
    
> <:verificado:653479507616858112> **Poder dar ${assimples}@everyone${assimples} uma vez por Dia em sua loja exclusiva**

> <:verificado:653479507616858112> **Pode anunciar seus ${assimples}Bundles${assimples} em sua loja exclusiva**
    
> <:verificado:653479507616858112> **Uma tag Exclusiva para quem é VIP+ <@&652592412102885386>**
    
> <:verificado:653479507616858112> **Ganha Permição para usar o Comando ${assimples}$anunciar${assimples} Qual pode anunciar 2 veses ao dia e 3 canais de uma só vez**
${crases} ${crases}`)
    //titulo------------------------------------------------------------------------------
    let pEmbed = new Discord.RichEmbed()

    .setTitle(`:small_red_triangle_down: Compre **LojaVip Basic** aqui :small_red_triangle_down:`)
    .setColor(`0xE75A70`)

    if(args >= 0 && args <= 0 ) message.channel.send(pEmbed)
    //Tudo Junto--------------------------------------------------------------------------

    //Paypal
    let pEmbedp1 = new Discord.RichEmbed()
    .setDescription(`<:PayPal:654138849836007449> | Pagar com PayPal: [1 Mês](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=WN3RMMS5YJDXC) | [2 Mês](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GRZAZWU53M6Y6) | [3 Mês](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4GLJ5HX62FYFQ)`)
    .setColor("0x009BDD")
    
    if(args >= 0 && args <= 0 ) message.channel.send(pEmbedp1)

    //Picpay
    let pEmbedp2 = new Discord.RichEmbed()

    .setDescription(`<:PicPay:654138850301575168> | Pagar com PicPay: [1 Mês](https://app.picpay.com/user/VindoCel/20.0) | [2 Mês](https://app.picpay.com/user/VindoCel/30.0) | [3 Mês](https://app.picpay.com/user/VindoCel/35.0)`)
    .setColor("0x2FAC61")

    if(args >= 0 && args <= 0 ) message.channel.send(pEmbedp2)

    //Mercadopago
    let pEmbedp3 = new Discord.RichEmbed()

    .setDescription(`<:MPago:654138849550925864> | Pagar com MPago: [1 Mês](https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=356850119-3fff51c7-453a-41c8-964c-5aa9a103d274) | [2 Mês](https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=356850119-6c5ad300-24ba-4a03-9642-dc6c5a4e7194) | [3 Mês](https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=356850119-81042f74-64a0-4385-accf-d55a339b38b4)`)
    .setColor("0x4564A3")

   
    if(args >= 0 && args <= 0 )
    return message.channel.send(pEmbedp3)

    //Fim do codigo referente ao Loja | 1 mes | 2 mes | 3 Mes | --------------------------

    //loja vip plus ---------------------------------------------------------------------
    
    //titulo lojavip plus----------------------------------------------------------------
    let tituloplus = new Discord.RichEmbed()
    .setTitle(`:large_orange_diamond: Compre :crown:**LojaVip Plus**:crown: aqui :large_orange_diamond:`)
    .setColor(`0xFFAC33`)

    if(args[0] == "plus") message.channel.send(tituloplus)

    //Paypal-----------------------------------------------------------------------------
    let lojapluspay = new Discord.RichEmbed()
    .setDescription(`<:PayPal:654138849836007449> | Pagar Com PayPal [3 Mêses](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QRJN7L7Z4D2Z4) | [6 Mêses](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FB8T5R23ZFQ3W)`)
    .setColor("0x009BDD")
    
    if(args[0] == "plus") message.channel.send(lojapluspay)

    //Picpay-----------------------------------------------------------------------------
    let lojapluspic = new Discord.RichEmbed()

    .setDescription(`<:PicPay:654138850301575168> | Pagar Com PicPay [3 Mêses](https://app.picpay.com/user/VindoCel/50.0) | [6 Mêses](https://app.picpay.com/user/VindoCel/90.0)`)
    .setColor("0x2FAC61")

    if(args[0] == "plus") message.channel.send(lojapluspic)

    //Mercadopago------------------------------------------------------------------------
    let lojaplusmp = new Discord.RichEmbed()

    .setDescription(`<:MPago:654138849550925864> | Pagar Com MPago [3 Mêses](https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=356850119-838defd1-944f-4fab-badd-e6c41227e76c) | [6 Mêses](https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=356850119-032f30a7-d31c-45d1-8d44-7f3e7ac4890c)`)
    .setColor("0x4564A3")

   
    if(args[0] == "plus")
    return message.channel.send(lojaplusmp)

    //anuncio com declaração de quem comprou a loja

    let lojavip1 = new Discord.RichEmbed()

    .setTitle(`🔹 LojaVip 🔹`)
    .setThumbnail(message.mentions.users.first().displayAvatarURL)
    .addField(`<:dinheiro:653477611980193812> **Comprador**`, `${message.mentions.users.first()}`, true)
    .addField('<:tempo:653688714840506378> **Tempo**', `----1 Mês----`, true)
    .addField('🔷 **Plano Vip** ', `Agora o ${message.mentions.users.first().tag} ira ter uma loja exclusiva só para ele, caso voce também queira uma comprar uma loja exclusiva para voce acesse <#631633387374903327>`)
    .setColor('0x3B88C3')
    if(args[1] == "1mes")
    return message.channel.send(lojavip1)

    let lojavip2 = new Discord.RichEmbed()

    .setTitle(`🔹 LojaVip 🔹`)
    .setThumbnail(message.mentions.users.first().displayAvatarURL)
    .addField(`<:dinheiro:653477611980193812> **Comprador**`, `${message.mentions.users.first()}`, true)
    .addField('<:tempo:653688714840506378> **Tempo**', `---2 Mêses---`, true)
    .addField('🔷 **Plano Vip** ', `Agora o ${message.mentions.users.first().tag} ira ter uma loja exclusiva só para ele, caso voce também queira uma comprar uma loja exclusiva para voce acesse <#631633387374903327>`)
    .setColor('0x3B88C3')
    if(args[1] == "2meses")
    return message.channel.send(lojavip2)

    let lojavip3 = new Discord.RichEmbed()

    .setTitle(`🔹 LojaVip 🔹`)
    .setThumbnail(message.mentions.users.first().displayAvatarURL)
    .addField(`<:dinheiro:653477611980193812> **Comprador**`, `${message.mentions.users.first()}`, true)
    .addField('<:tempo:653688714840506378> **Tempo**', `---3 Mêses---`, true)
    .addField('🔷 **Plano Vip** ', `Agora o ${message.mentions.users.first().tag} ira ter uma loja exclusiva só para ele, caso voce também queira uma comprar uma loja exclusiva para voce acesse <#631633387374903327>`)
    .setColor('0x3B88C3')
    if(args[1] == "3meses")
    return message.channel.send(lojavip3)

    let lojavipplus3 = new Discord.RichEmbed()

    .setTitle(`👑 LojaVip+ 👑`)
    .setThumbnail(message.mentions.users.first().displayAvatarURL)
    .addField(`<:dinheiro:653477611980193812> **Comprador**`, `${message.mentions.users.first()}`, true)
    .addField('<:tempo:653688714840506378> **Tempo**', `---3 Mêses---`, true)
    .addField('🔶 **Plano Vip+** ', `Agora o ${message.mentions.users.first().tag} ira ter uma loja exclusiva só para ele, caso voce também queira uma comprar uma loja exclusiva para voce acesse <#631633387374903327>`)
    .setColor('0xffd100')
    if(args[1] == "3mesesp")
    return message.channel.send(lojavipplus3)

    let lojavipplus6 = new Discord.RichEmbed()

    .setTitle(`👑 LojaVip+ 👑`)
    .setThumbnail(message.mentions.users.first().displayAvatarURL)
    .addField(`<:dinheiro:653477611980193812> **Comprador**`, `${message.mentions.users.first()}`, true)
    .addField('<:tempo:653688714840506378> **Tempo**', `---6 Mêses---`, true)
    .addField('🔶 **Plano Vip+** ', `Agora o ${message.mentions.users.first().tag} ira ter uma loja exclusiva só para ele, caso voce também queira uma comprar uma loja exclusiva para voce acesse <#631633387374903327>`)
    .setColor('0xffd100')
    if(args[1] == "6mesesp")
    return message.channel.send(lojavipplus6)
}
}