import React from "react";
import * as Style from "./styles";

import { useHistory } from "react-router-dom";
import { Map, Marker, TileLayer } from "react-leaflet";
import { LeafletMouseEvent } from "leaflet";

import { FiPlus } from "react-icons/fi";

import Sidebar from "../../components/Sidebar";
import mapIcon from "../../utils/mapIcon";

import api from "../../services/api";

const CreateOrphanage: React.FC = () => {
  const history = useHistory();

  const [position, setPosition] = React.useState({ latitude: 0, longitude: 0 });

  function handleMapClick(e: LeafletMouseEvent) {
    const { lat, lng } = e.latlng;

    setPosition({
      latitude: lat,
      longitude: lng
    });
  }

  const [name, setName] = React.useState("");
  const [about, setAbout] = React.useState("");
  const [instructions, setInstructions] = React.useState("");
  const [opening_hours, setOpeningHours] = React.useState("");
  const [open_on_weekends, setOpenOnWeekends] = React.useState(true);
  const [images, setImages] = React.useState<File[]>([]);

  const [previewImages, setPreviewImages] = React.useState<string[]>([]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const { latitude, longitude } = position;

    const data = new FormData();

    data.append("name", name);
    data.append("about", about);
    data.append("latitude", String(latitude));
    data.append("longitude", String(longitude));
    data.append("instructions", instructions);
    data.append("opening_hours", opening_hours);
    data.append("open_on_weekends", String(open_on_weekends));
    images.forEach((image) => {
      data.append("images", image);
    });

    await api.post("/orphanages", data);

    alert("Cadastro realizado com sucesso!");

    history.push("/app");
  }

  function handleSelectImages(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      return;
    }

    const selectedImages = Array.from(e.target.files);

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map((image) => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectedImagesPreview);
  }

  return (
    <Style.Container>
      <Sidebar />
      <Style.MainContent>
        <form onSubmit={handleSubmit}>
          <Style.Fieldset>
            <Style.FieldName>Dados</Style.FieldName>

            <Map
              center={[-22.7218373, -43.3687106]}
              style={{ width: "100%", height: 280 }}
              zoom={15}
              onClick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>

            <Style.InputBlock>
              <Style.InputLabel htmlFor="name">Nome</Style.InputLabel>
              <input
                id="name"
                onChange={({ target }) => setName(target.value)}
              />
            </Style.InputBlock>

            <Style.InputBlock>
              <Style.InputLabel htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </Style.InputLabel>
              <textarea
                id="name"
                maxLength={300}
                onChange={({ target }) => setAbout(target.value)}
              />
            </Style.InputBlock>

            <Style.InputBlock>
              <Style.InputLabel htmlFor="images">Fotos</Style.InputLabel>

              <Style.ImagesContainer>
                {previewImages.map((image, index) => {
                  return <img src={image} alt={image} key={index} />;
                })}
                <Style.NewImage htmlFor="image[]">
                  <FiPlus size={24} color="#15b6d6" />
                </Style.NewImage>
              </Style.ImagesContainer>
              <Style.FileInput
                multiple
                onChange={handleSelectImages}
                type="file"
                id="image[]"
              />
            </Style.InputBlock>
          </Style.Fieldset>

          <Style.Fieldset>
            <Style.FieldName>Visitação</Style.FieldName>

            <Style.InputBlock>
              <Style.InputLabel htmlFor="instructions">
                Instruções
              </Style.InputLabel>
              <textarea
                id="instructions"
                onChange={({ target }) => setInstructions(target.value)}
              />
            </Style.InputBlock>

            <Style.InputBlock>
              <Style.InputLabel htmlFor="opening_hours">
                Horário de funcionamento
              </Style.InputLabel>
              <input
                id="opening_hours"
                onChange={({ target }) => setOpeningHours(target.value)}
              />
            </Style.InputBlock>

            <Style.InputBlock>
              <Style.InputLabel htmlFor="open_on_weekends">
                Atende fim de semana
              </Style.InputLabel>

              <Style.ButtonSelect>
                <Style.ButtonForSelect
                  onClick={() => setOpenOnWeekends(true)}
                  isActive={open_on_weekends ? true : false}
                  type="button"
                >
                  Sim
                </Style.ButtonForSelect>
                <Style.ButtonForSelect
                  onClick={() => setOpenOnWeekends(false)}
                  isActive={!open_on_weekends ? true : false}
                  type="button"
                >
                  Não
                </Style.ButtonForSelect>
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
