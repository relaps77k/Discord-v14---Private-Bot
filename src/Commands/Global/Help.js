const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

module.exports = {
    name: "yardim",
    aliases: ["yardım", "help", "y", "h"],

    execute: async (client, message, args) => {

        const embed = new EmbedBuilder()
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setDescription(`**Kullanıcı Komutları**
- .avatar
- .banner
- .yardım
- .ship

**Yetkili Komutları**
- .say
- .sil
- .kilit
- .kilit
- .kilit 
        `)

        message.channel.send({ embeds: [embed] })
    }
}