import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ReactMarkdown from 'react-markdown';
import githubLogo from '../data/GitHub-Mark-Light-32px.png';
import twitterLogo from '../data/Twitter-Social-Icon-Circle-Color.png'
import qiitaLogo from '../data/qiita-favicon.png'

import './MainPage.css';

const raw = require('raw.macro')

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

const aboutMe = raw('../data/aboutMe.md')

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <div className="MainPage">
      <header className="MainPage-header">
        <div className="header">
          <span className="title">NTakato</span>
          <a href="https://github.com/Ntakato"><img src={githubLogo} className="icon" alt="Logo" /></a>
          <a href="https://twitter.com/pifaq"><img src={twitterLogo} className="icon" alt="Logo" /></a>
          <a href="https://qiita.com/Ntakato"><img src={qiitaLogo} className="icon" alt="Logo" /></a>
        </div>
      </header>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          className="MainPage-tabs"
        >
          <Tab label="About" {...a11yProps(0)} />
          <Tab label="Works" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <ReactMarkdown className="MainPage-contents" children={aboutMe} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Comming soon
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
