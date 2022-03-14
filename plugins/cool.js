const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔══■□💖ᴋᴀʟɪᴘᴘᴀɴ-sᴇʀ💖■□══╗*\n           \n*⚜═ᴋᴀʟɪᴘᴘᴀɴ-sᴇʀ═⚜*\n\n*𝕆𝕨𝕟𝕖𝕣 Aᴍʀᴜ-ᴍɪᴅʜᴜɴ - https://api.whatsapp.com/send?phone=+918281370025&text=Please%20add%20Mɪᴅʜᴜɴ%20bot%20ɢʀᴏᴜᴘ%20💖*\n*            *\n*╚══■□💖ᴋᴀʟɪᴘᴘᴀɴ-sᴇʀ💖■□══╝*\n\n*▷Creator: Mɪᴅʜᴜɴ-Kᴀʟɪᴘᴘᴀɴ ✝︎*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Gɪᴛ Lɪɴᴋs*\n           *\n🌟═ᴋᴀʟɪᴘᴘᴀɴ-sᴇʀ ᴏᴡɴᴇʀ ᴋᴀʟɪᴘᴘᴀɴ- »« ʀᴇᴀʟ ɴᴀᴍᴇ-ᴍɪᴅʜᴜɴ═🌟*\n\n*🔅https://github.com/Kalippan-Midhunx3/Kalippanser*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔══■□💖ᴋᴀʟɪᴘᴘᴀɴ-sᴇʀ💖■□══╗*\n           \n*⚜═ᴋᴀʟɪᴘᴘᴀɴ-sᴇʀ═⚜*\n\n*𝕆𝕨𝕟𝕖𝕣 Aʙᴜ-ᴍɪᴅʜᴜɴ - https://api.whatsapp.com/send?phone=+917025631103&text=Please%20add%20Aᴍʀᴜsᴇʀ%20bot%20ɢʀᴏᴜᴘ%20💖*\n*            *\n*╚══■□💖ᴋᴀʟɪᴘᴘᴀɴ-sᴇʀ💖■□══╝*\n\n*▷Creator: Mɪᴅʜᴜɴ-Kᴀʟɪᴘᴘᴀɴ ✝︎*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Gɪᴛ Lɪɴᴋs*\n           *\n🌟═ᴋᴀʟɪᴘᴘᴀɴ-sᴇʀ ᴏᴡɴᴇʀ ᴋᴀʟɪᴘᴘᴀɴ- »« ʀᴇᴀʟ ɴᴀᴍᴇ-ᴍɪᴅʜᴜɴ═🌟*\n\n*🔅https://github.com/Kalippan-Midhunx3/Kalippanser*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
