import fetch from 'node-fetch';
import yts from 'yt-search';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) return conn.reply(m.chat, `${emoji2} Ingresa el nombre de la canción que deseas descargar.\n\nEjemplo:\n${usedPrefix + command} Canción favorita`, m, rcanal);

  try {
    const search = await yts(args.join(' '));
    if (!search.videos.length) return m.reply('❌ No se encontraron resultados');

    const videoInfo = search.videos[0];
    const { title, thumbnail, timestamp, url } = videoInfo;
    const duration = timestamp.includes(':') ? timestamp : `${Math.floor(parseInt(timestamp)/60)}:${parseInt(timestamp)%60}`.padStart(2, '0');

    let txt = '`乂 Y O U T U B E - M P 3`\n\n' + 
             ` ✩ *Título* : ${title}\n` + 
             ` ✩ *Duración* : ${duration}\n` + 
             ` ✩ *Calidad* : 128kbps\n\n` + 
             '> *- ↻ El audio se está enviando, espera un momento...*';

    await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', txt, m);

    const apiUrl = `https://api.sylphy.xyz/download/ytmp3?url=${url}&apikey=sylph`;
    const apiResponse = await fetch(apiUrl);
    const apiData = await apiResponse.json();

    if (!apiData.url) throw new Error('❌ Error al obtener el audio');

    await conn.sendMessage(m.chat, { 
      audio: { url: apiData.url }, 
      fileName: `${title}.mp3`, 
      mimetype: 'audio/mpeg', 
      contextInfo: { 
        externalAdReply: { 
          title: title, 
          body: `Duración: ${duration}`, 
          mediaType: 2, 
          thumbnail: await (await fetch(thumbnail)).buffer(), 
          sourceUrl: url 
        } 
      } 
    }, { quoted: m });
  } catch (error) {
    console.error(error);
    m.reply(`❌ Error: ${error.message}`);
  }
};

handler.help = ['play *<nombre de la canción>*'];
handler.tags = ['downloader'];
handler.command = ['play'];
handler.register = true;

export default handler;