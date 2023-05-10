// Import the necessary packages
require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

// Create a bot that uses 'polling' to fetch new updates
export const bot = new TelegramBot(process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN, {polling: true});