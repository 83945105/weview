const PopupManager = {

  zIndex: 1024,

  nextZIndex() {
    return PopupManager.zIndex++;
  }
};

export default PopupManager;
