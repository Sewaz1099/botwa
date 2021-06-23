/*
* Source Code: 
* https://github.com/zennn08/BaseSelfBot
* Recode by Me ^^
*/
const { MessageType, Presence, MessageOptions, Mimetype, MimetypeMap, WALocationMessage, WA_MESSAGE_STUB_TYPES, WA_DEFAULT_EPHEMERAL, ReconnectMode, ProxyAgent, ChatModification, GroupSettingChange, waChatKey, mentionedJid, proto } = require("@adiwajshing/baileys");
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const { color } = require('./lib/color')
const { qrcode, error } = require("qrcode-terminal")
const { wait, getBuffer, generateMessageID, getGroupAdmins, getRandom, start, info, success, close, pickRandom, clockString, processTime, monospace } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { resolve } = require("path");
const { spawn, exec, execSync } = require("child_process")
const { removeBackgroundFromImageFile } = require('remove.bg')
const { uptotele, RESTfulAPI, uploadFile, uploadImages } = require('./lib/uploadimage')
const { ht, ht2, ctahta } = require('./lib/tahta.js')
const { webp2gifFile, igDownloader, TiktokDownloader, tts } = require("./lib/gif.js")
const { stc } = require('./sticker.js')
const { search } = require('kaori')
const { performance } = require('perf_hooks')
const { sizeFormatter } = require('human-readable')
const afk = require('./lib/afk.js')
const getEmoji = require('./lib/emoji-api')
const translate = require('./lib/translate.js')
const speed = require('performance-now')
const imageToBase64 = require('image-to-base64')
const figlet = require('figlet')
const axios = require('axios');
const fs = require('fs')
const get = require('got')
const ms = require('parse-ms')
const fse = require('fs-extra')
const os = require('os');
const util = require('util')
const path = require('path')
//const Ra = require('ra-api')
const cheerio = require('cheerio')
const { promisify } = require('util')
const googleIt = require('google-it')
const syntax = require('syntax-error')
const brainly = require('brainly-scraper-v2')
const moment = require('moment-timezone')
const request = require('request');
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const FormData = require('form-data')
const got = require("got");
const _gis = require('g-i-s')
const webp = require('node-webpmux')
const zsExtract = require('zs-extract')
const driveURL = require('drive-url')
const instagramGetUrl = require("instagram-url-direct")
const ytdl = require('ytdl-core');
const yts = require('yt-search')
const ID3Writer = require('browser-id3-writer');
const Exif = require('./lib/exif');
const exif = new Exif();
const Nekos = require('nekos.life')
const neko = new Nekos()
const imgbb = require('imgbb-uploader')
const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
const PhoneNumber = require('awesome-phonenumber')
const simple = require('./lib/simple.js')
//const WAConnection = simple.WAConnection(_WAConnection)

let setting = fse.readJsonSync('./lib/settings.json')
const revoke = fse.readJsonSync('./src/antirevoke.json')
let fitur = fse.readJsonSync('./src/fitur.json')
let _afk = fse.readJsonSync('./src/afk.json')
let errorimg = "https://telegra.ph/file/c2dd4f571b84f28b30980.jpg"
fake = "Selfbot-Whatsapp"
let fakeimage = fs.readFileSync("./media/aqul.jpeg")
imgb = '8c0a80b3b41f530988993924f47af7dc'
blocked = []
hit_today = []
let { prefix, lolkey, apiKey, apixteam } = setting
public = true

module.exports = client = async (client, mek) => {
		try {
			if (!mek.hasNewMessage) return
		    mek = mek.messages.all()[0]
            if (!mek.message) return
            if (mek.key && mek.key.remoteJid == 'status@broadcast') return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            m = simple.smsg(client, mek)
            if (m.isBaileys) return
            let { mentioned } = m
			global.prefix
			global.blocked
			global.hit_today
			global.revoke
			global.fitur
			global.public
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
            let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', { day: 'numeric', month: 'long', year: 'numeric' }).format(d)
			let hari2 = `${hari} ${weton}, ${date}`
		    if (time2 < "23:59:00"){
            var ucapanWaktu = 'Selamat Malam'
		    }
            if (time2 < "19:00:00"){
            var ucapanWaktu = 'Selamat Petang'
            }                                
            if (time2 < "18:00:00"){
            var ucapanWaktu = 'Selamat Sore'
            }                                 
            if (time2 < "15:00:00"){
            var ucapanWaktu = 'Selamat Siang'
            }                                 
            if(time2 < "11:00:00"){
            var ucapanWaktu = 'Selamat Pagi'
            }                                 
            if (time2 < "05:00:00"){
            var ucapanWaktu = 'Selamat Malam'
            }                                 
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			hit_today.push(command)
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const arg = body.substring(body.indexOf(' ') + 1)
			const q = args.join(' ')
			const pasifCmd = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
            const pasifQ = budy.replace(pasifCmd, '')
			const more = String.fromCharCode(8206)
	        const readmore = more.repeat(4000)

			mess = {
				wait: 'Loading...',
				success: 'Sukses ~',
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
			const ownerNumber = ['14402566558@s.whatsapp.net', '6287774569531@s.whatsapp.net', '6281382836249@s.whatsapp.net', '6289681378568@s.whatsapp.net', '6281249227786@s.whatsapp.net', botNumber]
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
            const isAfkOn = afk.checkAfkUser(sender, _afk)
            //const isSticker = mek.message.stickerMessage
            const ram = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
	        let v = client.contacts[sender] || { notify: sender.replace(/@.+/, '') }
            const pushname = mek.key.fromMe ? client.user.name : v.vname || v.notify || PhoneNumber('+' + v.jid.replace('@s.whatsapp.net', '')).getNumber('international')
      //const pushname = client.getName(sender, true)
      const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
      const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
      const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
      mention != undefined ? mention.push(mentionByReply) : []
      const mentionUser = mention != undefined ? mention.filter(n => n) : []
      const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
      const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:m, thumbnail: fakeimage, sendEphemeral: true, contextInfo:{mentionedJid: client.parseMention(teks)}})
			}
      const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
	  const sendBug = (hehe, teks) => {
      client.toggleDisappearingMessages(hehe, 7*24*60*60)
	  client.toggleDisappearingMessages(hehe, 0) 
	  sendMess(hehe, teks)
			}
      const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? client.sendMessage(from, {text: teks.trim(), jpegThumbnail: fakeimage}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : client.sendMessage(from, {text: teks.trim(), jpegThumbnail: fakeimage}, extendedText, { sendEphemeral: true, quoted: m, contextInfo: { "mentionedJid": memberr } })
        }
       const fakereply = (pesan, tipe, pesan2, remoteJid) => {
			client.sendMessage(from, pesan, tipe, {sendEphemeral: true, thumbnail: fakeimage, quoted: { key: { fromMe: false, participant: `${sender}`, ...(from ? { remoteJid: remoteJid } : {}) }, message: { conversation: pesan2 }}})
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
    const sendImgFromUrl = (teks, teks2) => {
				imageToBase64(teks)
					.then(
					(ress) => {
					var buf = Buffer.from(ress, 'base64')
					client.sendMessage(from, buf, image, { quoted: m, caption: teks2, thumbnail: Buffer.alloc(0) })
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
            client.sendMessage(from, fs.readFileSync(asw), sticker, {quoted:m})
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
                client.sendMessage(from, fs.readFileSync(asw), sticker, {quoted:m})
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
                client.sendMessage(from, fs.readFileSync(asw), sticker, {quoted:m})
                fs.unlinkSync(asw)
                    });
                });
                });
            }
            async function sendFileFromUrl(from, url, caption, msg, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            client.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: msg, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
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
            client.sendMessage(from, fs.readFileSync(out), sticker, {quoted: m})
            fs.unlinkSync(out)
            fs.unlinkSync(media)
        })
    } catch (e) {
        console.log(e)
        reply(String(e))
        fs.unlinkSync(media)
    }
}
const getGroup = async function(totalchat){
	let grup = []
	let a = []
	let b = []
	for (c of totalchat){
		a.push(c.jid)
	}
	for (d of a){
		if (d && d.includes('g.us')){
			b.push(d)
		}
	}
	for (e of b){
		let ingfo = await client.groupMetadata(e)
		grup.push(ingfo)
	}
	return grup
}
const hideTag = async function(from, text){
	let anu = await client.groupMetadata(from)
	let ppgc = await client.getProfilePicture(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	client.sendMessage(from, text, 'extendedTextMessage', {thumbnail: fakeimage, sendEphemeral: true, contextInfo: {"mentionedJid": ane}})
}  
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16505434800@s.whatsapp.net' } : {}) }, message: { "imageMessage":{"mimetype":'image/jpeg',"caption":`${ucapanWaktu} ${pushname}\n${hari2}`,"jpegThumbnail":await toBase64(await client.getProfilePicture("6281938073630-1612105289@g.us"))}
}}
      colors = ['silver','gold','cyan','white','teal','yellow','green','magenta','pink','red','blue','orange','lime']
      rainbow = pickRandom(colors)
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
			
            if (isOwner) {
        if (budy.startsWith('>')){
        konsol = budy.slice(1)
        Return = (objectPromise) => {
        objectString = JSON.stringify(objectPromise, null, 2)
        parse = util.format(objectString)
        if (objectString == undefined){
        parse = util.format(objectPromise)
        }
        return reply(parse)
        }
        try {
        reply(util.format(eval(`;(async () => { ${konsol} })()`)))
        console.log(color('[ EVAL ]', rainbow), color(time, rainbow), color(budy, rainbow), 'from', color(pushname, rainbow))
         } catch(e) {
         e = String(e)
         console.log(color(e, 'red'))
         reply(`${monospace(e)}`)
         }
         }
		if (budy.startsWith('$')){
            reply('Executing...')
				console.log(color('[ TERM ]', rainbow), color(time, rainbow), color(budy, rainbow), 'from', color(pushname, rainbow))
				 konsol = budy.slice(1)
			exec(konsol, (err, stdout) => {
			if (err) return client.reply(from, `${monospace(String(err))}`, mek, {thumbnail: fakeimage, sendEphemeral:true})
			if (stdout) {
			client.reply(from, '❏ Code:'+konsol+'\n________________________\n\n'+stdout, mek, {thumbnail: fakeimage, sendEphemeral: true})
			}
			})
			}
			}
		if (!public){
			if (!isOwner) return
		}
            
            // AFK
