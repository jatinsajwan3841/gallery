import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const GalleryDetails = ({
    tab,
    selectedGallery,
    showGalleryDetails,
    handleGalleryDetails,
}) => {
    return (
        <div>
            <Dialog
                open={showGalleryDetails}
                onClose={handleGalleryDetails}
                scroll="paper"
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                fullWidth={true}
                maxWidth="sm"
            >
                <DialogTitle id="scroll-dialog-title">
                    Gallery Details
                </DialogTitle>
                <DialogContent dividers={true}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        tabIndex={-1}
                    >
                        {selectedGallery &&
                            selectedGallery.map((val, ind) => (
                                <div key={ind}>
                                    {tab === "Image" ? (
                                        <img
                                            src={val.src.medium}
                                            width="149"
                                            height="149"
                                            loading="lazy"
                                            style={{
                                                objectFit: "cover",
                                            }}
                                        />
                                    ) : (
                                        <video
                                            width="149"
                                            height="149"
                                            controls
                                            style={{
                                                objectFit: "cover",
                                            }}
                                        >
                                            <source
                                                src={val.video_files[1].link}
                                                type="video/mp4"
                                            />
                                        </video>
                                    )}
                                </div>
                            ))}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleGalleryDetails}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default GalleryDetails;
