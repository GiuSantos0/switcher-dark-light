import React, { useState, useEffect} from 'react';

import GlobalStyles from './styles';
import { ThemeProvider } from 'styled-components';

import { Toolbar, IconButton, AppBar } from '@material-ui/core';
import Brightness7Icon from '@material-ui/icons/Brightness7';

import Routes from './routes';

function App() {
  const [theme, setTheme] = useState({ mode: 'light'})
  
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <GlobalStyles/>
          <AppBar position="static" color='transparent'>
            <Toolbar>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                    onClick= { e => 
                      setTheme(theme.mode === 'dark'
                        ? { mode: 'light' }
                        : { mode: 'dark' }
                      )
                    }
                >
                    <Brightness7Icon />
                </IconButton>
            </Toolbar>
          </AppBar>
          <Routes/>
      </div>
    </ThemeProvider>
  );
}


export default App;