client.on('chat-update', asd => {
if (asd.presences) {
	for (key in asd.presences) {
		if (asd.presences[key].lastKnownPresence == 'composing' || asd.presences[key].lastKnownPresence == 'recording') {
			if (!isGroup) return
			if (afk.checkAfkUser(key, _afk)) {
               _afk.splice(afk.getAfkPosition(key, _afk), 1)
            fs.writeFileSync('./src/afk.json', JSON.stringify(_afk))
         ckck = `\n*@${key.split('@')[0]}* terdeteksi ${asd.presences[key].lastKnownPresence == 'composing' ? 'sedang mengetik...' : 'sedang merekam...'}\nSekarang dia sudah tidak AFK\n`
     client.sendMessage(asd.jid, ckck.trim(), text, {thumbnail: fakeimage, sendEphemeral: true, contextInfo:{mentionedJid:client.parseMention(ckck)}})
                }}}}})

        if (isGroup) {
                for (let ment of mentionUser) {
                    if (afk.checkAfkUser(ment, _afk)) {
                        getId = afk.getAfkId(ment, _afk)
                        getReason = afk.getAfkReason(getId, _afk)
                        getTime = Date.now() - afk.getAfkTime(getId, _afk)
                        heheh = ms(getTime)
                        reply(`@${ment.split('@')[0]} sedang AFK\n\n*Reason :* ${getReason}\n*Sejak :* ${heheh.hours} jam, ${heheh.minutes} menit, ${heheh.seconds} detik yg lalu\n`)
                        client.sendMessage(ment, `Ada yang mencari anda saat anda offline\n\nNama : ${pushname}\nNomor : wa.me/${sender.split("@")[0]}\nDi Grup : ${groupName}\nPesan : ${budy}`, text, {contextInfo:{mentionedJid: client.parseMention(budy)}})
                    }
                }
                if (afk.checkAfkUser(sender, _afk)) {
                	getId = afk.getAfkId(sender, _afk)
                	getReason = afk.getAfkReason(getId, _afk)
                    getTime = Date.now() - afk.getAfkTime(getId, _afk)
                    heheh = ms(getTime)
                    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
                    fs.writeFileSync('./src/afk.json', JSON.stringify(_afk))
                    reply(`@${sender.split('@')[0]} telah kembali dari AFK\n\n*Reason :* ${getReason}\n*Selama :* ${heheh.hours} jam ${heheh.minutes} menit ${heheh.seconds} detik\n`)
                }
            }
        
		    if (isCmd && !isGroup) console.log(color('[ CMD ]', rainbow), color(time, rainbow), color(`${command} [${args.length}]`, rainbow), 'from', color(pushname, rainbow))
        	if (isCmd && isGroup) console.log(color('[ CMD ]', rainbow), color(time, rainbow), color(`${command} [${args.length}]`, rainbow), 'from', color(pushname, rainbow), 'in', color(groupName, rainbow))
    
   if (!isCmd && mek.message) {
             for (let i of totalchat) {
       client.updatePresence(i.jid, Presence.recording)
             }
    }
    
			switch(command) {
case 'self':
	if (!isOwner) return reply(mess.only.ownerB)
        if (public === false) return client.reply(from, `_Self mode telah aktif sebelumnya_` , mek, {sendEphemeral: true, thumbnail: fakeimage})
        	public = false
		client.reply(from, `_Self Mode_`, mek, {sendEphemeral: true, thumbnail: fakeimage})
	break
case 'publik': case 'public':
	if (!isOwner) return reply(mess.only.ownerB)
		if (public === true) return client.reply(from, `_Publik mode telah aktif sebelumnya_` , mek, {sendEphemeral: true, thumbnail: fakeimage})
        	public = true
		client.reply(from, `_Publik Mode_`, mek, {sendEphemeral: true, thumbnail: fakeimage})
	break
case 'help': case 'menu': case '?':
teks = `My Prefix : ${prefix}\nFitur : ${fitur.length}\n\n`
   nohe = 0
		for (let fiture of fitur) {
			nohe += 1
				teks += `${nohe.toString()}. ${prefix}${fiture}\n`
			}
		teks+= `\n> Source Code:\nhttps://github.com/zennn08/BaseSelfBot`
	client.reply(from, teks.trim(), freply, {thumbnail: fakeimage, sendEphemeral: true})
					break
case 'addfitur': case 'addpimtur': case 'addmenu':
if (!isOwner) return reply(mess.only.ownerB)
	if (!q) return
		if (fitur.includes(q)) return reply('Fitur tersebut sudah ada di menu')
			fitur.push(q.toLowerCase())
				fs.writeFileSync('./src/fitur.json', JSON.stringify(fitur))
					reply(`Sukses, Fitur ${q} Telah Ditambahkan ke *menu*\nTotal Fitur : ${fitur.length}`)
				break
case 'delfitur':
if (!isOwner) return reply(mess.only.onwerB)
   if (!q) return
       if (fitur.includes(q.toLowerCase())) {
         try {
             let delsayso = fitur.indexOf(q)
                 fitur.splice(delsayso, 1)
                     fs.writeFileSync('./src/fitur.json', JSON.stringify(fitur))
                        reply(`Succes delete fitur ${q}`)
                    } catch (err) {
                        reply(`Gagal delete fitur ${q}.`)
                        }
                    } else {
                    	reply(`Fitur dgn nama ${q} tidak ada dalam menu`)
                    }
                    break
case 'get': case 'fetch':
  if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
   res = await fetch(q)
  if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
    delete res
    throw `Content-Length: ${res.headers.get('content-length')}`
  }
  if (!/text|json/.test(res.headers.get('content-type'))) return client.sendFile(m.chat, q, 'file', q, m)
   txtx = await res.buffer()
  try {
    txtx = util.format(JSON.parse(txtx+''))
  } catch (e) {
    txtx = txtx + ''
  } finally {
    reply(txtx.slice(0, 65536) + '')
  }
