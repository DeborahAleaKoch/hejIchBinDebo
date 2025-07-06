export type Tech = {
	text: string;
	logo?: string;
	tooltip?: string;
};

export const goodSkills: Tech[] = [
	{ text: "React.js", logo: "../public/logos/React-icon.svg.png" },
	{ text: "Vite", logo: "../public/logos/vite-svgrepo-com.svg" },
	{ text: "HTML5", logo: "../public/logos/html-5-svgrepo-com.svg" },
	{ text: "SupaBase", logo: "../public/logos/icons8-supabase.svg" },
	{
		text: "PostgreSQL",
		logo: "../public/logos/Postgresql_elephant.svg.png",
	},
	{
		text: "TypeScript",
		logo: "../public/logos/typescript-official-svgrepo-com.svg",
	},
	{ text: "Tailwind CSS", logo: "../public/logos/tailwind-svgrepo-com.svg" },
	{ text: "ZSH", logo: "../public/logos/Zsh.svg" },
	{ text: "macOs", logo: "../public/logos/apple-173-svgrepo-com.svg" },
	{ text: "Git", logo: "../public/logos/git-svgrepo-com.svg" },
	{ text: "Node.js", logo: "../public/logos/Node.js_logo.svg" },
	{ text: "Figma", logo: "../public/logos/figma-svgrepo-com.svg" },
	{ text: "Docker", logo: "../public/logos/docker-logo-svgrepo-com.svg" },
];

// bin dran
export const techStackData: Tech[] = [
	{ text: "Next.js", logo: "../public/logos/nextjs-icon-svgrepo-com.svg" },
	{ text: "Vue.js", logo: "../public/logos/Vue.svg" },
	{
		text: "Drop Backs",
		logo: "../public/logos/reshot-icon-wheel-pose-9T4F7GJAE2.svg",
		tooltip: "Yoga",
	},
];

// möchte ich noch lernen
export const wantToLearn: Tech[] = [
	{ text: "PHP", logo: "../public/logos/php02-svgrepo-com.svg" },
	{
		text: "Symfony",
		logo: "../public/logos/symfony-svgrepo-com.svg",
	},
	{ text: "Podman", logo: "../public/logos/Podman.svg" },
	{ text: "React Native", logo: "../public/logos/react-native-1.svg" },
];
