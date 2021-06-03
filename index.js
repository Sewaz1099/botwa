/*
* Source Code: 
* https://github.com/zennn08/BaseSelfBot
* Recode by Me ^^
*/
const { MessageType, Presence, MessageOptions, Mimetype, MimetypeMap, WALocationMessage, WA_MESSAGE_STUB_TYPES, WA_DEFAULT_EPHEMERAL, ReconnectMode, ProxyAgent, ChatModification, GroupSettingChange, waChatKey, mentionedJid, processTime } = require("@adiwajshing/baileys");
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const { color } = require('./lib/color')
const { qrcode, error } = require("qrcode-terminal")
const { wait, getBuffer, generateMessageID, getGroupAdmins, getRandom, start, info, success, close, pickRandom, kyun } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { resolve } = require("path");
const { spawn, exec, execSync } = require("child_process")
const { removeBackgroundFromImageFile } = require('remove.bg')
const { uptotele, uptonaufal, uploadFile, uploadImages } = require('./lib/uploadimage')
const { ht, ht2, ctahta } = require('./lib/tahta.js')
const { webp2gifFile } = require("./lib/gif.js")
const speed = require('performance-now')
const imageToBase64 = require('image-to-base64')
const figlet = require('figlet')
const getEmoji = require('./lib/emoji-api')
const axios = require('axios');
const fs = require('fs')
const os = require('os');
const util = require('util')
const path = require('path')
const Ra = require('ra-api')
const cheerio = require('cheerio')
const syntax = require('syntax-error')
const moment = require('moment-timezone')
const request = require('request');
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const FormData = require('form-data')
const got = require("got");
const ytdl = require('ytdl-core');
const yts = require('yt-search')
const ID3Writer = require('browser-id3-writer');
const Exif = require('./lib/exif');
const exif = new Exif();
const Nekos = require('nekos.life')
const neko = new Nekos()
const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
const PhoneNumber = require('awesome-phonenumber')
const simple = require('./lib/simple.js')
//const WAConnection = simple.WAConnection(_WAConnection)

let setting = JSON.parse(fs.readFileSync('./src/settings.json'))
let revoke = JSON.parse(fs.readFileSync('./src/antirevoke.json'))

fake = "Selfbot-Whatsapp"
let fakeimage = fs.readFileSync("./src/aqul.jpeg")
let prefix = setting.prefix
let apiKey = setting.apiKey
let apixteam = setting.apixteam
imgb = '8c0a80b3b41f530988993924f47af7dc'
blocked = []
public = false

