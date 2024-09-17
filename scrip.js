function toggleProducts() {
    const moreProducts = document.getElementById('moreProducts');
    const seeMoreButton = document.getElementById('seeMoreButton');

    if (moreProducts.style.display === 'none' || moreProducts.style.display === '') {
        moreProducts.style.display = 'block';
        seeMoreButton.textContent = 'See Less Products';
    } else {
        moreProducts.style.display = 'none';
        seeMoreButton.textContent = 'See More Products';
    }
}
