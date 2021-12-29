import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledBlock = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${({ color }) => color};
  &:hover {
    filter: brightness(85%);
  }
`;

const Block = () => {
  const [color, setColor] = useState('#ccc');
  const clickCount = useRef(0);

  const handleClick = () => {
    if (clickCount.current > 1) {
      setColor('#ff0000');
    } else {
      setColor('#00ff00');
      clickCount.current = clickCount.current + 1;
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setColor('#ccc');
      clickCount.current = 0;
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [color]);

  return <StyledBlock color={color} onClick={handleClick} />;
};

export default Block;
