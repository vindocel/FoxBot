const Discord = require('discord.js')
module.exports = async (client, member) => {
	
	//Contador de Membros
	var numbertowords = require('number-to-words');
    var membrosCount = `${client.guilds.get('652586772898775041').memberCount}`; // ID do Servidor
    var membrosArray = new Array();
    var membrosSplit = membrosCount.split("");
    var contador = "";

    for(var i = 0; i<membrosCount.length;i++)
    {
        membrosArray[i] = numbertowords.toWords(membrosSplit[i]);
        contador += ':'+membrosArray[i]+':';
    }

    const canal = client.channels.get('652592429047873546'); // ID da Sala
    canal.setTopic(`<:HeadFox:653393542223495168><:FOXM:653393535067881512><:FOXE:653393523860832279><:FOXminho:653393535554289674><:FOXB:653393523546259456><:FOXR:653393537244725258><:FOXO:653393536552796170><:FOXS:653393537857224724><:FOXTail:653393542634536970> ${contador}`)

	const crase = ('`')

	// Messagem de Bem Vindos
	let pEmbed = new Discord.RichEmbed()
	
	.setTitle(`${member.user.username} | Bem-vindo(a)!`)
	.setThumbnail(member.user.displayAvatarURL)
	.setDescription(`🗣️ Olá, seja bem-vindo(a) ao ${member.guild.name}`)
	.addField(`👋 Sabia que..`, `Você é o ${membrosCount}º membro aqui no servidor?`)
	.addField(`🛡 Tag do Usuário`, `${member.user.tag} ${crase}<@${member.user.id}>${crase}`)
	.addField(`📛 Precisando de ajuda?`, `Caso você tenha alguma dúvida ou problema, chame a nossa equipe!`)
	.addField(`👮 Evite punições!`, `Leia as nossas <#652592429047873546> para evitar ser punido no servidor!`)
	.setFooter(`${member.guild.name} • © Todos os direitos reservados.`)
	.setColor("0x0fce58")

	member.guild.channels.get("652592437629288493").send(pEmbed);
	
}