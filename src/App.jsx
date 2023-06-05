import Header from "./components/Header";
import Section from "./components/Section";
import travelData from "./data.js"

export default function App() {
  
  const travelSection = travelData.map(travel => {
    return <Section data={travel} />
  }) 

  return (
    <div className="main-container">
      <Header />
      {travelSection}
    </div>
  )
}
