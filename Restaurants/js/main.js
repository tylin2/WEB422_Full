/********************************************************************************* 
* WEB422 – Assignment 2 
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
* No part of this assignment has been copied manually or electronically from any other source 
* (including web sites) or distributed to other students. 
* 
* Name: Ting-Yeh Lin Student ID:141726182 Date: 2021/2/2
* ********************************************************************************/

let restaurantData = [];
let currentRestaurant = {};
let page = 1;
const perPage = 10;
let map = null;

const tableRows = _.template(
    `<% _.forEach(restaurantData, function(restaurants) { %>
        <tr data-id=<%- restaurants._id %>>
            <td><%- restaurants.name %></td>
            <td><%- restaurants.cuisine %></td>
            <td><%- restaurants.address.building %> <%- restaurants.address.street %></td>
            <td><%= avg(restaurants.grades) %></td>            
        </tr>
    <% }); %>`,{
        imports : {
            avg : function(grades){
                var sum = 0;
                for (var i=0; i < grades.length; i++) {                   
                    sum += grades[i].score;        
                }                
                var avg = (sum/grades.length);                
                return avg.toFixed(2);
            }
        }
    }
);

function loadRestaurantData() {
    fetch(`https://dry-inlet-62094.herokuapp.com/api/restaurants?page=${page}&perPage=${perPage}`)
        .then((res) => {
            return res.json();
        })
        .then((Data) => {
            restaurantData = Data;
            let rows = tableRows(restaurantData);
            $('#restaurant-table tbody').html(rows);
            $('#current-page').html(page);
        })
}

$('#restaurant-table tbody').on('click','tr',function(e) {
    let row = $(this).attr("data-id");
    currentRestaurant = restaurantData.find( ({ _id}) => _id == row);

    $('#restaurant-modal h4').html(`${currentRestaurant.name}`);
    $('#restaurant-address').html(`${currentRestaurant.address.building} ${currentRestaurant.address.street}`);

    $('#restaurant-modal').modal();
});

$('#previous-page').on('click', function(e) {
    if (page > 1) {
        page--;
    }
    loadRestaurantData();
});

$('#next-page').on('click', function(e) {
    page++;
    loadRestaurantData();
});

$('#restaurant-modal').on('shown.bs.modal', function () {
    map = new L.Map('leaflet', {
        center: [currentRestaurant.address.coord[1], currentRestaurant.address.coord[0]],
        zoom: 18,
        layers: [
        new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
        ]
    });
    L.marker([currentRestaurant.address.coord[1], currentRestaurant.address.coord[0]]).addTo(map);
});

$('#restaurant-modal').on('hidden.bs.modal', function () {
    map.remove();
});

$(function() {   
    loadRestaurantData();
});

