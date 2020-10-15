import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;

  .leaflet-container {
    border-bottom: 1px solid #DDE3F0;
    border-radius: 20px;
  }
`;

export const Aside = styled.aside`
  position: fixed;
  height: 100%;
  padding: 32px 24px;
  background: linear-gradient(329.54deg, #15B6D6 0%, #15D6D6 100%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > img {
    width: 48px;
  }

  > a, button {
    width: 48px;
    height: 48px;

    border: 0;

    background: #12AFCB;
    border-radius: 16px;

    cursor: pointer;

    transition: background-color 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;
  
    &:hover {
    background: #17D6EB;
    }
  }
`;

export const MainContent = styled.main`
  flex: 1;
`;

export const OrphanageDetails = styled.div`
  width: 700px;
  margin: 64px auto;

  background: #FFFFFF;
  border: 1px solid #D3E2E5;
  border-radius: 20px;

  overflow: hidden;

  > img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

export const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(6 ,1fr);
  column-gap: 16px;

  margin: 16px 40px 0;

  > button {

  }

  > button:first-child {
  }

  
`;

export const Button = styled.button`
  border: 0;
  height: 88px;
  background: none;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  outline: none;
  opacity: ${({ isActive }: { isActive?: boolean }) => isActive ? 1 : .6};

  > img {
    width: 100%;
    height: 88px;
    object-fit: cover;
  }
`;

export const OrphanageContentDetails = styled.div`
  padding: 80px;

  > h1 {
    color: #4D6F80;
    font-size: 54px;
    line-height: 54px;
    margin-bottom: 8px;
  }

  > p {
  line-height: 28px;
  color: #5C8599;
  margin-top: 24px;
  }

  > hr {
    width: 100%;
    height: 1px;
    border: 0;
    background: #D3E2E6;
    margin: 64px 0;
  }

  > h2 {
    font-size: 36px;
    line-height: 46px;
    color: #4D6F80;
  }
`;

export const MapContainer = styled.div`
  margin-top: 64px;
  background: #E6F7FB;
  border: 1px solid #B3DAE2;
  border-radius: 20px;

  > footer {
    padding: 20px 0;
    text-align: center;

    > a {
      line-height: 24px;
      color: #0089A5;
      text-decoration: none;
    }
  }
`;

export const OpenDetails = styled.div`
  margin-top: 24px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;

  > div {
    padding: 32px 24px;
    border-radius: 20px;
    line-height: 28px;

    > svg {
      display: block;
      margin-bottom: 20px;
    }
  }
`;

export const Hour = styled.div`
  background: linear-gradient(149.97deg, #E6F7FB 8.13%, #FFFFFF 92.67%);
  border: 1px solid #B3DAE2;
  color: #5C8599;
`;

export const OpenOnWeekends = styled.div`
  background: ${({ dontOpen}: { dontOpen?: boolean }) => dontOpen ? "linear-gradient(154.16deg, #FDF0F5 7.85%, #FFFFFF 91.03%)" : "linear-gradient(154.16deg, #EDFFF6 7.85%, #FFFFFF 91.03%)"} linear-gradient(154.16deg, #EDFFF6 7.85%, #FFFFFF 91.03%);
  border: ${({ dontOpen }: { dontOpen?: boolean }) => dontOpen ? "1px solid #FFBCD4" : "1px solid #A1E9C5"};
  color: ${({ dontOpen }: { dontOpen?: boolean }) => dontOpen ? "#FF669D" : "#37C77F"};
`;

export const ContactButton = styled.button`
  margin-top: 64px;

  width: 100%;
  height: 64px;
  border: 0;
  cursor: pointer;
  background: #3CDC8C;
  border-radius: 20px;
  color: #FFFFFF;
  font-weight: 800;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  &:hover {
    background: #36CF82;
  }

  > svg {
    margin-right: 16px;
  }
`;