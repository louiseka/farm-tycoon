import "../styles/stats.css"

export default function Stats() {
    return (
        <>
            <section className="stats-section">
                <h2>Your reports:</h2>
                <div className="stats-grid">
                    <div className="stats-card">
                        <h3>Today</h3>
                    </div>
                    <div className="stats-card">
                        <h3>This week</h3>
                    </div>
                    <div className="stats-card">
                        <h3>This month</h3>
                    </div>
                </div>
            </section>
        </>
    )
}