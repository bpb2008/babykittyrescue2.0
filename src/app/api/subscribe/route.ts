import { NextResponse } from 'next/server';

export async function POST(request: Request) {

  try {
    const { email } = await request.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  const DATACENTER = API_KEY?.split("-")[1]; 

  const data = {
    email_address: email,
    status: "subscribed",
  }; 

  const response = await fetch(`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/`, {
    method: "POST",
    headers: {
      Authorization: `apikey ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }); 

  if (response.status >= 400) {
    const errorData = await response.json(); 
    return NextResponse.json({ error: errorData.detail || "There was an error subscribing." }, { status: 400 });
  }

  return NextResponse.json({ message: "Success!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}