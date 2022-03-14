/* Copyright (C) 2021 AMALSER.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Amalser - Amal
Wa.me/+918281370025
*/

const Neotro = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


Neotro.addCommand({pattern: 'help', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: 'Kᴀʟɪᴘᴘᴀɴ sᴇʀ Oᴡɴᴇʀs Nᴜᴍʙᴇʀ', description: "⚙Bᴏᴛ Oᴡɴᴇʀ Nᴜᴍᴇʀ\n\n\n*◁ === Tɪs Oᴡɴᴇʀs Kᴀʟɪᴘᴘᴀɴ Nᴀɴʙᴜɴ Aɴᴅ Cʜᴜɴᴋs === ▷*\n\n🎭 *Kᴀʟɪᴘᴘᴀɴ Bᴏᴛ Bʏ Kᴀʟɪᴘᴘᴀɴ sᴇʀ *\n 🔮 http://wa.me/+918281370025.\n\n🎭 *Aᴘᴀʀɴᴀ Bᴏᴛ Bʏ Mɪᴅʜᴜɴ-x3 Sᴇʀ*\n🔮 http://wa.me/+91828!370025\n\n🎭 *Kᴀʟɪᴘᴘᴀɴ Bᴏᴛ Bʏ Oɢɢʏ*\n🔮 http://wa.me/+919400048101\n\n🎭 *Kᴀʟɪᴘʟᴀɴ Bᴏᴛ Bʏ Aᴘᴀʀɴᴀ sᴇᴄʜɪ*\n🔮 http://wa.me/+918590655022\n\n ", rowId:" rowid1"},
        {title: 'Gɪᴛ', description: "Aᴘᴀʀɴᴀ Sᴇʀ Bᴏᴛ Mᴀᴋɪɴɢ Lɪɴᴋ.\n\n\n*◁ === 🥰🤗 Gɪᴛ Lɪɴᴋ === ▷*\n\nhttps://github.com/Midhun-kalippan/Aparna-Mwol\n\n ", rowId:"rowid2"},
        {title: 'Aᴘᴀʀɴᴀ Bᴏᴛ Oғғɪᴄᴀʟ Gʀᴏᴜᴘ Bʏ Oɢɢʏ', description: "Gʀᴏᴜᴘ Lɪɴᴋ .\n\n\nhttps://chat.whatsapp.com/Bq0eHs3UpGJ2BKIHOmy7mk\n\n ", rowId:" rowid5"},
        {title: 'Aᴘᴀʀɴᴀ Sᴇʀ Cʜᴀɴᴀʟ Lɪɴᴋ ', description: "Oggy Bᴏᴛ Mᴀᴋɪɴɢ Vɪᴅᴇᴏ Tʜɪs Cʜᴀɴᴀʟ\n\n\n*Oɢɢʏ Sᴇʀ Cʜᴀɴᴀʟ Sᴜʙsᴄʀᴀɪʙᴇ*\n\n*https://youtube.com/channel/UC1D6jQ-8pJd1PHCn8AIC_dA* ", rowId:" rowid6"},
        {title: 'Bᴏᴛ Gʀᴏᴜᴘ Dᴇsᴄʀɪᴘᴛɪᴏɴ', description: "Nɪʏᴀᴍᴀᴍ Iɴɪ Eʟʟᴀᴠᴀʀᴋᴋᴜᴍ Bᴀᴅʜᴀᴋᴀ Mᴀɴ \n\n\n☃️ᴏɴɴᴜᴍ ɪʟʟᴀ ɢʀᴏᴜᴘ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ😁 \n\n  ", rowId:" rowid7"}
       ]
       
       const sections = [{title: "Kᴀʟɪᴘᴘᴀɴsᴇʀ ❤️", rows: rows}]
       
       const button = {
        buttonText: '💚Kᴀʟɪᴘᴘᴀɴ Bᴏᴛ💚',
        description: "💖✻Kᴀʟɪᴘᴘᴀɴ Bᴏᴛ✻💖",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));
