const gradients = [
    ['#000000', '#55E80C'],
    ['#28BF50', '#000000']
]

var granimInstance1 = new Granim({
    element: '.gradient1',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: gradients
        }
    }
});

var granimInstance2 = new Granim({
    element: '.gradient2',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: gradients
        }
    }
});

var granimInstance3 = new Granim({
    element: '.gradient3',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: gradients
        }
    }
});


function getCanvasChild(divItem) {
    for(let element of divItem.children) {
        if(element.tagName == "CANVAS") {
            return element;
        }
    }

    return null;
}

for(let divItem of document.querySelectorAll("#portfolioItems div")) {
    const canvas = getCanvasChild(divItem);

    divItem.onmouseenter = (event) => {
        canvas.style["opacity"] = "40%";
    };

    divItem.onmouseleave = (event) => {
        canvas.style["opacity"] = "0%";
    };
}

