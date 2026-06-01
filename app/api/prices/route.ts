export async function GET() {
  try {
    const response = await fetch(
      "https://api.genelpara.com/json/?list=altin&sembol=GA,C,Y,T,ATA,RA"
    );

    const result = await response.json();

    return Response.json({
      gramAltin: Number(result.data.GA.satis),
      alis: Number(result.data.GA.alis),

      ceyrek: Number(result.data.C.satis),
      yarim: Number(result.data.Y.satis),
      tam: Number(result.data.T.satis),
      ata: Number(result.data.ATA.satis),
      resat: Number(result.data.RA.satis),
    });
  } catch (error: any) {
    return Response.json({
      error: error.message,
    });
  }
}