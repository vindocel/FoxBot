const Discord = require('discord.js')
module.exports = async (client, dados) => {

//dar tag bate papo para quem entrar no canal de voz especifico
    //dar tag [bate papo(01)] para mediações
    if(dados.t == 'VOICE_STATE_UPDATE' && client.guilds.get("652586772898775041").members.get(dados.d.user_id)){ // ID do Serve
        let membro = client.guilds.get("652586772898775041").members.get(dados.d.user_id) // ID do Serve
    
        //ID canal de voz
        if (dados.d.channel_id != '657236515059138582') {
            membro.removeRole("657237364514619394") // id do cargo
        }
        
        //ID canal de voz
        if (dados.d.channel_id != '657248681589735425') {
            membro.removeRole("657248845658587139") // id do cargo
        }
    
        //ID canal de voz
        if(dados.d.channel_id == '657236515059138582')return membro.addRole("657237364514619394") // id do cargo

            //dar tag [bate papo(02)] para mediações
        //ID canal de voz
        if(dados.d.channel_id == '657248681589735425') return membro.addRole("657248845658587139") // id do cargo
//Fim
      }
//Fim

//codigo fitrar menssagens
          //filtro de vendas e troca
          if(dados.t == 'MESSAGE_CREATE' && client.guilds.get("652586772898775041").members.get(dados.d.author.id)){ // ID do Serve
            let membro = client.guilds.get("652586772898775041").members.get(dados.d.author.id) // ID do Serve

            let canal = dados.d.channel_id
            let valor = dados.d.content.toLowerCase()
            let venda = valor.search(/((?:troc|trocando|em troc|trocar|tro--co|troca|to troc|apenas troc|vendo\/troc|troc0))/g)
            let troca = valor.search(/((?:vend|vendo|vendendo|vendida|ven--do|apenas ven|to vend|vendo\/troc|vend0|compr))/g)

            let bot = String(dados.d.author.bot)
            if(bot == "true") return;

            if(venda>=0 && canal == "652592438602366986") { //id canal de vendas
                client.channels.get(canal).bulkDelete(1)
                client.channels.get(canal).send('<:stop:653479507650674729> '+membro+', Esse é um canal dedicado a `venda de contas`<:dinheiro:653477611980193812> se o seu desejo é <:mediador:654142273470201877>`trocar` de conta entre aqui <#652592440905039913> <a:sino:654177101322256395>')
            }


            if(troca>=0 && canal == "652592440905039913") { //id canal de trocas
                client.channels.get(canal).bulkDelete(1)
                client.channels.get(canal).send('<:stop:653479507650674729> '+membro+', Esse é um canal dedicado a `troca de contas`<:mediador:654142273470201877> se o seu desejo é <:dinheiro:653477611980193812>`vender` uma conta entre aqui <#652592438602366986> <a:sino:654177101322256395>')
            }
            

            if (dados.d.channel_id === "652592451558834188"){ 
                
                client.channels.get('652592451558834188').fetchMessage(dados.d.id).then(m => m.react('653462167139385374'))
                
                client.channels.get('652592451558834188').fetchMessage(dados.d.id).then(m => m.react('653462167076470785'))

            }
                

          }
//fim

    //mute por convite no status
    if(dados.t == 'PRESENCE_UPDATE' && client.guilds.get("652586772898775041").members.get(dados.d.user.id)){ // ID do Serve
        let membro = client.guilds.get("652586772898775041").members.get(dados.d.user.id) // ID do Serve
    
        if(dados.d.game == null) return membro.removeRole("653821588092878859")
        if(dados.d.game.state == undefined) return membro.removeRole("653821588092878859")
    
        let valor = dados.d.game.state.toLowerCase()
        let n = valor.search(/((?:discord\.gg|discordapp\.com|www\.|http|invite|bundl|pacot|conjun|merry|mint))/g)
        
        let pEmbed = new Discord.RichEmbed()
            .setTitle(`**<:stop:653479507650674729> Status | BARRADO <:stop:653479507650674729>**`)
            .setThumbnail(membro.user.displayAvatarURL)
            .setDescription('**Usuario tentou adicionar Status Proibido e Foi barrado** ⛔')
            .addField('**tag**', '`'+membro.user.tag+'`', true)
            .addField('**id**', '`<@'+membro.user.id+'>`', true)
            .addField('**<:msg:653478742072754177>Status Utilizado**', '```'+dados.d.game.state+'```')
            .setColor('RED')
            .setFooter(`${client.guilds.get("652586772898775041").name} • © Todos os direitos reservados.`)

        if(n>=0 && membro.roles.has("652592408550178827")) return
        if(n>=0 && membro.roles.has("653837379232333834")) return
        if(n>=0 && membro.roles.has("653821588092878859")) return

        if(n>=0){membro.addRole("653821588092878859") 
        membro.removeRole("652592420512595988")
        client.channels.get('653608128646217752').send(pEmbed)
         }
        if(n<0 && membro.roles.has("653821588092878859")) membro.removeRole("653821588092878859")
    
      }
    //mute por convite no status

    
    //comando de reagir para ganhar cargo
    if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
    if(dados.d.message_id != "654711377411309589") return // ID da Menssagem que ira recerber a Reação

    let servidor = client.guilds.get("652586772898775041") // ID do Servidor
    let membro = servidor.members.get(dados.d.user_id)

    let cargo = servidor.roles.get('652592420512595988') //ID do Cargo

    if(dados.t === "MESSAGE_REACTION_ADD"){
        if(dados.d.emoji.id === "653462167139385374"){ //ID do Emoji Confirma
            if(membro.roles.has(cargo)) return
            membro.addRole(cargo)
        }else if(dados.d.emoji.id === "653462167076470785"){   //ID do Emoji Cancelar
            if(membro) {
                membro.kick()
            }
        }
    }else if(dados.t === "MESSAGE_REACTION_REMOVE"){
        if(dados.d.emoji.id === "653462167139385374"){ //ID do Emoji Confirma
            if(membro.roles.has(cargo)) return
            membro.removeRole(cargo)
        }
    }
    //comando de reagir para ganhar cargo

}
