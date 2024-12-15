export const Storage = (function () {
  function save(key, value) {
    try {
      const jsonValue = JSON.stringify(value);
      localStorage.setItem(key, jsonValue);
    } catch (error) {
      console.log(error);
    }
  }

  function load(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  function remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  }

  function clear() {
    try {
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  }

  return {
    save,
    load,
    remove,
    clear,
  };
})();