function serialize(chat) {
	m = JSON.parse(JSON.stringify(chat))
	content = m.message
	m.isGroup = m.key.remoteJid.endsWith('@g.us')
	try {
		const berak = Object.keys(content)[0]
		m.type = berak
	} catch {
		m.type = null
	}
	try {
		const context = m.message.extendedTextMessage.contextInfo.quotedMessage
		m.quoted = context
	} catch {
		m.quoted = null
	}
    try { 
    m.chat = m.key.remoteJid 
    } catch {
    m.chat = null
    }
	try {
		const mention = m.message[m.type].contextInfo.mentionedJid
		m.mentionedJid = mention
	} catch {
		m.mentionedJid = null
	}
	if (m.isGroup) {
		m.sender = m.participant
	} else {
		m.sender = m.key.remoteJid
	}
	if (m.key.fromMe) {
		m.sender = client.user.jid
	}
	txt = (m.type === 'conversation' && m.message.conversation) ? m.message.conversation : (m.type == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.type == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.type == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : ""
	m.text = txt
	return m
}
module.exports = client = async (client, mek) => {
		try {
			if (!mek.hasNewMessage) return
		  mek = mek.messages.all()[0]
      if (!mek.message) return
      if (mek.key && mek.key.remoteJid == 'status@broadcast') return
      mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			global.prefix
			global.blocked
			m = simple.smsg(client, mek)
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
			let d = new Date
			let locale = 'id'
      let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
      let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
      let hari = d.toLocaleDateString(locale, { weekday: 'long' })
      let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
			let hari2 = `${hari} ${weton}, ${date}`
		    if(time2 < "23:59:00"){
      var ucapanWaktu = 'Selamat Malam'
		    }
        if(time2 < "19:00:00"){
      var ucapanWaktu = 'Selamat Petang'
        }                                
        if(time2 < "18:00:00"){
      var ucapanWaktu = 'Selamat Sore'
        }                                 
            if(time2 < "15:00:00"){
      var ucapanWaktu = 'Selamat Siang'
        }                                 
            if(time2 < "11:00:00"){
      var ucapanWaktu = 'Selamat Pagi'
        }                                 
            if(time2 < "05:00:00"){
      var ucapanWaktu = 'Selamat Malam'
        }                                 
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const arg = body.substring(body.indexOf(' ') + 1)
			const q = args.join(' ')

			mess = {
				wait: 'Loading...',
				success: 'Ok desu ~',
				error: {
					stick: 'Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker',
					Iv: 'Link tidak valid'
				},
				only: {
					group: 'Perintah ini hanya bisa di gunakan dalam group! ',
					ownerG: 'Perintah ini hanya bisa di gunakan oleh owner group! ',
					ownerB: 'Perintah ini hanya bisa di gunakan oleh owner bot! ',
					admin: 'Perintah ini hanya bisa di gunakan oleh admin group! ',
					Badmin: 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin! '
				}
			}

			const botNumber = client.user.jid
			const ownerNumber = ['6281249227786@s.whatsapp.net', '6281382836249@s.whatsapp.net', '17737800906@s.whatsapp.net', '62813828362494@s.whatsapp.net']
			const isGroup = from.endsWith('@g.us')
			const sender = mek.key.fromMe ? client.user.jid : isGroup ? mek.participant : mek.key.remoteJid
			const totalchat = await client.chats.all()
			const groupOwner = `${from.split('-')[0]}@s.whatsapp.net`
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.id : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
      const isGroupOwner = groupOwner.includes(sender)
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
      const isRevoke = revoke.includes(from)
      const isOwner = ownerNumber.includes(sender)
			let v = client.contacts[sender] || { notify: sender.replace(/@.+/, '') }
      const pushname = mek.key.fromMe ? client.user.name : v.vname || v.notify || PhoneNumber('+' + v.jid.replace('@s.whatsapp.net', '')).getNumber('international')
      const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
      const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
      const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
      mention != undefined ? mention.push(mentionByReply) : []
      const mentionUser = mention != undefined ? mention.filter(n => n) : []
      const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
      const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek, thumbnail: fakeimage, sendEphemeral: true})
			}
      const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
      const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? client.sendMessage(from, {text: teks.trim(), jpegThumbnail: fakeimage}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : client.sendMessage(from, {text: teks.trim(), jpegThumbnail: fakeimage}, extendedText, { sendEphemeral: true, quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
      const toBase64 = (gambar) => new Promise(async (resolve, reject) => {
			imageToBase64(gambar)
					.then(
					(ress) => {
					resolve(ress)
			})
		})
    function formatDate(n, locale = 'id') {
    let d = new Date(n)
     return d.toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'
    })
    }
    function monospace(string) {
            return '```' + string + '```'
        }
    function today(i) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    return today;
    }
    const sendImgFromUrl = (teks, teks2) => {
				imageToBase64(teks)
					.then(
					(ress) => {
					var buf = Buffer.from(ress, 'base64')
					client.sendMessage(from, buf, image, { quoted: mek, caption: teks2, thumbnail: fakeimage })
					})
			}
		const sendStickerFromUrl = async(to, url) => {
          var names = Date.now() / 10000;
          var download = function (uri, filename, callback) {
          request.head(uri, function (err, res, body) {
          request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
          download(url, './sticker' + names + '.png', async function () {
          console.log(color('DONE', 'yellow'));
          let filess = './sticker' + names + '.png'
          let asw = './sticker' + names + '.webp'
          exec(`ffmpeg -i ${filess} -vf "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=60, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse" ${asw}`, (err) => {
            fs.unlinkSync(filess)
            if (err) return reply(String(err))
            exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
            if (error) return reply(String(error))
            client.sendMessage(from, fs.readFileSync(asw), sticker, {quoted:mek})
            fs.unlinkSync(asw)
                    });
                });
                });
            }
      const sendWebp = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './sticker' + names + '.png', async function () {
                console.log(color('DONE', 'yellow'));
                let filess = './sticker' + names + '.png'
                let asw = './sticker' + names + '.webp'
                exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
                fs.unlinkSync(filess)
                if (err) return reply(String(err))
                exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
                if (error) return reply(String(error))
                client.sendMessage(from, fs.readFileSync(asw), sticker, {quoted:mek})
                fs.unlinkSync(asw)
                    });
                });
                });
            }
      const sendStickerUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './sticker' + names + '.png', async function () {
                console.log(color('DONE', 'yellow'));
                let filess = './sticker' + names + '.png'
                let asw = './sticker' + names + '.webp'
                exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                fs.unlinkSync(filess)
                if (err) return reply(String(err))
                exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
                    if (error) return reply(String(error))
                client.sendMessage(from, fs.readFileSync(asw), sticker, {quoted:mek})
                fs.unlinkSync(asw)
                    });
                });
                });
            }
			const sendMediaURL = async(to, url, text="", quoted, mids=[]) =>{
             if(mids.length > 0){
             text = normalizeMention(to, text, mids)
                }
             const fn = Date.now() / 10000;
             const filename = fn.toString()
             let mime = ""
             var download = function (uri, filename, callback) {
             request.head(uri, function (err, res, body) {
             mime = res.headers['content-type']
             request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
             download(url, filename, async function () {
             console.log(color('DONE', 'yellow'));
             let media = fs.readFileSync(filename)
             let type = mime.split("/")[0]+"Message"
             if(mime === "image/gif"){
             type = MessageType.video
             mime = Mimetype.gif
                    }
             if(mime.split("/")[0] === "audio"){
             mime = Mimetype.mp4Audio
                    }
             client.sendMessage(to, media, type, {thumbnail: fakeimage, quoted: quoted, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    fs.unlinkSync(filename)
                });
            }
      const downloadM = async(save) => {
encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
if (save) return await client.downloadAndSaveMediaMessage(encmedia)
return await client.downloadMediaMessage(encmedia)
  }
      const createExif = (pack, auth) =>{
    let code = [0x00,0x00,0x16,0x00,0x00,0x00]
    let exif = {"sticker-pack-id": "com.client.tech", "sticker-pack-name": pack, "sticker-pack-publisher": auth, "android-app-store-link": "https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact", "ios-app-store-link": "https://itunes.apple.com/app/sticker-maker-studio/id1443326857"}
    let len = JSON.stringify(exif).length
    if (len > 256) {
        len = len - 256
        code.unshift(0x01)
    } else {
        code.unshift(0x00)
    }
    if (len < 16) {
        len = len.toString(16)
        len = "0" + len
    } else {
        len = len.toString(16)
    }
    //len = len < 16 ? `0${len.toString(16)}` : len.toString(16)
    const _ = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00]);
    const __ = Buffer.from(len, "hex")
    const ___ = Buffer.from(code)
    const ____ = Buffer.from(JSON.stringify(exif))
    fs.writeFileSync('./data.exif', Buffer.concat([_, __, ___, ____]), function (err) {
        console.log(err)
        if (err) return reply(String(err))
        return `./data.exif`
    })
}
const modStick = (media) => {
    out = getRandom('.webp')
    try {
        console.log(media)
        spawn('webpmux', ['-set','exif', './data.exif', media, '-o', out])
        .on('exit', () => {
            client.sendMessage(from, fs.readFileSync(out), sticker, {quoted: mek})
            fs.unlinkSync(out)
            fs.unlinkSync(media)
        })
    } catch (e) {
        console.log(e)
        reply(String(e))
        fs.unlinkSync(media)
    }
}
const hideTag = async function(from, text){
	let anu = await client.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	client.sendMessage(from, text, 'extendedTextMessage', {thumbnail: fakeimage, sendEphemeral: true, contextInfo: {"mentionedJid": ane}})
}  
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16505434800@s.whatsapp.net' } : {}) }, message: { "imageMessage":{"mimetype":'image/jpeg',"caption":`${ucapanWaktu} ${pushname}\n${hari2}`,"jpegThumbnail":await toBase64(await client.getProfilePicture(botNumber))}
}}
      colors = ['silver','gold','cyan','white','teal','yellow','green','magenta','pink','red','blue','orange','lime']
      rainbow = pickRandom(colors)
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
		/*if (isGroup && isBotGroupAdmins && mek.message && mek.quoted && mek.quoted.mtype === 'orderMessage') {
		 console.log(color(`Bug detected, from:\n${client.getName(sender)}\nwa.me/${sender.split('@')[0]}\n${from}`, 'red')
		    await client.modifyChat(from, 'clear')
        await client.groupRemove(from, [sender])
     console.log(color('Oke sip, Aman'))
            }*/
			if (isOwner){
			if (budy.toLowerCase() === `${prefix}self`){
				public = false
				reply(`_Self Mode_`)
			}
			if (budy.toLowerCase() === `${prefix}publik`){
				public = true
				reply(`_Publik Mode_`)
			}
			if (budy.startsWith('..')){
				console.log(color('[ EVAL ]', rainbow), color(time, rainbow), color(budy, rainbow), 'from', color(pushname, rainbow))
				try{
              reply(`${monospace(require('util').format(await eval(`;(async () => { ${budy.slice(3)} })()`)))}`)
              }catch(err){
              console.log(err)
	          e = String(err)
	          reply(`${monospace(e)}`)
	         }
	       }
			if (budy.startsWith('>')){
            konsol = budy.slice(1)
            Return = (sul) => {
            sat = JSON.stringify(sul, null, 2)
            bang = util.format(sat)
            if (sat == undefined){
            bang = util.format(sul)
            }
            return reply(bang)
            }
            try {
            reply(`${monospace(util.format(eval(`;(async () => { ${konsol} })()`)))}`)
            console.log(color('[ EVAL ]', rainbow), color(time, rainbow), color(budy, rainbow), 'from', color(pushname, rainbow))
             } catch(e){
             reply(`${monospace(String(e))}`)
             }
             }
			if (budy.startsWith('$')){
            reply('_Executing..._')
				console.log(color('[ TERM ]', rainbow), color(time, rainbow), color(budy, rainbow), 'from', color(pushname, rainbow))
				var konsol = budy.slice(1)
			exec(konsol, (err, stdout) => {
			if (err) return reply(`${monospace(String(err))}`)
			if (stdout) {
			reply(stdout)
			}
			})
			}
		}
		if (!public){
			if (!isOwner) return
		}
		
		if (isCmd && !isGroup) console.log(color('[ CMD ]', rainbow), color(time, rainbow), color(`${command} [${args.length}]`, rainbow), 'from', color(pushname, rainbow))
  	if (isCmd && isGroup) console.log(color('[ CMD ]', rainbow), color(time, rainbow), color(`${command} [${args.length}]`, rainbow), 'from', color(pushname, rainbow), 'in', color(groupName, rainbow))
    
    client.updatePresence(from, Presence.available)
    
			switch(command) {
				case 'help':
				case 'menu':
teks =`*─────「  WhatsApp Bot  」─────*

⦿ ${prefix}sticker
⦿ ${prefix}stickerfull
⦿ ${prefix}stickerwm
⦿ ${prefix}takestick
⦿ ${prefix}delwm
⦿ ${prefix}hidetag
⦿ ${prefix}tahta teks
⦿ ${prefix}ctahta teks1|teks2|teks3
⦿ ${prefix}tomp3
⦿ ${prefix}promote
⦿ ${prefix}demote
⦿ ${prefix}kick
⦿ ${prefix}add
⦿ ${prefix}sider

> Source Code:
https://github.com/zennn08/BaseSelfBot
`
client.sendMessage(from, teks, text, {thumbnail: fakeimage, detectLinks: false, sendEphemeral: true, quoted: freply, contextInfo:{forwardingScore:508, isForwarded:true}})
					break
case 'term':
	if (!isOwner) return
			if (!q) return
            reply(mess.wait)
			exec(q, (err, stdout) => {
			if (err) return reply(`${monospace(String(err))}`)
			if (stdout) {
			reply(stdout)
			}
			})
		    break
case 'ev':
                code = args.join(" ")
                try {
                if (!code) return client.reply(from, 'No JavaScript Code', m, {thumbnail: fakeimage, sendEphemeral:true})
                let evaled;
                if (code.includes("--silent") && code.includes("--async")) {
                code = code.replace("--async", "").replace("--silent", "");
                return await eval(`(async () => { ${code} })()`)
                } else if (code.includes("--async")) {
                code = code.replace("--async", "");
                evaled = await eval(`(async () => { ${code} })()`);
                } else if (code.includes("--silent")) {
                code = code.replace("--silent", "");
                return await eval(code);
                } else evaled = await eval(code);
              if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled, { depth: 0 });
            let output = clean(evaled);
            options = {
            	thumbnail: fakeimage,
                sendEphemeral: true,
                contextInfo: {
                    participant: '0@s.whatsapp.net',
                    remoteJid: 'status@broadcast',
                    quotedMessage: {
                        extendedTextMessage: {
                            text: "𝐄𝐗𝐄𝐂𝐔𝐓𝐎𝐑"
                        }
                    }
                }
            }
            client.sendMessage(from, `${output}`, text, options)
            } catch(err) {
                outerr = clean(err)
                reply(`Error: ${outerr}`)
            }
            function clean(text) {
            if (typeof text === "string")
              return text
                .replace(/`/g, `\`${String.fromCharCode(8203)}`)
                .replace(/@/g, `@`);
            // eslint-disable-line prefer-template
            else return text;
            }
            break
case 'join':
     if (!q) return reply('Masukkan link grup')
      if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply(mess.error.Iv)
      try {
      client.joinvialink(args[0])
      reply('Berhasil Masuk Grup')
      } catch (e) {
        console.log(e)
     	reply(String(e))
      }
      break
case 'p':
case 'ping':
case 'speed':
timestamp = speed();
latensi = speed() - timestamp
reply(`${monospace(`Speed: ${latensi.toFixed(4)} second`)}`)
break
case 'runtime':
case 'uptime':
  if (isOwner) {
anu = `${command.toUpperCase()} BOT:\n- ${kyun(process.uptime())}\n\n${command.toUpperCase()} DEVICE:\n- ${kyun(os.uptime())}`
reply(`${monospace(anu)}`)
} else {
  reply(`${monospace(`RUNTIME BOT:\n- ${kyun(process.uptime())}`)}`)
}
break
case 'hidetag':
				try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, quotedText)
				} catch {
hideTag(from, q)
				  }
				    break
