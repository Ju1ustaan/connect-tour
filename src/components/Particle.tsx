'use client';

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
    const particlesInit = useCallback(async (engine: any) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async () => {
    }, [])
    return (
        <Particles
        className="h-screen"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            fullScreen: {enable: false},
            fpsLimit: 120,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 0.4,
                    }
                }
            },
            particles: {
                color: {
                    value: "#9E9E4D"
                },
                links: {
                    color: "#9E9E4D",
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                },
                collisions:{
                    enable: true,
                },
                move:{
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: true,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                    value: 105,
                },
                opacity: {
                    value: 0.3,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: {min: 1, max: 5},
                }
            },
            detectRetina: true,   
        }}
        />
    )
}

export default Particle;