// Assembles a self-contained release/ folder from the standalone build,
// ready to upload to a cPanel/CloudLinux Passenger Node host (startup file: server.js).
import { cpSync, existsSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const release = join(root, "release");
const standalone = join(root, ".next", "standalone");

if (!existsSync(join(standalone, "server.js"))) {
  console.error('Missing .next/standalone/server.js — run "next build" with output: "standalone" first.');
  process.exit(1);
}

rmSync(release, { recursive: true, force: true });

cpSync(standalone, release, { recursive: true });
cpSync(join(root, ".next", "static"), join(release, ".next", "static"), { recursive: true });

if (existsSync(join(root, "public"))) {
  cpSync(join(root, "public"), join(release, "public"), { recursive: true });
}

const envFile = join(root, ".env.production");
if (existsSync(envFile)) {
  cpSync(envFile, join(release, ".env.production"));
}

console.log(`Release ready at ${release}`);
