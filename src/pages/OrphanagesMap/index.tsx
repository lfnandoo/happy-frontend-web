import React from "react";

import { Container, Header, Footer } from "./styles";
import "leaflet/dist/leaflet.css";

import mapMarkerImg from "../../images/map-marker.svg";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <aside>
        <Header>
          <img src={mapMarkerImg} alt="" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </Header>

        <Footer>
          <strong>Belford Roxo</strong>
          <span>Rio de Janeiro</span>
        </Footer>
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
      </Map>

      <Link to="">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </Container>
  );
};

export default OrphanagesMap;
