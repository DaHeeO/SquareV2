import {useState, useEffect} from 'react';

// icons
import Explore from '../../../assets/icons/Explore';
import PickUp from '../../../assets/icons/PickUp';
import Home from '../../../assets/icons/Home';
import Heart from '../../../assets/icons/Heart';
import User from '../../../assets/icons/User';

interface NavIconProps {
  focused: boolean;
  type: 'explore' | 'pickup' | 'main' | 'regular' | 'profile';
}

const getNavIconColor = (focused: boolean) => {
  let iconColor;

  iconColor = focused ? '#515151' : '#EBECF0';
  return iconColor;
};

const BottomTabIcon = ({focused, type}: NavIconProps) => {
  let IconComponent;

  const [color, setColor] = useState('#F78CA2');

  useEffect(() => {
    setColor(getNavIconColor(focused));
  }, [focused]);

  switch (type) {
    case 'explore':
      IconComponent = Explore;
      break;
    case 'pickup':
      IconComponent = PickUp;
      break;
    case 'main':
      IconComponent = Home;
      break;
    case 'regular':
      IconComponent = Heart;
      break;
    case 'profile':
      IconComponent = User;
      break;
    default:
      throw new Error(`Unknown icon type: ${type}`);
  }

  return (
    <>
      <IconComponent color={color} size={25} />
    </>
  );
};

export default BottomTabIcon;
