'use client';
import { useState, useRef, useEffect } from "react"
import { useAppSelector } from "@/redux/hooks";
import L from 'leaflet';
import { Icon, LatLng, LatLngBounds, Map as LeafletMap,  } from "leaflet";
import { MapContainer, TileLayer, GeoJSON, ZoomControl, Marker, Popup  } from "react-leaflet";
import MarkerClusterGroup  from 'react-leaflet-cluster/lib/index'
import markeSVG from "./marker"
import { selectFilter, seacrhFilter } from "@/redux/features/projectsSlice";
import { useAppDispatch } from "@/redux/hooks";
import { districtsData } from "../../../public/data/District";

import Image from "next/image";


import "leaflet/dist/leaflet.css"
import change_icon from "../../../public/icons/circle_left.png"
import layer_icon from "../../../public/icons/layers.png"
import markerIcon from './marker_icon.svg'
import { districts } from "./Geojsons"

import { Projectinterface } from "@/app/interfaces/ProjectInterface";


import uca_card from "../../../public/images/media/uca/UCA_Photo_1.jpg"
import dairy from "../../../public/images/media/dairy/Khuf_1_Photo_1.jpg"
import entrepreneurship_center from "../../../public/images/media/uca/UCA_Photo_1.jpg"
// import foodSafety from "../../../public/images/media/uca/UCA_Photo_1.png"
import gosstand from "../../../public/images/media/gosstand/Gos_st_Photo_1.jpg"


import vegetable from "../../../public/images/media/vegetable/Derzud_Photo_2.jpg"
import TVETCentre from "../../../public/images/media/tvetcentre/tvet_uca_Photo_1.jpg"
import zindagi from "../../../public/images/media/cooperativezindagi/Coop - zind_Photo_1.jpg"
import gosstandBazar from "../../../public/images/media/foodsafety/Food_lab_Photo_1.jpg"



export default function Map() {

  const cardImages:any = {uca: uca_card, dairy: dairy, entrepreneurship_center, gosstand, vegetable, TVETCentre, zindagi, gosstandBazar};


  const mapRef = useRef<LeafletMap>(null);

  const southWest = new LatLng(36.672811, 67.335296);
  const northEast = new LatLng(40.000000, 75.150703);
  const bounds = new LatLngBounds(southWest, northEast);

  const [orthphoto, setOrthphoto] = useState(true);
  const [zooming, setZooming] = useState(8);

  const [styleG, setStyleG] = useState();
  const [fitBoundsV, setFitBoundsV] = useState(bounds)
  const state:any = useAppSelector((state) => state.ProjectsReducer);
  // const ucaLoc = new LatLng(37.492002,71.544383);

  const [projects, setProjects] = useState<Projectinterface[]>(
    state.filteredData
  );

  const iconPerson = new L.Icon({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon.src,
    iconSize: new L.Point(20, 20),
    // className: 'leaflet-div-icon'
  });
  

  const dispatch = useAppDispatch();

  const handleSelectFilter = (value: number) => {

    let districtName = "";
    districtsData.features.forEach(el => {if(el.properties.district == value) districtName = el.properties["District Name"]})
    dispatch(selectFilter(districtName));
    console.log('marker click', districtName)

  };


  // const handleSearchFilter = (event: any) => {
  //   dispatch(seacrhFilter(event.target.value));
  // };


  useEffect(() => {
    if (state.filteredData.length < 1) {
      setProjects(state.projects);
    } else {
      setProjects(state.filteredData);
    }
  }, [projects, state.projects, state.filteredData]);

  const zoom = zooming;

  const handleGeoJSONClick = (feature: any, layer: any) => {
    if (feature?.properties?.region === 4) {
      layer.on({
        // mouseover: highlightFeature,
        // mouseout: resetHighlight,
        click: () => {
          if(mapRef.current)
          mapRef.current.fitBounds(layer.getBounds());
        },
        mouseover: undefined,
        mouseout: undefined
      });
    }

  };

  

  return (
    <MapContainer
      ref={mapRef}
      id="map-gbao"
      className = "h-full w-[800px] max-w-full rounded-[30px] relative"
      center = {[36.861034, 72.276093]}
      zoom = {zoom}
      // scrollWheelZoom = {false}
      zoomControl = {false}
      maxBounds = {bounds}
      minZoom = {8}
    >
      <ZoomControl position="bottomright" /> 
      {orthphoto?<TileLayer
        url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmF6YXJraHVkb2V2IiwiYSI6ImNsampzeGx2NTBjYmMzbXFxaDBzeXEzcW8ifQ.TIi2ZR3-Vjj8mGghyIGchA"
        id='mapbox/satellite-streets-v12'
        attribution='Map data &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />: <TileLayer
        url="https://tile.openstreetmap.org-/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        opacity={0.8}
        
      />
      }
      {/* <MarkerCluster markers={markers} addMarkers={addMarkers} /> */}
      <MarkerClusterGroup
        chunkedLoading
        onClick={(ev:any) => {console.log(ev)}}
      >
        {projects.map((project, index) => (
          <Marker
            key={index}
            position={project.location}
            // title={project.name_en}
            icon={iconPerson}
            eventHandlers={{
              click: (e) => {
                handleSelectFilter(project.district_id)
              }
            }}
          >
          <Popup className="w-[300px] h-[200px] ">
              <Image className="w-[300px] h-[200px]" src={cardImages[project.banner_url]} alt="project"></Image>
          </Popup>

          </Marker>
        ))}
      </MarkerClusterGroup>
      {/* <Marker position={ucaLoc} >
       
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker> */}
      <GeoJSON
        style={(feature) => {
          return {
            fillColor: feature?.properties.color,
            weight: orthphoto?5:2,
            opacity: 1,
            color: "white",
            dashArray: "3",
            fillOpacity: orthphoto?0.2:0.7,
          }
        }
      }
        data={districts}
        onEachFeature={handleGeoJSONClick}

      />

      <div className="flex flex-col text-lg justify-end absolute right-[10px] bottom-[120px] z-[1000] gap-1" >
          
        <button className="w-[40px] bg-[white] px-2 py-2  rounded-[10px]" onClick={() => {setOrthphoto(!orthphoto)}}>
          <Image className="h-[100%] w-[100%]" src={layer_icon} alt="Picture of the author" />
        </button>
        {/* <button className="w-[40px] bg-[white] px-2 py-2  rounded-[10px]" onClick={()=>{ setZooming(8)}}>
          <Image className="h-[100%] w-[100%]" src={change_icon} alt="Picture of the author" />
        </button> */}

      </div>

    </MapContainer>
  );




}



// onEachFeature={(feature, layer) => {
//   if (feature.properties.region === 4) {
//     layer.on({
//       mouseover: (e) => { var layer = e.target;
//         layer.setStyle({
//           weight: 2,
//           color: "#666",
//           dashArray: "",
//           fillOpacity: 0.9,
//         });},
//       mouseout: (e) => {
//         var layer = e.target;

//         layer.setStyle({
//           weight: 1,
//           color: "#666",
//           dashArray: "",
//           fillOpacity: 0.7,
//         });
      
//         // resetStyle(layer);
//       },
//       click: {(e) => {
//         map.fitBounds(e.target.getBounds());
//       }},
//     });
//   }
// }}