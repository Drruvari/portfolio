import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Suspense, lazy, useEffect, useState } from 'react';
import './App.css';
import About from './components/contents/About/About.jsx';
import IdeaToReality from './components/contents/IdeaToReality/IdeaToReality.jsx';
import Visual from './components/contents/Visual/Visual.jsx';
import Loader from './components/Loader/Loader.jsx';
import MainHeader from './components/MainHeader.jsx';

// Register GSAP plugin once at module scope
gsap.registerPlugin(ScrollTrigger);

const Portfolio = lazy(() => import('./components/contents/Portfolio/Portfolio.jsx'));
const Services = lazy(() => import('./components/contents/Services/Services.jsx'));
const Projects = lazy(() => import('./components/contents/Projects/Projects.jsx'));
const MainFooter = lazy(() => import('./components/MainFooter.jsx'));

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
            requestAnimationFrame(() => {
                ScrollTrigger.refresh();
            });
        }, 200);
        return () => clearTimeout(timeout);
    }, []);

    if (loading) {
        return (
            <div className="loader-screen">
                <Loader />
            </div>
        );
    }

    return (
        <main className="wrap">
            <MainHeader />
            <Visual />
            <About />
            <IdeaToReality />
            <Suspense
                fallback={
                    <div className="loading">
                        <Loader />
                    </div>
                }
            >
                <Portfolio />
                <Services />
                <Projects />
                <MainFooter />
            </Suspense>
        </main>
    );
}

export default App;
