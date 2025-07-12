"use client"
import { useState, useEffect } from "react"
import { Info } from "lucide-react"
import "./Profile.css"
import { cockie1 } from "../../assets/character"
import badge1 from "../../assets/character/badge1.png"
import badge2 from "../../assets/character/badge2.png"
import badge3 from "../../assets/character/badge3.png"
import badge4 from "../../assets/character/badge4.png"
import badge5 from "../../assets/character/badge5.png"
import badge6 from "../../assets/character/badge6.png"
import badge7 from "../../assets/character/badge7.png"
import badge8 from "../../assets/character/badge8.png"
import badge9 from "../../assets/character/badge9.png"
import badge10 from "../../assets/character/badge10.png"

export default function Component() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 8,
    minutes: 57,
    seconds: 45,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const badges = [
    { id: 1, image: badge1, name: "Enjoyer" },
    { id: 2, image: badge2, name: "Success 10%" },
    { id: 3, image: badge3, name: "10th Trader" },
    { id: 4, image: badge4, name: "100 Plays" },
    { id: 5, image: badge5, name: "First Trader" },
    { id: 6, image: badge6, name: "Fail Master" },
  ]

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-image-container">
            <img src={cockie1} alt="Profile Avatar" className="profile-image" />
          </div>
          <div className="wallet-address">0xFC47...375c</div>
          <div className="xp-section">
            <div className="xp-info">
              <span>6,781/10,000</span>
              <span>XP</span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: "67.81%" }}></div>
            </div>
          </div>
          <div className="countdown-section">
            <div className="countdown-title">Next XP Update in</div>
            <div className="countdown-timer">
              <div className="timer-box">{timeLeft.days.toString().padStart(2, "0")}d</div>
              <div className="timer-box">{timeLeft.hours.toString().padStart(2, "0")}h</div>
              <div className="timer-box">{timeLeft.minutes.toString().padStart(2, "0")}m</div>
              <div className="timer-box">{timeLeft.seconds.toString().padStart(2, "0")}s</div>
            </div>
          </div>
        </div>
        <div className="badges-card">
          <div className="badges-header">
            <h2 className="badges-title">Badges</h2>
            <Info className="info-icon" />
          </div>
          <div className="badges-grid">
            {badges.map((badge) => (
              <div key={badge.id} className="badge-item">
                <img src={badge.image} alt={badge.name} className="badge-image" />
                <span className="badge-name">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