case 'deepface':
var imgbb = require('imgbb-uploader')
      boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
      delb = await client.downloadAndSaveMediaMessage(boij, `./media/${sender}.png`)
      uplod = await imgbb(imgb, delb)
      ini_link = `${uplod.display_url}`
      await ameApi.generate("magik", { url: ini_link}).then(res => {
      fs.writeFileSync('./dep.png', res)
      ini_baf = fs.readFileSync('./dep.png')
      client.sendMessage(from, ini_baf, image, {quoted: mek})
      fs.unlinkSync('./dep.png')
      console.log('suksess')
      })
      break
case 'wasted':
case 'wanted':
case 'utatoo':
case 'unsharpen':
case 'thanos':
case 'sniper':
case 'sharpen':
case 'sepia':
case 'scary':
case 'rip':
case 'redple':
case 'rejected':
case 'posterize':
case 'ps4':
case 'pixelize':
case 'missionpassed':
case 'moustache':
case 'lookwhatkarenhave':
case 'jail':
case 'invert':
case 'instagram':
case 'greyscale':
case 'glitch':
case 'gay':
case 'frame':
case 'fire':
case 'distort':
case 'dictator':
case 'deepfry':
case 'ddungeon':
case 'circle':
case 'challenger':
case 'burn':
case 'brazzers':
case 'beautiful':
case 'approved3000years':
     var imgbb = require('imgbb-uploader')
     if (!isQuotedImage) return reply('Hmm...')
     reply(mess.wait)
     boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
     delb = await client.downloadAndSaveMediaMessage(boij, `./media/${sender}.png`)
     data = await imgbb(imgb, delb)
     anuk = `${data.display_url}`
     ini_gen = `${command}`
     console.log(color(ini_gen))
     imoj = await ameApi.generate(ini_gen, { url: anuk})
     client.sendMessage(from, imoj, image, {quoted: mek})
     break
