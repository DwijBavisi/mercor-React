import './App.css';

import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';

function App() {
    return (
        <div className='host'>
            <SectionOne>
                In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold.
            </SectionOne>
            <SectionTwo>
                <div id='static'>
                    <h1>Create at the speed of thought.</h1>
                    <span className='small'>Focus on your getting your thoughts out and crafting the best message while Chronicle does the heavy lifting for you</span>
                </div>
                <span>
                    <center>
                        <img src='doesnt_exist' alt='svg animation' />
                        <span>Bullets to visuals<br />in a click.</span>
                        <span className='small'>Transform any block to any other and try different  options without any design hassle</span>
                    </center>
                </span>
                <span>
                    <center>
                        <img src='doesnt_exist' alt='svg animation' />
                        <span>Bullets to visuals<br />in a click.</span>
                        <span className='small'>Transform any block to any other and try different  options without any design hassle</span>
                    </center>
                </span>
                <span>
                    <center>
                        <img src='doesnt_exist' alt='svg animation' />
                        <span>Bullets to visuals<br />in a click.</span>
                        <span className='small'>Transform any block to any other and try different  options without any design hassle</span>
                    </center>
                </span>
            </SectionTwo >
        </div >
    );
}

export default App;
