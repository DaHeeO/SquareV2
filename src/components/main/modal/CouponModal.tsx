import { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';

// styled
import { Text } from '../../common/fonts';
import { colors } from '../../common/globalStyles';

// component

interface ModalProps {
    bottomSheetModalRef: any;
}

const CouponModal = ({bottomSheetModalRef}: ModalProps) => {

  // variables
  const snapPoints = useMemo(() => ['90%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop {...props} 
    pressBehavior="close" 
    appearsOnIndex={0}	
    disappearsOnIndex={-1}	
    />,
    [],
  );


  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={0}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backdropComponent={renderBackdrop}
    >
      <View>
        <Text size={14} color='black' weight={"Regular"}>Awesome 🎉</Text>
      </View>
    </BottomSheetModal>
  );
};

export default CouponModal;
