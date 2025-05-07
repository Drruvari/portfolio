import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Suspense, lazy, useEffect } from 'react';
import './App.css';
import Content1 from './components/contents/Content-1.jsx';
import Content2 from './components/contents/Content-2.jsx';
import Visual from './components/contents/Visual.jsx';
import MainHeader from './components/MainHeader.jsx';

// Register GSAP plugin once at module scope
gsap.registerPlugin(ScrollTrigger);

// Lazy-load lower-priority content for code-splitting
const Content3 = lazy(() => import('./components/contents/Content-3.jsx'));
const Content4 = lazy(() => import('./components/contents/Content-4.jsx'));
const Content5 = lazy(() => import('./components/contents/Content-5.jsx'));
const MainFooter = lazy(() => import('./components/MainFooter.jsx'));

function App() {
    useEffect(() => {
        // Ensure scroll triggers refresh after all lazy content is loaded
        const timeout = setTimeout(() => {
            if (typeof ScrollTrigger !== 'undefined') {
                ScrollTrigger.refresh();
            }
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <main className="wrap">
            <MainHeader />
            <Visual />
            <Content1 />
            <Content2 />
            <Suspense fallback={<div className="loading">Loading...</div>}>
                <Content3 />
                <Content4 />
                <Content5 />
                <MainFooter />
            </Suspense>
        </main>
    );
}

export default App;
