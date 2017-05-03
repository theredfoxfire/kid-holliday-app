//@flow

export type NotificationsState = Map<number, Notification>;

export type Notification = {
  id: number;
  from: ?number;
  to: ?number;
  message: string;
  status: boolean;
  checked: boolean;
  createdAt: string;
  updatedAt: string;
  relatedId: number;
  relatedType: string;
  commentDetail?: {
    id: number;
    userId: number;
    post: string;
    createdAt: string;
    updatedAt: string;
  };
  userDetail?: {
    id: number;
    firstName: string;
    avatar: string;
    avatarFb: string;
    premium: boolean;
  };
  threadDetail?: {
    id: number;
    thread: string;
    category: string;
    subCategory: string;
  };
  reviewDetail?: {
    id: number;
    userID: number;
    productID: number;
    review: string;
    createdAt: string;
    updatedAt: string;
    rate: number;
  };
  productDetail?: {
    id: number;
    brand: string;
    productCategory: string;
    photoGalleryID: number;
    slug: string;
    priceMin: number;
    priceMax: number;
    createdAt: string;
    updatedAt: string;
    photo: string;
    photoThumb: string;
    rating: string;
  };
  groupDetail?: {
    id: number;
    name: string;
  };
  type: string;
  date: string;
};
