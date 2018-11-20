const Discord = require('discord.js'); 
const client = new Discord.Client();   

var prefix = "$";

client.on("message", message => {

            if (message.content.startsWith(prefix + "obc")) {
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  client.users.filter(m => m.presence.status !== 'online').forEach(m => {
 m.send(${argresult}\n ${m});
})
 message.channel.send(\${client.users.filter(m => m.presence.status !== 'online').size}` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};
});

client.login(process.env.BOT_TOKEN);
