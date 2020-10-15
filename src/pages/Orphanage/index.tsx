import React from "react";
import * as Style from "./styles";

import { FiClock, FiInfo, FiArrowLeft } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import { useHistory } from "react-router-dom";
import L from "leaflet";

import mapMarkerImg from "../../images/map-marker.svg";

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
});

const Orphanage: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <Style.Container>
      <Style.Aside>
        <img src={mapMarkerImg} alt="Happy" />

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </Style.Aside>

      <Style.MainContent>
        <Style.OrphanageDetails>
          <img
            src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
            alt="Lar das meninas"
          />

          <Style.Images>
            <Style.Button isActive={true} type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </Style.Button>
            <Style.Button type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </Style.Button>
            <Style.Button type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </Style.Button>
            <Style.Button type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </Style.Button>
            <Style.Button type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </Style.Button>
            <Style.Button type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </Style.Button>
          </Style.Images>

          <Style.OrphanageContentDetails>
            <h1>Lar das meninas</h1>
            <p>
              Presta assistência a crianças de 06 a 15 anos que se encontre em
              situação de risco e/ou vulnerabilidade social.
            </p>

            <Style.MapContainer>
              <Map
                center={[-27.2092052, -49.6401092]}
                zoom={16}
                style={{ width: "100%", height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker
                  interactive={false}
                  icon={happyMapIcon}
                  position={[-27.2092052, -49.6401092]}
                />
              </Map>

              <footer>
                <a href="/">Ver rotas no Google Maps</a>
              </footer>
            </Style.MapContainer>

            <hr />

            <h2>Instruções para visita</h2>
            <p>
              Venha como se sentir mais à vontade e traga muito amor para dar.
            </p>

            <Style.OpenDetails>
              <Style.Hour>
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                8h às 18h
              </Style.Hour>
              <Style.OpenOnWeekends>
                <FiInfo size={32} color="#39CC83" />
                Atendemos <br />
                fim de semana
              </Style.OpenOnWeekends>
            </Style.OpenDetails>
          </Style.OrphanageContentDetails>
        </Style.OrphanageDetails>
      </Style.MainContent>
    </Style.Container>
  );
};

export default Orphanage;
