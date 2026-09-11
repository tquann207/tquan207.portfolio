import assert from "node:assert/strict";
import test from "node:test";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

test("renders development preview metadata", { skip: !existsSync(new URL("../.openai/hosting.json", import.meta.url)) }, async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  assert.match(await response.text(), developmentPreviewMeta);
});


const standalone = !existsSync(new URL("../.openai/hosting.json", import.meta.url));
test("GitHub Pages export preserves local routes, files, and fragment targets", { skip: !standalone }, () => {
  const root = fileURLToPath(new URL("../out/", import.meta.url));
  const base = "/tquan207.portfolio";
  const htmlFiles = readdirSync(root, { recursive: true }).filter(path => path.endsWith(".html"));
  assert.ok(htmlFiles.includes("index.html"), "Homepage must be exported");
  assert.ok(htmlFiles.includes("projects/index.html"), "Project archive must be exported");
  assert.ok(!htmlFiles.some(path => path.includes("__qa") || path.includes("__baseline")), "QA fixtures must not ship");
  for (const path of htmlFiles) {
    const html = readFileSync(join(root, path), "utf8");
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${path}: one page heading`);
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
    assert.equal(new Set(ids).size, ids.length, `${path}: duplicate IDs`);
    for (const [, value] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      if (/^(?:https?:|mailto:|tel:|data:|blob:)/.test(value)) continue;
      const url = new URL(value.replaceAll("&amp;", "&"), `https://example.test${base}/${path}`);
      assert.ok(url.pathname === base || url.pathname.startsWith(`${base}/`), `${path}: missing GitHub base path in ${value}`);
      let target = join(root, decodeURIComponent(url.pathname.slice(base.length)));
      if (url.pathname.endsWith("/") || url.pathname === base) target = join(target, "index.html");
      if (!existsSync(target) && !target.includes(".")) target = join(target, "index.html");
      assert.ok(existsSync(target), `${path}: missing ${relative(root, target)} for ${value}`);
      if (url.hash && target.endsWith(".html")) {
        const targetHtml = readFileSync(target, "utf8");
        assert.ok(targetHtml.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `${path}: missing fragment ${value}`);
      }
    }
  }
});
