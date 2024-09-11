
function toggleVisibility(identifier, type, show) {
    let elements;
    
    if (type === 'tag') {
        elements = document.getElementsByTagName(identifier);
    } else if (type === 'class') {
        elements = document.getElementsByClassName(identifier);
    } else if (type === 'id') {
        elements = [document.getElementById(identifier)];
    }
    
    for (let element of elements) {
        if (show) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    }
}
