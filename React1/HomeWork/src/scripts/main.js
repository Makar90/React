function GetNewElement(elementType, elementClass = "", elementContent = "") {
    let element = document.createElement(elementType);
    if (elementClass) {
        element.classList.add(elementClass);
        console.log('TEST elementClass not empty');
    }
    if (elementContent) {
        element.append(elementContent);
        console.log('TEST elementContent not empty');
    }
    return element;
};

console.log('TEST Main JS');