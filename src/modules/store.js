import { withObserver } from "../hof/withObserver";
import deepEqual from "deep-equal";

export const store = withObserver({
  get: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
  set: (key, value) => {
    const prev = localStorage.getItem(key, JSON.stringify(value));
    if (deepEqual(prev, value)) {
      return;
    }

    localStorage.setItem(key, JSON.stringify(value));
    store.notify();
  },
  remove: (key) => {
    if (localStorage.getItem(key) == null) {
      return;
    }

    localStorage.removeItem(key);
    store.notify();
  },
});
