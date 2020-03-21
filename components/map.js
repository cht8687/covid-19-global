/*
 * Created by Robert Chang 15 March 2020
 */
import React from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function Map() {
  return <MapContainer>Map Component</MapContainer>;
}
