import {webp2png} from '../lib/webp2mp4.js';
const handler = async (m, {conn, usedPrefix, command}) => {
const notStickerMessage = `[ ⚠️ ] 𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐚 𝐚𝐥 𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐞 𝐜𝐨𝐧𝐯𝐞𝐫𝐭𝐢𝐫 𝐞𝐧 𝐢𝐦𝐚𝐠𝐞𝐧 𝐜𝐨𝐧 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 : ${usedPrefix + command}`;
if (!m.quoted) return conn.reply(m.chat, notStickerMessage, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: saludo, body: ' 💫 𝐒𝐮𝐩𝐞𝐫 𝐁𝐨𝐭 𝐃𝐞 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 🥳', previewType: 0, thumbnail: img.getRandom(), sourceUrl: global.channel2}}}) 
try {
const q = m.quoted || m;
const mime = q.mediaType || '';
if (!/sticker/.test(mime)) throw notStickerMessage;
const media = await q.download();
const out = await webp2png(media).catch((_) => null) || Buffer.alloc(0);
await conn.sendFile(m.chat, out, 'pp.jpg', null, m, false, { contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: ' 💫 𝐒𝐮𝐩𝐞𝐫 𝐁𝐨𝐭 𝐃𝐞 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 🥳 ', previewType: 0, thumbnail: imagen6, sourceUrl: global.channel2}}})  
//conn.sendFile(m.chat, out, 'error.png', null, m);
} catch (e) {
await conn.reply(m.chat, `#report ${usedPrefix + command}\n\n${wm}` m, m)
console.log(`❗❗ ${usedPrefix + command} ❗❗`)
console.log(e)}}
handler.help = ['toimg (reply)'];
handler.tags = ['sticker'];
handler.command = ['toimg', 'jpg', 'img'];
handler.register = true
export default handler;