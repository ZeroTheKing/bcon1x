     client.on('message', message => {
                  if(!message.channel.guild) return;
        var prefix = "!";
        if(message.content.startsWith(prefix + 'obc')) {
        if(!message.channel.guild) return message.channel.send('**This is only for servers**').then(m => m.delete(5000));
      if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**Unfortunately you do not have permission** `ADMINISTRATOR`' );
        let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
        let copy = "1 - Dream";
        let request = `Requested By ${message.author.username}`;
        if (!args) return message.reply('**You must type a word or phrase to send the podcast**');message.channel.send(`**Are you sure you are sending your podcast?؟ \nPodcast content:** \` ${args}\``).then(msg => {
        msg.react('?')
        .then(() => msg.react('?'))
        .then(() =>msg.react('?'))
         
        let reaction1Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
        let reaction2Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
         
        let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
        let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
         
        reaction1.on("collect", r => {
        message.channel.send(`? | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
        message.guild.members.forEach(m => {
        var bc = new
           Discord.RichEmbed()
           .setColor('RANDOM')
           .setTitle('Broadcast')
           .addField('Server', message.guild.name)
           .addField('Sender', message.author.username)
           .addField('Message', args)
           .setThumbnail(message.author.avatarURL)
           .setFooter(copy, client.user.avatarURL);
        m.send({ embed: bc })
        msg.delete();
        })
        })
        reaction2.on("collect", r => {
        message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
        msg.delete();
        })
        })
        }
        });
