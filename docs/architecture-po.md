# Architecture Layout Document
by Phoenixx Ordoñez

Resource: [Basic writing and formatting syntax - GitHub Docs. (n.d.)](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

## Hooks - `useSearch`
## 1. What does `useSearch` do?

`useSearch` is a universal, UI‑focused state management hook that tracks a user’s search input — whether they’re looking for a song, review, or song list — and centralizes all search‑related behavior into a consistent, reusable interface for any component that needs it.

The hook is responsible for:

- **Tracking the raw search input (`searchValue`)**  
  This reflects exactly what the user is typing in real time.

- **Producing a debounced version of the input (`debouncedValue`)**  
  This prevents expensive operations (e.g., filtering, API calls) from running on every keystroke. Instead, the hook waits a configurable number of milliseconds before updating the debounced value.

- **Tracking typing state (`isTyping`)**  
  This allows UI components to show loading indicators or “Searching…” states while the user is actively typing.

- **Tracking focus state (`isFocused`)**  
  Useful for showing/hiding dropdowns, autocomplete suggestions, or clearing buttons.

- **Providing a `clearSearch()` helper**  
  This resets both the raw and debounced values, typically used for an “X” button in a search bar.

Together, these responsibilities make `useSearch` a complete, reusable search‑input hook for the UI layer.

---

## 2. How the logic was chosen and how it separates concerns

The design of `useSearch` follows React’s best practices for separating UI state (presentation logic) from business logic:

### Why the logic belongs in a hook
- **Search input behavior is purely UI state**, not domain logic.  
  The hook manages typing, debouncing, focus, and clearing — none of which relate to how songs are actually searched or filtered.

- **Debouncing is a UI concern**, not a service concern.  
  The hook ensures that expensive operations are triggered only after the user pauses typing. This keeps the UI responsive and prevents unnecessary work.

- **Typing and focus states are presentation concerns**, not business logic.  
  These states allow components to show spinners, dropdowns, or highlight states without duplicating logic across multiple components.

### Why the hook does *not* perform the actual search
Filtering or matching songs is handled by `songSearchService`. This separation ensures:

- The hook remains small and predictable.  
- The search algorithm can evolve independently (e.g., fuzzy search, multi‑field matching).  
- Multiple components can reuse the same search logic without duplicating filtering code.  
- The UI layer never needs to understand how search works internally.

This clean separation keeps the architecture modular:

- **Hook** → manages UI state and timing  
- **Service** → performs domain‑specific search logic  
- **Components** → render results and call hook methods  

---

## 3. Where `useSearch` is used and how

`useSearch` is used inside the **CreateSongListForm**, where users search for songs to add to a new list. The hook manages the entire search‑input experience for that form:

- The form binds its search input field to `searchValue` and updates it through `setSearchValue()`, ensuring the UI always reflects what the user is typing.
- As the user types, the hook produces a `debouncedValue`, which the form uses to trigger a lookup through `songSearchService`. This prevents the form from running a search on every keystroke and keeps the UI responsive.
- `isTyping` allows the form to show a loading indicator or subtle “Searching…” feedback while the user is entering text.
- `isFocused` helps the form show or hide autocomplete suggestions or a dropdown of matching songs.
- `clearSearch()` is used for the “X” button in the search bar, letting users quickly reset their search and start over.

By using `useSearch`, the CreateSongListForm stays focused on rendering the UI and handling user actions, while the hook manages all search‑related state and timing. This keeps the form clean, predictable, and consistent with search behavior across the rest of the application.

---
