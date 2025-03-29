export function displayStars(rating: number) {
    const fullStars = Math.floor(rating); // Full stars
    const hasHalfStar = rating % 1 !== 0; // Check if there's a half star
    const totalStars = 5; // Assuming a 5-star rating system

    let starsHtml = '';

    // Handle 0 rating case by displaying all empty stars
    if (rating === 0) {
        starsHtml = '☆☆☆☆☆'; // All empty stars for a rating of 0
    } else {
        for (let i = 0; i < fullStars; i++) {
            starsHtml += '★'; // Full star
        }
        if (hasHalfStar) {
            starsHtml += '☆'; // Half star
        }

        // Add empty stars to complete the 5-star scale
        for (let i = fullStars + (hasHalfStar ? 1 : 0); i < totalStars; i++) {
            starsHtml += '☆'; // Empty star
        }
    }
    return starsHtml
}