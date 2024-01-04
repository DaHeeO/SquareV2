import {useState, useEffect} from 'react';

// icons
import MainIcon from '../../../assets/icons/MainIcon';
import PickUpIcon from '../../../assets/icons/ChartIcon';
import ExploreIcon from '../../../assets/icons/SocialIcon';
import RegularIcon from '../../../assets/icons/EditIcon';
import ProfileIcon from '../../../assets/icons/ProfileIcon';

// styles
import * as varStyles from '../globalStyles';

interface NavIconProps {
  focused: boolean;
  type: 'main' | 'social' | 'chart' | 'edit' | 'profile';
}

const getNavIconColor = (focused: boolean) => {
  let iconColor;

  iconColor = focused ? '#515151' : '#EBECF0';
  return iconColor;
};

const NavIcon = ({focused, type}: NavIconProps) => {
  let IconComponent;

  const [color, setColor] = useState('#F78CA2');

  useEffect(() => {
    setColor(getNavIconColor(focused));
  }, [focused]);

  switch (type) {
    case 'main':
      IconComponent = MainIcon;
      break;
    case 'explore':
      IconComponent = ExploreIcon;
      break;
    case 'pickup':
      IconComponent = PickUpIcon;
      break;
    case 'regular':
      IconComponent = RegularIcon;
      break;
    case 'profile':
      IconComponent = ProfileIcon;
      break;
    default:
      throw new Error(`Unknown icon type: ${type}`);
  }

  return (
    <>
      <IconComponent color={color} width={25} height={25} />
    </>
  );
};

export default NavIcon;
