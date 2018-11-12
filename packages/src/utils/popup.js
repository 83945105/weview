const PopupManager = {

  zIndex: 1024,

  currentZIndex() {
    return PopupManager.zIndex;
  },

  nextZIndex() {
    return PopupManager.zIndex++;
  }
};

export default PopupManager;
