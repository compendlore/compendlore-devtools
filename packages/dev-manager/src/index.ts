export interface FoundationIdentity {
	readonly packageName: string;
	readonly description: string;
	readonly status: "foundation";
}

export const foundation: FoundationIdentity = Object.freeze({
	packageName: "@compendlore/dev-manager",
	description: "Gestionnaire de développement",
	status: "foundation",
});
