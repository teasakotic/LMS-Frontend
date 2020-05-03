import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class MapService {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 45.267136;
  lng = 19.833549;
  zoom = 13
  constructor() {
    Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set('API_KEY');
  }
  buildMap() {
    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 12,
      center: [19.8409, 45.2525]
    });

    map.on("load", function () {
      map.loadImage("https://i.imgur.com/MK4NUzI.png", function (error, image) {
        if (error) throw error;
        map.addImage("custom-marker", image);
        map.addLayer({
          id: "markers",
          type: "symbol",
          source: {
            type: "geojson",
            data: {
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  properties: {},
                  geometry: {
                    type: "Point",
                    coordinates: [19.8445, 45.2531]
                  }
                }
              ]
            }
          },
          layout: {
            "icon-image": "custom-marker",
          }
        });
      });
    });

    this.map.addControl(new mapboxgl.NavigationControl());
  }

}