break
case 'wangy':
if (!q) return
qq = q.toUpperCase()
ww = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGI WANGI WANGI WANGI HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangi aku mau nyiumin aroma wanginya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
client.reply(from, ww, mek, {sendEphemeral: true, thumbnail: fakeimage})
break
		/*case 'getgrup': case 'getgroup': case 'getg': case 'listgrup': case 'listgroup':
			    ingfo = await getGroup(totalchat)
				let txt = `Ingfo grup\nJumlah Grup: ${ingfo.length}\n\n`
				for (let i = 0; i < ingfo.length; i++){
					txt += `Nama grup : ${ingfo[i].subject}\nID grup : ${ingfo[i].id}\nDibuat : ${moment(`${ingfo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\nJumlah Peserta : ${ingfo[i].participants.length}\n\n`
				}
				fakereply(txt, text, budy, 'status@broadcast')
				break*/
case 'afk':
			if (!isGroup) return reply(mess.only.group)
            if (isAfkOn) return //reply('Lu udah AFK sebelumnya')
                reason = q ? q : '-'
                afk.addAfkUser(sender, Date.now(), reason, _afk)
                reply(`\n*@${sender.split('@')[0]}* is now AFK\n*Reason :* ${reason}\n`)
            break
case 'ev': case 'eval':
if (!isOwner) return
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
            	thumbnail: await toBase64(await client.getProfilePicture(m.chat)),
                sendEphemeral: true,
                contextInfo: {
                    participant: '0@s.whatsapp.net',
                    remoteJid: '16505434800@s.whatsapp.net',
                    quotedMessage: {
                        extendedTextMessage: {
                            text: "𝐄𝐗𝐄𝐂𝐔𝐓𝐎𝐑",
                        }
                    }
                }
            }
            client.reply(from, output, m, options)
            } catch(err) {
                outerr = clean(err)
                client.reply(from, `Error: ${outerr}`, m)
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
      if (!q.includes('https://chat.whatsapp.com/')) return reply(mess.error.Iv)
      try {
      res = await client.acceptInvite(args[0])
      if (res.status !== 200) return reply(mess.error.Iv)
      reply("Berhasil Masuk Grup "+res.gid)
      } catch (e) {
        console.log(e)
     	reply(String(e))
      }
      break
case 'p': case 'ping': case 'speed':
reply(`${monospace(`Speed: ${processTime(mek.messageTimestamp, moment())} second`)}`)
break
case 'runtime': case 'uptime':
  reply(`${monospace(`${command.toUpperCase()} BOT:\n- ${clockString(process.uptime())}`)}`)
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
				try {
quotedText = m.text ? m.quoted.text : ''
hideTag(from, quotedText)
				} catch {
hideTag(from, q)
				  }
				    break
case 'deepface':
var imgbb = require('imgbb-uploader')
      boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
      delb = await client.downloadAndSaveMediaMessage(boij, `./media/${sender}.png`)
      uplod = await imgbb(imgb, delb)
      ini_link = `${uplod.display_url}`
      await ameApi.generate("magik", { url: ini_link}).then(res => {
      fs.writeFileSync('./dep.png', res)
      ini_baf = fs.readFileSync('./dep.png')
      client.sendFile(from, ini_baf, 'dep.png', null, mek, {thumbnail: Buffer.alloc(0)})
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
     var imgbb = require('imgbb-uploader')
     if (isQuotedImage) {
     reply(mess.wait)
     pp = await client.getProfilePicture(sender).catch(_ => 'https://telegra.ph/file/6ea2baa958c1d4c68fb73.png')
	 thumbnya = await getBuffer(pp)
     boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
     delb = await client.downloadAndSaveMediaMessage(boij, `./media/${sender}.png`)
     data = await imgbb(imgb, delb)
     anuk = `${data.display_url}`
     ini_gen = `${command}`
     console.log(color(ini_gen))
     imoj = await ameApi.generate(ini_gen, { url: anuk})
     client.sendFile(from, imoj, `${sender}.png`, null, mek, {thumbnail: thumbnya})
     } else {
     	reply(mess.wait)
		ghost = mek.message.extendedTextMessage.contextInfo.participant || mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
		pp = await client.getProfilePicture(ghost).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
		media = await getBuffer(pp)
		datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
		fs.writeFileSync('janckuk.jpeg', datae, 'base64')
		data = await imgbb(imgb, 'janckuk.jpeg')
		anuk = `${data.display_url}`
     ini_gen = `${command}`
     console.log(color(ini_gen))
     imoj = await ameApi.generate(ini_gen, { url: anuk})
     client.sendFile(from, imoj, `${sender}.png`, null, mek, {thumbnail: media})
     }
     break
case 'removebg':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				    encmediia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
reply(mess.wait)
					owgix = await client.downloadAndSaveMediaMessage(encmediia)
					data = await imgbb(imgb, owgix)
					toge = await getBuffer(`https://leyscoders-api.herokuapp.com/api/removebg?img=${data.display_url}&apikey=${apiKey}`)
					client.sendMessage(from, toge, image, {quoted: mek})
					} else {
					reply('Reply gambar nya coeg')
					}
					break
case 'zippydl': case 'zippyshare':
try {
	if (!q) return reply('Masukkan link zippyshare nya!')
if (!q.includes('zippyshare.com')) return reply(mess.error.Iv)
reply(mess.wait)
res = await zsExtract.extract(args[0])
reply(`*Data ditemukan!*\n\n• *Filename:* ${res.filename}\n• *Link download:* ${res.download}\n\n_Sending result..._`)
sendFileFromUrl(from, res.download, res.filename, mek)
} catch (e) {
	console.log(e)
	reply(String(e))
	}
break
case 'gdrive':
try {
if (!q) return reply('Masukkan link google drive nya!')
if (!args[0].includes('drive')) return reply(mess.error.Iv)
reply(mess.wait)
//tek = args[0].replace('drivesdk', 'sharing')
res = await axios.get('https://api.zeks.xyz/api/gdbypass?apikey=caliph_71&url='+args[0])
let { file_name, download_link, direct_download } = res.data.data
client.reply(from, "「 *RESULT FOUND* 」\n\n• *Title:* "+file_name+"\n• *Download link:* "+download_link+"\n• *Direct link:* "+direct_download+"\n\n_Sending file..._", mek, {sendEphemeral: true, thumbnail: fakeimage})
client.sendFile(from, direct_download, file_name, null, mek, false, {asDocument: true, thumbnail: fakeimage})
} catch (e) {
	console.log(e)
	reply(String(e))
	}
	break
case 'q': case 'getquoted':
if (!m.quoted) return reply('Chat yg di reply tidak mengandung reply!')
try {
	  tot = await client.serializeM(await m.getQuotedObj())
return tot.quoted.copyNForward(m.chat, true, {quoted: mek, thumbnail:fakeimage, sendEphemeral:true})
} catch (e) {
  console.log(color(e, 'red'))
	reply(String(e))
	}
	break
case 'sr': case 'subreddit':
try {
reply(mess.wait)
//defaultSubreddit = 'meme'
  let res = await fetch('https://meme-api.herokuapp.com/gimme/' + encodeURI(q || 'meme'))
  let json = await res.json()
  if (!json.url) return reply('Media tidak ditemukan!')
  await client.sendFile(from, json.url, q, json.title, mek)
  } catch (e) {
  	console.log(e)
  reply(String(e))
  }
break
case 'yts':
case 'ytsearch':
if (!q) return reply('Yang mau di cari apaan?')
reply(mess.wait)
res = await yts(q)
kant = `「 *YOUTUBE SEARCH* 」\n\n`
for (let i of res.videos) {
kant += `
*- Title:* ${i.title}
*- Views:* ${i.views}
*- Uploaded:* ${i.ago}
*- Duration:* ${i.timestamp}
*- By:* ${i.author.name}
*- Link:* ${i.url}

`
}
akhir = kant.trim()
client.sendFile(from, res.all[0].image, null, akhir, mek)
break
case 'pinterestdl':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id.pinterest.com/pin/696580267364426905/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterestdl?apikey=${lolkey}&url=${ini_url}`)
                    ini_url = ini_url.result[0]
                    ini_buffer = await getBuffer(ini_url)
                    await client.sendFile(from, ini_buffer, null, null, mek)
                    break
/*case 'yts':
if (!q) return reply('Wrong format!')
            reply(mess.wait)
            try {
                jsonsercmuv = await get.get(`http://nzcha-apii.herokuapp.com/ytsearch?q=${encodeURIComponent(q)}`).json()
                let { result } = await jsonsercmuv
                xixixai = `*Hasil pencarian from ${q}*\n`
                for (let i = 0; i < result.length; i++) {
                    xixixai += `\n*Urutan* : ${i+1}\n*Title* : ${result[i].title}\n*Channel* : ${result[i].author}\n*Durasi* : ${result[i].timestamp}\n\n`
                }
                buffer = await getBuffer(result[0].thumb)
                client.sendFile(from, buffer, null, xixixai, mek)
            } catch (e) {
            	console.log(e)
               reply(String(e))
            }
            break*/
            case 'cropaudio':
if (!q) return reply('Masukkan jumlah')
if (isNaN(args[0])) return reply('Harus angka!')
if (isNaN(args[1])) return reply('Harus angka!')
            if (isQuotedAudio || isQuotedVideo || isQuotedDocument){
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await client.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -ss ${args[0]} -to ${args[1]} -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(String(err))
            buffer453 = fs.readFileSync(ran)
            client.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true})
            fs.unlinkSync(ran)
            })
            } else {
            	reply('Wrong format!')
            }
            break
