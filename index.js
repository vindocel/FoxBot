const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const client = new Discord.Client();

const config = require("./config.json");
client.config = config;

fs.readdir("./events/", (err, files) => {
  console.log(`-------------Carregamento dos Eventos-------------`)
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`carregando ${eventName}`);
    client.on(eventName, event.bind(null, client));
  });
  console.log(`--------------------------------------------------`)
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  console.log(`-------------Carregamento dos Comandos-------------`)
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`carregando ${commandName}`);
    client.commands.set(commandName, props);
  });
  console.log(`---------------------------------------------------`)
});

client.login(config.token);