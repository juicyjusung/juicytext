export interface NavigationMenu {
  component: any;
  label: string;
  active: boolean;
  search?: '';
}
export type MenuFeature = NavigationMenu;
export type MenuCategory = NavigationMenu & { children: MenuFeature[]; category: string };
