import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Driver } from '../Driver';
import { Option } from '../Option';

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.css']
})
export class DriverFormComponent implements OnInit {

  driverData: Driver; 

  transportationList: Option[] = [
    {value: "C", text: "Car"},
    {value: "B", text: "Bus"},
    {value: "M", text: "Motorcycle"},
    {value: "H", text: "Helicopter"},
    {value: "B", text: "Boat"}
  ];

  vehicleUseList: Array<Option> = [
    {value: "business", text: "Business"},
    {value: "pleasure", text: "Pleasure"},
    {value: "other", text: "Other"}
  ]

  constructor() { }

  ngOnInit(): void {
    // pretend driver came from a DB
    this.driverData = {
      name: "Richard Hammond",
      description: "Richard is a motor vehicle enthusiast",
      ownedTransportation: ["C", "M"], 
      favouriteTransportation: "M",
      driverLicence: true, 
      vehicleUse: "pleasure"
    };
  }

  handleSubmit(f: NgForm){
    console.log(f);
    console.log(f.value);
    //console.log(this.driverData);
  }

}
