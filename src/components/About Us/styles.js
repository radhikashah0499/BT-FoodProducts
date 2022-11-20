import styled from 'styled-components';
import image from './img2.jpg';

export const PageBackground = styled.div`
  position : absoulete;
  background-image : url(${image}) ;
  background-position: center;
  height: 800px;
  opacity: 0.6;
  display: flex;
  justify-content: center;
  align-items: center;

`

export const Content = styled.div`
 position : relative;
 display: flex;
 color: black;
 top: 10px;
 width: 60%;
 max-height: 600px;
 overflow-y : scroll;
 background-color: white;
 flex-direction: column;
 padding: 8px;
 border-radius: 5px;

`

export const Title = styled.div`
 font-size: 20px;
 
`

