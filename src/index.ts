import { Elysia, t } from "elysia";
import { homePage } from "./pages/home";
import { aboutPage } from "./pages/about";
import { portfolioPage } from "./pages/portfolio";

// ── Types ──
interface ContactBody {
  name: string;
  business: string;
  email: string;
  category?: string;
  message: string;
}

// ── HTML response helper ──
const html = (content: string): Response =>
  new Response(content, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });

// ── App ──
const app = new Elysia()

  // Landing page
  .get("/", () => html(homePage()))

  // About page
  .get("/about", () => html(aboutPage()))

  // Portfolio page
  .get("/portfolio", () => html(portfolioPage()))

  // Contact form API endpoint
  .post(
    "/api/contact",
    async ({ body }: { body: ContactBody }) => {
      // TODO: save to database + send email notification
      console.log("📨 New contact submission:", body);
      return { success: true, message: "Message received!" };
    },
    {
      body: t.Object({
        name:     t.String({ minLength: 1 }),
        business: t.String({ minLength: 1 }),
        email:    t.String({ format: "email" }),
        category: t.Optional(t.String()),
        message:  t.String({ minLength: 1 }),
      }),
    }
  )

  // Global 404 handler
  .onError(({ code, error }) => {
    if (code === "NOT_FOUND") {
      return html(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <title>404 — Page Not Found</title>
          <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&display=swap" rel="stylesheet"/>
          <style>
            *{margin:0;padding:0;box-sizing:border-box}
            body{background:#0a1628;color:#eeeeee;font-family:'Orbitron',monospace;
              display:flex;flex-direction:column;align-items:center;justify-content:center;
              min-height:100vh;text-align:center;gap:1.5rem;}
            h1{font-size:6rem;font-weight:900;color:#f87b1b;text-shadow:0 0 30px rgba(248,123,27,.5);}
            p{color:#7a8faa;letter-spacing:.1em;font-size:.85rem;}
            a{color:#f87b1b;text-decoration:none;border:1px solid #f87b1b;
              padding:.6rem 1.5rem;font-size:.7rem;letter-spacing:.15em;
              transition:background .2s;}
            a:hover{background:#f87b1b;color:#0a1628;}
          </style>
        </head>
        <body>
          <h1>404</h1>
          <p>PAGE NOT FOUND</p>
          <a href="/">← BACK TO HOME</a>
        </body>
        </html>
      `);
    }
    console.error("Server error:", error);
    return new Response("Internal Server Error", { status: 500 });
  })

  .listen(3000);

console.log(`🦊 InsightFlow running at http://localhost:${app.server?.port}`);