import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY_VALUE = 'keyFirstLaunch';

// 키값에 true로 저장한다.
function setAppLaunched() {
  AsyncStorage.setItem(KEY_VALUE, 'true');
}

export default async function checkFirstLaunch() {

  try {
    // 값이 저장 되어있는지 판단
    const isFirstLaunched = await AsyncStorage.getItem(KEY_VALUE);
    // 값이 없다면
    if (isFirstLaunched === null) {
      // true 저장
      setAppLaunched();
      // 앱 처음 깔았다는 의미로 true 반환
      return true;
    }
    // 값이 있으면 그게 깔고 다음에 실행 한거니깐 false 반환
    return false;
  } 
  catch (error) {
  	  // 에러 발생 시에도 false 로 반환 
      console.log(' [chk first launch] :' + error);  
    return false; // Error
  }
}