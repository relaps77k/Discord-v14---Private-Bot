const { PermissionFlagsBits, ButtonStyle, ButtonBuilder, ActionRowBuilder, Events, EmbedBuilder } = require("discord.js");

const client = global.client;

module.exports = {
    name: "nerede",
    aliases: ["n", "nerde", "where"],
    description: 'Ses Bilgilerini gösterir',
    execute: async (client, message, args) => {
     

        const embed = new EmbedBuilder() 
            .setColor("Random") 

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!user) return message.reply({ embeds: [embed.setDescription("> **Geçerli Bir User Belirt!**")] }).then(msg => {
            setTimeout(() => {
                msg.delete();
            }, 5000); 
        });
        
        let kanal = user.voice.channel;
        if (!kanal) return message.reply({ embeds: [embed.setDescription(`> **Belirtilen Kullanıcı Bir Ses Kanalında Bulunmamakta!**`)] })
        let microphone = user.voice.selfMute ? "Kapalı" : "Açık";
        let headphones = user.voice.selfDeaf ? "Kapalı" : "Açık";
        let sestekiler = message.guild.channels.cache.get(kanal.id).members.size >= 20 ? "Kanalda 20 Kişiden Fazla User Bulunmakta!" : message.guild.channels.cache.get(kanal.id).members.map(x => x.user).join(",");
        let davet = await kanal.createInvite();
      
        message.reply({ embeds: [embed.setDescription(`> **${user} Kullanıcısı ${kanal} Adlı Kanalda!**\n> **Mikrofon; \`${microphone}\`**\n> **Kulaklık; \`${headphones}\`**\n> **Sesteki Kullanıcılar; ${sestekiler}**\n\n> **[Kanala Katıl!](https://discord.gg/${davet.code})**`).setThumbnail(user.user.avatarURL({ dynamic: true }))] });
    }
}