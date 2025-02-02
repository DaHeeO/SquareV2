import { PERMISSIONS} from "react-native-permissions";

export const APP_PERMISSION_CODE = {
    "location": [PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION, PERMISSIONS.IOS.LOCATION_WHEN_IN_USE],
    "notification": [PERMISSIONS.ANDROID.POST_NOTIFICATIONS],
    "camera": [PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.IOS.CAMERA],
    "photo": [PERMISSIONS.ANDROID.READ_MEDIA_IMAGES, PERMISSIONS.IOS.PHOTO_LIBRARY],
    "contact": [PERMISSIONS.ANDROID.READ_CONTACTS, PERMISSIONS.IOS.CONTACTS]
}