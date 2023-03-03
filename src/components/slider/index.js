import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = ({
    tab,
    media,
    showMedia,
    handleShowMedia,
    handleMediaDelete,
}) => (
    <Dialog
        open={showMedia}
        onClose={() => {}}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        fullWidth={true}
        maxWidth="md"
    >
        <DialogContent sx={{ padding: "0px", paddingBottom: "40px" }}>
            <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
                <Button
                    sx={{
                        position: "absolute",
                        right: "0px",
                        top: "0px",
                        zIndex: "10000",
                        color: "white",
                    }}
                    onClick={handleShowMedia}
                >
                    <CloseIcon />
                </Button>
                <AutoplaySlider
                    play={tab === "Image"}
                    cancelOnInteraction={true} // should stop playing on user interaction
                    interval={6000}
                >
                    {media &&
                        media.map((val, ind) => (
                            <div
                                key={ind}
                                data-src={
                                    tab === "Image"
                                        ? val.src.medium
                                        : val.video_files[1].link
                                }
                            >
                                <Button
                                    sx={{
                                        position: "absolute",
                                        bottom: "0px",
                                        right: "0px",
                                        zIndex: "10000",
                                        color: "red",
                                    }}
                                    onClick={(e) => handleMediaDelete(e, ind)}
                                >
                                    <DeleteIcon />
                                </Button>
                            </div>
                        ))}
                </AutoplaySlider>
            </DialogContentText>
        </DialogContent>
    </Dialog>
);

export default Slider;
