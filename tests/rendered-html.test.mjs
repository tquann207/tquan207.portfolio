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
test("project navigation follows the homepage order and always offers a return", { skip: !standalone }, () => {
  const root = fileURLToPath(new URL("../out/", import.meta.url));
  const base = "/tquan207.portfolio";
  const home = readFileSync(join(root, "index.html"), "utf8");
  const archive = readFileSync(join(root, "projects/index.html"), "utf8");
  const details = readdirSync(join(root, "projects"), { withFileTypes: true })
    .filter(entry => entry.isDirectory() && existsSync(join(root, "projects", entry.name, "index.html")))
    .map(entry => readFileSync(join(root, "projects", entry.name, "index.html"), "utf8"));
  assert.equal(details.length, 7, "All seven detail pages remain available");
  assert.ok(home.indexOf('id="experience"') < home.indexOf('id="projects"'));
  assert.ok(home.indexOf('id="projects"') < home.indexOf('id="about"'));
  for (const html of [home, archive, ...details]) {
    const navigation = html.match(/<nav\b[^>]*id="primary-navigation"[^>]*>([\s\S]*?)<\/nav>/)?.[1];
    assert.ok(navigation, "Primary navigation is rendered");
    const links = [...navigation.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([^<]+)<\/a>/g)];
    assert.deepEqual(links.map(link => link[2]), ["Experience", "Projects", "About", "Contact"]);
    assert.equal(links[1][1], `${base}/#projects`, "Projects must return to the homepage section");
  }
  assert.ok(!home.includes('class="project-return-bar"'), "Homepage introduction stays unchanged");
  for (const html of [archive, ...details]) {
    const bar = html.match(/<nav\b[^>]*class="project-return-bar"[^>]*>([\s\S]*?)<\/nav>/)?.[1];
    assert.ok(bar?.includes(`href="${base}/#projects"`), "Visible return link works without browser history or JavaScript");
    assert.ok(bar.includes("Back to home"));
  }
  for (const html of details) {
    const returnLinks = [...html.matchAll(/<a\b[^>]*class="[^"]*\bproject-return-link\b[^"]*"[^>]*href="([^"]+)"[^>]*>/g)];
    assert.equal(returnLinks.length, 1, "Each detail page provides exactly one return control");
    assert.equal(returnLinks[0][1], `${base}/#projects`, "Return link leads directly to the homepage project section");
    assert.ok(!html.includes("project-return-bottom"), "No duplicate bottom return control remains");
    assert.ok(html.includes('class="next-project"'), "Continue-to-next-project navigation remains available");
  }
});

test("GitHub Pages export preserves local routes, files, and fragment targets", { skip: !standalone }, () => {
  const root = fileURLToPath(new URL("../out/", import.meta.url));
  const base = "/tquan207.portfolio";
  const htmlFiles = readdirSync(root, { recursive: true }).filter(path => path.endsWith(".html"));
  assert.ok(htmlFiles.includes("index.html"), "Homepage must be exported");
  assert.ok(htmlFiles.includes("projects/index.html"), "Project archive must be exported");
  assert.ok(!htmlFiles.some(path => path.includes("__qa") || path.includes("__baseline")), "QA fixtures must not ship");
  for (const path of htmlFiles) {
    const html = readFileSync(join(root, path), "utf8");
    assert.doesNotMatch(html, /[←→↗↘↓↑]/u, `${path}: use action icons instead of arrow characters`);
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

test("NVH is discoverable from projects and embedded skills with résumé-backed details", { skip: !standalone }, () => {
  const root = fileURLToPath(new URL("../out/", import.meta.url));
  const home = readFileSync(join(root, "index.html"), "utf8");
  const archive = readFileSync(join(root, "projects/index.html"), "utf8");
  const detail = readFileSync(join(root, "projects/nvh-test-rig/index.html"), "utf8");
  for (const html of [home, archive]) {
    assert.equal((html.match(/class="project-folio"/g) ?? []).length, 7);
    assert.ok(html.indexOf('id="smart-delivery-box"') < html.indexOf('id="nvh-test-rig"'));
    assert.ok(html.indexOf('id="nvh-test-rig"') < html.indexOf('id="hybrid-health-supply-network"'));
    assert.ok(html.includes('href="/tquan207.portfolio/projects/nvh-test-rig/"'));
  }
  const capabilities = home.match(/<section\b[^>]*class="capabilities-section[^>]*>[\s\S]*?<\/section>/)?.[0];
  assert.ok(capabilities?.includes('href="/tquan207.portfolio/projects/nvh-test-rig/#data-acquisition"'));
  assert.ok(capabilities.includes('href="/tquan207.portfolio/projects/nvh-test-rig/#signal-analysis"'));
  assert.ok(!capabilities.includes("Project-specific implementation evidence to add."));
  for (const text of ["Personal Project", "Jan 2026", "ESP32", "ADXL345", "Hall sensor", "FFT", 'id="data-acquisition"', 'id="signal-analysis"']) assert.ok(detail.includes(text), text);
  assert.ok(detail.includes("does not provide numerical isolation improvements"));
});
