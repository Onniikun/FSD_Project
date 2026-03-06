# Architecture Layout Document
by Phoenixx Ordoñez

Resource: [Basic writing and formatting syntax - GitHub Docs. (n.d.)](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

## Hooks - `useSearch`, `useMood`

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

## 1. What does `useMood` do?

`useMood` is a global state hook that exposes the current mood for the entire application and keeps all subscribed components in sync. It connects React components to an external mood store (`moodService`) and ensures that any mood change instantly updates every part of the UI that depends on it.

The hook is responsible for:

- **Subscribing components to mood changes**  
  Using `useSyncExternalStore`, the hook registers each component that calls `useMood()`. When the mood changes, all subscribers are notified and re-render automatically.

- **Reading the current mood value**  
  The hook retrieves the latest mood from `moodService.getMood()`, ensuring every component always displays the correct, up‑to‑date mood.

- **Providing a `setMood()` function**  
  When a component calls `setMood(newMood)`, the hook updates the mood inside the external store and triggers an update across all subscribed components.

- **Exposing the list of available moods**  
  The hook returns `moodService.getMoods()`, allowing components to render mood options (e.g., buttons, dropdowns, selectors).

Together, these responsibilities make `useMood` a lightweight, efficient global state solution for managing mood across the entire app without needing React Context or a third‑party state library.

---

## 2. How the logic was chosen and how it separates concerns

The design of `useMood` follows React’s recommended pattern for managing shared, app‑wide state while keeping UI behavior separate from data storage and update mechanisms.

### Why the logic belongs in a hook
- **Mood selection is a global UI state concern**, not domain logic.  
  The hook exposes the current mood and allows components to update it, but it does not decide how moods are used or interpreted elsewhere in the app.

- **Subscription and reactivity are UI concerns**, not service concerns.  
  `useSyncExternalStore` ensures that any component using `useMood()` automatically re-renders when the mood changes, without each component needing to manage its own listeners.

- **The hook centralizes how components read and update mood**, preventing duplication.  
  Components don’t need to know how the mood is stored or how updates are broadcast — they simply call `useMood()`.

### Why the hook does *not* store the mood itself
All mood values are stored inside `moodService`. This separation ensures:

- The hook stays small and focused on connecting React to the external store.  
- The underlying storage mechanism (e.g., memory, localStorage, API) can change without affecting components.  
- Multiple components can read and update the same mood value consistently.  
- The UI layer never needs to manage global state manually.

This clean separation keeps the architecture modular:

- **Hook** → subscribes components and exposes mood values  
- **Service** → stores and updates the actual mood data  
- **Components** → render UI based on the current mood and call `setMood()` when needed

---

## 3. Where `useMood` is used and how

`useMood` is used inside the **MoodSelector** component, where the user can view their current mood and optionally change it. The hook provides the component with everything it needs to read and update the global mood state:

- The component reads the current mood through `mood`, allowing it to display a personalized message such as “You're feeling happy at the moment.”
- It retrieves the full list of available moods through `moods`, which the component uses to render a row of mood‑selection buttons when `showButtons` is enabled.
- When the user clicks a mood button, the component calls `setMood(m)`, which updates the global mood in the external store and triggers a re-render in every component that uses `useMood()`.
- The component uses the current `mood` value to visually highlight the active mood button, keeping the UI in sync with the global state.

By using `useMood`, the MoodSelector stays focused on rendering the UI and handling user interactions, while the hook manages subscription, global state updates, and synchronization across the entire application.

---

## Services - `songSearchService`, `moodService`

## 1. What does `songSearchService` do?

`songSearchService` is responsible for all **business‑level search logic** related to songs. It receives a raw search string and returns a filtered, ranked list of matching songs. Its responsibilities include:

- **Normalizing search queries**  
  Converts the user’s input into a consistent format (lowercase, trimmed) so matching is predictable.

- **Applying fuzzy matching**  
  Matches songs based on partial substring matches across multiple fields such as title, artist, and genre.

- **Ranking results**  
  Prioritizes songs whose titles begin with the search term, ensuring more relevant results appear first.

- **Providing autocomplete suggestions**  
  Returns a small set of top matches that begin with the search term, used for dropdown suggestions.

This service defines *how search works* across the application.

---

## 2. How the logic was chosen and how it separates concerns

The logic in `songSearchService` is intentionally placed in the **service layer** to maintain a clean separation between UI behavior, business rules, and data access.

### Why this logic belongs in a service

- **Search rules are business logic**, not UI logic.  
  The service determines how songs are matched, ranked, and suggested. This keeps the UI simple and declarative.
  By keeping search logic in the service, multiple components can reuse the same behavior without duplication.

### Why the specific logic choices were made

- **Normalization** ensures consistent matching regardless of user capitalization or spacing.  
- **Fuzzy substring matching** supports partial-input searches, returning relevant results even when the user types only part of a song title.
- **Ranking by prefix match** improves relevance by placing the most likely intended results at the top.  
- **Autocomplete suggestions** support UI components that show dropdown hints as the user types.

This design keeps the architecture modular:

- **UI** → handles input and rendering  
- **useSearch hook** → manages UI state and debouncing  
- **songSearchService** → performs all search logic  
- **SongItemRepo** → provides raw song data  

---

## 3. Where `songSearchService` is used and how

`songSearchService` is used inside the **CreateSongListForm** and **SongListModal** when a user is creating or editing a list and wants to search for songs to add. The service handles the entire search‑processing step, turning the user’s raw input into a filtered, ranked list of matching songs:

- The modal stores the user’s raw text in `searchValue` as they type into the “Add Song” input.
- A `useEffect` watches for changes to `searchValue` and calls `SearchService.searchSongs(searchValue)` whenever the user enters text.
- The service normalizes the input, performs fuzzy substring matching, and ranks the results before returning them.
- The modal stores these results in `searchResults`, which are displayed in a dropdown beneath the search bar.
- When the user clicks a result, the selected song is added to the list, and the search input resets.

By using `songSearchService`, the form and modal stays focused on rendering the UI and managing user interactions, while the service handles all matching, filtering, and ranking. This keeps the search experience consistent across the application and ensures the form and modal never needs to implement its own search logic.

---

## 1. What does `moodService` do?

`moodService` is the domain‑level interface for managing mood data across the application. It acts as the single source of truth for storing, retrieving, and exposing mood‑related information, while delegating persistence to the underlying `moodRepository`.

The service is responsible for:

- **Retrieving the current mood**  
  `getMood()` returns the mood value stored in the repository, allowing any part of the app to read the user’s current emotional state.

- **Updating the current mood**  
  `setMood(mood)` writes a new mood value to the repository. This keeps mood storage consistent and ensures that updates flow through a single, predictable entry point.

- **Exposing the list of available moods**  
  `getMoods()` returns the predefined set of moods (`["Chill", "Hyped", "Focused", ...]`) used throughout the UI for selection and display.

Together, these responsibilities make `moodService` the central access point for all mood‑related data, keeping storage concerns inside the repository and providing a clean, stable API for the rest of the application.

---

## 2. How the logic was chosen and how it separates concerns

The design of `moodService` follows a clear separation between domain logic and data‑persistence logic, ensuring that mood behavior is centralized while storage remains flexible and replaceable.

### Why the logic belongs in a service
- **Mood management is domain logic**, not UI logic.  
  The service defines how the app thinks about moods — retrieving the current mood, updating it, and exposing the list of valid moods — without involving any UI concerns.

- **The service provides a stable API for the rest of the app.**  
  Components and hooks don’t need to know where the mood is stored or how it’s persisted. They simply call `getMood()`, `setMood()`, or `getMoods()`.

- **The service centralizes the mood list.**  
  By keeping the list of moods in one place, the app avoids duplication and ensures consistency across all components that display or select moods.

### Why the service does *not* store the mood itself
All persistence is delegated to `moodRepository`. This separation ensures:

- The service remains focused on domain rules, not storage mechanics.  
- The repository can change (e.g., switch to localStorage, a backend API, or in‑memory storage) without affecting the rest of the app.  
- The UI layer never interacts directly with storage, keeping components clean and predictable.  
- The global mood state remains consistent no matter where it is accessed.

This clean separation keeps the architecture modular:

- **Service** → defines domain‑level mood behavior  
- **Repository** → handles persistence and retrieval  
- **Hooks & Components** → read and update mood through the service, without knowing how it’s stored

---

## 3. Where `moodService` is used and how

`moodService` is used throughout the application as the central access point for reading and updating the user’s current mood. It provides the underlying data that powers both the global mood state and the UI components that depend on it.

- The `useMood` hook calls `moodService.getMood()` to retrieve the current mood value from the repository. This allows any component using the hook to stay in sync with the global mood.
- When a user selects a new mood (e.g., in the MoodSelector), the hook calls `moodService.setMood(newMood)`, which updates the stored value and triggers a re-render across all subscribed components.
- Components that need to display mood options — such as MoodSelector — use `moodService.getMoods()` to retrieve the full list of available moods, ensuring consistent options across the app.
- Because the service sits between the UI and the repository, components never interact with storage directly. They rely on the service’s stable API to read and update mood data.

By using `moodService`, the application keeps mood-related logic centralized and consistent, while allowing hooks and components to remain focused on UI behavior rather than data persistence.

---

## Repositories - `songListsRepository`, `moodRepository`

## 1. What does `songListsRepository` do?

The `songListsRepository` is the **data‑access layer** for all song‑list–related operations. It interacts directly with the mock database (`songListData`) and ensures that the rest of the application receives **fully hydrated**, UI‑ready `SongList` objects.

Its responsibilities include:

- **Hydrating SongListRecords into full SongLists**  
  A `SongListRecord` stores only `songIds`. The repository converts these IDs into full `Song` objects using `resolveSongs()`. Missing or deleted songs are ignored to prevent UI errors.

- **Retrieving all song lists**  
  `fetchSongLists()` returns every list in the mock database, fully hydrated.

- **Retrieving a single list by ID**  
  `getSongListById()` finds a list, validates its existence, and hydrates it.

- **Creating new song lists**  
  `createSongList()` generates a unique ID, stores the new record, and returns a hydrated version.

- **Updating existing song lists**  
  `updateSongList()` replaces the stored record and returns the updated hydrated list.

- **Deleting song lists**  
  `deleteSongList()` removes a record and returns the hydrated version of what was deleted.

This repository ensures that **all higher layers receive complete, consistent, and safe data structures**.

--- 

## 2. How the logic was chosen and how it separates concerns

The repository is intentionally designed to isolate **data storage and retrieval** from the rest of the application. This separation ensures that UI components, hooks, and services never need to know how song lists are stored internally.

### Why this logic belongs in the repository

- **Hydration is a data‑layer responsibility**  
  Converting `songIds` into full `Song` objects is part of preparing data for consumption. This prevents UI components or services from needing to manually resolve songs.

- **Repositories abstract storage details**  
  Whether the data comes from mock arrays, local storage, or a real backend later, the rest of the app interacts with a stable API.

- **Error handling belongs at the data boundary**  
  Functions like `getSongListById()` and `updateSongList()` throw errors when records are missing. This ensures invalid operations are caught early.

- **Repositories should not contain business logic**  
  The repository does not validate list names, enforce visibility rules, or apply domain‑specific constraints. Those belong in the service layer.

### Why the specific implementation choices were made

- **Hydration ensures UI safety**  
  Missing songs are silently ignored so the UI never crashes due to stale IDs.

- **Returning hydrated objects keeps the UI simple**  
  Components always receive complete `SongList` objects with full `songs` arrays.

- **Using `crypto.randomUUID()` ensures unique IDs**  
  This avoids collisions and keeps list creation predictable.

This design keeps the architecture clean:

- **Repository** → data access and hydration  
- **Service layer** → business rules  
- **Hooks** → UI state and orchestration  
- **Components** → rendering

--- 

## 3. Where `songListsRepository` is used and how

`songListsRepository` is used inside the **SongListsPage**, where the application loads, creates, updates, and deletes song lists. The repository provides all data‑access operations for this page:

- When the page first loads, `fetchSongLists()` is called inside a `useEffect` to retrieve all stored lists. The returned, fully hydrated lists are placed into local state and displayed on the page.
- When the user creates a new list through `CreateSongListForm`, the page calls `createSongList(data)`. The repository stores the new record, hydrates it, and returns the complete `SongList`, which is then appended to the page’s `lists` state.
- When the user deletes a list from the modal, `deleteSongList(id)` is called. After the repository removes the record, the page filters it out of local state and clears the selected modal.
- When the user edits a list, the page converts the updated `SongList` into a `SongListRecord` (IDs only) and calls `updateSongList(updatedRecord)`. The repository saves the record, hydrates it, and returns the updated list, which replaces the old one in state.

By using `songListsRepository`, the page stays focused on UI flow and user interactions, while the repository handles all storage, retrieval, and hydration of song lists. This keeps data access consistent and ensures the UI always receives complete, ready‑to‑render `SongList` objects.

---

## 1. What does `moodRepository` do?

`moodRepository` is the lowest‑level data‑persistence layer responsible for storing and retrieving the current mood value. It acts as a simple in‑memory storage mechanism that the rest of the application can rely on through the service layer.

The repository is responsible for:

- **Storing the current mood value**  
  It maintains an internal variable (`currentMood`) that holds the user’s selected mood for the duration of the session.

- **Retrieving the stored mood**  
  `getMood()` returns the current value of `currentMood`, allowing the service layer to expose it to hooks and components.

- **Updating the stored mood**  
  `setMood(newMood)` replaces the existing value with a new one, enabling the service layer to update the global mood state.

Together, these responsibilities make `moodRepository` a minimal, focused persistence layer. It does not contain domain logic or UI behavior — it simply stores data, allowing `moodService` and `useMood` to build higher‑level behavior on top of it.

---

## 2. How the logic was chosen and how it separates concerns

The design of `moodRepository` is intentionally minimal, focused solely on data persistence, and completely unaware of domain rules or UI behavior. This keeps the architecture clean, testable, and easy to evolve.

### Why the logic belongs in a repository
- **Storing data is a persistence concern**, not a domain or UI concern.  
  The repository’s only job is to hold the current mood value in memory and return it when asked.

- **The repository provides a stable storage API.**  
  Even though the implementation is simple (an in‑memory variable), the interface (`getMood`, `setMood`) remains consistent. This allows the rest of the app to depend on the API, not the storage mechanism.

- **The repository can be swapped out without affecting the app.**  
  Because all storage logic is isolated here, the implementation could later be replaced with:
  - `localStorage`
  - session storage
  - a backend API
  - a database  
  …without changing any components, hooks, or services.

### Why the repository does *not* contain domain logic
Domain logic belongs in `moodService`, not in the repository. This separation ensures:

- The repository stays extremely small and predictable.  
- The service layer controls how moods are interpreted and exposed.  
- UI components never interact with raw storage directly.  
- The architecture remains layered and maintainable.

This clean separation keeps the system modular:

- **Repository** → stores and retrieves raw data  
- **Service** → defines domain behavior and exposes mood options  
- **Hooks & Components** → consume mood data through the service, never touching storage directly

---

## 3. Where `moodRepository` is used and how

`moodRepository` is used exclusively by the `moodService` as the low‑level persistence layer for storing and retrieving the current mood. It never interacts with UI components or hooks directly; instead, it provides the foundational data access that higher layers depend on.

- The `moodService` calls `moodRepository.getMood()` whenever a component or hook needs to read the current mood value. This ensures that all mood reads come from a single, consistent source.
- When the user selects a new mood, `moodService.setMood(newMood)` delegates the update to `moodRepository.setMood(newMood)`, which replaces the stored value in memory.
- Because the repository is in-memory and synchronous, it provides fast, lightweight storage that supports the global mood state managed by `useMood`.
- The repository’s simple API allows the service layer to remain independant, meaning the underlying implementation could later be replaced (e.g., localStorage or a backend API) without changing any UI code.

By using `moodRepository` as the dedicated persistence layer, the application keeps storage concerns isolated and ensures that all mood data flows through a clean, well‑defined architectural boundary.