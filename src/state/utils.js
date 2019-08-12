export const arrayToStateObject = data => {
  const stateObject = {
    byId: {},
    allIds: []
  };

  data.forEach(element => {
    stateObject.byId[element.id] = element;
    stateObject.allIds.push(element.id);
  });

  return stateObject;
};

export const removeItemFromState = (state, itemId) => {
  const stateObject = {...state}
  delete stateObject.byId[itemId];

  if(state.allIds.includes(itemId)) {
    const index = state.allIds.indexOf(itemId);
    stateObject.allIds = state.allIds.splice(index, 1)
  }
 
  return removeItemFromState;
}