case 'q':
case 'getquoted':
try {
	  tot = client.serializeM(await m.getQuotedObj())
return tot.quoted.copyNForward(m.chat, true, {thumbnail:fakeimage, sendEphemeral:true})
} catch (e) {
  console.log(color(e))
	reply('Chat yang di reply tidak mengandung reply!')
	}
	break
case 'hilih':
		try {
          quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation || mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.caption || mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.caption
					ie = (teks) => {
					return teks.replace(/['a','o','u','e','A','O','U','E']/g, "i");
					}
					reply(ie(quotedText))
					} catch {
					if (args.length < 1) return reply('Teksnya mana tod?')
					ie = (teks) => {
					return teks.replace(/['a','o','u','e','A','O','U','E']/g, "i");
					}
					reply(ie(args.join(' ')))
					}
					break
case 'spam':
				if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlahspam`)
				argz = arg.split("|")
				if (!argz) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (isNaN(argz[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argz[1]; i++){
					sendMess(from, argz[0])
				}
				break
case 'del':
				case 'delete':
					try {
						if (m.key.fromMe) return 
					if (mek.message.extendedTextMessage.contextInfo.participant != botNumber) return reply('Tidak Dapat Menghapus Pesan Orang Lain!')
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					 } catch (e) {
			reply('Reply Chat Bot!')
		}
					break
/*case 'enhance':
 q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) return reply('Tidak ada foto')
  if (!/image\/(jpe?g|png)/.test(mime)) return reply(`Mime ${mime} tidak support`)
  let img = await q.download()
  let body = new FormData
  body.append('image', img, 'image')
  let res = await fetch('http://max-image-resolution-enhancer.codait-prod-41208c73af8fca213512856c7a09db52-0000.us-east.containers.appdomain.cloud/model/predict', {
    method: 'POST',
    body
  })
  if (res.status !== 200) throw await res.json()
  await client.sendFile(m.chat, await res.buffer(), 'hd.jpg', 'Nih, hd kan?', m)
		break*/
case 'searchmusic':
case 'whatmusic':
				if (isQuotedAudio || isQuotedVideo || isQuotedDocument){
					reply(mess.wait)
				const dlfile = await client.downloadMediaMessage(JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo)
				 bodyForm = new FormData()
			        bodyForm.append('audio', dlfile, 'music.mp3')
           			bodyForm.append('apikey', 'caliph_71')
           			axios('https://api.zeks.xyz/api/searchmusic', {
                		method: 'POST',
                		headers: {
				"Content-Type": "multipart/form-data",
        			...bodyForm.getHeaders()
                		},
                		data: bodyForm
            			})
                		.then(({data}) =>{
				if (data.status){
				reply(`*「 WHAT MUSIC 」*\n\n*- Title*: ${data.data.title}\n*- Artists*: ${data.data.artists}\n*- Genre*: ${data.data.genre}\n*- Album*: ${data.data.album}\n*- Release date*: ${data.data.release_date}\n`)
				} else reply(data.message)
				}).catch(() => reply('Internal server error!, try again later'))
				} else {
				reply('Wrong format!')
				}
				break
case 'nhentaipdf':
if (!q) return reply('Wrong format!')
reply(mess.wait)
      try {
         	kode = args[0]
         	anu = await fetchJson(`http://lolhuman.herokuapp.com/api/nhentai/${kode}?apikey=oniichan`)
          anu = anu.result
          if (Number(anu.info.pages) > 100) return reply(`Buset ${anu.info.pages} pages, kebanyakan ngntd!`)
          tesk = `*- Title:* ${anu.title_romaji}\n`
