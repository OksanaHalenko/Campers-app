export const selectAllCampers = (state) => state.campers.items;
export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;
export const selectorFavorite = (state) => state.campers.isFavorite;
export const selectOneCamper = (state) => state.campers.oneCamper;
export const selectTotalCampers = (state) => state.campers.totalCampers;
export const selectFilters = (state) => state.campers.filters;
