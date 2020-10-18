export default function BouncingWinston() {
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

                .winston {
                    position: fixed;
                    bottom: -7rem;
                    right: 20%;
                    width: 6rem;
                    height: 6rem;
                    animation: bob 1500ms alternate ease;
                    animation-iteration-count: 10;
                    border-radius: 5px;
                    background-image: url('/images/winston_small.jpg');
                    background-size: cover;
                }
                .winston:hover {
                    background-image: url('/images/winston_goofy_small.jpg');
                    animation-play-state: paused;
                }
            `}</style>
            <div className={`winston`} alt={'My goldendoodle dog, Winston'} />
        </>
    );
}
