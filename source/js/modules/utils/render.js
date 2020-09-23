const RenderPosition = {
  BEFOREEND: `beforeend`,
  BEFOREBEGIN: `beforebegin`
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

const renderElement = (container, component, place = RenderPosition.BEFOREEND) => {
  switch (place) {
    case RenderPosition.BEFOREEND:
      container.append(component.getElement());
      break;
    case RenderPosition.BEFOREBEGIN:
      container.before(component.getElement());
      break;
  }
};

const removeElement = (parent, component) => {
  const removedElement = component.getElement();
  parent.removeChild(removedElement);
};

const remove = (component) => {
  component.getElement().remove();
  component.removeElement();
};

export {RenderPosition, createElement, renderElement, removeElement, remove};
