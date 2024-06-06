import { NextRequest, NextResponse } from "next/server";
import fetch from "node-fetch";

const TRIPADVISOR_API_KEY = process.env.NEXT_PUBLIC_TRIPADVISOR_API_KEY;

if (!TRIPADVISOR_API_KEY) {
  throw new Error("TripAdvisor API key is missing in environment variables");
}

export async function GET(req: NextRequest) {
  // const { url } = req.query;
  const url = req.nextUrl.searchParams.get("url");

  if (!url || Array.isArray(url)) {
    return NextResponse.json(
      { error: "URL parameter is required" },
      { status: 400 }
    );

    return;
  }

  try {
    const apiUrl = `${decodeURIComponent(url)}&key=${TRIPADVISOR_API_KEY}`;
    const response = await fetch(apiUrl, {
      headers: {
        accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    console.error("Error occurred while fetching data:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
