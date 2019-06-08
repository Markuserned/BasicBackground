const Discord = require('discord.js');
const bot = new Discord.Client();



const devs = ['334267213840384000' , '484790938598768641' , '' , '', '' , '' , ''];
const adminprefix = "^";
bot.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    bot.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
 if (message.content.startsWith(adminprefix + 'sn')) {
  bot.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : ?? ????? ?????`)
} else
if (message.content.startsWith(adminprefix + 'sa')) {
bot.user.setAvatar(argresult);
} else 
  if (message.content.startsWith(adminprefix + 'sr')) {
    bot.user.setGame(argresult, "https://www.twitch.tv/iiiml7");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
});

const Eris = require("eris");
const BT  = new Eris(process.env.BOT_TOKEN);
BT.connect(process.env.BOT_TOKEN)
var iiserver = "578331278521270282";

BT.on("ready", ready => {
setInterval(function(){

BT.editChannel("587032074993664005", {name : "B"})
BT.editChannel("587032074993664005", {name : "Blo"})
BT.editChannel("587032074993664005", {name : "Bloo"})
BT.editChannel("587032074993664005", {name : "Blood"})
BT.editChannel("587032074993664005", {name : "Bloody"})
BT.editChannel("587032074993664005", {name : "Bloody T"})
BT.editChannel("587032074993664005", {name : "Bloody Ti"})
BT.editChannel("587032074993664005", {name : "Bloody Tim"})
BT.editChannel("587032074993664005", {name : "Bloody Time"})
BT.editChannel("587032074993664005", {name : "Bloody Time O"})
BT.editChannel("587032074993664005", {name : "Bloody Time Ow"})
BT.editChannel("587032074993664005", {name : "Bloody Time OwO"})
BT.editChannel("587032074993664005", {name : "Bloody Time Ow"})
BT.editChannel("587032074993664005", {name : "Bloody Time O"})
BT.editChannel("587032074993664005", {name : "Bloody Time"})
BT.editChannel("587032074993664005", {name : "Bloody Tim"})
BT.editChannel("587032074993664005", {name : "Bloody Ti"})
BT.editChannel("587032074993664005", {name : "Bloody T"})
BT.editChannel("587032074993664005", {name : "Bloody"})
BT.editChannel("587032074993664005", {name : "Blood"})
BT.editChannel("587032074993664005", {name : "Bloo"})
BT.editChannel("587032074993664005", {name : "Blo"})
BT.editChannel("587032074993664005", {name : "Bl"})
BT.editChannel("587032074993664005", {name : "B"})
}, 6000);
});

var eris = new Eris(process.env.BOT_TOKEN);

  
bot.login(process.env.BOT_TOKEN);