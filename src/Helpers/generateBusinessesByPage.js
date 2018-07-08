export const generateBusinessesByPage = (businesses, pageNo) => {
    // I assumed showing 6 businesses per page
	const perPage = 6;
    if (businesses && businesses.length) {

        // Filter 6 businesses by page number
        return businesses.filter((business, i) => {
            return i >= perPage*(pageNo-1) && i < perPage*pageNo;
        });
    }
    return [];
}