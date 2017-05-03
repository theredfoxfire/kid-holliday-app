//@flow
export type Route = {
  key: string;
};

export type NavigationState = {
  index: number;
  routes: Array<Route>;
};
