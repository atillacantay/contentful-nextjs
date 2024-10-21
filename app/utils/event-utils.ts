export enum EventKeys {
  LANGUAGE_CHANGED = "moe_language_changed",
  ADD_TO_MEAL_PLANNER = "moe_add_to_meal_planner",
  SEARCH_INITIATED = "moe_search_initiated",
  ADD_TO_SHOPPING_LIST = "moe_add_to_shopping_list",
  BUY_NOW = "moe_buy_now",
  BANNER_CLICKED = "moe_banner_clicked",
}
interface EventData {
  [key: string]: any;
}

export const pushEventToDataLayer = (
  eventKey: EventKeys,
  eventData: EventData
): void => {
  const eventObject = {
    event: eventKey,
    ...eventData,
  };

  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push(eventObject);
};
