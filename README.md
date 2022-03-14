const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://www.linkpicture.com/q/20220313_142355.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Bᴏᴛ Nᴀᴍᴇ Ⓚ︎Ⓐ︎Ⓛ︎Ⓘ︎Ⓟ︎Ⓟ︎Ⓐ︎Ⓝ︎ Ⓢ︎Ⓔ︎Ⓡ︎*

*Cʀᴇᴀᴛᴇʀ number : wa.me/918281370025?text=Hi%20Kᴀʟɪᴘᴘᴀɴ%20bro.%20*


 *Aᴍʀᴜ sᴇʀ Cʜᴀɴᴀʟ : https://youtube.com/channel/UC0yNrBziB3u2hzvXzJ4NnTA💖*
     
 *Iɴsᴛᴀɢʀᴀᴍ ɪᴅ: https://instagram.com/_midhun_x3__medium=copy_link*

 *Kᴀʟɪᴘᴘᴀɴ sᴇʀ Bᴏᴛ Gʀᴏᴜᴘ: https://chat.whatsapp.com/CDNbORWtY1KCPyrm5qNyIl*

 *Gɪᴛ Lɪɴᴋ : https://github.com/Kalippan-Midhunx3/Kalippanser*

 *Kᴀʟɪᴘᴘᴀɴ-sᴇʀ-ʙᴏᴛꫂ⁩..♡︎*
`}) 

}));
