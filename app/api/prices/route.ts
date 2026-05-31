export async function GET() {
  try {
    const response = await fetch(
      "https://altinapi.com/api/v1/prices",
      {
        headers: {
          "X-API-Key": process.env.ALTIN_API_KEY!,
        },
      }
    );

    const result = await response.json();

    const altin = result.data.find(
      (item: any) => item.symbol === "ALTIN"
    );

    const dolar = result.data.find(
      (item: any) => item.symbol === "USDTRY"
    );

    const euro = result.data.find(
      (item: any) => item.symbol === "EURTRY"
    );

    const ons = result.data.find(
      (item: any) => item.symbol === "XAUUSD"
    );

    const ceyrek = result.data.find(
      (item: any) => item.symbol === "CEYREK_YENI"
    );

    const yarim = result.data.find(
      (item: any) => item.symbol === "YARIM_YENI"
    );

    const tam = result.data.find(
      (item: any) => item.symbol === "TEK_YENI"
    );

    const ata = result.data.find(
      (item: any) => item.symbol === "ATA_YENI"
    );

    return Response.json({
      gramAltin: altin?.ask || 0,
      alis: altin?.bid || 0,

      dolar: dolar?.ask || 0,
      euro: euro?.ask || 0,
      ons: ons?.ask || 0,

      ceyrek: ceyrek?.ask || 0,
      yarim: yarim?.ask || 0,
      tam: tam?.ask || 0,
      ata: ata?.ask || 0,
    });
  } catch (error) {
    return Response.json({
      error: "API bağlantı hatası",
    });
  }
}