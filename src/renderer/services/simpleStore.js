let state = {};

export const setState = (_state = {}) => {
    state = _state;
};

export const assignState = (assign) => {
    Object.assign(state, assign);
};

export const mutateStateProp = (prop, value) => assignState({ [prop]: value });

export const getState = () => Object.assign({}, state);