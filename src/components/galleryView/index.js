import React from "react";
import GalleryDetails from "../galleryDetails";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import axios from "axios";
import "./index.css";
import Slider from "../slider";

const GalleryView = ({ tab, handleLoading }) => {
    const [showGalleryDetails, setShowGalleryDetails] = React.useState(false);
    const [showMedia, setShowMedia] = React.useState(false);
    const [selectedGallery, setSelectedGallery] = React.useState([]);
    const [gallery, setGallery] = React.useState([]);

    const selectedGalleryIndex = React.useRef();
    const handleShowMedia = (e, ind) => {
        setShowMedia((prev) => !prev);
        if (ind !== undefined) {
            setSelectedGallery(gallery[ind]);
            selectedGalleryIndex.current = ind;
        }
    };

    const handleMediaDelete = (e, ind) => {
        setSelectedGallery((prev) => {
            const temp = [...prev];
            temp.splice(ind, 1);
            setGallery((prev) => {
                const temp1 = [...prev];
                temp1.splice(selectedGalleryIndex.current, 1, temp);
                return temp1;
            });
            return temp;
        });
    };

    const handleGalleryDetails = (e, ind) => {
        setShowGalleryDetails((prev) => !prev);
        if (ind !== undefined) {
            setSelectedGallery(gallery[ind]);
            selectedGalleryIndex.current = ind;
        }
    };

    const handleGalleryDelete = (e, ind) => {
        setGallery((prev) => {
            const temp = [...prev];
            temp.splice(ind, 1);
            return temp;
        });
    };

    const getImages = async () => {
        handleLoading();
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
        const data = [];
        data.push(images.data.photos.slice(0, 10));
        data.push(images.data.photos.slice(10, 20));
        data.push(images.data.photos.slice(20, 30));
        handleLoading();
        setGallery(data);
    };

    const getVidoes = async () => {
        handleLoading();
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
        const data = [];
        data.push(videos.data.videos.slice(0, 10));
        data.push(videos.data.videos.slice(10, 20));
        data.push(videos.data.videos.slice(20, 30));
        handleLoading();
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
                                                    <MenuItem
                                                        onClick={(e) =>
                                                            handleGalleryDetails(
                                                                e,
                                                                ind
                                                            )
                                                        }
                                                    >
                                                        Edit
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={(e) =>
                                                            handleGalleryDelete(
                                                                e,
                                                                ind
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={(e) =>
                                                            handleShowMedia(
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
            <Slider
                tab={tab}
                media={selectedGallery}
                showMedia={showMedia}
                handleShowMedia={handleShowMedia}
                handleMediaDelete={handleMediaDelete}
            />
        </Grid>
    );
};

export default GalleryView;
