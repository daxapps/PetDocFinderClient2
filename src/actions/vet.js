export const SHOW_ADD_SERVICE = "SHOW_ADD_SERVICE";
export const showAddService = (addServiceBtn) => ({
	type: SHOW_ADD_SERVICE,
	// activated: status //true??
	payload: addServiceBtn
});

// const boundShowAddService = index => dispatch(showAddService(index))