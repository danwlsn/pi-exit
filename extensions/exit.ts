import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

export default function (pi: ExtensionAPI) {
	pi.registerCommand("exit", {
		description: "Exit Pi (alias for /quit)",
		handler: async (_args, ctx) => {
			ctx.shutdown();
		},
	});

	pi.on("input", async (event, ctx) => {
		if (event.source !== "extension" && event.text.trim() === ":q") {
			ctx.shutdown();
			return { action: "handled" };
		}
		return { action: "continue" };
	});
}
