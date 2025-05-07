import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import './Loader.css';

const cubeCoordinates = [
    "111", "121", "131", "211", "221", "231", "311", "321", "331",
    "112", "122", "132", "212", "222", "232", "312", "322", "332",
    "113", "123", "133", "213", "223", "233", "313", "323", "333"
];

const shadowMap = {
    "111": ["shadow-z:112"],
    "131": ["shadow-z:132"],
    "211": ["shadow-flip:111", "shadow-y:111", "shadow-z:212"],
    "221": ["shadow-flip:121", "shadow-y:121"],
    "231": ["shadow-flip:131", "shadow-y:131"],
    "311": ["shadow-flip:211", "shadow-y:211", "shadow-z:312"],
    "321": ["shadow-flip:221", "shadow-y:221", "shadow-z:322"],
    "331": ["shadow-flip:231", "shadow-y:231", "shadow-z:332"],
    "212": ["shadow-flip:112", "shadow-y:112"],
    "222": ["shadow-flip:122", "shadow-y:122"],
    "232": ["shadow-flip:132", "shadow-y:132"],
    "312": ["shadow-flip:212", "shadow-y:212"],
    "322": ["shadow-flip:222", "shadow-y:222"],
    "332": ["shadow-flip:232", "shadow-y:232"],
    "113": ["shadow-z:111"],
    "123": ["shadow-z:121"],
    "213": ["shadow-flip:113", "shadow-y:113", "shadow-z:211"],
    "223": ["shadow-y:123", "shadow-z:221"],
    "233": ["shadow-y:133", "shadow-z:231"],
    "313": ["shadow-flip:213", "shadow-y:213", "shadow-z:311"],
    "323": ["shadow-flip:223", "shadow-y:223", "shadow-z:321"],
    "333": ["shadow-flip:233", "shadow-y:233", "shadow-z:331"]
};

const largeShadows = [
    "113", "123", "133",
    "213", "223", "233",
    "313", "323", "333"
];

const RubikCubeLoader = () => {
    const [shadows] = useState(true);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const cubeWraps = wrapperRef.current.querySelectorAll('.cube-wrap');

        const tl = gsap.timeline({ repeat: -1, yoyo: true });

        tl.to(cubeWraps, {
            rotationY: '+=15',
            rotationX: '+=10',
            scale: 1.05,
            duration: 2,
            ease: 'power1.inOut',
            stagger: {
                amount: 1,
                grid: [3, 3],
                from: 'center'
            }
        });

        return () => tl.kill();
    }, []);

    return (
        <>
            <div className="cubes" ref={wrapperRef} style={{ '--shadow-filter': shadows ? undefined : 'none' }}>
                {cubeCoordinates.map(coord => (
                    <div className="cube" data-cube={coord} key={coord}>
                        <div className="cube-wrap">
                            <div className="cube-top">
                                {shadowMap[coord]?.map(sh => {
                                    const [cls, cubeRef] = sh.split(":");
                                    return <div className={cls} data-cube={cubeRef} key={cls + cubeRef}></div>;
                                })}
                            </div>
                            <div className="cube-bottom"></div>
                            <div className="cube-front-left"></div>
                            <div className="cube-front-right"></div>
                            <div className="cube-back-left"></div>
                            <div className="cube-back-right"></div>
                        </div>
                    </div>
                ))}

                <div className="large-shadows">
                    {largeShadows.map(cube => (
                        <div className="large-shadow" data-cube={cube} key={cube}></div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default RubikCubeLoader;
