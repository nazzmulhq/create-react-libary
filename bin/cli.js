#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

const colors = {
	reset: "\x1b[0m",
	bright: "\x1b[1m",
	green: "\x1b[32m",
	cyan: "\x1b[36m",
	yellow: "\x1b[33m",
	magenta: "\x1b[35m",
};

const log = {
	info: (msg) => console.log(`${colors.cyan}ℹ${colors.reset} ${msg}`),
	success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
	title: (msg) => console.log(`\n${colors.bright}${colors.magenta}${msg}${colors.reset}\n`),
};

async function main() {
	log.title("🚀 Create React Library");
	console.log("A modern React component library generator with Vite + TypeScript\n");

	// Get library name
	let libraryName = process.argv[2];
	if (!libraryName) {
		libraryName = await question(`${colors.cyan}?${colors.reset} Library name: `);
	}

	if (!libraryName) {
		console.log("Library name is required!");
		process.exit(1);
	}

	// Sanitize library name
	libraryName = libraryName
		.toLowerCase()
		.replace(/\s+/g, "-")
		.replace(/[^a-z0-9-]/g, "");

	// Get author name
	const authorName =
		(await question(`${colors.cyan}?${colors.reset} Author name (Your Name): `)) || "Your Name";

	rl.close();

	const targetDir = path.join(process.cwd(), libraryName);

	// Check if directory exists
	if (fs.existsSync(targetDir)) {
		console.log(`\n❌ Directory "${libraryName}" already exists!`);
		process.exit(1);
	}

	log.info(`Creating library: ${colors.bright}${libraryName}${colors.reset}`);
	log.info(`Author: ${authorName}`);
	console.log("");

	// Create directory
	fs.mkdirSync(targetDir, { recursive: true });

	// Copy template
	const templateDir = path.join(__dirname, "..", "template");
	copyDir(templateDir, targetDir);

	// Update package.json with library name and author
	const pkgPath = path.join(targetDir, "package.json");
	const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
	pkg.name = libraryName;
	pkg.author = authorName;
	pkg.exports["."].import = `./dist/${libraryName}.es.js`;
	pkg.exports["."].require = `./dist/${libraryName}.cjs.js`;
	pkg.exports["./styles"] = `./dist/${libraryName}.css`;
	pkg.main = `./dist/${libraryName}.cjs.js`;
	pkg.module = `./dist/${libraryName}.es.js`;
	fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

	// Update vite.config.ts with library name
	const vitePath = path.join(targetDir, "vite.config.ts");
	let viteConfig = fs.readFileSync(vitePath, "utf-8");
	viteConfig = viteConfig.replace(/MyLibrary/g, toPascalCase(libraryName));
	viteConfig = viteConfig.replace(/my-library/g, libraryName);
	fs.writeFileSync(vitePath, viteConfig);

	// Update example package.json
	const examplePkgPath = path.join(targetDir, "example", "package.json");
	const examplePkg = JSON.parse(fs.readFileSync(examplePkgPath, "utf-8"));
	examplePkg.dependencies[libraryName] = "file:..";
	delete examplePkg.dependencies["my-react-library"];
	fs.writeFileSync(examplePkgPath, JSON.stringify(examplePkg, null, 2));

	// Update example App.tsx imports
	const appPath = path.join(targetDir, "example", "src", "App.tsx");
	let appContent = fs.readFileSync(appPath, "utf-8");
	appContent = appContent.replace(/my-react-library/g, libraryName);
	fs.writeFileSync(appPath, appContent);

	// Success message
	console.log("");
	log.success("Library created successfully!");
	console.log("");
	console.log(`${colors.bright}Next steps:${colors.reset}`);
	console.log("");
	console.log(`  ${colors.cyan}cd ${libraryName}${colors.reset}`);
	console.log(`  ${colors.cyan}npm install${colors.reset}`);
	console.log("");
	console.log(`${colors.yellow}Terminal 1 - Compile library:${colors.reset}`);
	console.log(`  ${colors.cyan}npm run build:watch${colors.reset}`);
	console.log("");
	console.log(`${colors.yellow}Terminal 2 - Run example app:${colors.reset}`);
	console.log(`  ${colors.cyan}cd example && npm install && npm run dev${colors.reset}`);
	console.log("");
	console.log(`Opens at ${colors.bright}http://localhost:3001${colors.reset}`);
	console.log("");
	console.log(`${colors.green}Happy coding! 🎉${colors.reset}`);
	console.log("");
}

function copyDir(src, dest) {
	fs.mkdirSync(dest, { recursive: true });
	const entries = fs.readdirSync(src, { withFileTypes: true });

	for (const entry of entries) {
		const srcPath = path.join(src, entry.name);
		const destPath = path.join(dest, entry.name);

		if (entry.isDirectory()) {
			copyDir(srcPath, destPath);
		} else {
			fs.copyFileSync(srcPath, destPath);
		}
	}
}

function toPascalCase(str) {
	return str
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join("");
}

main().catch(console.error);
