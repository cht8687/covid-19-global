import React from 'react';
import styled, {keyframes} from 'styled-components';

const BtnContainer = styled.div`
  display: inline-block !important;
  white-space: nowrap;
  min-width: 160px;
`;

const KofiText = styled.span`
  color: #fff !important;
  letter-spacing: -0.15px !important;
  vertical-align: middle;
  line-height: 33px !important;
  padding: 0;
  text-align: center;
  text-decoration: none !important;
  text-shadow: 0 1px 1px rgba(34, 34, 34, 0.05);
`;

const wiggle = keyframes`
 0% {
   transform:rotate(0) scale(1)
  }
  60% {
   transform:rotate(0) scale(1)
  }
  75% {
   transform:rotate(0) scale(1.12)
  }
  80% {
   transform:rotate(0) scale(1.1)
  }
  84% {
   transform:rotate(-10deg) scale(1.1)
  }
  88% {
   transform:rotate(10deg) scale(1.1)
  }
  92% {
   transform:rotate(-10deg) scale(1.1)
  }
  96% {
   transform:rotate(10deg) scale(1.1)
  }
  100% {
   transform:rotate(0) scale(1)
  }`;

const Img = styled.img`
  display: initial !important;
  vertical-align: middle;
  height: 13px !important;
  width: 20px !important;
  padding-top: 0;
  padding-bottom: 0;
  border: none;
  margin-top: 0;
  margin-right: 5px;
  margin-left: 0;
  margin-bottom: 3px;
  content: url('/cup-border.png');
  &:after {
    vertical-align: middle;
    height: 25px;
    padding-top: 0;
    padding-bottom: 0;
    border: none;
    margin-top: 0;
    margin-right: 6px;
    margin-left: 0;
    margin-bottom: 4px !important;
    content: url('/whitelogo.svg');
  }
  display: initial;
  animation: ${wiggle} 3s infinite;
`;

const KofiButton = styled.a`
  box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);
  line-height: 36px !important;
  min-width: 150px;
  display: inline-block !important;
  background-color: #29abe0;
  padding: 2px 12px !important;
  text-align: center !important;
  border-radius: 7px;
  color: #fff;
  cursor: pointer;
  overflow-wrap: break-word;
  vertical-align: middle;
  border: 0 none #fff !important;
  font-family: 'Quicksand', Helvetica, Century Gothic, sans-serif !important;
  text-decoration: none;
  text-shadow: none;
  font-weight: 700 !important;
  font-size: 14px !important;
  &:visited {
    color: #fff !important;
    text-decoration: none !important;
  }
  &:hover {
    opacity: 0.85;
    color: #f5f5f5 !important;
    text-decoration: none !important;
  }
  &:active {
    color: #f5f5f5 !important;
    text-decoration: none !important;
  }
`;
export default function KoFi(props) {
  const {color, id, label} = props;
  return (
    <BtnContainer>
      <KofiButton
        title={label}
        style={{
          backgroundColor: color,
        }}
        href={'https://ko-fi.com/' + id}
        target="_blank"
        rel="noopener noreferrer">
        <KofiText>
          <Img src="https://ko-fi.com/img/cup-border.png" alt="Ko-Fi button" />{' '}
          {label}{' '}
        </KofiText>{' '}
      </KofiButton>{' '}
    </BtnContainer>
  );
}