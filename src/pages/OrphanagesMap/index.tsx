import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

import * as Style from "./styles";

import mapIcon from "../../utils/mapIcon";

import { FiArrowRight, FiPlus } from "react-icons/fi";
import mapMarkerImg from "../../images/map-marker.svg";

import api from "../../services/api";

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = React.useState<Orphanage[]>([]);

  React.useEffect(() => {
    async function getData() {
      try {
        const { data } = await api.get("/orphanages");
        setOrphanages(data);
      } catch {
        // tratar erros xD
      }
    }

    getData();
  }, []);

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

        {orphanages.map((orphanage) => {
          return (
            <Marker
              key={orphanage.id}
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
            >
              <Popup closeButton={false} minWidth={240} maxWidth={248}>
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="FFF" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>

      <Link to="/orphanages/create">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </Style.Container>
  );
};

export default OrphanagesMap;
