import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { MenuController } from '@ionic/angular';
import { MarryInfo } from 'src/app/models/marryinfos.modal';
import { RadioList } from './radioList.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  defaultSelectedRadio = "radio_1";

  selectedRadioGroup:any;

  selectedRadioIcon :any;

  selectedRadioItem:any;

  inputValue:any;

  // initialize marry info list.
  marryInfo: MarryInfo[];
 
  //radio List
  radio_list = [];
 
  radioGroupChange(event) {
    console.log("radioGroupChange",event.detail);
    this.selectedRadioGroup = event.detail;
    
    if(this.selectedRadioGroup.value==="radio_1"){
      this.selectedRadioIcon = true;
    }else{
      this.selectedRadioIcon = false;
    }
  }

  radioSelect(event) {
    console.log("radioSelect",event.detail);
    this.selectedRadioItem = event.detail;
  }
  onSearch() {

    // use id for search
    if(this.selectedRadioIcon){
      console.log("selectedRadioIcon: "+this.selectedRadioIcon);

      this.marryInfo = this.placesService.getId(this.inputValue)
      console.log(this.marryInfo);
    }else{
      //use name for search
      console.log("selectedRadioIcon: "+this.selectedRadioIcon);

      this.marryInfo = this.placesService.getName(this.inputValue)
      console.log(this.marryInfo);
    }
  }

  constructor(private placesService: PlacesService, private menuCtrl: MenuController, 
    private radioList:RadioList) { }

  ngOnInit() {
    this.marryInfo= [];
    this.radio_list = this.radioList.radio_list;
  }

  
}
