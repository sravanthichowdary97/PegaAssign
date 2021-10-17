import * as React from 'react';
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

//importing icons from mui package
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ExploreIcon from '@mui/icons-material/Explore';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PersonIcon from '@mui/icons-material/Person';


import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';


import PieChartDemo from './PieChartDemo'
import BarChartDemo from './BarChartDemo'
import './MiniDrawer.css'

const drawerWidth = 220;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    backgroundColor: 'black',
    color:"red",
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const searchBar = {
    borderRadius: "20px",
  }

  return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open} onMouseOver={handleDrawerOpen} onMouseLeave={handleDrawerClose} style={{ backgroundColor: "black" }}>
          <List>
          <ListItem button key={"Compass"}>
                <ListItemIcon>
                  <ExploreIcon />
                </ListItemIcon>
                <ListItemText primary={"Compass"} />
              </ListItem>
          </List>
          {open &&
            <>
              <Divider />
              <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "auto" , borderRadius:"20px", padding:"0px",margin:"10px" , border:"1px solid black"}}
              >
                <IconButton  sx={{ p: '10px' }} aria-label="search" style={searchBar}>
                  <SearchIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search..."
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Paper>
            </>
          }


          <Divider />
          <div className="sideNavContainer">
            <List>
              {!open && 
              <>
              <ListItem button key={"Search"}>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary={"Create"} />
              </ListItem>
              <Divider />
              </>
              }
              <ListItem button key={"Create"}>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary={"Create"} />
              </ListItem>
              <ListItem button key={"Home"}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
              <ListItem button key={"Explore"}>
                <ListItemIcon>
                  <TravelExploreIcon />
                </ListItemIcon>
                <ListItemText primary={"Explore Data"} />
              </ListItem>
              <ListItem button key={"Emoji"}>
                <ListItemIcon>
                  <EmojiEmotionsIcon />
                </ListItemIcon>
                <ListItemText primary={"Things I like"} />
              </ListItem>
            </List>


            <List>
              <Divider />
              <ListItem button key={"Recent"}>
                <ListItemIcon>
                  <WatchLaterIcon />
                </ListItemIcon>
                <ListItemText primary={"Recents"} />
              </ListItem>
              <ListItem button key={"Person"}>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={"Sravanthi Duppati"} />
              </ListItem>
            </List>
          </div>
        </Drawer>
       
        <Box component="main" className={"graphContainer"} >
          <div className={"graphItem"}>
          <PieChartDemo ></PieChartDemo>
          </div>
          <div className={"graphItem"}>
          <BarChartDemo ></BarChartDemo>
          </div>
        </Box>
      </Box>
  );
}
