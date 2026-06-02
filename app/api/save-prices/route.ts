import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    const response = await fetch(
  "https://resat-red.vercel.app/api/prices"
);

    const data = await response.json();

    const prices = [
      {
        symbol: "gram-altin",
        price: data.gramAltin,
      },
      {
        symbol: "resat-altin",
        price: data.resat,
      },
      {
        symbol: "ceyrek-altin",
        price: data.ceyrek,
      },
      {
        symbol: "yarim-altin",
        price: data.yarim,
      },
      {
        symbol: "tam-altin",
        price: data.tam,
      },
      {
        symbol: "ata-altini",
        price: data.ata,
      },
      {
        symbol: "cumhuriyet-altini",
        price: data.cumhuriyet,
      },
      {
        symbol: "gumus",
        price: data.gumus,
      },
      {
        symbol: "usd",
        price: data.dolar,
      },
      {
        symbol: "eur",
        price: data.euro,
      },
    ];

    const { error } = await supabase
      .from("price_history")
      .insert(prices);

    if (error) throw error;

    return Response.json({
      success: true,
      inserted: prices.length,
    });
  } catch (error: any) {
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}