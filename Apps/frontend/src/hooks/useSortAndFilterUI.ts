import { useState } from "react"

/**
 * A sorting filter hook for UI handling of a selected value(reusable)
 * @param initialSelected - The intial selected value (Ex. "All" in a genres)
 * @returns 
 * selectedItem: The current selectedItem.
 * setSelectedItem the displaying function to update the selection.
 */
export function useSortFilter<T>(
    //Start with Initial value
    initialSelected: T
) {
    const [selectedItem, setSelectedItem] = useState<T>(initialSelected)

    //Handles selected item to be displayed
    const handleItemChange = (items: T) => {
        setSelectedItem(items)
    }

    return{
        selectedItem,
        setSelectedItem: handleItemChange
    }
}