import React from 'react'
import Header from './components/Header'
import Followers from './components/Followers'
import Overview from './components/Overview';
import Footer from './components/Footer';


function App() {

  const [theme, setTheme] = React.useState(true)

  function toggleTheme() { 
    setTheme(prevTheme => !prevTheme)
  }

  return (
    <div 
      className="App"
      style={{ backgroundColor: theme ? 'hsl(230, 17%, 14%)' : 'hsl(0, 0%, 100%)'}}
    >
      <Header 
          theme={theme} 
          toggleTheme={toggleTheme} 
          bg = { theme ? 'hsl(232, 19%, 15%)'  : 'hsl(225, 100%, 98%)'}
          color = { theme ? 'hsl(0, 0%, 100%)'  : ' hsl(230, 17%, 14%)'}
          transparent = { theme ? ''  : 'transparent'}
          btnBg = { theme ? ''  : 'hsl(0, 0%, 100%)'}
      />
      <Followers 
          bg={theme ? 'hsl(228, 28%, 20%)' : 'hsl(227, 47%, 96%)'} 
          color = { theme ? 'hsl(0, 0%, 100%)'  : ' hsl(230, 17%, 14%)'}
      />
      <Overview 
          bg={theme ? 'hsl(228, 28%, 20%)' : 'hsl(227, 47%, 96%)'} 
          color = { theme ? 'hsl(0, 0%, 100%)'  : ' hsl(230, 17%, 14%)'}
          titleColor = { theme ? '' : 'hsl(228, 34%, 66%)'}
      />

      <Footer color = { theme ? 'hsl(0, 0%, 100%)'  : ' hsl(230, 17%, 14%)'}
 />
    </div>
  );
}

export default App;
