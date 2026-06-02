export async function GET() {
  try {
    const response = await fetch(
      "https://api.genelpara.com/json/?list=altin&sembol=GA,C,Y,T,ATA,RA,CMR,22,14,GAG"
    );

    const text = await response.text();

    return Response.json({
      status: response.status,
      text: text.substring(0, 2000),
    });
  } catch (error: any) {
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}