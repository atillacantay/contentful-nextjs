export interface CollapsibleMenuItem {
  key: string;
  header: string;
  content: React.ReactNode;
}

export interface ICollapsibleMenu {
  items: CollapsibleMenuItem[];
  rootClassName?: string;
  headerClassName?: string;
  contentClassName?: string;
}
