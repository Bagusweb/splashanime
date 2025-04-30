function setGetEnv(fn, reset = false) {
  _onSetGetEnv(reset);
}
let _onSetGetEnv = () => {
};
function setOnSetGetEnv(fn) {
  _onSetGetEnv = fn;
}

export { setGetEnv as a, setOnSetGetEnv as s };