tesk += `*- Parodies:* ${anu.info.parodies}\n`
tesk += `*- Tags:* ${anu.info.tags.join(", ")}\n`
tesk += `*- Pages:* ${anu.info.pages}\n\n`
tesk += `_Sending document..._`
           thumb = await getBuffer(anu.image[0])
           client.sendMessage(from, thumb, image, {caption: tesk, thumbnail: fakeimage, quoted: mek})
           data = await fetchJson(`http://lolhuman.herokuapp.com/api/nhentaipdf/${kode}?apikey=oniichan`)
          pdfnya = await getBuffer(data.result)
           client.sendMessage(from, pdfnya, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${anu.title_romaji}.pdf`, thumbnail: fakeimage })
                } catch (e) {
                	console.log(color(e))
                reply('Ada yg error!')
                }
                break
case 'tomp3':
    if (isQuotedVideo || isQuotedAudio || isQuotedDocument){
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await client.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            client.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            } else {
            	reply('Reply audio/videonya!')
            }
            break
				case 'lirik':
				if (!q) return reply('Masukkan judul lagunya!')
					res = await axios.get(`https://tobz-api.herokuapp.com/api/lirik?q=${q}&apikey=Tobzzz17`)
					const { thumb, lirik } = res.data.result
					client.sendFile(from, thumb, 'lirik.jpg', `LIRIK LAGU ${q.toUpperCase()}:\n\n${lirik}`, m)
					break
case 'play':
			if (!arg) return reply(`Penggunaan ${prefix + command} judul lagu`)
			var ssong = q
			let arama = await yts(ssong);
			arama = arama.all;
			if(arama.length < 1) return reply(mess.error.api)
    		reply(mess.wait)
    		var pbuff = await getBuffer(arama[0].image)
    		 title = arama[0].title.replace(' ', '+');
    		 stream = ytdl(arama[0].videoId, {
        				quality: 'highestaudio',
   						});
    	    got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
    		ffmpeg(stream)
        		.audioBitrate(128)
        		.save('./' + title + '.mp3')
        		.on('end', async () => {
            	 writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
            	writer.setFrame('TIT2', arama[0].title)
                .setFrame('TPE1', [arama[0].author.name])
                .setFrame('APIC', {
                    type: 3,
                    data: fs.readFileSync(title + '.jpg'),
                    description: arama[0].description
                });
            writer.addTag();
            playres = `*「 NOW PLAYING 」*\n\n❏ *Title* : ${arama[0].title}\n❏ *By* : ${arama[0].author.name}\n\n_Sending Audio..._`
            await sendMediaURL(from, pbuff, playres, mek)
            await client.sendMessage(from, Buffer.from(writer.arrayBuffer), audio, {mimetype: 'audio/mp4', quoted: mek});
        	fs.unlinkSync(title + '.jpg')
        	fs.unlinkSync('./' + title + '.mp3')
        	});
			break
case 'inspect':
if (!q) return reply('Wrong format!')
codee = args[0].split('https://chat.whatsapp.com/')[1]
res = await client.query({
json: ["query", "invite", codee],
expect200: true
 })
todd = `*「 Group Link Inspector 」*


• *Id:* ${res.id}

• *Nama grup:* ${res.subject}

• *Dibuat oleh* @${res.id.split('-')[0]}
pada *${formatDate(res.creation * 1000)}*${res.subjectOwner ? `

• *Judul diubah oleh* @${res.subjectOwner.split(`@`)[0]}
pada *${formatDate(res.subjectTime * 1000)}*`: ''}${res.descOwner ? `

• *Deskripsi diubah oleh* @${res.descOwner.split(`@`)[0]}
pada *${formatDate(res.descTime * 1000)}*` : ''}

• *Jumlah Member:* ${res.size}

• *Teman yang diketahui join*: ${res.participants ? '\n' + res.participants.map((user, i) => ++i + '. @' + user.id.split(`@`)[0]).join('\n').trim() : 'Tidak ada'}
${res.desc ? `\n• *Deskripsi:*\n
${res.desc}` : '\n*Tidak ada Deskripsi*'}
`
client.sendMessage(from, {text:todd, jpegThumbnail: fakeimage}, 'extendedTextMessage', {quoted: mek, contextInfo: { mentionedJid: client.parseMention(todd)}})
				break
case 'nulis': // BY MFARELS
          if (!q) return reply(`Kirim perintah *${prefix}nulis nama|kelas|teks*`) 
           inputPath = 'src/kertas/magernulis1.jpg'
           src = path.join(__dirname, './src/')
            _font = path.join(src, 'font')
           fontPath = path.join(_font, pickRandom(fs.readdirSync(_font)))
  outputPath = 'media/magernulis1.jpg'
  y = args.join` `
  d = new Date
  tgl = d.toLocaleDateString('id-Id')
  teks = y.split('|')
  panjangKalimat = teks[2].replace(/(\S+\s*){1,10}/g, '$&\n')
  tulisan = panjangKalimat.split('\n').slice(0, 33).join('\n')
  console.log(`fontPath : ${fontPath}\ninputPath : ${inputPath}\noutputPath : ${outputPath}\nhari : ${hari}\ntgl : ${tgl}\nnama : ${teks[0]}\nkelas : ${teks[1]}\nteks : ${tulisan}`)
  spawn('convert', [
    inputPath,
    '-font',
    fontPath,
    '-size',
    '1024x784',
    '-pointsize',
    '20',
    '-interline-spacing',
    '1',
    '-annotate',
    '+806+78',
    hari,
    '-font',
    fontPath,
    '-size',
    '1024x784',
    '-pointsize',
    '18',
    '-interline-spacing',
    '1',
    '-annotate',
    '+806+102',
    tgl,
    '-font',
    fontPath,
    '-size',
    '1024x784',
    '-pointsize',
    '20',
    '-interline-spacing',
    '-7.5',
    '-annotate',
    '+344+142',
    tulisan,
    '-annotate',
    '+360+120',
     teks[1], 
   '-annotate',
   '+360+100',
    teks[0],
    outputPath
  ])
      .on('error', () => reply(mess.error.api))
      .on('exit', () => {
           sendImgFromUrl(outputPath)
            })
					break
case 'searchmsg':  //by ANU TEAM
if (args.length < 1) return reply(`Pesan Yang Mau Dicari Apaan?\nContoh : ${prefix + command} halo|10`)
teks = arg
if (teks.includes("|")) { 
try {
var ve = teks.split("|")[0]
var za = teks.split("|")[1]
sampai = `${za}`
if (isNaN(sampai)) return reply('Harus berupa Angka!')
batas = parseInt(sampai) + 1
if (batas > 30) return reply('Maks 30!')
reply(mess.wait)
cok = await client.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
for (i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
client.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
}
}
} catch (e) {
return reply(String(e))
}
} else {
reply(`Format salah tod, ini contoh format yang benar : ${prefix + command} halo|10`)
}
break
case 'yta':
case 'ytaudio':
if (!arg) return reply(`Penggunaan ${prefix + command} link Yt`)
isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks) return reply(mess.error.Iv)
try {
	reply(mess.wait)
	anu = await axios.get(`https://api.xteam.xyz/dl/ytmp3?url=${args[0]}&APIKEY=${apixteam}`)
	const { judul, size, url, thumbnail } = anu.data
	teks = `*「 YOUTUBE AUDIO 」*\n\n❏ *Judul* : ${judul}\n❏ *Size* : ${size}\n❏ *Link Audio* : ${url}\n\n_Sending Audio..._`
	client.sendFile(from, thumbnail, '', teks, mek, false, {thumbnail: fakeimage})
	client.sendFile(from, url, `${judul}.mp3`, '', mek)
	} catch (e) {
		console.log(color(e))
		reply('Ada yg error!')
		}
	break
