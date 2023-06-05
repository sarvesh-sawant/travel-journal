import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Section(props){
    return (
        <div className="travel-info">
            <img src={props.data.imageUrl} className="travel-info--imageUrl"/>
            <div className="travel-info--data">
                <div className="travel-info--location">
                    <div className="travel-info--location-icon"><FontAwesomeIcon icon={faLocationDot} className="travel-info--location-icon-img"/><p>{props.data.location}</p></div>
                    <a href={props.data.googleMapsUrl} className='travel-info--location-url'>View on Google Maps</a>
                </div>
                    <h2 className='travel-info--title'>{props.data.title}</h2>
                    <h4 className='travel-info--date'>{props.data.startDate + " - " + props.data.endDate}</h4>
                    <p className='travel-info--description'>{props.data.description}</p>
            </div>
        </div>
    )
}