import { Component, OnInit } from '@angular/core';
import { ContactUs } from './../shared/contactus';      

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  states = [
    {value: 'CA', text: 'California'},
    {value: 'VA', text: 'Virginia'},
    {value: 'NC', text: 'North Carolina'},
    {value: 'AL', text: 'Alabama'},
    {value: 'SC', text: 'South Carolina'},
    {value: 'NY', text: 'New York'},
    {value: 'MD', text: 'Maryland'},
    {value: 'GA', text: 'Georgia'},
    {value: 'KS', text: 'Kansas'},
    {value: 'TX', text: 'Texas'},
    {value: 'WV', text: 'West Virginia'},
    {value: 'WI', text: 'Wisconsin'},
    {value: 'PA', text: 'Pennsylvannia'}
  ];


  contact: ContactUs = {
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipcode: ''
  };
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Contact', this.contact);
  }
}
