export interface ListInterface {
  id: number;
  name: string;
  product: string;
  rating: number;
  review_cnt: number;
  is_ts: boolean;
  is_pn: boolean;
  image: any;
}

export const ListingData = {
  "status_code": 200,
  "message": "success",
  "data" : [
    {
      "id": 1,
      "name": "오다커피",
      "product": "아이스 아메리카노, 아인슈페너, 바닐라 라뗴 ...",
      "rating": 4.5,
      "review_cnt": 20,
      "is_ts": true,
      "is_pn": true,
      "image": null,
	  },
	  {
      "id": 2,
      "name": "세훈빵집",
      "product":  "아이스 아메리카노, 아인슈페너, 바닐라 라뗴 ...",
      "rating": 4.5,
      "review_cnt": 20,
      "is_ts": true,
      "is_pn": false,
      "image": null,
	  },
    {
      "id": 3,
      "name": "세훈빵집",
      "product":  "아이스 아메리카노, 아인슈페너, 바닐라 라뗴 ...",
      "rating": 4.5,
      "review_cnt": 20,
      "is_ts": false,
      "is_pn": true,
      "image": null,
	  },
    {
      "id": 4,
      "name": "세훈빵집",
      "product":  "아이스 아메리카노, 아인슈페너, 바닐라 라뗴 ...",
      "rating": 4.5,
      "review_cnt": 20,
      "is_ts": true,
      "is_pn": true,
      "image": null,
	  },
    {
      "id": 5,
      "name": "세훈빵집",
      "product":  "아이스 아메리카노, 아인슈페너, 바닐라 라뗴 ...",
      "rating": 4.5,
      "review_cnt": 20,
      "is_ts": false,
      "is_pn": false,
      "image": null,
	  },
    {
      "id": 6,
      "name": "세훈빵집",
      "product":  "아이스 아메리카노, 아인슈페너, 바닐라 라뗴 ...",
      "rating": 4.5,
      "review_cnt": 20,
      "is_ts": true,
      "is_pn": true,
      "image": null,
	  },
    {
      "id": 7,
      "name": "세훈빵집",
      "product":  "아이스 아메리카노, 아인슈페너, 바닐라 라뗴 ...",
      "rating": 4.5,
      "review_cnt": 20,
      "is_ts": true,
      "is_pn": true,
      "image": null,
	  },
    {
      "id": 8,
      "name": "세훈빵집",
      "product":  "아이스 아메리카노, 아인슈페너, 바닐라 라뗴 ...",
      "rating": 4.5,
      "review_cnt": 20,
      "is_ts": true,
      "is_pn": true,
      "image": null,
	  },
    {
      "id": 9,
      "name": "세훈빵집",
      "product":  "아이스 아메리카노, 아인슈페너, 바닐라 라뗴 ...",
      "rating": 4.5,
      "review_cnt": 20,
      "is_ts": true,
      "is_pn": true,
      "image": null,
	  },
    {
      "id": 10,
      "name": "세훈빵집",
      "product":  "아이스 아메리카노, 아인슈페너, 바닐라 라뗴 ...",
      "rating": 4.5,
      "review_cnt": 20,
      "is_ts": true,
      "is_pn": true,
      "image": null,
	  },
  ]
}

export interface StoreInterface {
  uid: number;
  name: string;
  phone: string;
  address: string;
  dibs_count: number;
  review_count: number;
  rating: number;
  distance: number;
  duration: number;
  pickup_time: number;
  is_ts: boolean;
  is_pn: boolean;
  long: number;
  lat: number;
  image: string;
}


export const StoreData = {
  "status_code": 200,
  "message": "success",
  "data" : {
    "uid": 1,
    "name": "펭소커피",
    "phone": "04212345678",
    "address": "대전광역시 유성구 덕명동 OOO",
    "dibs_count": 20,
    "review_count": 50,
    "rating": 3.5,
    "distance": 150,
    "duration": 15,
    "pickup_time": 15,
    "is_ts": true,
    "is_pn": true,
    "lat": 36.34899084010318,
    "long": 127.29732119148132,
    "image": null,
  }
}

export interface CouponInterface {
  id: number;
  standard_price: number;
  discount_price: number;
  started_at: string;
  finished_at: string;
  store: StoreProps;
  product: ProductProps;
}

interface StoreProps {
  id: number;
  name: string;
  image: string;
}

interface ProductProps {
  id: number;
  name: string;
  image: string;
}

export const CouponData ={
  "status_code": 200,
  "message": "success",
  "data" : [
    {
      "id": 1,
      "started_at": "2023-11-11 11:11:11",
      "finished_at": "2023-11-15 11:11:11",
      "standard_price": 100000,
      "discount_price": 1000,
      "store": {
        "id": 1,
        "name": "오다커피",
        "image": null,
      },
      "product": {
        "id": 1,
        "name": "최고의 맛, 펭귄빵",
        "image": null,
      }
    },
    {
      "id": 2,
      "started_at": "2023-11-11 11:11:11",
      "finished_at": "2023-11-15 11:11:11",
      "standard_price": 100000,
      "discount_price": 1000,
      "store": {
        "id": 2,
        "name": "세훈빵집",
        "image": null,
      },
      "product": {
        "id": 3,
        "name": "세후니 우측 4번 갈비찜",
        "image": null,
      }
    },
    {
      "id": 3,
      "started_at": "2023-11-11 11:11:11",
      "finished_at": "2023-11-15 11:11:11",
      "standard_price": 100000,
      "discount_price": 1000,
      "store": {
        "id": 1,
        "name": "오다커피",
        "image": null,
      },
      "product": {
        "id": 1,
        "name": "최고의 맛, 펭귄빵",
        "image": null,
      }
    },
    {
      "id": 4,
      "started_at": "2023-11-11 11:11:11",
      "finished_at": "2023-11-15 11:11:11",
      "standard_price": 100000,
      "discount_price": 1000,
      "store": {
        "id": 1,
        "name": "오다커피",
        "image": null,
      },
      "product": {
        "id": 1,
        "name": "최고의 맛, 펭귄빵",
        "image": null,
      }
    },
  ]
}