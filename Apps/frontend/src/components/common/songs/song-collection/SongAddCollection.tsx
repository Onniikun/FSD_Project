import "./song-addcollection.css"
import { useState } from "react"
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import type { SongList } from "../../../../../../../shared/types/songListTypes";
import SongItemListsDisplay from "../song-collection/song-list-display-helper/SongItemListDisplay";

/**
 * 
 * @returns 
 */
export function AddCollection({
    lists,
    onSelectList
}: {
    lists: SongList[]
    onSelectList: (list: SongList) => void;
}) {
    //Set states
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: "absolute" as const,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 550,
        maxHeight: "50vh",
        bgcolor: "#372a5f;",
        color: "#ffffff",
        border: "none",
        borderRadius: "12px",
        boxShadow: 24,
        p: 4,
        overflowY: "auto",
    };
    // Addcollection button -> lists of song lists modal(added)
    // Reference: https://mui.com/material-ui/react-modal/
    console.log("Song Lists", lists)
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
                    <SongItemListsDisplay
                        lists={lists}                 
                        onSelectList={(list) => {     
                        onSelectList(list);
                        handleClose();             
                        }}
                    />
                    )}
                </div>
                </Box>
            </Modal>
        </section>
    );
}