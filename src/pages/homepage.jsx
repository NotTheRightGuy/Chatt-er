import "../styles/homepage.css";
function HomePage() {
    return (
        <div className="main-container">
            <div className="Homepage-title">CHATT'ER</div>
            <div className="Homepage-subtitle">For all your private deeds</div>
            <div className="login-button">
                <button
                    onClick={() => {
                        window.location.href = "/login";
                    }}
                >
                    Get Started
                </button>
            </div>
        </div>
    );
}

export default HomePage;
