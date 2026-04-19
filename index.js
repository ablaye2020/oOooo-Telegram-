const TelegramBot = require('node-telegram-bot-api');

// Ton token (à garder secret)
const token = 'TON_TOKEN_ICI';

const bot = new TelegramBot(token, { polling: true });

// Commande /start
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, `⚔️ Bienvenue sur ZETSU BOT ⚔️\n"Le respect ne se demande pas" - JOYBOY`);
});

// Commande /ping
bot.onText(/\/ping/, (msg) => {
    bot.sendMessage(msg.chat.id, '🏓 Pong !');
});

// Répond à tout message
bot.on('message', (msg) => {
    if (msg.text === 'Bonjour') {
        bot.sendMessage(msg.chat.id, 'Salut ! Comment vas-tu ?');
    }
});

console.log('🤖 Bot Telegram ZETSU est en ligne !');
