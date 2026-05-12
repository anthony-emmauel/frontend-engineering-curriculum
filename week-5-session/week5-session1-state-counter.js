const state = {
  count: 0,
};

const render = () => {
  document.getElementById("count").textContent = state.count;
};

document.getElementById("increment").addEventListener("click", () => {
  state.count = state.count + 1;
  render();
});

document.getElementById("decrement").addEventListener("click", () => {
  state.count = state.count - 1;
  render();
});

document.getElementById("reset").addEventListener("click", () => {
  state.count = 0;
  render();
});
