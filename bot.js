const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8"); 
const queue = new Map();
const hastebin = require('hastebin-gen');
const client = new Discord.Client();
  
client.on('message', message => {
if (message.content === "الحمد لله") {
  var ms = 12000;
      var interval = setInterval (function () {
        message.channel.send("لا إله الا الله, سبحان الله, الحمدالله, الله اكبر")
      }, ms); 
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