case 'earrape':
if (!q) return reply('Masukkan jumlah volume')
if (isNaN(q)) return reply('Harus angka!')
            if (isQuotedAudio || isQuotedVideo || isQuotedDocument){
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await client.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -af volume=${args[0]} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            client.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true})
            fs.unlinkSync(ran)
            })
            } else {
            	reply('Wrong format!')
            }
            break
case '8daudio': case 'audio8d':
            if (isQuotedAudio || isQuotedVideo || isQuotedDocument){
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await client.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -af apulsator=hz=0.125 ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            client.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true})
            fs.unlinkSync(ran)
            })
            } else {
            	reply(`Reply audio yg sudah dikirimkan dgn ${prefix + command}`)
            }
            break
case 'brainly':
  if (!q) return reply( 'Soalnya?' )
  res = await brainly(q)
  answer = res.data.map((v, i) => `_*PERTANYAAN KE ${i + 1}*_\n${v.pertanyaan}\n${v.jawaban.map((v,i) => `*- Jawaban Ke ${i + 1}*\n${v.text}`).join('\n')}`).join('\n\n\n')
  reply(answer)
  break
case 'caripesan':
 split = q.split`|`
     result = await client.searchMessages(split[0], m.chat, split[1], 1)
    if (result.messages.length > 0) {
         total = result.messages.length
         sp = total < Number(split[1]) ? `Hanya ditemukan ${total} pesan` : `Ditemukan ${total} pesan`
        client.reply(from, sp, mek)
        result.messages.map( async ({ key }) => {
            let { remoteJid: _remoteJid, id: _ids } = key
             _message = await client.loadMessage(_remoteJid, _ids)
            client.reply(from, 'Nih pesannya', _message)
        })
    }
    break
case 'alay':
teks = q ? q : m.quoted && m.quoted.text ? m.quoted.text : m.text
    reply(teks.replace(/[a-z]/gi, v => Math.random() > .5 ? v[['toLowerCase', 'toUpperCase'][Math.floor(Math.random() * 2)]]() : v).replace(/[abegiors]/gi, v => {
        if (Math.random() > .5) return v
        switch (v.toLowerCase()) {
            case 'a': return '4'
            case 'b': return Math.random() > .5 ? '8' : '13'
            case 'e': return '3'
            case 'g': return Math.random() > .5 ? '6' : '9'
            case 'i': return '1'
            case 'o': return '0'
            case 'r': return '12'
            case 's': return '5'
        }
    }))
    break
case 'getexif':
try {
    if (!m.quoted) return reply('Tag stikernya!')
    cok = { message: { [m.quoted.mtype]: m.quoted } }
    if (/sticker/.test(m.quoted.mtype)) {
        let img = new webp.Image()
        await img.loadBuffer(await m.quoted.download())
        reply(util.format(JSON.parse(img.exif.slice(22).toString())))
    }
    } catch (e) {
    	throw e
    reply(String(e))
    }
    break
case 'ghsearch': case 'githubsearch': case 'searchgithub':
if (!q) return reply('Cari apa?')
     res = await fetch('https://api.github.com/search/repositories?q='+q)
     json = await res.json()
    if (res.status !== 200) throw json
     str = json.items.map((repo, index) => {
        return `
${1 + index}. *${repo.full_name}*${repo.fork ? ' (fork)' : ''}
_${repo.html_url}_
_Dibuat pada *${formatDate(repo.created_at)}*_
_Terakhir update pada *${formatDate(repo.updated_at)}*_
👁  ${repo.watchers}   🍴  ${repo.forks}   ⭐  ${repo.stargazers_count}
${repo.open_issues} Issue${repo.description ? `
*Deskripsi:*\n${repo.description}` : ''}
*Clone:* \`\`\`$ git clone ${repo.clone_url}\`\`\`
`.trim()
    }).join('\n\n')
    reply(str)
    break
