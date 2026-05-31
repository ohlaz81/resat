export async function GET() {
  try {
    const response = await fetch(
      "https://altinapi.com/api/v1/prices",
      {
        headers: {
          "X-API-Key": process.env.ALTIN_API_KEY || "",
        },
      }
    );

    const result = await response.json();

    return Response.json(result);
  } catch (error: any) {
    return Response.json({
      error: error.message,
    });
  }
}