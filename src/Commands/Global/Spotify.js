const { PermissionFlagsBits, ActivityType, EmbedBuilder } = require("discord.js");
const canvafy = require('canvafy');

module.exports = {
    name: "spotify",
    usage: "spotify [@relaps77k / ID]",
    description: 'Spotify bilgilerini gösterir',
    aliases: ["spoti", "şarkı", "dinlediğim", "müzik", "spotfy"],
    execute: async (client, message, args) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

      
        const embed = new EmbedBuilder()
            .setColor("#1DB954") 
            .setTitle("Spotify Dinleme Bilgisi")
            .setFooter({ text: `İsteyen: ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) });

        if (member && member.presence && member.presence.activities && member.presence.activities.some(activity => activity.name === "Spotify" && activity.type === ActivityType.Listening)) {
            let spotifyActivity = member.presence.activities.find(activity => activity.type === ActivityType.Listening);
            const spotify = await new canvafy.Spotify()
                .setAuthor(spotifyActivity.state)
                .setAlbum(spotifyActivity.assets.largeText)
                .setImage(`https://i.scdn.co/image/${spotifyActivity.assets.largeImage.slice(8)}`)
                .setTimestamp(
                    new Date(Date.now()).getTime() - new Date(spotifyActivity.timestamps.start).getTime(),
                    new Date(spotifyActivity.timestamps.end).getTime() - new Date(spotifyActivity.timestamps.start).getTime()
                )
                .setTitle(spotifyActivity.details)
                .build();

            embed
                .setDescription(`**${member.user.username}** şu anda **Spotify**'da şarkı dinliyor!`)
                .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                .addFields(
                    { name: 'Şarkı Adı', value: spotifyActivity.details, inline: true },
                    { name: 'Albüm', value: spotifyActivity.assets.largeText, inline: true },
                    { name: 'Sanatçı', value: spotifyActivity.state, inline: true },
                )
                .setImage('attachment://canvafy.png');

            return message.reply({
                files: [{ name: "canvafy.png", attachment: spotify }],
                embeds: [embed]
            });
        } else {
            embed.setDescription(`> **${member.user.username} şu anda Spotify üzerinde şarkı dinlemiyor!**`);
            return message.reply({ embeds: [embed] });
        }
    }
};