function setGetEnv(fn) {
  _onSetGetEnv();
}
let _onSetGetEnv = () => {
};
function setOnSetGetEnv(fn) {
  _onSetGetEnv = fn;
}

export { setGetEnv as a, setOnSetGetEnv as s };
