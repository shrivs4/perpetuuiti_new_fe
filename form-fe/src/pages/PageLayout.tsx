import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

const PageLayout = () => {

    const time = new Date();

    return (
        <Box
            display='flex'
            flexDirection="column"
            minHeight='100vh'
        >
            <Box component='header' py={1} maxHeight={'12vh'}>
                <Container sx={{maxHeight:'10vh'}}>
                    <Typography variant='h6' component={'div'} align='center'>
                        <img src='/assets/Logo.png' />
                    </Typography>
                </Container>
            </Box>
            <Box component={'main'}
                flexGrow={'grow'}
                py={2}
                bgcolor={'background.default'}
                height={'80vh'}
            >
                <Container>
                    <Outlet />
                </Container>
            </Box>
            <Box component={'footer'} color={'black'} maxHeight={'10vh'}>
                <Container>
                    <Typography variant="body1" component="div" align="center">
                      © {time.getFullYear()}
                    </Typography>
                </Container>
            </Box>
        </Box>
    )
}

export default PageLayout