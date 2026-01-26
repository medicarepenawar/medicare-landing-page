import { useEffect } from "react";

/**
 * Custom hook to set the document title
 * @param title - The title to set for the page
 * @param suffix - Optional suffix to append (default: "Medicare")
 */
export const usePageTitle = (title: string, suffix: string = "Medicare") => {
    useEffect(() => {
        const previousTitle = document.title;
        document.title = suffix ? `${title} | ${suffix}` : title;

        return () => {
            document.title = previousTitle;
        };
    }, [title, suffix]);
};

export default usePageTitle;
