import { useState, useRef } from 'react';

import './SectionOne.css'

function SectionOne(props) {
    let words = props.children.split(' ');
    let parsed = [];

    const [status, setStatus] = useState(0);
    const ref = useRef(null);

    words.forEach((word, index) => {
        parsed.push(<span key={index} style={{ '--percent': 100 * index / words.length }}>{word}</span>);
        parsed.push(' ');
    });

    window.addEventListener('scroll', (event) => {
        const current = ref.current;

        if (!current)
            return;

        const diff = window.scrollY - current.offsetTop;
        const status = 100 * diff / (current.offsetHeight * 0.6);
        setStatus(status);
    }, { passive: true });

    return (
        <div className='scroll' ref={ref}>
            <div style={{ '--status': status }}>
                {parsed}
            </div>
        </div>
    );
}

export default SectionOne;
