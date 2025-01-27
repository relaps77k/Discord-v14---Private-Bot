const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'account',
    aliases: ['bilgi', 'kbilgi'],
    description: 'Kullanıcı bilgilerini gösterir',
    
    execute: async (client, message, args) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        if (!member) {
            return message.reply('Lütfen geçerli bir kullanıcı belirtin.');
        }

        const embed = new EmbedBuilder()
            .setDescription(`**➥ Kullanıcı Bilgileri**
            
    • Kullanıcı: (<@${member.user.id}> - \`${member.user.id}\`)
    • Hesap Kurulum Tarihi: <t:${parseInt(member.user.createdTimestamp / 1000)}:R>
    • Sunucuya Katılma Tarihi: <t:${parseInt(member.joinedTimestamp / 1000)}:R>
    `)
            .setThumbnail(`${member.user.displayAvatarURL()}`)
            .setColor("Random");
        
        message.channel.send({ embeds: [embed] });
    },
};