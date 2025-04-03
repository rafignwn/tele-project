const { Telegraf } = require('telegraf');

const bot = new Telegraf('token');

// menambahkan daftar command
bot.telegram.setMyCommands([
    {command: "start", description: "Memulai Bot Report Alert Aruba"},
    {command: "menu", description: "Daftar Menu Bot Report Alert Aruba"},
    {command: "info", description: "Info Bot"},
])

// Menangani perintah /start
bot.start((ctx) => ctx.reply('Selamat datang di Bot Saya!'));

// Menangani perintah /menu
bot.command('menu', (ctx) => {
    ctx.reply(
        "📌 Daftar Perintah:\n" +
        "/start - Mulai bot\n" +
        "/menu - Lihat menu\n" +
        "/info - Info bot"
    );
});

bot.command("info", (ctx) => {
    ctx.reply("Bot uji coba untuk merekap laporan alert aruba")
})

// Menangani pesan teks biasa
bot.on('text', (ctx) => {
    ctx.reply(`Anda berkata: ${ctx.message.text}`);
});

bot.launch();
