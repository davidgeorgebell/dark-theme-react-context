import React from 'react';
import { ThemeConsumer } from '../contexts/theme'

function TextBody () {
        return(
            <ThemeConsumer>
            {({ theme }) => (
                <div className='TextBody'>
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
                

            </div>
            )}
            
            </ThemeConsumer>
        )
    }

export default TextBody;