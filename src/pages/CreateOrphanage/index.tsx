import React from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";

import * as Style from "./styles";

import { FiPlus } from "react-icons/fi";

import mapMarkerImg from "../../images/map-marker.svg";
import Sidebar from "../../components/Sidebar";

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
});

const CreateOrphanage: React.FC = () => {
  return (
    <Style.Container>
      <Sidebar />
      <Style.MainContent>
        <form>
          <Style.Fieldset>
            <Style.FieldName>Dados</Style.FieldName>

            <Map
              center={[-27.2092052, -49.6401092]}
              style={{ width: "100%", height: 280 }}
              zoom={15}
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

            <Style.InputBlock>
              <Style.InputLabel htmlFor="name">Nome</Style.InputLabel>
              <input id="name" />
            </Style.InputBlock>

            <Style.InputBlock>
              <Style.InputLabel htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </Style.InputLabel>
              <textarea id="name" maxLength={300} />
            </Style.InputBlock>

            <Style.InputBlock>
              <Style.InputLabel htmlFor="images">Fotos</Style.InputLabel>

              <Style.UploadedImage></Style.UploadedImage>

              <Style.NewImage>
                <FiPlus size={24} color="#15b6d6" />
              </Style.NewImage>
            </Style.InputBlock>
          </Style.Fieldset>

          <Style.Fieldset>
            <Style.FieldName>Visitação</Style.FieldName>

            <Style.InputBlock>
              <Style.InputLabel htmlFor="instructions">
                Instruções
              </Style.InputLabel>
              <textarea id="instructions" />
            </Style.InputBlock>

            <Style.InputBlock>
              <Style.InputLabel htmlFor="opening_hours">Nome</Style.InputLabel>
              <input id="opening_hours" />
            </Style.InputBlock>

            <Style.InputBlock>
              <Style.InputLabel htmlFor="open_on_weekends">
                Atende fim de semana
              </Style.InputLabel>

              <Style.ButtonSelect isActive={true}>
                <button type="button">Sim</button>
                <button type="button">Não</button>
              </Style.ButtonSelect>
            </Style.InputBlock>
          </Style.Fieldset>

          <Style.ButtonConfirm type="submit">Confirmar</Style.ButtonConfirm>
        </form>
      </Style.MainContent>
    </Style.Container>
  );
};

export default CreateOrphanage;
