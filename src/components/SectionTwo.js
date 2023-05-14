import { useState, useRef } from 'react';

import './SectionTwo.css'

function SectionTwo(props) {
    let parsed = [];

    props.children.slice(1, props.children.length).forEach((element, index) => {
        parsed.push(<section key={index} style={{ '--percent': 100 * index / (props.children.length - 1) }}>{element}</section>);
        parsed.push(' ');
    });

    const [status, setStatus] = useState(0);
    const ref = useRef(null);

    window.addEventListener('scroll', (event) => {
        const current = ref.current;

        if (!current)
            return;

        const diff = window.scrollY - current.offsetTop + current.offsetHeight;
        const status = 100 * diff / (current.offsetHeight * 1);
        setStatus(status);
    }, { passive: true });

    return (
        <div className='scroll2' ref={ref}>
            {props.children[0]}
            <div id='container' style={{ '--status': status, '--diff': Math.floor(100 / parsed.length) }}>
                {parsed}
            </div>
            <div id='scrollbar' style={{ '--status': status }}>
                {Math.max(1, Math.floor((parsed.length - 3) * (status - 60) / 100))}
                <span id='bar'>
                    <span id='fill'></span>
                </span>
                {parsed.length - 3}
            </div>
        </div>
    );
}

export default SectionTwo;
