function isOnline() {
  return navigator.onLine;
}
if (isOnline()) {
  state.innerHTML = "<div id='online'>Onlaynsiz ✅</div>";
} else {
  state.innerHTML = "<div id='ofline'>Intrnetga ulanmagansiz ❌</div>";
}