case 'ytvid':
case 'ytvideo':
if (!arg) return reply(`Penggunaan ${prefix + command} link Yt`)
isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks) return reply(mess.error.Iv)
try {
	reply(mess.wait)
	anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp4?url=${args[0]}&APIKEY=${apixteam}`)
	teks = `*「 YOUTUBE VIDEO 」*\n\n❏ *Judul:* ${anu.judul}\n❏ *Size:* ${anu.size}\n❏ *Link Download:* ${anu.url}\n\n_Sending Video..._`
	data = await getBuffer(anu.thumbnail)
    client.sendMessage(from, data, image, {quoted: mek, caption: teks, thumbnail: fakeimage})
	hasil = await getBuffer(anu.url)
	client.sendMessage(from, hasil, video, {quoted: mek, mimetype:'video/mp4', caption: `Video sudah terkirim @${sender.split('@')[0]}`, contextInfo:{mentionedJid:[sender]}})
	} catch (e) {
		console.log(color(e))
		reply('Ada yg error!')
		}
	break
case 'robot':
            if (isQuotedAudio || isQuotedVideo || isQuotedDocument){
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await client.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            client.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek, sendEphemeral: true})
            fs.unlinkSync(ran)
            })
            } else {
            	reply('Reply audio/video yg sudah dikirimkan!')
            }
            break
case 'apulsator':
            if (isQuotedAudio || isQuotedVideo || isQuotedDocument){
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await client.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -filter_complex "apulsator=mode=sine:hz=3:width=0.1:offset_r=0" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            client.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek, sendEphemeral: true})
            fs.unlinkSync(ran)
            })
            } else {
            	reply('Reply audio/video yg sudah dikirimkan!')
            }
            break
				case 'soundcloud':
				if (!q) return reply('Masukkan judul lagunya!')
				try {
				reply(mess.wait)
					anu = await fetchJson(`https://naufalhoster.xyz/dl/scdlplay?apikey=iniapikeygan2211&query=${q}`)
					teks = `</ *Result Found!* >\n\n• Judul: ${anu.result.title}\n• Genre: ${anu.result.genre}\n• Published: ${anu.result.published_at}\n• Size: ${anu.result.filesize}\n\n_Mohon tunggu, audio sedang dikirim!_`
					buff = await getBuffer(anu.result.music)
					reply(teks)
					client.sendMessage(from, buff, audio, {mimetype: 'audio/mp4', filename: `${sender}.mp3`, quoted: mek})
					} catch (e) {
						console.log(color(e))
						reply(String(e))
						}
					break
				case 'harta':
			case 'tahta':
			case 'hartatahta':
            if (!q) return reply(`Penggunaan ${prefix + command} teks`)
            reply(mess.wait)
            pek = args.join(' ').toUpperCase()
      client.sendMessage(from, await ht(pek), image, {caption: `HARTA TAHTA ${pek}\n\n\`\`\`Made with FFmpeg\`\`\``, quoted: mek, thumbnail: fakeimage})
				break
