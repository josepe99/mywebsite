import { NextResponse } from 'next/server';
import { bot } from "../../../src/telegrambot";
require('dotenv').config();


export async function POST(request) {
  const body = await request.json();

  const telegramMsg = `name: ${body.name}\nemail: ${body.email}\nsubject: ${body.subject}\nmessage: ${body.message}`

  bot.sendMessage(process.env.NEXT_PUBLIC_CHAT_ID, telegramMsg);

  return NextResponse.json(true);
}