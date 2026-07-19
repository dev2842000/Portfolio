const fs = require("fs");
const path = require("path");

// lottie-web and other browser libs call DOM APIs at module load time.
// A Proxy absorbs any property access so nothing throws.
if (typeof document === "undefined") {
  const noop = () => stub; // eslint-disable-line no-use-before-define
  const stub = new Proxy(
    { style: {}, appendChild: noop, setAttribute: noop, getContext: () => stub, getElementsByTagName: () => [], fillStyle: "" },
    { get: (o, k) => (k in o ? o[k] : noop) }
  );
  global.document = new Proxy(
    { createElement: () => stub, createElementNS: () => stub, body: stub, getElementsByTagName: () => [], head: stub },
    { get: (o, k) => (k in o ? o[k] : noop) }
  );
  global.window = new Proxy(global, { get: (o, k) => (k in o ? o[k] : noop) });
  global.navigator = { userAgent: "node" };
}

const root = path.resolve(__dirname, "..");

async function run() {
  const template = fs.readFileSync(
    path.join(root, "dist/client/index.html"),
    "utf-8"
  );

  // SSR bundle is ESM — dynamic import required
  const { render } = await import(
    new URL(`file://${path.join(root, "dist/server/entry-server.mjs")}`)
  );

  const appHtml = render();
  const html = template.replace("<!--ssr-outlet-->", appHtml);

  fs.writeFileSync(path.join(root, "dist/client/index.html"), html);
  console.log("✓ Prerendered /");
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
