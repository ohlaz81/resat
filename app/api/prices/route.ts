export async function GET() {
  try {
    const altinResponse = await fetch(
      "https://api.genelpara.com/json/?list=altin&sembol=GA,C,Y,T,ATA,RA,CMR,22,14,GAG"
    );

    const dovizResponse = await fetch(
      "https://api.genelpara.com/json/?list=doviz&sembol=USD,EUR"
    );

    const altin = await altinResponse.json();
    const doviz = await dovizResponse.json();

    return Response.json({
  // Altınlar
  resat: Number(altin.data.RA?.satis || 0),
  resatDegisim: Number(altin.data.RA?.degisim || 0),

gramAltin: Number(altin.data.GA?.satis || 0),
alis: Number(altin.data.GA?.alis || 0),
gramDegisim: Number(altin.data.GA?.degisim || 0),
  

  ceyrek: Number(altin.data.C?.satis || 0),
  ceyrekDegisim: Number(altin.data.C?.degisim || 0),

  yarim: Number(altin.data.Y?.satis || 0),
  yarimDegisim: Number(altin.data.Y?.degisim || 0),

  tam: Number(altin.data.T?.satis || 0),
  tamDegisim: Number(altin.data.T?.degisim || 0),

  ata: Number(altin.data.ATA?.satis || 0),
  ataDegisim: Number(altin.data.ATA?.degisim || 0),

  cumhuriyet: Number(altin.data.CMR?.satis || 0),
  cumhuriyetDegisim: Number(altin.data.CMR?.degisim || 0),

  ayar22: Number(altin.data["22"]?.satis || 0),
  ayar22Degisim: Number(altin.data["22"]?.degisim || 0),

  ayar14: Number(altin.data["14"]?.satis || 0),
  ayar14Degisim: Number(altin.data["14"]?.degisim || 0),

  gumus: Number(altin.data.GAG?.satis || 0),
  gumusDegisim: Number(altin.data.GAG?.degisim || 0),

  dolar: Number(doviz.data.USD?.satis || 0),
  euro: Number(doviz.data.EUR?.satis || 0),
});
  } catch (error: any) {
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}