const Discord = require("discord.js");
module.exports = {
    name: "",
    description: "",
    run: async (client, message, args) => {

    const serve = client.guilds.get('652586772898775041');
    const trescrases = ('```')

    let rodape = new Discord.RichEmbed()
    .addField(`💞**Bem Vindo (a)** ao ${serve}`, `${trescrases}🔴o foco do nosso servidor e garantir sempre a troca e venda mais segura de sua conta Disponibilizando Mediadores altamente treinados e qualificados para garatir que sua troca/venda seja feita com total segurança e qualidade sem que voce precise se preculpar com as partes burocratica, como ter que fazer as alterações de Email Nome senha de sua conta para poder comercializar ela${trescrases} ${trescrases}🔴Nos aqui da ${serve} Sempre Prezamos pelo Respeito e Harmonia entre os Membros Por isso Criamos Regras Rigidas e com tolerancia 0, caso você desrespeite nossas regras você ira levar ban sem aviso${trescrases}`)
    .setFooter(`Aceitando os Termos voce Concorda que voce pode perder cargo ser kikado ou levar ban sem nenhum aviso previo`)
    .setColor("0xA51133")
    message.channel.send(rodape)

    let termodeuso = new Discord.RichEmbed()
    .setDescription(`Reaja com <a:Yess:653462184990605322> para poder aceitar os termos

Reaja com <a:Noo:653462185653305344> para recusar as regras e sair do serve`)
    .setColor("0x4CAF50")
    message.channel.send(termodeuso)
    
    if (message.channel.type === "dm") return;
    message.delete()
}
}