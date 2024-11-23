// interface ProductDetail {
//     category: string;
//     description: string;
//     id: number;
//     image: string;
//     price: number;
//     rating: {
//       count: number;
//       rate: number;
//     };
//     title: string;
//     addedToCart: boolean;
//     quantity: number;
//   }
  
  export type RootStackParamList = {
    AppNavigator: undefined;
    AuthNavigator: undefined;
    Products: undefined;
    ProductDetails: undefined;
    Cart: undefined;
    // ProductDetail: {param: ProductDetail; index: number};
  };