case 'google':
  if (!q) return reply('Tidak ada teks untuk di cari')
  reply(mess.wait)
   _url = 'https://google.com/search?q='+encodeURIComponent(q)
   _search = await googleIt({ query: q })
   _msg = ''
   for (let i of _search) {
   _msg += `*${i.title}*\n_${i.link}_\n_${i.snippet}_\n\n`
   }
  try {
  	ss = await getBuffer(`https://nurutomo.herokuapp.com/api/ssweb?url=${_url}`)
	await client.sendFile(from, ss, 'screenshot.png', _url + '\n\n' + _msg, mek)
  } catch (e) {
    reply(_msg)
  }
  break
case 'listgrup': case 'listgroup': case 'gruplist': case 'grouplist':
 txt_ = client.chats.array.filter(v => v.jid.endsWith('g.us')).map(v =>`${v.name}\n${v.jid} \nStatus: ${v.read_only ? 'Left' : 'Join'} \nSpam: ${v.spam ? 'False' : 'True'}\nMessage: ${v.count}`).join`\n\n`
  reply('*List Groups:*\n\n'+txt_)
  break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
ter = command[1].toLowerCase()
  tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
 reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
 break
case 'upsw':
if (!m.key.fromMe) return
 _m = Promise.resolve({ key: { id: '' }})
    if (!m.quoted && !q) return reply('reply pesan atau sebagai argumen')
    if (m.quoted && m.quoted.mtype !== 'conversation' && !q) _m = m.quoted.forward('status@broadcast')
    if (m.quoted && m.quoted.mtype === 'conversation' && !q) _m = client.sendMessage('status@broadcast', {
        text: m.quoted.text,
        textArgb: 0xffffffff,
        backgroundArgb: pickRandom([0xff26c4dc, 0xff792138, 0xff8b6990, 0xfff0b330, 0xffae8774, 0xff5696ff, 0xffff7b6b, 0xff57c9ff, 0xff243640, 0xffb6b327, 0xffc69fcc, 0xff54c265, 0xff6e257e, 0xffc1a03f, 0xff90a841, 0xff7acba5, 0xff8294ca, 0xffa62c71, 0xffff8a8c, 0xff7e90a3, 0xff74676a])
    }, 'extendedTextMessage')
    if (!m.quoted && q) _m = client.sendMessage('status@broadcast', {
        text: q,
        textArgb: 0xffffffff,
        backgroundArgb: pickRandom([0xff26c4dc, 0xff792138, 0xff8b6990, 0xfff0b330, 0xffae8774, 0xff5696ff, 0xffff7b6b, 0xff57c9ff, 0xff243640, 0xffb6b327, 0xffc69fcc, 0xff54c265, 0xff6e257e, 0xffc1a03f, 0xff90a841, 0xff7acba5, 0xff8294ca, 0xffa62c71, 0xffff8a8c, 0xff7e90a3, 0xff74676a])
    }, 'extendedTextMessage')
    if (m.quoted && q) _m = client.forwardMessage('status@broadcast', await m.quoted.cMod('status@broadcast', text))
    reply((await _m).key.id)
    break
case 'spam':
				if (!q) return reply(`Penggunaan ${prefix}spam teks|jumlahspam`)
				argz = arg.split("|")
				if (!argz) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (isNaN(argz[0])) return reply(`harus berupa angka`)
				for (let i = 0; i < argz[0]; i++){
					sendMess(from, argz[1])
				}
				break
case 'term':
case 'exec':
        	if (!isOwner) return
        	if (!q) return
        	exec(q, (err, stdout) => {
        	if (err) return client.reply(from, 'root@tesbot:~ '+String(err), mek, {thumbnail: fakeimage})
        	if (stdout) {
           client.reply(from, stdout, mek, {thumbnail: fakeimage})
            }
      	  })
        	break
case 'del':
				case 'delete':
					try {
					if (!m.quoted.fromMe) return reply('Tidak Dapat Menghapus Pesan Orang Lain!')
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					 } catch (e) {
			reply('Reply Chat Bot!')
		}
					break
case 'carigrup':
try {
if (!q) return reply('Masukkan nama grup yg mau dicari!')
reply(mess.wait)
anu = await fetchJson('https://api-yogipw.herokuapp.com/api/search/gcwa?query='+q)
teks = '---------[ *CARI GRUP '+q.toUpperCase()+'* ]--------'
no = '1'
for (let i = 0; i < anu.result.length; i++) {
teks += `\n\n${no}.\nNama Grup : ${anu.result[i].group_name}\nLink Grup : ${anu.result[i].link}`
no++
}
} catch (e) {
	console.log(e)
	reply(String(e))
	}
reply(teks)
                break
case 'googleimage': case 'image': case 'gimage':
let gis = promisify(_gis)
if (!q) return reply('Cari apa?')
  reply(mess.wait)
  for (let i = 0; i < 5; i++) {
  results = await gis(q) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) return reply('404 Not Found')
  client.sendFile(from, url, 'gimage', `
Google Image : *${q}*
- image size : ${height} x ${width}
- link : ${url}
`.trim(), mek, {thumbnail: fakeimage})
}
break
case 'memegen':
  let [t1, t2] = q.split `|`
  if (!t1) return reply('No Text')
  if (!t2) {
    t2 = t1
    t1 = ''
  }
  reply(mess.wait)
  media = m.quoted ? m.quoted : m
  mime = (media.msg || media).mimetype || ''
  if (!mime) return reply(`Unknown Mimetype`)
  if (!/image\/(jpe?g|png)/.test(mime)) return reply(`Mimetype ${mime} tidak support`)
  img = await media.download()
  link = await uploadImages(img).catch(e => uploadFile(img))
  client.sendFile(from, `https://api.memegen.link/images/custom/${encodeURIComponent(t1)}/${encodeURIComponent(t2)}.png?background=${link}`, 'meme.png', `Nih :|`, mek)
break
case 'ttp':
try {
teks = m.quoted.text
  stiker = await stc(null, `https://api.xteam.xyz/ttp?file&text=${encodeURI(teks)}`, pushname, isGroup ? groupName : '')
  if (stiker) return client.sendMessage(from, stiker, sticker, { quoted: m})
  throw stiker.toString()
  } catch {
  	if (!q) return reply('Teksnya?')
  stiker = await stc(null, `https://api.xteam.xyz/ttp?file&text=${encodeURI(q)}`, pushname, isGroup ? groupName : '')
  if (stiker) return client.sendMessage(from, stiker, sticker, { quoted: m})
  }
  break
case 'totag':
if (m.quoted.text) {
	hideTag(from, m.quoted.text)
	} else {
		qq = m.quoted ? m.quoted : m
     media = await qq.download()
     group = await client.groupMetadata(from);
     member = group['participants']
     jids = []
     member.map( async adm => {
     jids.push(adm.id.replace('c.us', 's.whatsapp.net'))
     })
     client.sendFile(from, media, qq, null, mek, false, {sendEphemeral:true,contextInfo:{mentionedJid: jids}})
     }
     break
