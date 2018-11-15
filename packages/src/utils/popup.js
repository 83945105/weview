const PopupManager = {

  zIndex: 1024,

  currentZIndex() {
    return PopupManager.zIndex;
  },

  nextZIndex(increment = 1) {
    return PopupManager.zIndex += increment;
  }
};

export default PopupManager;
