import React, { Suspense, useEffect } from 'react';
import './App.css';
import Content1 from './components/contents/Content-1.jsx';
import Content2 from './components/contents/Content-2.jsx';
import Visual from './components/contents/Visual.jsx';
import MainFooter from './components/MainFooter.jsx';
import MainHeader from './components/MainHeader.jsx';

// Lazy-load lower-priority content for code-splitting
const Content3 = React.lazy(() => import('./components/contents/Content-3.jsx'));
const Content4 = React.lazy(() => import('./components/contents/Content-4.jsx'));
const Content5 = React.lazy(() => import('./components/contents/Content-5.jsx'));

// Register GSAP plugins once at module scope
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function App() {
    // Cleanup any ScrollTrigger instances on unmount
    useEffect(() => {
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <main className="wrap">
            <MainHeader />
            <Visual />
            <Content1 />
            <Content2 />
            <Suspense fallback={<div>Loading...</div>}>
                <Content3 />
                <Content4 />
                <Content5 />
            </Suspense>
            <MainFooter />
        </main>
    );
}

export default App;
