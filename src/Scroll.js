import React, { useRef, useEffect, useState } from 'react';

const ScrollPositionComponent = () => {
    const targetRef = useRef(null);

    const [text, setText] = useState("Scroll Position Tracking");

    const handleScroll = () => {

        const scrollPosition = window.scrollY || window.pageYOffset;

        const targetTop = targetRef.current.getBoundingClientRect().top;


        if (targetTop < scrollPosition) {
            console.log("스크롤 드디어 닿음", targetTop)
            targetRef.current.style.backgroundColor = "pink";
            setText("changed!!!")
        } else {
            targetRef.current.style.backgroundColor = "white";
            setText("Scroll Position Tracking")
        }
    };

    useEffect(() => {

        const targetElement = targetRef.current;

        if (targetElement) {
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (targetElement) {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div ref={targetRef} style={{ border: '1px solid #ccc' }}>
            <h2>{text}</h2>
            <div style={{ height: '1000px' }}>Scroll down to see the effect</div>
        </div>
    );
};

export default ScrollPositionComponent;
