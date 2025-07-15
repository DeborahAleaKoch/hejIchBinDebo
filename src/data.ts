export type Tech = {
	text: string;
	logo?: string;
	tooltip?: string;
};

export const goodSkills: Tech[] = [
	{ text: "React.js", logo: "/logos/React-icon.svg.png" },
	{ text: "Vite", logo: "/logos/vite-svgrepo-com.svg" },
	{ text: "VSCode", logo: "/logos/cdnlogo.com_vs-code.svg" },
	{ text: "HTML5", logo: "/logos/html-5-svgrepo-com.svg" },
	{ text: "SupaBase", logo: "/logos/icons8-supabase.svg" },
	{
		text: "PostgreSQL",
		logo: "/logos/Postgresql_elephant.svg.png",
	},
	{
		text: "TypeScript",
		logo: "/logos/typescript-official-svgrepo-com.svg",
	},
	{ text: "Tailwind CSS", logo: "/logos/tailwind-svgrepo-com.svg" },
	{ text: "ZSH", logo: "/logos/Zsh.svg" },
	{ text: "macOs", logo: "/logos/apple-173-svgrepo-com.svg" },
	{ text: "Git", logo: "/logos/git-svgrepo-com.svg" },
	{ text: "Node.js", logo: "/logos/Node.js_logo.svg" },
	{ text: "Figma", logo: "/logos/figma-svgrepo-com.svg" },
	{ text: "Docker", logo: "/logos/docker-logo-svgrepo-com.svg" },
];

// bin dran
export const techStackData: Tech[] = [
	{ text: "Next.js", logo: "/logos/nextjs-icon-svgrepo-com.svg" },
	{ text: "Vue.js", logo: "/logos/Vue.svg" },
	{
		text: "Drop Backs",
		logo: "/logos/reshot-icon-wheel-pose-9T4F7GJAE2.svg",
		tooltip: "Yoga",
	},
];

// möchte ich noch lernen
export const wantToLearn: Tech[] = [
	{ text: "PHP", logo: "/logos/php02-svgrepo-com.svg" },
	{
		text: "Symfony",
		logo: "/logos/symfony-svgrepo-com.svg",
	},
	{ text: "Podman", logo: "/logos/Podman.svg" },
	{ text: "React Native", logo: "/logos/react-native-1.svg" },
	{
		text: "Handstand",
		logo: "/logos/reshot-icon-handstand-NAKFM238GS.svg",
		tooltip: "Yoga",
	},
];
