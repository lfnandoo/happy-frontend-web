import React from "react";
import * as Style from "./styles";
import { useParams } from "react-router-dom";

import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";

import Aside from "../../components/Sidebar";
import mapIcon from "../../utils/mapIcon";

import api from "../../services/api";

interface Orphanage {
  latitude: number;
  longitude: number;
  name: string;
  description: string;
  about: string;
  opening_hours: string;
  opening_on_weekends: string;
  images: Array<{
    id: number;
    url: string;
  }>;
}

interface OrphanageParams {
  id: string;
}

const Orphanage: React.FC = () => {
  const params = useParams<OrphanageParams>();
  const [orphanage, setOrphanage] = React.useState<Orphanage>();
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);

  React.useEffect(() => {
    async function getData() {
      try {
        const { data } = await api.get(`/orphanages/${params.id}`);
        setOrphanage(data);
      } catch {
        // tratar erros xD
      }
    }

    getData();
  }, [params.id]);

  if (!orphanage) {
    return <p>Carregando...</p>;
  }

  return (
    <Style.Container>
      <Aside />
      <Style.MainContent>
        <Style.OrphanageDetails>
          <img
            src={orphanage.images[activeImageIndex].url}
            alt={orphanage.name}
          />

          <Style.Images>
            {orphanage.images.map((image, index) => {
              return (
                <Style.Button
                  key={image.id}
                  isActive={activeImageIndex === index ? true : false}
                  type="button"
                  onClick={() => {
                    setActiveImageIndex(index);
                  }}
                >
                  <img src={image.url} alt={orphanage.name} />
                </Style.Button>
              );
            })}
          </Style.Images>

          <Style.OrphanageContentDetails>
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <Style.MapContainer>
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
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
                  icon={mapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>

              <footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </Style.MapContainer>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.about}</p>

            <Style.OpenDetails>
              <Style.Hour>
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </Style.Hour>
              {orphanage.opening_on_weekends ? (
                <Style.OpenOnWeekends>
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </Style.OpenOnWeekends>
              ) : (
                <Style.OpenOnWeekends dontOpen>
                  <FiInfo size={32} color="#FF669D" />
                  Não atendemos <br />
                  fim de semana
                </Style.OpenOnWeekends>
              )}
            </Style.OpenDetails>
          </Style.OrphanageContentDetails>
        </Style.OrphanageDetails>
      </Style.MainContent>
    </Style.Container>
  );
};

export default Orphanage;
