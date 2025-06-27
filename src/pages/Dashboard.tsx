import "/src/styles/dashboard.css"

import type { Coin, Weather } from "../types/farmTypes"

type dashboardProps = {
    coins: Coin
    weather: Weather
}

export default function Dashboard({ coins, weather }: dashboardProps) {

    const date = new Date()
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }
    const formattedDate = date.toLocaleDateString('en-GB', options)

    return (
        <section className="dashboard-section">
            <div>
                <img className="main-img" src="./assets/Icons/farmer-icon.svg" alt="A graphic of a farmer smiling whilst holding a pitch fork." />
            </div>
            <div className="dashboard-message">
                <h2 className="dashboard-heading"> Hi there! Here is today's update:</h2>
                <ul>
                    <li className="dashboard-list"><img className="md-icon" src="./assets/Icons/calendar.svg"></img>{formattedDate}</li>
                    <li className="dashboard-list"><img className="md-icon" src="./assets/Icons/coins.svg"></img>You have {coins} gold</li>
                    <li className="dashboard-list"> <img className="md-icon" src="./assets/Icons/cloud.svg"></img>{weather}</li>

                </ul>
            </div>
        </section>
    )
}
