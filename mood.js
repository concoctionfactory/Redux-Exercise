function setMood(e) {
  store.dispatch({ type: "setface", payload: e.target.value });
  const mood = store.getState().mood;
  $("#emoji").text(mood);
}

$("button").on("click", setMood);

window.onload = function () {
  $($("button")[0]).trigger("click");
};
