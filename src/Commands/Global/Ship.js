const { PermissionFlagsBits, ButtonStyle, ButtonBuilder, ActionRowBuilder, Events, EmbedBuilder } = require("discord.js");

const client = global.client;
const canvafy = require('canvafy');

module.exports = {
    name: "ship",
    usage: "ship [@relaps77k / ID / Random]",
    aliases: ["ships", "kalp"],
    description: 'Ship Yaparsınız',

    execute: async (client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.random();
        if (!user) return message.channel.send({ embeds: [new EmbedBuilder().setDescription('> **Geçerli Bir User Belirt!**')] }).then(msg => {
            setTimeout(() => msg.delete(), 5000)
        });

        const ship = await new canvafy.Ship()
            .setAvatars(message.author.displayAvatarURL({ dynamic: true, extension: "png" }), user.user.displayAvatarURL({ dynamic: true, extension: "png" }))
            .setBackground("image", `${message.guild.bannerURL({ extension: "png", size: 2048 }) !== null ? message.guild.bannerURL({ extension: "png", size: 2048 }) : "https://i.imgur.com/sCL0QTh.png"}`)
            .setBorder("#f0f0f0")
            .setOverlayOpacity(0.5)
            .build();

        message.reply({
            content: `> **${message.author.tag} ❓ ${user.user.tag}**`,
            files: [{
                attachment: ship,
                name: `ship-${message.member.id}.png`
            }]
        });
    }
};