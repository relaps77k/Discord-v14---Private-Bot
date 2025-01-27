const client = global.client; 
const { Events } = require("discord.js");
const system = require("./../../config.js")
const canvafy = require("canvafy")

client.on(Events.GuildMemberAdd, async (member) => {
    const welcome = await new canvafy.WelcomeLeave()
    .setAvatar(member.user.displayAvatarURL({ forceStatic: true, extension: "png" }))
    .setBackground("image", "https://i.imgur.com/8QYcLvY.jpeg")
    .setTitle("Hoşgeldin!")
    .setDescription("Sunucumuza hoşgeldin!")
    .setBorder("#2a2e35")
    .setAvatarBorder("#2a2e35")
    .setOverlayOpacity(0.3)
    .build();
    member.guild.channels.cache.get(system.WelcomeChannel).send({
        files: [{
          attachment: welcome,
          name: `hosgeldin-${member.id}.png`
        }]
      });
    member.roles.add(system.MemberRole)
});