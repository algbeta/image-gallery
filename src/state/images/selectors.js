export const getItemsArray = (state) => {
  const { allIds, byId } = state;
  return allIds.map(id => byId[id])
}