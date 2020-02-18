module.exports = async client => {
    console.log('Bot iniciado com ' + client.users.size + ' usuários, em ' + client.channels.size + ' canais de ' + client.guilds.size + ' servidores.');

		client.user.setActivity('Fortnite', {type: 'Playing'});
	

}

/*
caso você queira mudar 'Watching'para outra coisa parecida 'Playing'.
*/