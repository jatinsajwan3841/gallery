import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import axios from "axios";
import "./index.css";

const GalleryView = ({ tab }) => {
    const [gallery, setGallery] = React.useState([]);

    const getImages = async () => {
        const images = await axios.get("https://picsum.photos/v2/list");
        const data = [];
        data.push(images.data.slice(0, 10));
        data.push(images.data.slice(10, 20));
        data.push(images.data.slice(20, 30));
        setGallery(data);
    };
    React.useEffect(() => {
        if (tab === "Image") {
            getImages();
        } else if (tab === "Video") {
            getImages();
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
                                                            <img
                                                                src={
                                                                    val.download_url
                                                                }
                                                                width="149"
                                                                height="149"
                                                                loading="lazy"
                                                            />
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
                                                    <MenuItem>Details</MenuItem>
                                                </MenuList>
                                            </Paper>
                                        </Stack>
                                    </Grid>
                                </Paper>
                            </Grid>
                        ))
                    ) : (
                        <div className="empty">No {tab} found</div>
                    )}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default GalleryView;
