import styled from 'styled-components';
import check from '../../images/check-icn.svg';

export const DetailsContainer = styled.div`
   width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;
export const ProductWrapper = styled.div`
 padding: 2rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

`;

export const LeftDetails = styled.div`

padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    padding: 0.5rem 0rem;
    img {
      width: 70%;
      height: 70%;
      object-fit: cover;
    }
  }

  img {
    width: 80%;
    height: 80%;
    object-fit: cover;
    border-radius: 20px;
  }
  
  

`;

export const RightDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  line-height: 1.4;
  padding: 1rem 2rem;
`;

export const ProductDesc = styled.div`
   border-bottom: 1px solid #e0bd1f;
  margin-bottom: 20px;

  span{
    font-size: 16px;
  color: #358ED7;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight:600;
  
  }

  h1 {
  font-weight: 300;
  font-size: 52px;
  color: #43484D;
  letter-spacing: -2px;
  margin:20px 0px;
}
p {
  font-size: 16px;
  font-weight: 300;
  color: #86939E;
  line-height: 24px;
  margin-bottom: 20px;
}
`;

export const ProductConfiguration = styled.div`
  
`;
export const ProductColor = styled.div`
  margin-bottom: 30px;
  span{
      font-size: 20px !important;
      
  }
`;

export const ColorChoose = styled.div`
 display: flex;


  
`;
export const Color = styled.div`
 display: inline-block;
}

  input[type="radio"] {
  display: none;
}

input[type="radio"] + label span {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: -1px 4px 0 0;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 50%;
  
}

input[type="radio"] + label span {
  border: 2px solid #FFFFFF;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.33);
}

input[type="radio"]#red + label span {
  background-color: #C91524;
}

input[type="radio"]#blue + label span {
  background-color: #314780;
}

input[type="radio"]#black + label span {
  background-color: #323232;
}

input[type="radio"]:checked + label span {
 background-image: url(${check});
  background-repeat: no-repeat;
  background-position: center;
}
`;

export const ProductPrice = styled.div`
  display: flex;
  align-items: center;

  span {
  font-size: 26px;
  font-weight: 300;
  color: #43474D;
  margin-right: 20px;
}
`;
export const AddButton = styled.button`
    display: inline-block;
  background: #7DC855;
  border-radius: 6px;
  font-size: 16px;
  color: #FFFFFF;
  text-decoration: none;
  padding: 12px 30px;
  transition: all .5s;
  border: none;

  &:hover{
    background: #64af3d;
  }
`;