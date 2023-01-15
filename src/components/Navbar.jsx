import * as React from 'react';
import PropTypes from 'prop-types';
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
import Menu from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { Avatar } from '@mui/material';

const drawerWidth = 240;
const navItems = [
  {
    name:"Home",
    link:"/home"
  },
{
  name:"NewsLetters",
  link:"/newsletter"
},
{
  name:"Review",
  link:"/review"
},
{
  name:"Contact",
  link:"/contact"
},
{
  name:"Property Search",
  link:"/property-search"
}
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
     <Box sx={{display:"flex",justifyContent:'center',paddingY:1}}>

<Avatar   sx={{ width: 50, height: 50 }}  alt="Wilma Alvarez" src="https://res.cloudinary.com/cmacha2/image/upload/v1672856289/lKUzgbLnV1OTve4l6mFtkjXzRwkcmaToBGApkdiUdwc_ofwf2o.jpg" />
</Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
            <Link key={item.name} to={item.link} style={{color:'#000',textDecoration:"none",fontSize:20}}>
              <ListItemText primary={item.name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar color="inherit" component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <Menu />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>

          <Avatar   sx={{ width: 50, height: 50 }}  alt="Remy Sharp" src="https://res.cloudinary.com/cmacha2/image/upload/v1672856289/lKUzgbLnV1OTve4l6mFtkjXzRwkcmaToBGApkdiUdwc_ofwf2o.jpg" />
          </Box>
          {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography> */}
          <Box sx={{width:"50%",flexDirection:'row', justifyContent:'space-between',display: { xs: 'none', sm: 'flex' ,color: '#fff'} }}>
            {navItems.map((item) => (
              <Link key={item.name} to={item.link} style={{color:'#ca2c2c',textDecoration:"none",fontSize:20}}>
                {item.name}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
