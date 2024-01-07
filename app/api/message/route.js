import { sendMail } from "@/src/lib/mailservice";
import { NextResponse } from 'next/server';

require('dotenv').config();


export async function POST(request) {
  try{
    const body = await request.json();
  
    const msg = `name: ${body.name}\nemail: ${body.email}\nsubject: ${body.subject}\nmessage: ${body.message}`
    
    sendMail("Mensaje de pagina web", "josepedrozo99@gmail.com", msg);

    return NextResponse.json({ok: true});
  }catch(e){
    return NextResponse.json({
      ok: false,
      msg: e
    })
  }

}