case 'enhance':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
encmediats = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
mediapp = await client.downloadMediaMessage(encmediats)
fs.writeFileSync(`./media/images/upscale.png`, mediapp)
buffer = await Waifu2x.upscaleImage('./media/images/upscale.png', './media/images/upscaled/upscale.png', {noise: 2, scale: 2.0, mode: 'noise-scale', jpgWebpQuality: 50})
var Hmm = fs.readFileSync('./media/images/upscaled/upscale.png');
client.sendMessage(from, Hmm, image, { quoted: mek, caption: 'image upscaled' })
fs.unlinkSync(mediapp)
fs.unlinkSync(buffer)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
encmediats = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
mediapp = await client.downloadMediaMessage(encmediats)
fs.writeFileSync(`./media/upscaled.mp4`, mediapp)
buffer = await Waifu2x.upscaleVideo("./upscales.mp4", "./media/upscaled.mp4", {framerate: 24, quality: 16, speed: 1.5})
var Hmm = fs.readFileSync('./media/upscaled.mp4');
client.sendMessage(from, Hmm, video, { quoted: mek, caption: 'video upscaled' })
fs.unlinkSync(mediapp)
fs.unlinkSync(buffer)
}
break
case 'fb':
case 'facebook':
if (!q) return reply('Linknya?')
reply(mess.wait)
anu = await axios.get(`https://zenzapi.xyz/api/downloader/facebook?url=${args[0]}&apikey=0963ec745dde`)
.then((res) => { client.sendFile(from, res.data.result.hd, null, null, mek) })
.catch((e) => { reply(String(e)) })
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
		case 'tiktok': case 'ttdl':
if (!q) return reply('Linknya?')
if (!q.includes('tiktok')) return reply(mess.error.Iv)
reply(mess.wait)
anu = await TiktokDownloader(`${q}`)
.then((data) => { client.sendFile(from, data.result.watermark, null, null, mek) })
.catch((err) => { reply(String(err)) })
break
		case 'ttnowm': case 'tiktoknowm':
if (!q) return reply('Linknya?')
if (!q.includes('tiktok')) return reply(mess.error.Iv)
reply(mess.wait)
anu = await TiktokDownloader(`${q}`)
.then((data) => { client.sendFile(from, data.result.nowatermark, null, null, mek) })
.catch((err) => { reply(String(err)) })
break
		case 'ttaudio': case 'tiktokmusic': case 'tiktokaudio':
if (!q) return reply('Linknya?')
if (!q.includes('tiktok')) return reply(mess.error.Iv)
reply(mess.wait)
anu = await TiktokDownloader(`${q}`)
.then((data) => { client.sendFile(from, data.result.audio, null, null, mek) })
.catch((err) => { reply(String(err)) })
break
		case 'ig': case 'igdl':
if (!q) return reply('Linknya?')
if (!q.includes('instagram')) return reply(mess.error.Iv)
reply(mess.wait)
igDownloader(q)
.then((data) => { client.sendFile(from, data.result.link, null, data.result.desc, mek) })
.catch((err) => { reply(String(err)) })
break
case 'igdownload':
if (!q) return reply('Linknya?')
if (!q.includes('instagram')) return reply(mess.error.Iv)
reply(mess.wait)
instagramGetUrl(q)
.then((res) => {
for (let i of res.url_list) {
	client.sendFile(from, i, null, null, mek)
	}
	})
.catch((err) => { m.reply(String(err)) })
	break
		case 'play':
                if (!q) return reply("Harap Masukan Sebuah Url Atau Query!")
                    arama = await yts(q);
                    arama = arama.all;
                    if (arama.length < 1) return reply("Data " +q+ " tidak ditemukan!")
                    client.reply(from, 'Data ditemukan! tunggu sebentar, lagu sedang di unduh!', mek)
                    title = "output"
                    stream = ytdl(arama[0].videoId, { quality: 'highestaudio', });
                    got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
                    ffmpeg(stream).audioBitrate(128).save('./' + title + '.mp3').on('end', async () => {
                    writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
                    writer.setFrame('TIT2', arama[0].title).setFrame('TPE1', [arama[0].author.name]).setFrame('APIC', { type: 3, data: fs.readFileSync(title + '.jpg'), description: arama[0].description })
                    songData = await ytdl.getInfo(arama[0].videoId)
                    writer.addTag();
                    client.sendFile(from, fs.readFileSync(title + ".jpg"), null, "「 *NOW PLAYING* 」\n\n• *Title:* " + arama[0].title + "\n• *Duration:* " + clockString(songData.videoDetails.lengthSeconds) + "\n• *By:* " + songData.videoDetails.author.name + "\n• *Descriptions:* " + arama[0].description + "\n", mek)
                    client.sendFile(from, Buffer.from(writer.arrayBuffer), null, null, mek)
                    });
                break
		case 'ask':
		try {
			res = await axios.get(`https://fdciabdul.tech/api/ayla/?pesan=${q}`)
			reply(res.data.jawab)
			} catch (e) {
				reply(String(e))
				}
				break
		case 'ss': case 'ssweb':
		try {
      if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
      reply(mess.wait)
			eses = await axios.get(`https://shot.screenshotapi.net/screenshot?url=${args[0]}`)
			client.sendFile(from, eses.data.screenshot, null, q, mek, false, {thumbnail: fakeimage})
			} catch (e) {
				e = String(e)
				console.log(color(e, 'red'))
				client.reply(from, e, mek)
				}
			break
case 'translate':
try {
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
if (!q.includes("|")) return reply(`Format salah, penggunaan : ${prefix + command} kode negara|teks lu`)
tolang = arg.split("|")[0]
entah = arg.split("|")[1]
translate(entah, tolang)
.then((res) => { reply(`${res}`) })
.catch((err) => { reply(String(err)) })
                        } else {
tolang = args[0]
if (!tolang) return reply('Masukkan kode negara!')
entah = m.quoted ? m.quoted.text : m.text
translate(entah, tolang)
.then((res) => { reply(`${res}`) })
.catch((err) => { reply(String(err)) })
                        }
                        } catch (e) {
                        	reply(`Format salah, penggunaan : ${prefix + command} kode negara|teks lu`)
                        }
                        break
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
         	res = await axios.get(`http://lolhuman.herokuapp.com/api/nhentai/${kode}?apikey=f6e4b4dbd303cbc59912740e`)
          let { info, title_romaji, tags, image } = res.data.result
          if (Number(info.pages) > 100) return client.reply(from, `Buset ${info.pages} pages, kebanyakan ngntd!`, mek)
          tesk = `*- Title:* ${title_romaji}\n`
