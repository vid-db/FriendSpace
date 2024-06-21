import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Skeleton, Stack, Typography } from '@mui/material';

import React, { useState } from 'react';

const Feed = () => {

    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, [3000]);

    return (
        <Box flex={4} p={2}>
            {loading ? (
                <Stack spacing={1}>
                    <Skeleton variant="text" height={120} />
                    <Skeleton variant="text" height={20} />
                    <Skeleton variant="text" height={20} />
                    <Skeleton variant="rectangular" height={550} />
                </Stack>
            ) : (
                <>
                    <Card variant={"outlined"} sx={{ m: 5 }} >
                        <CardHeader
                            avatar={
                                <Avatar sx={{ width: 30, height: 30 }} src='profile.jpg' aria-label="recipe" />
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="David Bautista"
                            subheader="September 14, 2023"
                        />
                        <CardMedia
                            component="img"
                            height="20%"
                            image="post.jpg"
                            alt="Sunset"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                As the day gracefully bows out, it gifts us with hues of warmth and tranquility, casting a spellbinding spectacle upon the horizon.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <Checkbox
                                    icon={<FavoriteBorderIcon />}
                                    checkedIcon={<FavoriteIcon sx={{ color: "red" }} />}
                                />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </CardActions>
                    </Card>

                    <Card variant={"outlined"} sx={{ mb: 5, mx: 5 }}  >
                        <CardHeader
                            avatar={
                                <Avatar sx={{ width: 30, height: 30 }} src='profile.jpg' aria-label="Daviid" />


                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="David Bautista"
                            subheader="September 16, 2023"
                        />
                        <CardMedia
                            component="img"
                            height="20%"
                            image="post1.jpg"
                            alt="Vintage Car"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                we journey through time, tracing the lines of history with each turn of the road. The purr of the engine, the gleam of polished chrome, and the scent of nostalgia in the air - it's not just a ride, it's a voyage through a bygone era.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <Checkbox
                                    icon={<FavoriteBorderIcon />}
                                    checkedIcon={<FavoriteIcon sx={{ color: "red" }} />}
                                />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </>
            )}

        </Box>
    )
}

export default Feed