import React from 'react';
import { ThemeProvider } from './contexts/theme'
import Nav from './components/Nav';
import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        theme: 'light',
        toggleTheme: () => {
          this.setState(({ theme }) => ({
            theme: theme === 'light' ? 'dark' : 'light'
          }))
        }
    }
  }
  render(){
  return (
    <ThemeProvider value={this.state}>
    <div className={this.state.theme}>
    <div className="container">
    <Nav />
     <h1>Bacon Ipsum</h1>
     <p>
                Bacon ipsum dolor amet filet mignon hamburger pig, lorem pork belly veniam flank salami nisi ea fatback bresaola elit. Short ribs nisi leberkas short loin cow ex. Prosciutto short ribs ham, ribeye excepteur magna frankfurter enim laboris aliquip. Meatloaf lorem turkey, labore dolore tri-tip non alcatra ullamco boudin aliqua eu capicola. Quis bacon landjaeger tempor, aliqua frankfurter magna kielbasa officia incididunt laboris. Shank officia aliquip jowl lorem eiusmod dolor est nostrud excepteur.
     </p>
     <p>
                Bacon ipsum dolor amet filet mignon hamburger pig, lorem pork belly veniam flank salami nisi ea fatback bresaola elit. Short ribs nisi leberkas short loin cow ex. Prosciutto short ribs ham, ribeye excepteur magna frankfurter enim laboris aliquip. Meatloaf lorem turkey, labore dolore tri-tip non alcatra ullamco boudin aliqua eu capicola. Quis bacon landjaeger tempor, aliqua frankfurter magna kielbasa officia incididunt laboris. Shank officia aliquip jowl lorem eiusmod dolor est nostrud excepteur.
                </p>
                
                <p>
                Bacon ipsum dolor amet filet mignon hamburger pig, lorem pork belly veniam flank salami nisi ea fatback bresaola elit. Short ribs nisi leberkas short loin cow ex. Prosciutto short ribs ham, ribeye excepteur magna frankfurter enim laboris aliquip. Meatloaf lorem turkey, labore dolore tri-tip non alcatra ullamco boudin aliqua eu capicola. Quis bacon landjaeger tempor, aliqua frankfurter magna kielbasa officia incididunt laboris. Shank officia aliquip jowl lorem eiusmod dolor est nostrud excepteur.
                </p>
                
                <p>
                Bacon ipsum dolor amet filet mignon hamburger pig, lorem pork belly veniam flank salami nisi ea fatback bresaola elit. Short ribs nisi leberkas short loin cow ex. Prosciutto short ribs ham, ribeye excepteur magna frankfurter enim laboris aliquip. Meatloaf lorem turkey, labore dolore tri-tip non alcatra ullamco boudin aliqua eu capicola. Quis bacon landjaeger tempor, aliqua frankfurter magna kielbasa officia incididunt laboris. Shank officia aliquip jowl lorem eiusmod dolor est nostrud excepteur.
                </p>
                
                <p>
                Bacon ipsum dolor amet filet mignon hamburger pig, lorem pork belly veniam flank salami nisi ea fatback bresaola elit. Short ribs nisi leberkas short loin cow ex. Prosciutto short ribs ham, ribeye excepteur magna frankfurter enim laboris aliquip. Meatloaf lorem turkey, labore dolore tri-tip non alcatra ullamco boudin aliqua eu capicola. Quis bacon landjaeger tempor, aliqua frankfurter magna kielbasa officia incididunt laboris. Shank officia aliquip jowl lorem eiusmod dolor est nostrud excepteur.
                </p>
                <p>
                Bacon ipsum dolor amet filet mignon hamburger pig, lorem pork belly veniam flank salami nisi ea fatback bresaola elit. Short ribs nisi leberkas short loin cow ex. Prosciutto short ribs ham, ribeye excepteur magna frankfurter enim laboris aliquip. Meatloaf lorem turkey, labore dolore tri-tip non alcatra ullamco boudin aliqua eu capicola. Quis bacon landjaeger tempor, aliqua frankfurter magna kielbasa officia incididunt laboris. Shank officia aliquip jowl lorem eiusmod dolor est nostrud excepteur.
                </p>
                
    </div>
    </div>
    
    </ThemeProvider>
    
  );
}
}


export default App;
