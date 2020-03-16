import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  f1(){
    var e=(<HTMLInputElement>document.getElementById("search-input")).value;
    if(e=="agra")
    {
      window.open("/agra")
    }
    else if(e=="amritsar")
    {
      window.open("/amritsar")
    }
    else if(e=="delhi")
    {
      window.open("/delhi")
    }
    else if(e=="goa")
    {
      window.open("/goa")
    }
    else if(e=="kerala")
    {
      window.open("/kerala")  
    }
    else if(e=="manali")
    {
      window.open("/manali")
    }
    else if(e=="mumbai")
    {
      window.open("/mumbai")
    }
    else if(e=="shimla")
    {
      window.open("/shimla")
    }
    else
    {
        alert("Rooms are not available in this location");
    }
    }

}
