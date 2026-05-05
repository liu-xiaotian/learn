function debounce(fn, wait) {
  let time = null;
  return function (...args) {
    if (time) {
      clearTimeout(time);
      time = null;
    }
    time = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}
