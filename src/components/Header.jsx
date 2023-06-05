import globe from "../assets/globe.png"

export default function Header() {
    return (
        <header className="heading">
            <img src={globe} className="heading-image" />
            <h3 className="heading-text">my travel journal.</h3>
        </header>
    )
}