case 'tahta2':
			case 'harta2':
            if (!q) return reply(`Penggunaan ${prefix + command} teks`)
            reply(mess.wait)
      client.sendMessage(from, await ht2(q), image, {caption: `Harta Tahta ${q}\n\n\`\`\`Made with FFmpeg\`\`\``, quoted: mek, thumbnail: fakeimage})
				break
            case 'kustomtahta':
            case 'customtahta':
            case 'ctahta':
            if (!q) return reply(`Penggunaan ${prefix + command} teks|teks|teks`)
            if (!arg.includes('|')) return reply(`Penggunaan ${prefix + command} teks|teks|teks`)
      reply(mess.wait)
      teks1 = arg.split('|')[0]
      teks2 = arg.split('|')[1]
      teks3 = arg.split('|')[2]
      client.sendMessage(from, await ctahta(teks1, teks2, teks3), image, {caption: `\`\`\`Made with ffmpeg\`\`\``, quoted: mek, thumbnail: fakeimage})
				break
				case 'quotemaker':
				if (!q) return reply(`Penggunaan ${prefix + command} quote|author|tema`)
                    teks1 = arg.split("|")[0];
                    teks2 = arg.split("|")[1];
                    teks3 = arg.split("|")[2]
                    data = await fetchJson(`https://terhambar.com/aw/qts/?kata=${teks1}&author=${teks2}&tipe=${teks3}`)
                    hasil = await getBuffer(data.result)
                    client.sendMessage(from, hasil, image, {quoted: mek, thumbnail: fakeimage})
					break
				case 'togif':
            if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
            reply(mess.wait)
            encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            mediaaa = await client.downloadAndSaveMediaMessage(encmediaaa)
            agif = await webp2gifFile(mediaaa)
            mp4 = await getBuffer(agif.result)
            client.sendMessage(from, mp4, video, {quoted: mek, thumbnail: fakeimage, mimetype: 'video/gif'})
            fs.unlinkSync(mediaaa)
            } else {
            reply('Reply stiker gif nya')
            }
            break
            case 'tovideo':
            case 'tovid':
            if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
            reply(mess.wait)
            encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            mediaaa = await client.downloadAndSaveMediaMessage(encmediaaa)
            agif = await webp2gifFile(mediaaa)
            mp4 = await getBuffer(agif.result)
            client.sendMessage(from, mp4, video, {quoted: mek, thumbnail: fakeimage, mimetype: 'video/mp4'})
            fs.unlinkSync(mediaaa)
            } else {
            reply('Reply stiker gif nya')
            }
            break
				case 'ytmp3':
		    case 'mp3':
			if (!arg) return reply(`Penggunaan ${prefix + command} link YouTube`)
			var urlmsc = args[0]
		    try {
        		var aramam = await yts({videoId: ytdl.getURLVideoID(urlmsc)});
    		await reply(mess.wait)
    		 titles = 'ytmp3'
    		 streams = ytdl(aramam.videoId, {
        				quality: 'highestaudio',
   						});
    		var mbuff = await getBuffer(aramam.image)
    		got.stream(aramam.image).pipe(fs.createWriteStream(titles + '.jpg'));
    		ffmpeg(streams)
        		.audioBitrate(128)
        		.save('./' + titles + '.mp3')
        		.on('end', async () => {
            	 writers = new ID3Writer(fs.readFileSync('./' + titles + '.mp3'));
            	writers.setFrame('TIT2', aramam.title)
                .setFrame('TPE1', [aramam.author.name])
                .setFrame('APIC', {
                    type: 3,
                    data: fs.readFileSync(titles + '.jpg'),
                    description: aramam.description
                });
            writers.addTag();
            playmsc = `*「 YOUTUBE MUSIC 」*\n\n❏ *Title* : ${aramam.title}\n❏ *By* : ${aramam.author.name}\n\n_Sending Audio..._`
            await sendMediaURL(from, mbuff, playmsc, mek)
            await client.sendMessage(from, Buffer.from(writers.arrayBuffer), audio, {mimetype: 'audio/mp4', ptt: false, quoted: mek});
        	fs.unlinkSync(titles + '.jpg')
        	fs.unlinkSync('./' + titles + '.mp3')
        	});
        } catch (e) {
        		console.log(`Error :`, color(e,'red'))
			    reply(String(e))
    		}
			break
				case 'ytmp4':
		    case 'mp4':
			if (!arg) return reply(`Penggunaan ${prefix + command} link YouTube`)
			var urlvid = args[0]
		    try {
        		var aramav = await yts({videoId: ytdl.getURLVideoID(urlvid)});
    		await reply(mess.wait)
    		var yt = ytdl(aramav.videoId, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
  			yt.pipe(fs.createWriteStream('./' + aramav.videoId + '.mp4'));
  			yt.on('end', async () => {
  	  	playvid = `*「 YOUTUBE VIDEO 」*\n\n❏ *Title* : ${aramav.title}\n❏ *By* : ${aramav.author.name}`	
        	await client.sendMessage(from, fs.readFileSync('./' + aramav.videoId + '.mp4'), video, {caption:playvid, quoted:mek, thumbnail: fakeimage, mimetype: 'video/mp4'});
        	fs.unlinkSync('./' + aramav.videoId + '.mp4')
        	});
        } catch (e) {
    	console.log(`Error :`, color(e,'red'))
			reply(String(e))
    		}
			break
				case 'ocr':
					if (isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) {
						const encmedia = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja mas')
					}
					break
				case 's':
			case 'sgif':
			case 'stiker':
			case 'sticker':
			case 'stikergif':
			case 'stickergif':
			if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					const media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
                exec(`ffmpeg -i ${media} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=15, crop=512:512" ./sticker/${sender}.webp`, (err) => {
                    if (err) return reply(String(err))
                    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                    if (error) return reply(String(error))
                    client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
					fs.unlinkSync(media)	
					fs.unlinkSync(`./sticker/${sender}.webp`)	
                    })
                })
            } else if ((isMedia && mek.message.videoMessage.seconds < 10 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 10)) {
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					const media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					reply(mess.wait)
                exec(`ffmpeg -i ${media} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=15, crop=512:512" ./sticker/${sender}.webp`, (err) => {
                    if (err) return reply(String(err))
                    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                    if (error) return reply(String(error))
                    client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
					fs.unlinkSync(media)	
					fs.unlinkSync(`./sticker/${sender}.webp`)	
                    })
                })
					} else {
					reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
				}
				break
				case 'sfull':
			case 'stikerfull':
			case 'stickerfull':
				if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					const media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
				} else if ((isMedia && mek.message.videoMessage.seconds < 10 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 10)) {
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					const media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					reply(mess.wait)
						await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
				} else {
					reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
				}
				break
				case 'swm':
			case 'stickerwm':
				if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					if (!arg.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix + command} nama|author*`)
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					const media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					const packname1 = arg.split('|')[0]
					const author1 = arg.split('|')[1]
					exif.create(encodeURI(packname1), encodeURI(author1), `stickwm_${sender}`)
					await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
									fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
				} else if (isMedia && mek.message.videoMessage.seconds < 10 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 10) {
					if (!arg.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					const media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					const packname1 = arg.split('|')[0]
					const author1 = arg.split('|')[1]
					exif.create(packname1, author1, `stickwm_${sender}`)
					reply(mess.wait)
						await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})									
									fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
									fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
				} else {
					reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
				}
				break
				case 'delwm':
            case 'nowm':
            case 'hapuswm':
    		if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix + command}*`)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await client.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.webp')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply(String(err))
			buffer = fs.readFileSync(ran)
			client.sendMessage(from, buffer, sticker, {quoted: mek})
			fs.unlinkSync(ran)
					})
					break
					case 'exif':
				if (!isOwner) return
				if (!arg) return reply(`Penggunaan ${prefix}exif nama|author`)
				if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
				exif.create(arg.split('|')[0], arg.split('|')[1])
				reply(mess.success)
				break
					case 'bass':
            if (!q) return reply('Masukkan jumlah bass')
            if (isNaN(q)) return reply('Harus angka!')
            if (isQuotedAudio || isQuotedVideo || isQuotedDocument){
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await client.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -af equalizer=f=40:width_type=o:width=50:g=${args[0]} ${ran}`, (err, stderr, stdout) => {
            fs.unlinkSync(media)
            if (err) return reply(String(err))
            buffer453 = fs.readFileSync(ran)
            client.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek})
            fs.unlinkSync(ran)
            })
            } else {
            	reply('Reply audio/videonya!')
            }
            break
			case 'take':
    case 'takestik':
    case 'takestick':
    		if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix + command}*`)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await client.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `Selfbot-Whatsapp`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `Ripp,-`
            createExif(encodeURI(satu), encodeURI(dua))
			modStick(media)
				break
