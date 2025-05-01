import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    // Dynamic params
    const title = searchParams.get("title") || "Ascent Coaching Classes"
    const description = searchParams.get("description") || "Top coaching institute in Lucknow"

    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1e40af",
          color: "white",
          padding: "40px",
        }}
      >
        <img
          src="https://ascentclasses.com/logo.png"
          alt="Ascent Coaching Classes Logo"
          width={200}
          height={200}
          style={{ marginBottom: "20px" }}
        />
        <h1
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            textAlign: "center",
            margin: "0",
            marginBottom: "20px",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: "30px",
            textAlign: "center",
            margin: "0",
            maxWidth: "800px",
          }}
        >
          {description}
        </p>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e) {
    console.log(`${e}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
