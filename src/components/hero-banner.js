import banner from '../assets/snowy_background.jpg';
import snowVideo from '../assets/snow_particles.mp4';

export default function HeroBanner() {
    return (
        <div
            className="hero-banner"
            style={{
                backgroundImage: `linear-gradient(rgba(18, 14, 11, 0.6), rgba(18, 14, 11, 0.75)), url(${banner})`
            }}
        >
            <video
                className="hero-video"
                src={snowVideo}
                autoPlay
                loop
                muted
                playsInline
            />

            <div className="row hero-content">
                <div className='col-3 texts'>
                    <div className="logo">
                        <i className="fa-solid fa-bars" />
                        <i className="fa-solid fa-bars fa-rotate-90" />
                        <i className="fa-solid fa-bars" />
                    </div>
                    <div className="logo-text">Strudel Music Sequencer</div>
                </div>
                <div className="col-9">

                </div>
            </div>
        </div>

    )
}