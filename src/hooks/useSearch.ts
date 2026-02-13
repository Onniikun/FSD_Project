import { useEffect, useState } from "react";

interface UseSearchOptions {
    initialValue?: string;
    debounceMilliseconds?: number;
}

/**
 * Responsibilities:
 * - Track the user's raw input (searchValue) 
 * - Provide a debounced version of the searchValue for triggering services
 * - Track typing state to show loading indicators
 * - Track focus state to show/hide dropdowns or other UI elements
 * - clearSearch() used for an "x" button to reset the search bar
 */
export function useSearch({
    initialValue = "",
    debounceMilliseconds = 500,
}: UseSearchOptions = {}) {
    const [searchValue, setSearchValue] = useState(initialValue);
    const [debouncedValue, setDebouncedValue] = useState(initialValue);
    const [isTyping, setIsTyping] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        setIsTyping(true);

        const debounceSearch = setTimeout(() => {
            setDebouncedValue(searchValue);
            setIsTyping(false);
        }, debounceMilliseconds);

        return () => clearTimeout(debounceSearch);
    }, [searchValue]);

    const clearSearch = () => {
        setSearchValue("");
        setDebouncedValue("");
    };

    return {
        searchValue,
        setSearchValue,
        debouncedValue,
        isTyping,
        isFocused,
        setIsFocused,
        clearSearch,
    };
}