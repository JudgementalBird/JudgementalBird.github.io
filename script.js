document.addEventListener('DOMContentLoaded', function() {
const images = ['images/01abf13c3106c8ab3f1d146759a37426.png', 'images/048f87c4b97d259a103c55d06b460197.png', 'images/1000w_q95-1.png', 'images/1000w_q95.png', 'images/1000w_qn95.png', 'images/1161165-1200x640.png', 'images/130813-Z-GK080-133.png', 'images/150310-F-MG591-102.png', 'images/150310-F-MG591-318.png', 'images/180212-F-AD344-9012.png', 'images/2000hjw_q95.png', 'images/2000w_q95.png', 'images/2128d505cc3d9d5e91fc6a586da30495.png', 'images/230103_DoD_Best_Abrams_firing-scaled-e1676887866437-2048x1152-1.png', 'images/2f3f0043083e09f8cf17b96d6632949f.png', 'images/407def13ee2fc12d21d38cd23f5ae1e1.png', 'images/48678921938_c38d9fbef7_k-1200x640.png', 'images/49ea6856bc48e2e1e277eda7dae424db.png', 'images/4bea400588bd3d48bbeb24209b87d329.png', 'images/502c34e16bb3f7784000000e.png', 'images/5c1bca043224ed22430fea18.png', 'images/61rYslX2O0L._AC_UF8941000_QL80_.png', 'images/6327ac4f6d06dd33543ba8e85bc7e286.png', 'images/6702baaefd0c4eb29440fb607601c0e4.png', 'images/6872572178_710062691d_b.png', 'images/6e502f671b8768f7dd05b63610fdcc53.png', 'images/70e07d63ba85ba1eac0b68046513d487.png', 'images/78514f981a498360617c892d83c58c4e.png', 'images/8a174dc7d9fc2573a76e56f644c56ff9.png', 'images/9195f9e2036f6b9275fa564f1af637dc.png', 'images/976719918f62f84b3a05c3dabb1604b1.png', 'images/a-hot-refueling-on-an-air-force-f-16-fighting-falcon-aircraft-military-us-navy-bahar-asar.png', 'images/a30c1bab01f76def99bcf5091ca21622.png', 'images/aposea-official-20220510-006-126.png', 'images/awdawgsgds.png', 'images/B2QK5GKANZFI3MTAHAHEONQPCY.png', 'images/b3446409be3c420eef7be84229fad10b.png', 'images/b4a62f2a54bf7ad289b805bd1497baf6.png', 'images/b6926a99341e80a4696d2a0cf98f25fa.png', 'images/c53006c89a078b3d9778b8dc2bbf3ba9.png', 'images/d5319a42670eaab8867339b05c5e9ca0.png', 'images/d91476d93f71feb4f89e00f354a129b3.png', 'images/f-16-fighting-falcon-feeding-at-night-plays-a-scary-game-of-light-and-shadows-177233_1.png', 'images/F-22-Refuel-3.png', 'images/f6ad57dae8a9da0081020b278b192417.png', 'images/f8439073a36d9dfe4442a2393d36021e.png', 'images/g1000w_q95.png', 'images/GettyImages-1300072335.png', 'images/q24324image.png', 'images/Screenshot_2024-03-29-23-31-35-71_50ef9f5a0f3fc24b6f0ffc8843167fe4.png', 'images/Screenshot_2024-03-29-23-31-38-73_50ef9f5a0f3fc24b6f0ffc8843167fe4.png', 'images/Screenshot_2024-03-29-23-31-41-61_50ef9f5a0f3fc24b6f0ffc8843167fe4.png', 'images/Screenshot_2024-03-29-23-31-44-24_50ef9f5a0f3fc24b6f0ffc8843167fe4.png', 'images/Screenshot_2024-03-29-23-31-51-05_50ef9f5a0f3fc24b6f0ffc8843167fe4.png', 'images/Screenshot_2024-03-29-23-31-53-89_50ef9f5a0f3fc24b6f0ffc8843167fe4.png', 'images/Screenshot_2024-03-29-23-31-56-86_50ef9f5a0f3fc24b6f0ffc8843167fe4.png', 'images/Screenshot_2024-03-29-23-32-00-06_50ef9f5a0f3fc24b6f0ffc8843167fe4.png', 'images/Screenshot_2024-03-29-23-32-02-86_50ef9f5a0f3fc24b6f0ffc8843167fe4.png', 'images/Screenshot_2024-03-29-23-32-05-92_50ef9f5a0f3fc24b6f0ffc8843167fe4.png'];
    const galleryContainer = document.getElementById('gallery-container');
    let currentIndex = 0; // Initialize current index

    images.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = `Image ${index + 1}`;
        imgElement.classList.add('gallery-img');
        imgElement.onclick = function() { openModal(image, index); };
        galleryContainer.appendChild(imgElement);
    });

    // Create modal elements
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const modalContent = document.createElement('img');
    modalContent.classList.add('modal-content');
    const closeSpan = document.createElement('span');
    closeSpan.innerHTML = '&times;';
    closeSpan.classList.add('close');

    closeSpan.onclick = function() { modal.style.display = "none"; };
    modal.appendChild(modalContent);
    modal.appendChild(closeSpan);
    document.body.appendChild(modal);

    function resizeImage(imageSrc) {
        const img = new Image();
        img.onload = function() {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const maxImageWidth = viewportWidth * 0.9;
            const maxImageHeight = viewportHeight * 0.98;

            // Calculate the best dimensions for the image
            let imageWidth = img.width;
            let imageHeight = img.height;

            const widthRatio = maxImageWidth / imageWidth;
            const heightRatio = maxImageHeight / imageHeight;
            const bestRatio = Math.min(widthRatio, heightRatio);

            imageWidth *= bestRatio;
            imageHeight *= bestRatio;

            // Apply the calculated dimensions
            modalContent.style.width = `${imageWidth}px`;
            modalContent.style.height = `${imageHeight}px`;

            modalContent.src = imageSrc;
        };
        img.src = imageSrc;
    }

    function openModal(imageSrc, index) {
        currentIndex = index; // Update the current index
        modal.style.display = "block";
        resizeImage(imageSrc);
    }
    
    document.addEventListener('keydown', function(event) {
        if (modal.style.display === "block") {
            if (event.keyCode === 37) { // Left arrow key
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                resizeImage(images[currentIndex]); // Resize and change image
            } else if (event.keyCode === 39) { // Right arrow key
                currentIndex = (currentIndex + 1) % images.length;
                resizeImage(images[currentIndex]); // Resize and change image
            }
        }
    });

    window.onclick = function(event) {// Close modal on click outside of the image
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
