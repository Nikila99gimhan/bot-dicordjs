require('dotenv').config();


const { Client }= require('discord.js');
const client = new Client();
const PREFIX = "$";


client.on('ready',() => {
  console.log(`${client.user.tag} has logged in`); 
});

client.on('message', async (message) => {
  if(message.author.bot) return;
  if(message.content.startsWith(PREFIX))  {
    const [CMD_NAME, ...args] = message.content
    .trim()
    .substring(PREFIX.length)
    .split(/\s+/);
  
    if(CMD_NAME === 'kick'){
      if(message.member.hasPermission('KICK_MEMBERS')) 
      return message.reply('You DO NoT HAVE PERMISSION TO USE THAT COMMAND');
      if (args.length === 0) return message.reply('Please provide an ID');
      const member = message.guild.members.cache.get(args[0]);
      if(member) {
        member
         .kick()
         .then((member) => message.channel.send(`${member} was kicked.`))
         .catch((err) => message.channel.send('I Do NOT HAVE PERMISSION to kick that user : ('));

      } else {
        message.channel.send('That member was not found');
      }
     

     
    } else if(CMD_NAME === 'ban'){
      if(message.member.hasPermission('BAN_MEMBERS')) 
      return message.reply('You DO NoT HAVE PERMISSION TO USE THAT COMMAND');
      if (args.length === 0) return message.reply('Please provide an ID');
      
     try {
      const user = await message.guild.members.ban(args[0]);
      console.log(user);
      message.channel.send('User was banned successfuly');
     } catch (error) {
       console.log(error)
       message.channel.send('An error occured ! . Either I Do not have permission or the user was not found');
     }
        


    }
  }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);