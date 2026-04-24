import { NavLink, useNavigate } from "react-router";
import "./Nav.css";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
    UserButton,
} from "@clerk/clerk-react";

import { useState, useEffect } from "react";
import { useSearch } from "../../../../hooks/useSearch";
import { SearchService } from "../../../../services/songSearchService";
import type { SongItemSchema } from "../../../../../../../shared/types/SongItemSchema";

export function Nav() {
    const navigate = useNavigate();

    // --- SEARCH HOOK (same behavior as CreateSongListForm) ---
    const {
        searchValue,
        setSearchValue,
        debouncedValue,
        isFocused,
        setIsFocused,
        clearSearch,
    } = useSearch({ debounceMilliseconds: 300 });

    const [searchResults, setSearchResults] = useState<SongItemSchema[]>([]);

    // Fetch results when debounced value changes
    useEffect(() => {
        async function fetchResults() {
            if (!debouncedValue.trim()) {
                setSearchResults([]);
                return;
            }
            const results = await SearchService.searchSongs(debouncedValue);
            setSearchResults(results);
        }
        fetchResults();
    }, [debouncedValue]);

    // Navigate to song page
    const goToSong = (songId: number) => {
        clearSearch();
        setSearchResults([]);
        navigate(`/songs/${songId}`);
    };

    return (
        <nav>
            <div className="page-links">
                <NavLink to="/" end>
                    HOME
                </NavLink>
                <NavLink to="/songs" end>
                    SONGS
                </NavLink>
                <NavLink to="/songlists" end>
                    LISTS
                </NavLink>
                <NavLink to="/reviews" end>
                    REVIEWS
                </NavLink>
            </div>

            {/* AUTH BUTTONS */}
            <div className="user-management-links">
                <SignedOut>
                    <span>
                        <SignInButton mode="modal">
                            <button className="nav-btn">SIGN IN</button>
                        </SignInButton>
                    </span>
                    <span>
                        <SignUpButton mode="modal">
                            <button className="nav-btn">CREATE AN ACCOUNT</button>
                        </SignUpButton>
                    </span>
                </SignedOut>

                <SignedIn>
                    <UserButton/>
                </SignedIn>
            </div>

            {/* SEARCH BAR */}
            <section className="nav-search">
                <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                    placeholder="Search songs..."
                    className="nav-search-input"
                />

                {isFocused && searchResults.length > 0 && (
                    <ul className="nav-search-dropdown">
                        {searchResults.map((song) => (
                            <li
                                key={song.id}
                                className="nav-search-item"
                                onClick={() => goToSong(song.id)}
                            >
                                <span className="song-title">{song.title}</span>
                                <span className="song-artists">
                                    {song.artist.join(", ")}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </nav>
    );
}