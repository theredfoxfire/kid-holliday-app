// @flow

import type {User} from './User';
import type {CostDetail} from './Cost';
import type {Shop} from './Shop';
import type {MarketPrice} from './MarketPrice';
import type {
  Plant,
  PlantDetail,
  PlantDetailWithPhotos,
  PlantingInformation,
  GalleryData,
} from './Plant';
import type {PestDiseaseCommodity, PestDisease, PestDiseaseDetail, PestDiseaseDetailWithCountermeasure} from './PestDisease';
import type {Product, ProductDetail, ProductState, ProductCategory} from './Product';
import type {About, PrivacyPolicy} from './About';
import type {ContactUs} from './Office';
import type {NewsState} from './News';
import type {Thread, ThreadCategoryState, Forum, Group} from './Forum';
import type {NavigationState as Navigation} from './Navigation';
import type {SelectedPestDisease} from './SelectedPestDisease';
import type {Loaders} from './Loaders';
import type {TempProfile} from './User';
import type {NotificationsState as Notifications} from './Notifications';
import type {NewPlantState} from './NewPlant';
import type {ModalState} from './Modal';
import type {FavoriteState} from './Favorite';
import type {LocationState} from './Location';
import type {NearbyStoreState} from './NearbyStore';
import type {CodePushState} from './CodePushState';
import type {Highlight} from './Highlight';
import type {PlantingGuideState} from './PlantingGuide';
import type {GamificationState} from './Gamification';
import type {Reward} from '../types/Reward';

export type RootState = {
  selectedStore: number;
  productList: {products: Map<number, Product>; activeList: 'search' | 'filter' | 'normal'};
  productCommodity: Array<ProductCategory>;
  loadingIndicator: Loaders;
  currentUser: User;
  selectedPlant: number;
  shops: Map<number, Shop>;
  plantingInformation: PlantingInformation;
  plants: Map<number, Plant | PlantDetail | PlantDetailWithPhotos>;
  pestDiseaseCommodities: Map<number, PestDiseaseCommodity>;
  pests: Map<number, PestDisease | PestDiseaseDetail | PestDiseaseDetailWithCountermeasure>;
  diseases: Map<number, PestDisease | PestDiseaseDetail | PestDiseaseDetailWithCountermeasure>;
  products: Map<number, Product | ProductDetail>;
  seedProducts: ProductState;
  fertilizerProducts: ProductState;
  pesticideProducts: ProductState;
  toolsProducts: ProductState;
  about: About;
  privacypolicy: PrivacyPolicy;
  contactUs: ContactUs;
  analysis: Map<number, CostDetail>;
  navigation: Navigation;
  selectedPlantCost: number;
  selectedPestDisease: SelectedPestDisease;
  marketPrice: MarketPrice;
  news: NewsState;
  threads: Map<string, Thread>;
  selectedThreadID: string;
  selectedAnalysis: number;
  selectedProduct: number;
  analysisID: string;
  tempProfile: TempProfile;
  notifications: Notifications;
  guestMode: boolean;
  addPhoto: GalleryData;
  email: string;
  newPlant: NewPlantState;
  newItemModal: ModalState;
  tutorialModal: ModalState;
  favorite: FavoriteState;
  threadCategory: ThreadCategoryState;
  location: LocationState;
  isAddPhoto: boolean;
  forumCategory: Map<number, Forum>;
  nearbyStore: NearbyStoreState;
  groups: Map<number, Group>;
  selectedGroup: number;
  codePush: CodePushState;
  homeHighlights: Array<Highlight>;
  plantingGuide: PlantingGuideState;
  gamificationState: GamificationState;
  rewards: Array<Reward>;
};
