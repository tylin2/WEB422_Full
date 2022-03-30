import {useState, useEffect} from 'react';
import { Table, Pagination, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import queryString from 'query-string';

export default function Restaurants(props){        
    const [restaurants, setRestaurants] = useState([]);    
    let [page, setPage] = useState(1);
    let [find, setFind] = useState(true);
    const history = useHistory();     
       
    function previousPage() {
        if (page > 1) {
            page--;            
            setPage(page);            
        }
    }    
    
    function nextPage() {
        page++;         
        setPage(page);        
    }

    useEffect(()=>{
        if(props.query){            
            fetch(`https://dry-inlet-62094.herokuapp.com/api/restaurants?page=${page}&perPage=10&borough=${queryString.parse(props.query).borough}`)
            .then( res => {
                return res.json();
            })
            .then((restaurants) => {
                if( restaurants.length > 0){
                    setRestaurants(restaurants);
                } else {
                    setFind(false);
                    setRestaurants([]);
                }           
            })           
        } else {
            fetch(`https://dry-inlet-62094.herokuapp.com/api/restaurants?page=${page}&perPage=10`)
            .then( res => {
                return res.json();
            })
            .then((restaurants) => {                
                setRestaurants(restaurants);
            })   
        } 
    }, [page,props.query,find]);

    if(find){
        return (
            <>
                <Card>            
                    <Card.Header>
                        <Card.Title>Restaurant List</Card.Title>
                        <Card.Text>
                            Full list of reataurants. Optionally sorted by borough
                        </Card.Text>                
                    </Card.Header>                    
                </Card>
                <br />
                <div>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Borough</th>
                                    <th>Cuisine</th>
                                </tr>
                            </thead>
                            <tbody>
                                {restaurants.map( rest => (
                                    <tr key={rest._id} onClick={()=>{ history.push(`/restaurant/${rest._id}`)}}>
                                        <td>{rest.name}</td>
                                        <td>{rest.address.building} {rest.address.street}</td>
                                        <td>{rest.borough}</td>
                                        <td>{rest.cuisine}</td>
                                    </tr>
                                ))}
                            </tbody>                        
                        </Table>
                        <Pagination>
                            <Pagination.Prev onClick={previousPage} />
                            <Pagination.Item>{page}</Pagination.Item>
                            <Pagination.Next onClick={nextPage} />
                        </Pagination>
                    </div>
                
            </>
        )
    } else {
        return (
            <>
                <Card>            
                    <Card.Header>                        
                        <Card.Text>
                            No Restaurants Found.
                        </Card.Text>                
                    </Card.Header>                    
                </Card>
            </>
        )
    }     
}