let gridRef;
const IMAGES_CANT = 100;

// https://via.placeholder.com/150.png?text=${use index here}

function insertImages() {
    for (let i = 0; i < IMAGES_CANT; i++) {
        let image = document.createElement('img');
        image.classList.add('image');
        image.src = `https://via.placeholder.com/150.png?text=${i + 1}`;
        if (gridRef != null) {
            gridRef.appendChild(image);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    gridRef = document.getElementById('grid-test');
    console.log(gridRef);
    setTimeout(insertImages, 3000);
});