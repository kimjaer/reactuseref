import React, { useRef, useEffect, useState } from 'react';

const ScrollPositionComponent = () => {
    const targetRef = useRef(null);


    const handleScroll = () => {
        const scrollPosition = window.scrollY || window.pageYOffset;
        const targetTop = targetRef.current.getBoundingClientRect().top
        if (targetTop < scrollPosition) {
            console.log("스크롤 드디어 닿음", targetTop)
            targetRef.current.style.backgroundColor = "red";
        } else {
            targetRef.current.style.backgroundColor = "white";
        }
    };

    // Attach the scroll event listener
    useEffect(() => {

        const targetElement = targetRef.current;

        if (targetElement) {
            window.addEventListener('scroll', handleScroll);
        }

        // Clean up the event listener on component unmount
        return () => {
            if (targetElement) {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div ref={targetRef} style={{ border: '1px solid #ccc' }}>
            <h2>Scroll Position Tracking</h2>
            {/* <p>Scroll Position: {scrollPosition}</p> */}

            {/* Your content goes here */}
            <div style={{ height: '1000px' }}>Scroll down to see the effect</div>
        </div>
    );
};

export default ScrollPositionComponent;
