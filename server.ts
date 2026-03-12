import express from "express";
import { createServer as createViteServer } from "vite";
import https from "https";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Cache for the resolved Google Drive video URL
  let cachedVideoUrl: string | null = null;
  let cacheTimestamp: number = 0;

  // Proxy route for Google Drive video
  app.get("/api/video", (req, res) => {
    const videoId = "1K7livqzzCCHd9Gm4EvMOY3PuqUhG9mmU";
    const initialUrl = `https://drive.google.com/uc?export=download&id=${videoId}`;

    // Cache expires after 30 minutes
    if (cachedVideoUrl && Date.now() - cacheTimestamp > 30 * 60 * 1000) {
      cachedVideoUrl = null;
    }

    const fetchVideo = (urlToFetch: string, isRetry: boolean = false) => {
      const options = {
        headers: {
          ...(req.headers.range ? { range: req.headers.range } : {})
        }
      };

      https.get(urlToFetch, options, (proxyRes) => {
        if (proxyRes.statusCode === 301 || proxyRes.statusCode === 302 || proxyRes.statusCode === 303) {
          if (proxyRes.headers.location) {
            cachedVideoUrl = proxyRes.headers.location;
            cacheTimestamp = Date.now();
            fetchVideo(proxyRes.headers.location);
          } else {
            res.status(500).send("Redirect location missing");
          }
          return;
        }

        if (proxyRes.statusCode === 403 && !isRetry && cachedVideoUrl) {
          // Cache might be invalid, retry with initial URL
          cachedVideoUrl = null;
          fetchVideo(initialUrl, true);
          return;
        }

        // Forward headers, but remove CORS/CORP headers that block embedding
        const headersToForward = ['content-type', 'content-length', 'accept-ranges', 'content-range'];
        headersToForward.forEach(header => {
          if (proxyRes.headers[header]) {
            res.setHeader(header, proxyRes.headers[header] as string);
          }
        });

        // Add permissive CORS headers
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");

        res.status(proxyRes.statusCode || 200);
        proxyRes.pipe(res);
      }).on("error", (err) => {
        console.error("Error proxying video:", err);
        res.status(500).send("Error proxying video");
      });
    };

    fetchVideo(cachedVideoUrl || initialUrl);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve static files from dist
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
