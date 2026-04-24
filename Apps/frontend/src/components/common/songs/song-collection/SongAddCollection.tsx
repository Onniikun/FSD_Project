import "./song-addcollection.css";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import type { FullSonglist } from "../../../../../../../shared/types/songListTypes";
import SongItemListsDisplay from "./song-list-display-helper/SongItemListDisplay";
import { useUser } from "@clerk/clerk-react";

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
  const [authWarning, setAuthWarning] = useState(false);
  const { isSignedIn } = useUser();


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

  return (
    <section className="collection">
      <button 
        onClick={() => {
          if (!isSignedIn) {
            setAuthWarning(true);
            return;
          }
          setOpen(true);
        }}
      >
        Add to Collection
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
            <Typography variant="h6" sx={{ mb: 2 }}>
                Select a Collection
            </Typography>

            {lists.length === 0 ? (
                <p>No collections found</p>
            ) : (
                <SongItemListsDisplay
                    lists={lists}
                    songId={songId}
                    onToggle={onToggleSongInList}
                />
            )}
        </Box>
      </Modal>
      <Modal open={authWarning} onClose={() => setAuthWarning(false)}>
        <Box sx={style}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Sign in Required
          </Typography>
          <p>Please sign in or create an account to add songs to a collection.</p>
          <button onClick={() => setAuthWarning(false)}>Close</button>
        </Box>
      </Modal>
    </section>
  );
}