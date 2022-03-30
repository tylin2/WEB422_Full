import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useState, useEffect} from 'react';
import { Card, CardDeck } from "react-bootstrap";

export default function Restaurant(props){
    const [loading, setLoading] = useState(true);
    const [restaurant, setRestaurant] = useState(null);
    useEffect(()=>{
        setLoading(true);
        fetch(`https://dry-inlet-62094.herokuapp.com/api/restaurants/${props.id}`)
        .then( res => {
            return res.json();
        })
        .then((restaurant) => {
            setLoading(false);
            if(restaurant.hasOwnProperty("_id")){
                setRestaurant(restaurant);
            }else{
                setRestaurant(null);
            }            
        })
    }, [props.id]);
    if (!loading) {
        if (restaurant) {
            return (
                <>
                    <Card>
                        <Card.Header>
                            <Card.Title>{restaurant.name}</Card.Title>
                            <Card.Text>
                                {restaurant.address.building} {restaurant.address.street}
                            </Card.Text>                            
                        </Card.Header>
                    </Card>
                    <br />
                    <MapContainer style={{"height": "400px"}} 
                        center={[restaurant.address.coord[1], restaurant.address.coord[0]]} 
                        zoom={13} scrollWheelZoom={false}> 
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> 
                        <Marker position={[restaurant.address.coord[1], restaurant.address.coord[0]]}></Marker> 
                    </MapContainer>
                    <br />
                    <h4>Ratings</h4>
                    <hr size="8px" align="center" width="100%"></hr>
                    <CardDeck>
                        {restaurant.grades.map( grade => (
                            <Card>
                            <Card.Header>Grade: {grade.grade}</Card.Header>
                            <Card.Body>                        
                                <Card.Text >
                                    Completed: {new Date(grade.date).toLocaleDateString('en-US')}
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        ))}                        
                    </CardDeck>
                </>
            );
        } else {
            return (
                <>
                    <Card>            
                        <Card.Header>                        
                            <Card.Text>
                                Unable to find Restaurant with id: {props.id}
                            </Card.Text>                
                        </Card.Header>                    
                    </Card>
                </>
            )            
        }

    } else {
        return (
            <>
                <Card>            
                    <Card.Header>                        
                        <Card.Text>
                        Loading Restaurant Data...
                        </Card.Text>                
                    </Card.Header>                    
                </Card>
            </>
        )       
    }
}    