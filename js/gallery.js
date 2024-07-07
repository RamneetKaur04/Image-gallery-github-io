// js/gallery.js

// Array of gallery items
const galleryItems = [
    {
        full: 'images/flowers-yellow-large.jpg',
        thumb: 'images/flowers-yellow-small.jpg',
        alt: 'Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany',
        caption: 'Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany'
    },
    {
        full: 'images/flowers-red-large.jpg',
        thumb: 'images/flowers-red-small.jpg',
        alt: 'Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany',
        caption: 'Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany'
    },
    {
        full: 'images/flowers-white-large.jpg',
        thumb: 'images/flowers-white-small.jpg',
        alt: 'Daffodils in Sentmaring park, Münster, North Rhine-Westfalia, Germany',
        caption: 'Daffodils in Sentmaring park, Münster, North Rhine-Westfalia, Germany'
    },
    {
        full: 'images/flowers-purple-large.jpg',
        thumb: 'images/flowers-purple-small.jpg',
        alt: 'Sentmaring Park, Münster, North Rhine-Westphalia, Germany',
        caption: 'Sentmaring Park, Münster, North Rhine-Westphalia, Germany'
    },
    {
        full: 'images/flowers-pink-large.jpg',
        thumb: 'images/flowers-pink-small.jpg',
        alt: 'Market in Münster, North Rhine-Westphalia, Germany',
        caption: 'Market in Münster, North Rhine-Westphalia, Germany'
    }
];

// Function to update the featured image
function updateFeaturedImage(index) {
    const featuredImage = document.getElementById('featured-image');
    const featuredCaption = document.getElementById('image-caption');

    // Adding fade-in effect
    featuredImage.classList.remove('active');
    setTimeout(() => {
        featuredImage.src = galleryItems[index].full;
        featuredImage.alt = galleryItems[index].alt;
        featuredCaption.textContent = galleryItems[index].caption;
        featuredImage.classList.add('active');
    }, 300); // Adjust the timeout to match the CSS transition duration

    // Apply grayscale filter to all thumbnails except the active one
    document.querySelectorAll('#thumbnails img').forEach((img, idx) => {
        img.style.filter = idx === index ? 'none' : 'grayscale(100%)';
        img.style.transform = idx === index ? 'scale(1.1)' : 'scale(1)';
        img.style.borderColor = idx === index ? '#ff4500' : 'transparent';
    });
}

// Dynamically build the thumbnail list
function buildThumbnails() {
    const thumbnailsList = document.getElementById('thumbnails');
    thumbnailsList.innerHTML = ''; // Clear any existing thumbnails

    galleryItems.forEach((item, index) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        
        img.src = item.thumb;
        img.alt = item.alt;
        img.width = 240;
        img.height = 160;

        // Add click event to update the featured image
        img.addEventListener('click', () => updateFeaturedImage(index));

        // Apply grayscale filter to all initially except the first one
        if (index !== 0) {
            img.style.filter = 'grayscale(100%)';
        }

        li.appendChild(img);
        thumbnailsList.appendChild(li);
    });
}

// Initialize the gallery
function initGallery() {
    buildThumbnails();
    updateFeaturedImage(0); // Set the first image as the featured image initially
}

// Run the gallery initialization when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initGallery);
