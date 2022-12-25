import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const Button = styled.button`
  display: inline-block;
  margin-bottom: 20px;
  padding: 8px 14px;
  font-weight: 500;
  font-size: 18px;
  border-radius: 4px;
  border: none;
  color: #6a9bd8;
  background-color: #ebf5fc;
  box-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  :hover,
  :focus-visible {
    color: #ebf5fc;
    background-color: #6a9bd8;
  }
  :focus {
    outline: 3px solid #ebf5fc;
    box-shadow: 0px 0px 0px 6px #6a9bd8;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 40px;
`;

export const Img = styled.img`
  border-radius: 4px;
  box-shadow: var(--main-shadow);
`;

export const Wrapper = styled.div``;

export const Title = styled.h2`
  margin-bottom: 45px;
  font-weight: 700;
  font-size: 36px;
  color: #6a9bd8;
  text-shadow: var(--main-shadow);
`;

export const Year = styled.span`
  font-weight: 200;
  color: var(--secondary);
`;

export const Description = styled.p`
  margin-bottom: 15px;
  font-size: 22px;
  font-weight: 500;
  color: var(--accent);
`;



export const Text = styled.span`
  font-weight: 300;
  letter-spacing: 0.05em;
  color: var(--secondary);
`;

export const AddInfo = styled(NavLink)`
  display: inline-block;
  padding: 8px 14px;
  font-weight: 500;
  font-size: 18px;
  border-radius: 4px;
  border: none;
  color: var(--accent);
  background-color: var(--bg);
  box-shadow: var(--main-shadow);
  transition: all 200ms ease-in-out;
  cursor: pointer;
  &.active {
    color: var(--bg);
    background-color: var(--accent);
    box-shadow: var(--main-shadow);
  }
  :hover,
  :focus-visible {
    color: var(--bg);
    background-color: var(--accent);
  }
  :focus {
    outline: 3px solid var(--bg);
    box-shadow: 0px 0px 0px 6px var(--accent);
  }
`;