case 'colong':
    		if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix + command}*`)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await client.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `${client.getName(sender, true)}`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `UwU`
            createExif(encodeURI(satu), encodeURI(dua))
			modStick(media)
				break
				/*case 'sticknobg':
					if (isQuotedSticker) {
				 if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated) return reply('Reply sticker gambar!')
ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
ran = getRandom('.png')
ehgmediabi = await client.downloadAndSaveMediaMessage(ger)
exec(`ffmpeg -i ${ehgmediabi} ${ran}`, (err) => {
	fs.writeFileSync('sticknobg.png', fs.readFileSync(ran))
						if (err) return reply(String(err))
							ranp = getRandom('.png')
					keyrmbg = 'J93DHS3AqHmXJQWm4XLv9iRY'
							removeBackgroundFromImageFile({path: 'sticknobg.png', apiKey: keyrmbg, size: 'auto', type: 'auto', ranp})
							.then(res => {
								let buffur = Buffer.from(res.base64img, 'base64')
								fs.writeFileSync(ranp, buffur)
								var imgbb = require('imgbb-uploader')
								reply(mess.wait)
					imgbb("68cb5bee517bce4f74b0e910a5d96346", ranp)
								.then(anu => {
								sendStickerUrl(from, anu.display_url)
								})
							})
					})
					} else {
						reply('Mana sticker nya?')
					}
				break*/
				case 'gtts':
					if (args.length < 1) return reply('Kode bahasanya mana om?')
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return reply('Textnya mana om')
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						client.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					break
                case 'setthumb':
                if (!isOwner) return
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await client.downloadMediaMessage(boij)
				fs.writeFileSync(`./media/aqul.jpeg`, delb)
				fakeimage = fs.readFileSync(`./src/aqul.jpeg`)
				reply(mess.success)
				break
				case 'setprefix':
					if (!isOwner) return
					prefix = args[0]
					setting.prefix = prefix
					fs.writeFileSync('./src/settings.json', JSON.stringify(setting, null, '\t'))
					reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
					break
				case 'clearall':
					if (!isOwner) return
					client.setMaxListeners(25)
					for (let _ of totalchat) {
						client.ChatModification(_.jid, 'clear')
					}
					reply('Sukses delete all chat :)')
					break
				case 'bc':
					if (!isOwner) return
					if (!q) return
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of totalchat) {
							client.sendMessage(_.jid, buff, image, {caption: `[ Ini Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ Ini Broadcast ]\n\n${args.join(' ')}`)
						}
						reply('Suksess broadcast')
					}
					break
				case 'listadmins':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
  case 'linkgroup':
  case 'linkgrup':
  case 'linkgc':
    if (!isGroup) return reply(mess.only.group)
    if (!isGroupAdmins) return reply(mess.only.admin)
    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
    linkgc = await client.groupInviteCode(from)
    reply('https://chat.whatsapp.com/'+linkgc)
                    break
 case 'leave':
    if (!isGroup) return reply(mess.only.group)
    if (isGroupAdmins || isOwner) {
       	client.groupLeave(from)
       } else {
        reply(mess.only.admin)
              }
         break
				case 'toimg':
					if (!isQuotedSticker) return reply(' reply stickernya um ')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(String(err))
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: fakeimage})
						fs.unlinkSync(ran)
					})
					break
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Foto aja mas')
					}
					break
case 'sider':
  if(!isGroup) return reply(mess.only.group)
try {
infom = await client.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `*• Dibaca oleh:*\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
teks += `*• Tersampaikan pada:*\n\n`
for(let i of infom.deliveries){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
} catch (e) {
  console.log(color(e))
	reply('Reply chat bot!')
	}
      break
case 'kick':
  if (!isGroup) return
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
  if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
    entah = arg.replace(new RegExp("[()+-/ +/]", "gi"), "")
      entah = `${entah}@s.whatsapp.net`
      tesk = `Sure, kick @${entah.split`@`[0]}`
client.reply(from, tesk, mek, {contextInfo:{mentionedJid: client.parseMention(tesk)}})
await client.sleep(1000)
      client.groupRemove(from, [entah])
                        } else {
entah = mek.message.extendedTextMessage.contextInfo.participant || mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
tesk = `Sure, kick @${entah.split`@`[0]}`
client.reply(from, tesk, mek, {contextInfo:{mentionedJid: client.parseMention(tesk)}})
await client.sleep(1000)
client.groupRemove(from, [entah])
                        } 
                    break
case 'add':
  if (!isGroup) return
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
      if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
      entah = arg.replace(new RegExp("[()+-/ +/]", "gi"), "")
      entah = `${entah}@s.whatsapp.net`
      tesk = `Sure, add @${entah.split`@`[0]}`
client.reply(from, tesk, mek, {contextInfo:{mentionedJid: client.parseMention(tesk)}})
await client.sleep(1000)
      client.groupAdd(from, [entah])
                        } else {
      entah = mek.message.extendedTextMessage.contextInfo.participant
      tesk = `Sure, add @${entah.split`@`[0]}`
client.reply(from, tesk, mek, {contextInfo:{mentionedJid: client.parseMention(tesk)}})
await client.sleep(1000)
      client.groupAdd(from, [entah])
                        }
                break
// Nanti ae lah fixnya
/*case 'promote':
  if (!isGroup) return
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
      if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
      entah = mek.message.extendedTextMessage.contextInfo.participant || mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
  tesk = `Sure, promote @${entah.split`@`[0]}`
client.reply(from, tesk, m, {contextInfo:{mentionedJid: client.parseMention(tesk)}})
      client.groupMakeAdmin(from, [entah])
                        }
                break
case 'demote':
  if (!isGroup) return
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
      if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
      entah = arg.replace(new RegExp("[()+-/ +/]", "gi"), "")
      entah = `${entah}@s.whatsapp.net`
      tesk = `Sure, demote @${entah.split`@`[0]}`
client.reply(from, tesk, m, {contextInfo:{mentionedJid: client.parseMention(tesk)}})
  client.groupDemoteAdmin(from, [entah])
                        } else {
      entah = mek.message.extendedTextMessage.contextInfo.participant
      tesk = `Sure, demote @${entah.split`@`[0]}`
client.reply(from, tesk, m, {contextInfo:{mentionedJid: client.parseMention(tesk)}})
      client.groupDemoteAdmin(from, [entah])
                        }
                break*/
					case 'antidelete':
					if (!q) return
					if (args[0] == 'aktif' || args[0] == 'enable') {
				 if (revoke.includes(from)) return reply('Udah aktif')
						revoke.push(from)
						fs.writeFileSync('./src/antirevoke.json', JSON.stringify(revoke))
						reply('Sukses mengaktifkan fitur Antidelete di group ini')
					} else if (args[0] == 'mati' || args[0] == 'disable') {
					  let off = revoke.indexOf(from)
						revoke.splice(off, 1)
						fs.writeFileSync('./src/antirevoke.json', JSON.stringify(revoke))
						reply('Sukses menonaktifkan fitur Antidelete di group ini')
					} else {
						reply('Ga gitu')
					}
					break
				default:
				break
        }
    } catch (err) {
        e = String(err)
            if (!e.includes("this.isZero")) {
	console.log(color('[ ERROR ]', 'red'), e)
	// console.log(e)
	}
    }
}
