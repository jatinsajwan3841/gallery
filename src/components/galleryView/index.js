import React from "react";
import GalleryDetails from "../galleryDetails";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import axios from "axios";
import "./index.css";

const GalleryView = ({ tab }) => {
    const [showGalleryDetails, setShowGalleryDetails] = React.useState(false);
    const [selectedGallery, setSelectedGallery] = React.useState([]);
    const [gallery, setGallery] = React.useState([]);

    const handleGalleryDetails = (e, ind) => {
        setShowGalleryDetails((prev) => !prev);
        if (ind !== undefined) {
            setSelectedGallery(gallery[ind]);
        }
    };

    const getImages = async () => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: process.env.REACT_APP_APIKey,
            },
        };
        const images = await axios.get(
            "https://api.pexels.com/v1/curated?per_page=30",
            config
        );
        console.log(images);
        const data = [];
        data.push(images.data.photos.slice(0, 10));
        data.push(images.data.photos.slice(10, 20));
        data.push(images.data.photos.slice(20, 30));
        setGallery(data);
    };

    const getVidoes = async () => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: process.env.REACT_APP_APIKey,
            },
        };
        const videos = await axios.get(
            "https://api.pexels.com/videos/popular?per_page=30",
            config
        );
        console.log(videos);
        const data = [];
        data.push(videos.data.videos.slice(0, 10));
        data.push(videos.data.videos.slice(10, 20));
        data.push(videos.data.videos.slice(20, 30));
        setGallery(data);
    };
    React.useEffect(() => {
        if (tab === "Image") {
            getImages();
        } else if (tab === "Video") {
            getVidoes();
        }
    }, []);
    return (
        <Grid sx={{ flexGrow: 1, mt: "40px" }} container spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="left" spacing={12}>
                    {gallery.length > 0 ? (
                        gallery.map((value, ind) => (
                            <Grid key={ind} item>
                                <Paper
                                    sx={{
                                        height: 300,
                                        width: 300,
                                    }}
                                >
                                    <Grid
                                        container
                                        direction="row"
                                        className="gallery-holder"
                                    >
                                        {value &&
                                            value.map((val, ind) => {
                                                return (
                                                    ind < 4 && (
                                                        <div
                                                            className="gallery-images"
                                                            key={ind}
                                                        >
                                                            {tab === "Image" ? (
                                                                <img
                                                                    src={
                                                                        val.src
                                                                            .medium
                                                                    }
                                                                    width="149"
                                                                    height="149"
                                                                    loading="lazy"
                                                                    style={{
                                                                        objectFit:
                                                                            "cover",
                                                                    }}
                                                                />
                                                            ) : (
                                                                <video
                                                                    width="149"
                                                                    height="149"
                                                                    controls
                                                                    style={{
                                                                        objectFit:
                                                                            "cover",
                                                                    }}
                                                                >
                                                                    <source
                                                                        src={
                                                                            val
                                                                                .video_files[1]
                                                                                .link
                                                                        }
                                                                        type="video/mp4"
                                                                    />
                                                                </video>
                                                            )}
                                                            {value.length > 4 &&
                                                                ind > 2 && (
                                                                    <span className="gallery-number">
                                                                        +
                                                                        {value.length -
                                                                            4}
                                                                    </span>
                                                                )}
                                                        </div>
                                                    )
                                                );
                                            })}
                                        <Stack
                                            direction="row"
                                            className="gallery-options"
                                        >
                                            <Paper>
                                                <MenuList>
                                                    <MenuItem>Edit</MenuItem>
                                                    <MenuItem>Delete</MenuItem>
                                                    <MenuItem
                                                        onClick={(e) =>
                                                            handleGalleryDetails(
                                                                e,
                                                                ind
                                                            )
                                                        }
                                                    >
                                                        Details
                                                    </MenuItem>
                                                </MenuList>
                                            </Paper>
                                        </Stack>
                                    </Grid>
                                </Paper>
                            </Grid>
                        ))
                    ) : (
                        <Grid item>
                            <span className="empty">No {tab} found</span>
                        </Grid>
                    )}
                </Grid>
            </Grid>
            <GalleryDetails
                tab={tab}
                selectedGallery={selectedGallery}
                showGalleryDetails={showGalleryDetails}
                handleGalleryDetails={handleGalleryDetails}
            />
        </Grid>
    );
};

export default GalleryView;
