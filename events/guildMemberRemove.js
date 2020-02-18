module.exports = async (client, member) => {
	
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
}