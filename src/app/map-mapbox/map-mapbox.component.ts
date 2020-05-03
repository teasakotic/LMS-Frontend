import { Component, OnInit} from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-map-mapbox',
  templateUrl: './map-mapbox.component.html',
  styleUrls: ['./map-mapbox.component.css']
})
export class MapMapboxComponent implements OnInit {


  constructor(private map: MapService) { }

  ngOnInit(): void {
    // this.map.buildMap();
  }


}
