(function () {
  //?UTILS
  const createElement = (elementName) => {
    return document.createElement(elementName);
  };
  const addStyle = (element, propertyAndValue) => {
    const { property, value } = propertyAndValue;
    const elementStyle = element.style;
    elementStyle[property || propertyAndValue[0]] =
      value || propertyAndValue[1];
    return element;
  };
  const createAnchorElement = (innerText, href) => {
    const homeAnchor = createElement("a");
    addStyle(homeAnchor, ["display", "block"]);
    addStyle(homeAnchor, ["font-size", "3rem"]);
    addStyle(homeAnchor, ["height", "20%"]);
    addStyle(homeAnchor, ["width", "100%"]);
    addStyle(homeAnchor, ["text-align", "center"]);
    addStyle(homeAnchor, ["color", "white"]);
    homeAnchor.innerText = innerText;
    homeAnchor.href = href;
    return homeAnchor;
  };
  //?docElements
  const hamMenu = document.querySelector(".ham-menu");
  const homeAnchor = createAnchorElement("HOME", "/");
  const promotionAnchor = createAnchorElement("PROMOTIONS", "/promotion.html");
  const contactAnchor = createAnchorElement("CONTACT US", "/contactus.html");
  const anchors = [homeAnchor, promotionAnchor, contactAnchor];
  anchors.forEach((anchor) => hamMenu.append(anchor));
})();
