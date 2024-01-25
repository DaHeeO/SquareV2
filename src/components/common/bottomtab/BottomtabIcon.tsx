import {useState, useEffect} from 'react';
import {colors} from '../globalStyles';

// icons
import Map from '../../../assets/icons/Map';
import PickUp from '../../../assets/icons/PickUp';
import Home from '../../../assets/icons/Home';
import Heart from '../../../assets/icons/Heart';
import User from '../../../assets/icons/User';


interface NavIconProps {
  focused: boolean;
  type: 'map' | 'pickup' | 'home' | 'dib' | 'my';
}

const getNavIconColor = (focused: boolean) => {
  let iconColor;

  iconColor = focused ? colors.text._primary : colors.white._700;
  return iconColor;
};

const NavIcon = ({focused, type}: NavIconProps) => {
  let IconComponent;

  const [color, setColor] = useState('#F78CA2');

  useEffect(() => {
    setColor(getNavIconColor(focused));
  }, [focused]);

  switch (type) {
    case 'map':
      IconComponent = Map;
      break;
    case 'pickup':
      IconComponent = PickUp;
      break;
    case 'home':
      IconComponent = Home;
      break;
    case 'dib':
      IconComponent = Heart;
      break;
    case 'my':
      IconComponent = User;
      break;
    default:
      throw new Error(`Unknown icon type: ${type}`);
  }

  return (
    <IconComponent color={color} size={25} />
  );
};

export default NavIcon;
