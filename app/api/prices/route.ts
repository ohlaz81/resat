export async function GET() {
  try {
    const response = await fetch(
      "https://duzcerehberi.com/api/prices.php",
      {
        cache: "no-store",
      }
    );

    const json = await response.json();

    return Response.json({
      remaining: Number(json.remaining ?? 0),

      resat: Number(json.data.RA.satis),
      resatDegisim: Number(json.data.RA.degisim),

      gramAltin: Number(json.data.GA.satis),
      gramDegisim: Number(json.data.GA.degisim),

      ceyrek: Number(json.data.C.satis),
      ceyrekDegisim: Number(json.data.C.degisim),

      yarim: Number(json.data.Y.satis),
      yarimDegisim: Number(json.data.Y.degisim),

      tam: Number(json.data.T.satis),
      tamDegisim: Number(json.data.T.degisim),

      ata: Number(json.data.ATA.satis),
      ataDegisim: Number(json.data.ATA.degisim),

      cumhuriyet: Number(json.data.CMR.satis),
      cumhuriyetDegisim: Number(json.data.CMR.degisim),

      ayar22: Number(json.data["22"].satis),
      ayar22Degisim: Number(json.data["22"].degisim),

      ayar14: Number(json.data["14"].satis),
      ayar14Degisim: Number(json.data["14"].degisim),

      gumus: Number(json.data.GAG.satis),
      gumusDegisim: Number(json.data.GAG.degisim),

      dolar: 39.5,
      euro: 45.2,
      ons: 3370,
    });
  } catch (error) {
    return Response.json(
      {
        error: "Veri alınamadı",
      },
      { status: 500 }
    );
  }
}