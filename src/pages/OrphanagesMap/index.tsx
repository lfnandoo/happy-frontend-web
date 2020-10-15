import React from "react";

import * as Style from "./styles";
import "leaflet/dist/leaflet.css";

import mapMarkerImg from "../../images/map-marker.svg";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import Leaflet from "leaflet";

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
});

const OrphanagesMap: React.FC = () => {
  return (
    <Style.Container>
      <aside>
        <Style.Header>
          <img src={mapMarkerImg} alt="" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </Style.Header>

        <Style.Footer>
          <strong>Belford Roxo</strong>
          <span>Rio de Janeiro</span>
        </Style.Footer>
      </aside>

      <Map
        center={[-22.7150256, -43.3777264]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> OPENSTREET MAP */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        <Marker icon={mapIcon} position={[-22.7150256, -43.3777264]}>
          <Popup closeButton={false} minWidth={240} maxWidth={248}>
            Lar das menina
            <Link to="/">
              <FiArrowRight size={20} color="FFF" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </Style.Container>
  );
};

export default OrphanagesMap;
