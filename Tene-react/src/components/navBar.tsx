import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

const drawerWidth = 240;
const navItems = [
  { name: 'צור קשר', path: '/' },
  { name: 'אודות', path: '/about' },
  { name: 'שירותים', path: '/' },
];

const buttonStyles = () => ({
  color: 'black',
  fontWeight: 'bold',
  fontSize: '17px',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'transparent',
    color: ' #abd5d1',
  },
});

const NavBar = (props: any) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        ט.נ.א
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton component={Link} to={item.path} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={(theme) => ({
            width: '100%',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: theme.zIndex.drawer + 1,
            backgroundColor: '#ffffff',
            borderRadius: 0,
          })}
        >
          <Toolbar sx={{ padding: 0, minHeight: '80px !important' }}>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' }, color: 'black' }}
            >
              <MenuIcon />
            </IconButton>

            {/* Centered buttons */}
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                justifyContent: 'center',
                alignItems: 'center',
                gap: 4,
                flexGrow: 1,
              }}
            >
              {navItems.map((item) => (
                <Button key={item.name} component={Link} to={item.path} sx={buttonStyles()}>
                  {item.name}
                </Button>
              ))}
            </Box>

            <Box
              sx={{
                position: 'absolute',
                left: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                alignItems: 'center',
                        cursor: 'pointer',  // so user knows it’s clickable
              }}
                    onClick={() => navigate('/')}  // navigate to homepage

            >
              <img src="/logo.jpg" style={{ height: '60px' }} alt="logo" />
            </Box>
          </Toolbar>
        </AppBar>

        {/* Drawer for mobile */}
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>

        {/* Main content */}
        <Box component="main" sx={{ p: 3, width: '100%', pt: '0' }}>
          <Toolbar />
        </Box>
      </Box>

    </>
  );
};

export default NavBar;
