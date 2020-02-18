const Discord = require("discord.js");
module.exports = {
    name: "regras",
    aliases: [],
    category: "usuario",
    description: "Mostra a Regras por numero",
    usage: `$regras <number>`,
    run: async (client, message, args) => {

    const serve = client.guilds.get('652586772898775041');
    const autor = message.author;
 
    //regra 1

    let pEmbed1 = new Discord.RichEmbed()

    .addField("Regra #1","**```Proibido qualquer conteúdo inapropriado (+18), e qualquer outra coisa.```**")
    .setFooter(`${serve} • © Todos os direitos reservados.`)
    .setColor("RANDOM")

    if(args >= 0 && args <= 1 ) message.channel.send(pEmbed1)

    //regra 2

    let pEmbed2 = new Discord.RichEmbed()

    .addField("Regra #2","**```Proibido divulgação de qualquer outro grupo de Discord sem permissão prévia do Fundador, seja no servidor, no status ou no privado dos nossos membros.```**")
    .setFooter(`${serve} • © Todos os direitos reservados.`)
    .setColor("RANDOM")

    if(args >= 2 && args <= 2 ) message.channel.send(pEmbed2)

    //regra 3

    let pEmbed3 = new Discord.RichEmbed()

    .addField("Regra #3","**```Proibido qualquer tipo de preconceito, seja ele racista, homofóbico, entre outros.```**")
    .setFooter(`${serve} • © Todos os direitos reservados.`)
    .setColor("RANDOM")

    if(args >= 3 && args <= 3 ) message.channel.send(pEmbed3)

    //regra 4

    let pEmbed4 = new Discord.RichEmbed()

    .addField("Regra #4","**```Probido qualquer tipo de desrespeito. Será considerado desrespeito tudo que ofenda o alvo da atitude.```**")
    .setFooter(`${serve} • © Todos os direitos reservados.`)
    .setColor("RANDOM")

    if(args >= 4 && args <= 4 ) message.channel.send(pEmbed4)

    //regra 5

    let pEmbed5 = new Discord.RichEmbed()

    .addField("Regra #5","**```Proibido qualquer tipo de assédio.```**")
    .setFooter(`${serve} • © Todos os direitos reservados.`)
    .setColor("RANDOM")

    if(args >= 5 && args <= 5 ) message.channel.send(pEmbed5)

    //regra 6

    let pEmbed6 = new Discord.RichEmbed()

    .addField("Regra #6","**```Proibido spammar mensagens em qualquer canal de texto.```**")
    .setFooter(`${serve} • © Todos os direitos reservados.`)
    .setColor("RANDOM")

    if(args >= 6 && args <= 6 ) message.channel.send(pEmbed6)

    //regra 7

    let pEmbed7 = new Discord.RichEmbed()

    .addField("Regra #7","**```Proibido utilizar qualquer comando em chats que não foram feitos para o mesmo.```**")
    .setFooter(`${serve} • © Todos os direitos reservados.`)
    .setColor("RANDOM")

    if(args >= 7 && args <= 7 ) message.channel.send(pEmbed7)

    //regra 8

    let pEmbed8 = new Discord.RichEmbed()

    .addField("Regra #8","**```Proibido gerar discussões desnecessárias.```**")
    .setFooter(`${serve} • © Todos os direitos reservados.`)
    .setColor("RANDOM")

    if(args >= 8 && args <= 8 ) message.channel.send(pEmbed8)

    //regra 9

    let pEmbed9 = new Discord.RichEmbed()

    .addField("Regra #9","**```Proibido marcar @everyone, @here e qualquer tag que envolva grande quantidade de membros no servidor, sem a permissão de um @Owner```**")
    .setFooter(`${serve} • © Todos os direitos reservados.`)
    .setColor("RANDOM")

    if(args >= 9 && args <= 9 ) message.channel.send(pEmbed9)

    //regra 10

    let pEmbed10 = new Discord.RichEmbed()

    .addField("Regra #10","**```Proibido vender contas no chat e assunto sobre o mesmo.```**")
    .setFooter(`${serve} • © Todos os direitos reservados.`)
    .setColor("RANDOM")

    if(args >= 10 && args <= 10 ) message.channel.send(pEmbed10)

    //regra 11

    let pEmbed11 = new Discord.RichEmbed()

    .addField("Regra #11","**```Proibido ficar pedindo cargo.```**")
    .setFooter(`${serve} • © Todos os direitos reservados.`)
    .setColor("RANDOM")

    if(args >= 11 && args <= 11 ) message.channel.send(pEmbed11)

    //regra 12

    let pEmbed12 = new Discord.RichEmbed()

    .addField("Regra #12","**```Proibido usar nomes no servidor que divulguem seu canal ou grupo.```**")
    .setFooter(`${serve} • © Todos os direitos reservados.`)
    .setColor("RANDOM")

    if(args >= 12 && args <= 12 ) message.channel.send(pEmbed12)

    //regra 13

    let pEmbed13 = new Discord.RichEmbed()

    .addField("Regra #13","**```Proibido assunto que envolva politica no chat, se você tenha uma opinião política, guarde para si próprio.```**")
    .setFooter(`${serve} • © Todos os direitos reservados.`)
    .setColor("RANDOM")

    if(args >= 13 && args <= 13 ) message.channel.send(pEmbed13)

    //regra 14

    let pEmbed14 = new Discord.RichEmbed()

    .addField("Regra #14","**```Proibido contas fakes.```**")
    .setFooter(`${serve} • © Todos os direitos reservados.`) 
    .setColor("RANDOM")

    if(args >= 14 && args <= 14 ) message.channel.send(pEmbed14)

    //regra 15

    let pEmbed15 = new Discord.RichEmbed()

    .addField("Regra #15","**```Proibido divulgação de qualquer conteúdo do server ou no privado de qualquer membro.```**")
    .setFooter(`${serve} • © Todos os direitos reservados.`) 
    .setColor("RANDOM")

    if(args >= 15 && args <= 15 ) message.channel.send(pEmbed15)

    //regra 16

    let pEmbed16 = new Discord.RichEmbed()

    .addField("Regra #16","**```Proibido acessar canais de voz com o propósito de incomodar aqueles que já estavam lá antes.```**")
    .setFooter(`${serve} • © Todos os direitos reservados.`) 
    .setColor("RANDOM")

    if(args >= 16 && args <= 16 ) message.channel.send(pEmbed16)

    //regra 17

    let pEmbed17 = new Discord.RichEmbed()

    .addField("Regra #17","**```Proibido anunciar conta de terceiros em seu shop.```**")
    .setFooter(`${serve} • © Todos os direitos reservados.`) 
    .setColor("RANDOM")

    if(args >= 17 && args <= 17 ) message.channel.send(pEmbed17)

    //regra 18

    let pEmbed18 = new Discord.RichEmbed()

    .addField("Regra #18","**```Proibido Ficar Floodando o chat anuncio```**")
    .setFooter(`${serve} • © Todos os direitos reservados.`) 
    .setColor("RANDOM")

    if(args >= 18 && args <= 18 ) message.channel.send(pEmbed18)

    //regra 19

    let pEmbed19 = new Discord.RichEmbed()

    .addField("Regra #19","**```Proibido anunciar Bundles, Seja no grupo no status ou no privado.```**")
    .setFooter(`${serve} • © Todos os direitos reservados.`) 
    .setColor("RANDOM")

    if(args >= 19 && args <= 19 ) message.channel.send(pEmbed19)

    //regra 20

    let pEmbed20 = new Discord.RichEmbed()

    .addField("Regra #20","**```Proibido usar status no perfil que divulguem seu grupo ou lojas.```**")
    .setFooter(`${serve} • © Todos os direitos reservados.`) 
    .setColor("RANDOM")

    if(args >= 20 && args <= 20 ) message.channel.send(pEmbed20)

    let crase = ('`')
    if(args >= 21 ) message.channel.send(`<:stop:653479507650674729> Ops ${autor} as regras só vão ate o número 20 <:stop:653479507650674729>`)
    if(isNaN(args)) return message.channel.send(`${autor}<:stop:653479507650674729> Esse Comando é Invalido, se quiser uma regra em específico coloque o numero dela na frente **${crase}$regras 13${crase}**`)

    if (message.channel.type === "dm") return;
    message.delete()
    }
}