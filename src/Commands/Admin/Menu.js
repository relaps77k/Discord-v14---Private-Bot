const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, StringSelectMenuBuilder } = require('discord.js');
const { BotOwners } = require('../../../config.js');

module.exports = {
    name: "menü",
    aliases: ["selectmenü", "menu"],

    execute: async (client, message, args) => {
        if (!BotOwners.some(muti => message.member.user.id == muti)) return message.reply({ content: `Yetkin bulunmuyor.` })
        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder().setCustomId('event-role').setLabel("Etkinlik Katılımcısı").setStyle(ButtonStyle.Success),
            new ButtonBuilder().setCustomId('giveaway-role').setLabel("Çekiliş Katılımcısı").setStyle(ButtonStyle.Success),
        );

        const row2 = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId('color-roles')
                .setPlaceholder('Renk rollerini seçmek için tıkla!')
                .addOptions([
                    { label: 'Gri', value: 'gri' },
                    { label: 'Siyah', value: 'siyah' },
                    { label: 'Beyaz', value: 'beyaz' },
                    { label: 'Kırmızı', value: 'kırmızı' },
                    { label: 'Mavi', value: 'mavi' },
                    { label: 'Sarı', value: 'sarı' },
                    { label: 'Yeşil', value: 'yeşil' },
                    { label: 'Mor', value: 'mor' },
                    { label: 'Turuncu', value: 'turuncu' },
                    { label: 'Pembe', value: 'pembe' },
                    { label: 'Kahverengi', value: 'kahverengi' },
                    { label: 'Rol İstemiyorum', value: 'rolistemiom-1' },
                ])
        )

        const row3 = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId('zodiac-roles')
                .setPlaceholder('Burç rollerini seçmek için tıkla!')
                .addOptions([
                    { label: 'Koç', value: 'koç' },
                    { label: 'Boğa', value: 'boğa' },
                    { label: 'İkizler', value: 'ikizler' },
                    { label: 'Yengeç', value: 'yengeç' },
                    { label: 'Aslan', value: 'aslan' },
                    { label: 'Başak', value: 'başak' },
                    { label: 'Terazi', value: 'terazi', },
                    { label: 'Akrep', value: 'akrep' },
                    { label: 'Yay', value: 'yay' },
                    { label: 'Oğlak', value: 'oğlak' },
                    { label: 'Kova', value: 'kova' },
                    { label: 'Balık', value: 'balık' },
                    { label: 'Rol İstemiyorum', value: 'rolistemiom' },
                ])
        )

        const row4 = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId('relationship-roles')
                .setPlaceholder('İlişki rollerini seçmek için tıkla!')
                .addOptions([
                    { label: 'İlişkisi Var', value: 'couple' },
                    { label: 'İlişkisi Yok', value: 'alone' },
                    { label: 'Rol İstemiyorum', value: 'rolistemiom-2' },
                ])
        )

        const row5 = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId('game-roles')
                .setPlaceholder('Oyun rollerini seçmek için tıkla!')
                .addOptions([
                    { label: 'Valorant', value: 'valorant' },
                    { label: 'League Of Legends', value: 'lol' },
                    { label: 'Minecraft', value: 'minecraft' },
                    { label: 'CS:GO', value: 'csgo' },
                    { label: 'GTA V', value: 'gta' },
                    { label: 'PUBG', value: 'pubg' },
                    { label: 'Fortnite', value: 'fortnite' },
                    { label: 'ROBLOX', value: 'roblox' },
                    { label: 'Rol İstemiyorum', value: 'rolistemiom-3' },
                ])
        )

        if (message) message.delete().catch(err => { });
        message.channel.send({
            content: `
**Merhaba __${message.guild.name}__ üyeleri,**
Sunucuda sizleri rahatsız etmemek için @everyone veya @here atmayacağız. Sadece isteğiniz doğrultusunda aşağıda bulunan tepkilere tıklarsanız Çekilişler,Etkinlikler V/K ve D/C'den haberdar olacaksınız.
Eğer Çekiliş Katılımcısı Butonuna tıklarsanız sunucumuzda sıkça vereceğimiz nice ödüllerin bulunduğu çekilişlerden haberdar olabilirsiniz.

Eğer Etkinlik Katılımcısı Butonuna tıklarsanız sunucumuzda düzenlenecek olan etkinlikler, konserler ve oyun etkinlikleri gibi etkinliklerden haberdar olabilirsiniz.

Aşağıda ki butonlara basarak siz de bu ödülleri kazanmaya hemen başlayabilirsiniz!`, components: [row, row2, row3, row5, row4]
        });
    }
}

