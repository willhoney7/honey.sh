import React from 'react';
export default function BouncingWinston() {
    const [isPlayingAnimation, setisPlayingAnimation] = React.useState(true);

    return (
        <>
            <style jsx>{`
                @keyframes bob {
                    0% {
                        transform: translateY(0rem);
                    }
                    100% {
                        transform: translateY(-8.5rem);
                    }
                }

                .container {
                    position: fixed;
                    bottom: -7rem;
                    right: 20%;
                }

                .winston {
                    width: 6rem;
                    height: 6rem;

                    border-radius: 5px;
                    background-image: url('/images/winston_small.jpg');
                    background-size: cover;
                    background-color: #d79b5f;
                }
                .winston:hover {
                    background-image: url('/images/winston_goofy_small.jpg');
                    animation-play-state: paused;
                }

                .winston.animate {
                    animation: bob 1500ms alternate ease;
                    animation-iteration-count: 6; /* means three bounces */
                }

                .play {
                    position: absolute;
                    top: -65px;
                    right: -35px;
                    border: none;
                    margin: 0px;
                    padding: 0 5px;
                    background-color: transparent;
                    font-size: 18px;
                }
            `}</style>
            <div className="container">
                <div
                    className={`winston ${isPlayingAnimation ? 'animate' : ''}`}
                    alt={'My goldendoodle dog, Winston'}
                    onAnimationEnd={() => {
                        setisPlayingAnimation(false);
                    }}
                />
                <button
                    type="button"
                    className="play"
                    onClick={() => setisPlayingAnimation((prev) => !prev)}
                >
                    {isPlayingAnimation ? '⏸' : '▶️ '}
                </button>
            </div>
        </>
    );
}
