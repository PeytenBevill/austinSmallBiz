export const deleteListing = (bizName) => {
  return {
    type: "DELETE_LISTING",
    value: bizName
  }
}

export const addListing = (bizInfo) => {
  return {
    type: "ADD_LISTING",
    value: bizInfo,
  };
};