const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const canvafy = require('canvafy');

module.exports = {
    name: "profil",
    aliases: ["profile", "me"],

    execute: async (client, message, args) => {
        const user = message.mentions.users.first() || message.author;
        const member = message.guild.members.cache.get(user.id);

        const profile = await new canvafy.Profile()
            .setUser(user.id)
            .build();

        const attachment = new AttachmentBuilder(profile, 'profile-image.png');

        const embed = new EmbedBuilder()
            .setTitle(`${user.username}'ın Profili`)
            .setImage('attachment://profile-image.png')
            .setColor('Random');

        message.channel.send({ embeds: [embed], files: [attachment] });
    }
};