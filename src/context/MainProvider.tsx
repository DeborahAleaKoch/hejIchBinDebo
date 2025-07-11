import { createContext, useState } from "react";

interface ContextType {
	isFirstRender: boolean;
	setNotFirstRender: () => void;
}

export const mainContext = createContext<ContextType>({
	isFirstRender: true,
	setNotFirstRender: () => {},
});

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
	const [isFirstRender, setIsFirstRender] = useState<boolean>(true);

	return (
		<mainContext.Provider
			value={{
				isFirstRender,
				setNotFirstRender: () => setIsFirstRender(false),
			}}
		>
			{children}
		</mainContext.Provider>
	);
};
