import { createSelector } from "../utils/reselect-memoize";

const getEntities = state => state.get("entities");

export const getProducts = createSelector(
  [getEntities],
  entities => entities.get("products")
);
