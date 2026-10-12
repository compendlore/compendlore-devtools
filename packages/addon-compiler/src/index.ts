export interface FoundationIdentity {
	readonly packageName: string;
	readonly description: string;
	readonly status: "foundation";
}

export const foundation: FoundationIdentity = Object.freeze({
	packageName: "@compendlore/addon-compiler",
	description: "Compilateur d'addons",
	status: "foundation",
});
