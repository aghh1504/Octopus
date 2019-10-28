import { createSelector } from "../utils/reselect-memoize";

const getEntities = state => state.get("entities");

export const getOrder = createSelector(
  [getEntities],
  entities => entities.get("order")
);