tesk += `*- Parodies:* ${info.parodies}\n`
tesk += `*- Tags:* ${info.tags.join(", ")}\n`
tesk += `*- Pages:* ${info.pages}\n\n`
tesk += `_Sending document..._`
         client.sendFile(from, image[0], '', tesk, m, false, {thumbnail: fakeimage})
          data = await axios.get(`http://lolhuman.herokuapp.com/api/nhentaipdf/${kode}?apikey=f6e4b4dbd303cbc59912740e`)
          pdfnya = await getBuffer(data.data.result)
         client.sendMessage(from, pdfnya, document, { quoted: m, mimetype: Mimetype.pdf, filename: `${title_romaji}.pdf`, thumbnail: fakeimage})
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
            client.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: m })
            fs.unlinkSync(ran)
            })
            } else {
            	reply('Reply audio/videonya!')
            }
            break
			case 'lirik': case 'liriklagu': case 'lyric': case 'lyrics':
			try {
				if (!q) return reply('Masukkan judul lagunya!')
				res = await axios.get(`https://some-random-api.ml/lyrics?title=${q}`)
				let { title, author, lyrics, thumbnail, links } = res.data
				capt = `*${title}* by *${author}*\n${monospace('Source:')}\n${links.genius}\n\n${lyrics}\n`
				client.sendFile(from, thumbnail.genius, 'lirik.jpg', capt, mek)
				} catch (e) {
					console.log(String(e))
					reply('Lirik lagu '+q+' tidak ditemukan!')
					}
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
reply(todd)
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
      .on('error', () => reply(mess.error.stick))
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
if (batas > 31) return reply('Maks 30!')
reply(mess.wait)
cok = await client.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
for (i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
client.sendMessage(from, `Ditemukan!`, text, {thumbnail: fakeimage, quoted: cok.messages[i]}) 
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
if (!q) return reply(`Penggunaan ${prefix + command} link Yt`)
isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks) return reply(mess.error.Iv)
try {
	reply(mess.wait)
	anu = await axios.get(`https://api.xteam.xyz/dl/ytmp3?url=${args[0]}&APIKEY=${apixteam}`)
	const { judul, size, url, thumbnail } = anu.data
	teks = `*「 YOUTUBE AUDIO 」*\n\n• *Judul* : ${judul}\n• *Size* : ${size}\n• *Link Audio* : ${url}\n\n_Sending Audio..._`
	client.sendFile(from, thumbnail, '', teks, m, false, {thumbnail: fakeimage})
	client.sendFile(from, url, `${judul}.mp3`, '', m)
	} catch (e) {
		console.log(color(e))
		reply('Ada yg error!')
		}
	break
case 'ytvid': case 'ytvideo':
if (!q) return reply(`Penggunaan ${prefix + command} link Yt`)
isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks) return reply(mess.error.Iv)
try {
	reply(mess.wait)
	anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp4?url=${args[0]}&APIKEY=${apixteam}`)
	teks = `*「 YOUTUBE VIDEO 」*\n\n• *Judul:* ${anu.judul}\n• *Size:* ${anu.size}\n• *Link Download:* ${anu.url}\n\n_Sending Video..._`
	data = await getBuffer(anu.thumbnail)
    client.sendMessage(from, data, image, {quoted: m, caption: teks, thumbnail: fakeimage})
	hasil = await getBuffer(anu.url)
	client.sendMessage(from, hasil, video, {quoted: m, mimetype:'video/mp4', caption: `Video sudah terkirim @${sender.split('@')[0]}`, contextInfo:{mentionedJid:[sender]}})
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
				case 'semoji':
					var imgbb = require('imgbb-uploader')
					emoji = await body.slice(8).split("|")
					arrtype = ['apple', 'google', "samsung", "microsoft", "whatsapp", "twitter", "facebook", "joypixel", "openemoji", "emojidex", "messenger", "ig", "htc", "mozilla"]
					if (!arrtype.includes(emoji[1])) return reply(`Type yang kamu input tidak terdaftar dalam list\nList Type:\napple, google, samsung, microsoft, whatsapp, twitter, facebook, joypixel, openemoji, emojidex, messenger, ig, htc, mozilla`)
					emo = await getEmoji(`${emoji[0]}`, `${emoji[1]}`)
					data = await imageToBase64(JSON.stringify(emo).replace(/\"/gi, ''))
					fs.writeFileSync('emoji.jpeg', data, 'base64')
					result = await imgbb(imgb, 'emoji.jpeg')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					exec(`wget ${result.display_url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					})
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
            if (!q.includes('|')) return reply(`Penggunaan ${prefix + command} teks|teks|teks`)
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
				case 'story':
					if (args.length < 1) return reply(`Penggunaan Fitur Story:\n• ${prefix}story cersex\n• ${prefix}story horror\n• ${prefix}story cerpen`)
					if (args[0].toLowerCase() === 'cersex') {
						anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cersex?apikey=${apiKey}`)
						buff = await getBuffer(anu.gambar)
						client.sendMessage(from, buff, image, {quoted: mek, caption: `${anu.result}`})
					} else if (args[0].toLowerCase() === 'horror') {
						anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cerita-horor?apikey=${apiKey}`)
						client.sendMessage(from, `• Title: ${anu.result.title}\n• Desc: ${anu.result.desc}\n• Cerita: ${anu.result.story}`, text, {quoted: mek})
					} else if (args[0].toLowerCase() === 'cerpen') {
						anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cerpen?apikey=${apiKey}`)
						client.reply(from, `• Title: ${anu.result.title}\n• Pengarang: ${anu.result.pengarang}\n• Kategori: ${anu.result.kategori}\n• Cerita: ${anu.result.story}`, mek, {thumbnail: fakeimage, sendEphemeral: true})
					}
					break
				case 'stalk':
					if (args.length < 1) return reply(`Penggunaan Fitur Stalk:\n• ${prefix}stalk github *username*\n• ${prefix}stalk ig *username*`)
					if (args[0].toLowerCase() === 'github') {
						anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/github?q=${args[1]}&apikey=${apiKey}`)
						stringTime = new Date(`${anu.result.user.dibuat_pada}`);
						stringTime2 = stringTime.getDate() + "/" + (stringTime.getMonth() + 1) + "/" + stringTime.getFullYear();
						teks = `「 *RESULT FOUND* 」\n• Username: ${anu.result.username}\n• Nama: ${anu.result.user.nama}\n• Bio: ${anu.result.user.bio}\n• Public Repos: ${anu.result.user.public_repos}\n• Following: ${anu.result.user.following}\n• Followers: ${anu.result.followers}\n• Dibuat Pada: ${stringTime2}\n• Source: ${anu.result.user.link}`
						buff = await getBuffer(anu.result.user.avatar)
						client.sendMessage(from, buff, image, {quoted: mek, caption: teks})
					} else if (args[0].toLowerCase() === 'ig') {
						anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/igstalk?user=${args[1]}&apikey=${apiKey}`)
						data = anu.result[0]
						teks = `「 RESULT FOUND 」\n• Username: ${data.username}\n• Full Name: ${data.fullName}\n• Bio: ${data.biography}\n• Follower: ${convertToString(data.follower)}\n• Following: ${convertToString(data.following)}\n• Total Post: ${data.postsCount}\n• Verified: ${data.isVerified}\n• Private: ${data.isPrivate}`
						buff = await getBuffer(data.profilePic)
						client.sendMessage(from, buff, image, {quoted: mek, caption: teks})
					}
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
				case 'ytmp3': case 'mp3':
                if (!q) return reply("Harap Masukan Sebuah Url!")
                if (!q.includes('youtu')) return reply(mess.error.Iv)
                    arama = await yts(q);
                    arama = arama.all;
                    if (arama.length < 1) return reply("Data " +q+ " tidak ditemukan!")
                    reply('↓Downloading: '+q)
                    title = "ytmp3"
                    stream = ytdl(arama[0].videoId, { quality: 'highestaudio', });
                    got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
                    ffmpeg(stream).audioBitrate(128).save('./' + title + '.mp3').on('end', async () => {
                    writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
                    writer.setFrame('TIT2', arama[0].title).setFrame('TPE1', [arama[0].author.name]).setFrame('APIC', { type: 3, data: fs.readFileSync(title + '.jpg'), description: arama[0].description })
                    songData = await ytdl.getInfo(arama[0].videoId)
                    writer.addTag();
                    client.sendFile(from, fs.readFileSync(title + ".jpg"), null, "「 *YOUTUBE MP3* 」\n\n• *Title:* " + arama[0].title + "\n• *Duration:* " + clockString(songData.videoDetails.lengthSeconds) + "\n• *By:* " + songData.videoDetails.author.name + "\n• *Descriptions:* " + arama[0].description + "\n", mek)
                    client.sendFile(from, Buffer.from(writer.arrayBuffer), null, null, mek)
                    });
                break
			case 'ytmp4': case 'mp4':
			if (!q) return reply(`Penggunaan ${prefix + command} link YouTube`)
			var urlvid = args[0]
		    try {
        		var aramav = await yts({videoId: ytdl.getURLVideoID(urlvid)});
    		await reply(mess.wait)
    		var yt = ytdl(aramav.videoId, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
  			yt.pipe(fs.createWriteStream('./' + aramav.videoId + '.mp4'));
  			yt.on('end', async () => {
  	  	playvid = `*「 YOUTUBE VIDEO 」*\n\n• *Title* : ${aramav.title}\n• *By* : ${aramav.author.name}`	
        	await client.sendFile(from, fs.readFileSync('./' + aramav.videoId + '.mp4'), null, playvid, mek, {thumbnail: fakeimage});
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
								client.reply(from, teks.trim(), mek)
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
case 'tes':
try {
    let qyu = m.quoted ? m.quoted : m
    let mime = (qyu.msg || qyu).mimetype || ''
    if (/image|video/.test(mime)) {
      let img = await qyu.download()
      if (!img) return reply('Foto/Video tidak ditemukan')
      stiker = await stc(img, false, pushname, isGroup ? groupName : '')
     client.sendMessage(from, stiker, sticker, { quoted: mek, sendEphemeral: true })
   }
  } catch (e) {
  	console.log(e)
  reply(String(e))
  }
  break
case 's': case 'stiker': case 'sticker': case 'sgif': case 'stikergif':
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
					if (!q.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix + command} nama|author*`)
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					const media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					const packname1 = encodeURI(arg.split('|')[0])
					const author1 = encodeURI(arg.split('|')[1])
					exif.create(packname1.replace(new RegExp("%0A", "gi"), "\n").replace(new RegExp("%20", "gi"), " "), author1.replace(new RegExp("%0A", "gi"), "\n").replace(new RegExp("%20", "gi"), " "), `stickwm_${sender}`)
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
					const packname1 = encodeURI(arg.split('|')[0])
					const author1 = encodeURI(arg.split('|')[1])
					exif.create(packname1.replace(new RegExp("%0A", "gi"), "\n").replace(new RegExp("%20", "gi"), " "), author1.replace(new RegExp("%0A", "gi"), "\n").replace(new RegExp("%20", "gi"), " "), `stickwm_${sender}`)
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
				if (!q) return reply(`Penggunaan ${prefix}exif nama|author`)
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
            exec(`ffmpeg -i ${media} -af equalizer=f=40:width_type=o:width=2:g=${args[0]} ${ran}`, (err, stderr, stdout) => {
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
            createExif(encodeURI(satu).replace(new RegExp("%0A", "gi"), "\n").replace(new RegExp("%20", "gi"), " "), encodeURI(dua).replace(new RegExp("%0A", "gi"), "\n").replace(new RegExp("%20", "gi"), " "))
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
				/*case 'tts':
                defaultLang = 'id'
                lang = args[0]
                teks = args.slice(1).join(' ')
                if ((args[0] || '').length !== 2) {
                lang = defaultLang
                teks = args.join(' ')
                }
                if (!q && m.quoted && m.quoted.text) text = m.quoted.text
                let res
                try { 
                res = await tts(teks, lang)
                } catch (e) {
                m.reply(e + '')
                res = await tts(teks)
                } finally {
                client.sendFile(from, res, 'tts.opus', null, m, true)
                }
					break*/
                case 'setthumb':
                try {
                if (!isOwner) return
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await client.downloadMediaMessage(boij)
				fs.writeFileSync(`./media/aqul.jpeg`, delb)
				fakeimage = fs.readFileSync(`./media/aqul.jpeg`).toString('base64')
				reply(mess.success)
				} catch (e) {
					throw e
					reply(String(e))
					}
				break
				case 'setprefix':
					if (!isOwner) return reply(mess.only.ownerB)
					if (!q) return
					prefix = args[0]
					setting.prefix = prefix
					fs.writeFileSync('./lib/setting.json', JSON.stringify(setting, null, '\t'))
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
				/*case 'bc':
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
					break*/
				case 'listadmins': case 'listadmin':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `${no.toString()}. @${admon.split('@')[0]}\n`
					}
					teks += `\nTotal : ${groupAdmins.length}`
					reply(teks)
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
					pp = await client.getProfilePicture(sender).catch(_ => 'https://telegra.ph/file/6ea2baa958c1d4c68fb73.png')
					thumbnya = await getBuffer(pp)
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(String(err))
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: thumbnya})
						fs.unlinkSync(ran)
					})
					break
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {mimetype: Mimetype.gif, quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(`Reply Foto/Kirim Foto Dengan Caption ${prefix}wait`)
					}
					break
