(() => {
  const customRedux = (function () {
    let state;
    let listeners = [];

    function createStore(reducer) {
      const getState = () => state;

      const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach((listener) => listener());
      };

      const subscribe = (listener) => {
        listeners.push(listener);
      };

      return {
        getState,
        dispatch,
        subscribe,
      };
    }

    return {
      createStore,
    };
  })();

  // Registration to window
  !window.customRedux
    ? (window.$redux = window.customRedux = customRedux)
    : null;
})();
