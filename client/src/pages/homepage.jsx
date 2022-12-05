import "../styles/homepage.css";
function HomePage() {
    return (
        <div className="main-container">
            <div className="top-banner">
                <div className="title">Connecting People Together</div>
                <button
                    className="getStarted"
                    onClick={() => (window.location.href = "/login")}
                >
                    Get Started
                </button>
            </div>
            <div className="bottom-container"></div>
        </div>
    );
}

export default HomePage;
