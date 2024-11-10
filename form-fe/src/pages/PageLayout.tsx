import { Box, Container, Typography, useMediaQuery } from '@mui/material'
import { Outlet } from 'react-router-dom'

const PageLayout = () => {

    const time = new Date();

    const isMobile = useMediaQuery((theme:any) => theme.breakpoints.down('sm'));

    return (
        <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh"
        >
            <Box component="header" py={1} maxHeight="12vh">
                <Container sx={{ maxHeight: '10vh' }}>
                    <Typography variant="h6" component="div" align="center">
                        <img src="/assets/Logo.png" alt="Logo" style={{
                            width: isMobile ? '150px' : '450px',
                            height: 'auto'
                        }}/>
                    </Typography>
                </Container>
            </Box>
            
            <Box component="main"
                flexGrow={1}  // Ensure main content takes available space
                py={2}
                bgcolor="background.default"
            >
                <Container>
                    <Outlet />
                </Container>
            </Box>
            
            <Box className="c-pagelayout-footer" component="footer" color="black" py={1}>
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