import "./song-addcollection.css"
import { useState } from "react"
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import type { SongList } from "../../../../../../../shared/types/songListTypes";
import { SongListCard } from "../../song-list-card/SongListCard";

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
        width: 400,
        bgcolor: "#372a5f;",
        color: "#ffffff",
        border: "none",
        borderRadius: "12px",
        boxShadow: 24,
        p: 4,
    };
    // Addcollection button -> lists of song lists modal(added)
    // Reference: https://mui.com/material-ui/react-modal/
    return(
        <>
        <section className="collection">
            <button onClick={handleOpen}>
                Add to Collection
            </button>
                <Modal  
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="div">
                    Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {lists.length === 0 ? (
                    <p>No collections found</p>
                    ) : (
                    lists.map(list => (
                        <SongListCard
                        key={list.id}
                        list={list}
                        onSelect={() => onSelectList(list)}
                        />
                    ))
                    )}
                    </Typography>
                </Box>
            </Modal>
        </section>
        </>
    )
}
