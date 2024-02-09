export const config = {
    screens: {
    AccessToken: 'access-token',
    Login: 'login',
    Kakao: 'kakao',
    Permission: 'permission',
    InitialStack: {
        path: 'initial-stack',
        screens: {
            Location: 'location',
            CurLocation: 'cur-location',
        },
    },
    FullScreenStack: {
        path: 'full',
        screens: {
            Store: 'store',
            StoreDetail: 'store-detail/:id',
            StoreLocation: 'store-location',
        },
    },
    BottomTab: {
        path: 'bottom',
        screens: {
            ExploreStack: {
                path: 'explore-stack',
                screens: {
                    Explore: 'explore',
                },
            },
            PickUpStack: {
                path: 'pickup-stack',
                screens: {
                    PickUp:'pickup',
                },
            },
            MainStack: {
                path: 'main-stack',
                screens: {
                    Main: 'main',
                },
            },
            RegularStack: {
                path: 'regular-stack',
                screens: {
                    Regular: 'regular',
                },
            },
            ProfileStack: {
                path: 'profile-stack',
                screens: {
                    Profile: 'profile',
                    Edit: 'edit',
                    MyCoupon: 'my-coupon',
                    MyOrderList: 'my-order-list',
                    MyReview: 'my-review',
                },
            },
        },
    },
    },
};