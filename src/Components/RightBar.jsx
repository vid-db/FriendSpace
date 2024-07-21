import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const RightBar = () => {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            <Box position={"fixed"} width={300}>
                <Typography variant='h6' fontWeight={100}>
                    Online Friends
                </Typography>
                <AvatarGroup max={7}>
                    <Avatar alt="Kirsten Ecoy" src="Kirsten.jpg" />
                    <Avatar alt="キルスティン" src="snowball.jpg" />
                    <Avatar alt="D n D" src="bokjoo.jpg" />
                    <Avatar alt="Agnes Walker" src="cat.jpg" />
                    <Avatar alt="Trevor Henderson" src="nametag.jpg" />
                    <Avatar alt="Cindy Baker" src="purple.jpg" />
                    <Avatar alt="Secret" src="#" />
                    <Avatar alt="Secret" src="#" />
                </AvatarGroup>
                <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
                    Latest Photos
                </Typography>
                <ImageList cols={3} rowHeight={100} gap={5}>
                    <ImageListItem >
                        <img src='photos1.jpg' alt='Photos'
                            style={{
                                objectFit: 'cover',
                                width: '100%',
                                height: '100%'
                            }} />
                    </ImageListItem>
                    <ImageListItem>
                        <img src='photos2.jpg' alt='Photos'
                            style={{
                                objectFit: 'cover',
                                width: '100%',
                                height: '100%'
                            }} />
                    </ImageListItem>
                    <ImageListItem>
                        <img src='photos3.jpg' alt='Photos' 
                            style={{
                                objectFit: 'cover',
                                width: '100%',
                                height: '100%'
                            }} />
                    </ImageListItem>
                </ImageList>
                <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
                    Latest Conversations
                </Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Kirsten Ecoy" src="Kirsten.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Hello! How's your day going??"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Kirsten Ecoy
                                    </Typography>
                                    {" Just tackling my never-ending to-do list.…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="bokjoo.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Good Morning!"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        D n D
                                    </Typography>
                                    {" — Good morning! Is it morning already? Feels like I just closed my eyes.…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="snowball.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Let's watch movie"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        キルスティン
                                    </Typography>
                                    {' Awesome! Ill start looking for some good movies to watch. Any preferences?…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>

            </Box>
        </Box >
    )
}
export default RightBar