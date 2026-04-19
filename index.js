const TelegramBot = require('node-telegram-bot-api');

// Remplace par TON_TOKEN (à obtenir de @BotFather)
const token = 'TON_TOKEN_ICI';

const bot = new TelegramBot(token, { polling: true });

// Configuration du bot
const botName = 'oOooo';
const owner = 'JOYBOY';
const citation = '"Le respect ne se demande pas"';

// Commande /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const firstName = msg.from.first_name || 'Bienvenue';
    
    bot.sendMessage(chatId, 
        `⚔️ *${botName} - BOT OFFICIEL* ⚔️\n\n` +
        `👋 Salut *${firstName}* !\n` +
        `🤖 Bot créé par *${owner}*\n` +
        `📜 *${citation}*\n\n` +
        `📌 *Commandes disponibles :*\n` +
        `/start - Redémarrer le bot\n` +
        `/help - Aide\n` +
        `/ping - Tester le bot\n` +
        `/info - Infos du bot\n` +
        `/deban - Service de déban WhatsApp\n` +
        `/signal - Signaler un harceleur\n` +
        `/owner - Contacter le propriétaire`,
        { parse_mode: 'Markdown' }
    );
});

// Commande /help
bot.onText(/\/help/, (msg) => {
    bot.sendMessage(msg.chat.id,
        `📖 *AIDE - ${botName}*\n\n` +
        `/start - Démarrer le bot\n` +
        `/help - Cette aide\n` +
        `/ping - Vérifier si le bot répond\n` +
        `/info - Infos du bot\n` +
        `/deban - Service déban WhatsApp (5000 FCFA)\n` +
        `/signal - Signaler un harceleur (2000 FCFA)\n` +
        `/owner - Contacter ${owner}`,
        { parse_mode: 'Markdown' }
    );
});

// Commande /ping
bot.onText(/\/ping/, (msg) => {
    bot.sendMessage(msg.chat.id, '🏓 Pong ! Le bot fonctionne correctement.');
});

// Commande /info
bot.onText(/\/info/, (msg) => {
    bot.sendMessage(msg.chat.id,
        `ℹ️ *Informations du bot*\n\n` +
        `🤖 Nom : ${botName}\n` +
        `👑 Créateur : ${owner}\n` +
        `📜 Citation : ${citation}\n` +
        `🕐 En ligne depuis : ${new Date().toLocaleString()}\n` +
        `💻 Hébergement : Render (24/7)`,
        { parse_mode: 'Markdown' }
    );
});

// Commande /deban (service payant)
bot.onText(/\/deban/, (msg) => {
    bot.sendMessage(msg.chat.id,
        `🔓 *SERVICE DÉBAN WHATSAPP*\n\n` +
        `💰 Prix : *5000 FCFA*\n` +
        `✅ Garantie : Essai jusqu'à déban\n` +
        `📞 Contact : +221 78 540 25 19\n` +
        `💳 Paiement : Orange Money / Wave\n\n` +
        `📝 Envoyez votre numéro WhatsApp après paiement.`,
        { parse_mode: 'Markdown' }
    );
});

// Commande /signal (service payant)
bot.onText(/\/signal/, (msg) => {
    bot.sendMessage(msg.chat.id,
        `🚨 *SIGNALEMENT HARCELEUR*\n\n` +
        `💰 Prix : *2000 FCFA*\n` +
        `📧 Envoi de 50 signalements à WhatsApp Support\n` +
        `📞 Contact : +221 78 540 25 19\n` +
        `💳 Paiement : Orange Money / Wave\n\n` +
        `📝 Envoyez le numéro du harceleur après paiement.`,
        { parse_mode: 'Markdown' }
    );
});

// Commande /owner
bot.onText(/\/owner/, (msg) => {
    bot.sendMessage(msg.chat.id,
        `👑 *Contacter le propriétaire*\n\n` +
        `📧 Email : joyboy@infopurge24.sn\n` +
        `📞 WhatsApp : +221 78 540 25 19\n` +
        `💬 Telegram : @JOYBOY\n\n` +
        `📜 *${citation}*`,
        { parse_mode: 'Markdown' }
    );
});

// Répondre au message "Bonjour"
bot.on('message', (msg) => {
    const text = msg.text;
    if (text === 'Bonjour' || text === 'bonjour' || text === 'Salut') {
        bot.sendMessage(msg.chat.id, `Salut ${msg.from.first_name} ! Bienvenue sur ${botName} 🤖`);
    }
});

console.log(`🤖 Bot ${botName} est en ligne !`);
