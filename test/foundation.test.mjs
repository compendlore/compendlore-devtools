import assert from "node:assert/strict";
import test from "node:test";

import { foundation as compiler } from "../packages/addon-compiler/build/index.js";
import { foundation as manager } from "../packages/dev-manager/build/index.js";

test("exposes the public developer-tool foundations", () => {
	assert.equal(compiler.packageName, "@compendlore/addon-compiler");
	assert.equal(manager.packageName, "@compendlore/dev-manager");
});
