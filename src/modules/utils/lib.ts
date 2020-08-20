const makeUniqueId = () => {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
};

export const setUid = () => {
  return `${makeUniqueId()}-${makeUniqueId()}-${makeUniqueId()}-${makeUniqueId()}-${makeUniqueId()}`;
};

export const onHideAllFloatLayer = () => {
  const floatLayers = document.querySelectorAll(".floatLayer");
  for (let i = 0; i < floatLayers.length; i++) {
    floatLayers[i].classList.remove("is-show");
  }
};
