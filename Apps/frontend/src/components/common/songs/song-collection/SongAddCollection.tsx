import "./song-addcollection.css"
import { useState } from "react"
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import type { FullSonglist } from "../../../../../../../shared/types/songListTypes";
import SongListsDisplay from "../../song-list-display/SongListsDisplay";

export function AddCollection({
    lists,
    songId,
    onToggleSongInList
}: {
    lists: FullSonglist[];
    songId: number;
    onToggleSongInList: (listId: string, songId: number) => void;
}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: "absolute" as const,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "#372a5f;",
        color: "#ffffff",
        border: "none",
        borderRadius: "12px",
        boxShadow: 24,
        p: 4,
    };

    return (
        <section className="collection">
            <button onClick={handleOpen}>
                Add to Collection
            </button>

            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <Typography variant="h6">
                        Select a Collection
                    </Typography>

                    <div style={{ marginTop: "16px" }}>
                        {lists.length === 0 ? (
                            <p>No collections found</p>
                        ) : (
                            <SongListsDisplay
                                lists={lists}
                                songId={songId}
                                onToggle={(listId, songId) => {
                                    onToggleSongInList(listId, songId);
                                }}
                            />
                        )}
                    </div>
                </Box>
            </Modal>
        </section>
    );
}