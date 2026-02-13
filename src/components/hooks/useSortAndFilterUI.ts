import { useState } from "react"

/**
 * 
 * @param items 
 * @param initialGenre 
 * @returns 
 */
export function useSortFilter<T>(
    //Start with Initial value
    items: T[],
    initialGenre: T
) {
    const [selectedItem, setSelectedItem] = useState<T>(initialGenre)

    //Handles selected item to be displayed
    const handleGenreChange = (items: T) => {
        setSelectedItem(items)
    }

    return{
        items,
        selectedItem,
        setSelectedItem: handleGenreChange
    }
}