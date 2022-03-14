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
        {title: 'Kᴀʟɪᴘᴘᴀɴ sᴇʀ Oᴡɴᴇʀs Nᴜᴍʙᴇʀ', description: "⚙Bᴏᴛ Oᴡɴᴇʀ Nᴜᴍᴇʀ\n\n\n*◁ === Tɪs Oᴡɴᴇʀs Kᴀʟɪᴘᴘᴀɴ Nᴀɴʙᴜɴᴢ Aɴᴅ Cʜᴜɴᴋs === ▷*\n\n🎭 *Kᴀʟɪᴘᴘᴀɴ sᴇʀ Bʏ Kᴀʟɪᴘᴘᴀɴ sᴇʀ *\n 🔮 http://wa.me/+918281370025.\n\n🎭 *Kᴀʟɪᴘᴘᴀɴ sᴇʀ Bʏ Oɢɢʏ sᴇʀ*\n🔮 http://wa.me/+919400048101\n\n🎭 *Kᴀʟɪᴘᴘᴀɴ sᴇʀ Bʏ Tʀᴏxɪɴ sᴇʀ*\n🔮 http://wa.me+919633049651\n\n🎭 *Kᴀʟɪᴘᴘᴀɴ sᴇʀ Bʏ Aᴘᴘᴜ Sᴇʀ*\n🔮 http://wa.me/+918590432917\n\n ", rowId:" rowid1"},
        {title: 'Gɪᴛ', description: "Aʙᴜ Sᴇʀ Bᴏᴛ Mᴀᴋɪɴɢ Lɪɴᴋ.\n\n\n*◁ === 🥰🤗 Gɪᴛ Lɪɴᴋ === ▷*\n\nhttps://github.com/Arx-Abu/Abu_ser\n\n ", rowId:"rowid2"},
        {title: 'Kᴀʟɪᴘᴘᴀɴ sᴇʀ Oғғɪᴄᴀʟ Gʀᴏᴜᴘ Bʏ Oɢɢʏ, description: "Gʀᴏᴜᴘ Lɪɴᴋ .\n\n\nhttps://chat.whatsapp.com/CDNbORWtY1KCPyrm5qNyIl\n\n ", rowId:" rowid5"},
        {title: 'Oɢɢʏ Sᴇʀ Cʜᴀɴᴀʟ Lɪɴᴋ ', description: "Cʜᴀɴᴀʟ\n\n\n*Kᴀʟᴀɴ Sᴇʀ Cʜᴀɴᴀʟ Sᴜʙsᴄʀᴀɪʙᴇ*\n\n*https://youtu.be/tzq89jsNOmE* ", rowId:" rowid6"},
        {title: 'Bᴏᴛ Gʀᴏᴜᴘ Dᴇsᴄʀɪᴘᴛɪᴏɴ', description: "Nɪʏᴀᴍᴀᴍ Iɴɪ Eʟʟᴀᴠᴀʀᴋᴋᴜᴍ Bᴀᴅʜᴀᴋᴀ Mᴀɴ \n\n\n☃️ᴏɴɴᴜᴍ ɪʟʟᴀ ɢʀᴏᴜᴘ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ😁 \n\n  ", rowId:" rowid7"}
       ]
       
       const sections = [{title: "Kᴀʟɪᴘᴘᴀɴ sᴇʀ ❤️", rows: rows}]
       
       const button = {
        buttonText: '💚Kᴀʟɪᴘᴘᴀɴ sᴇʀ💚',
        description: "💖✻Kᴀʟɪᴘᴘᴀɴ sᴇʀ Bᴏᴛ✻💖",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));