case 'sider': case 'getsider':
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
  if (!isOwner) return
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
  if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
    entah = arg.replace(new RegExp("[()+-/ +/]", "gi"), "")
      entah = `${entah}@s.whatsapp.net`
      tesk = `Sure, kick @${entah.split`@`[0]}`
client.reply(from, tesk, m, {contextInfo:{mentionedJid: client.parseMention(tesk)}})
await client.sleep(1000)
      client.groupRemove(from, [entah])
                        } else {
entah = mek.message.extendedTextMessage.contextInfo.participant || mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
tesk = `Sure, kick @${entah.split`@`[0]}`
client.reply(from, tesk, m, {contextInfo:{mentionedJid: client.parseMention(tesk)}})
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
client.reply(from, tesk, m, {contextInfo:{mentionedJid: client.parseMention(tesk)}})
await client.sleep(1000)
      client.groupAdd(from, [entah])
                        } else {
      entah = mek.message.extendedTextMessage.contextInfo.participant
      tesk = `Sure, add @${entah.split`@`[0]}`
client.reply(from, tesk, m, {contextInfo:{mentionedJid: client.parseMention(tesk)}})
await client.sleep(1000)
      client.groupAdd(from, [entah])
                        }
                break
/*case prefix+'promote':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (mentioned.length !== 0){
                    xinz.groupMakeAdmin(from, mentioned)
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else if (isQuotedMsg) {
                    xinz.groupMakeAdmin(from, [quotedMsg.sender])
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else if (!isNaN(args[1])) {
                    xinz.groupMakeAdmin(from, [args[1] + '@s.whatsapp.net'])
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else {
                    reply(`Kirim perintah ${prefix}promote @tag atau nomor atau reply pesan orang yang ingin di promote`)
                }
                break*/
case 'promote':
  if (!isGroup) return
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
           	tesk = `Sure, promote @${m.mentionedJid.split`@`[0]}`
               client.reply(from, tesk, m, {contextInfo:{mentionedJid: m.mentionedJid}})
               promoteAdmin(from, mentionUser)
                break
case 'demote':
  if (!isGroup) return
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
      if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
      entah = arg.replace(new RegExp("[()+-/ +/]", "gi"), "")
      entah = `${entah}@s.whatsapp.net`
      tesk = `Sure, demote @${mention}`
      reply(tesk)
  client.groupDemoteAdmin(from, mentionUser)
                        } else {
      entah = mek.message.extendedTextMessage.contextInfo.participant
      tesk = `Sure, demote @${entah.split`@`[0]}`
reply(tesk)
      client.groupDemoteAdmin(from, mentionUser)
                        }
                break
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
