export const GetPhotoRef = async (placeName) => {
    const resp = await fetch(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${placeName}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`
    );
    const result = await resp.json();
  
    // Assuming the first result is the most relevant
    const firstResult = result?.results?.[0];
    const photoRef = firstResult?.photos?.[0]?.photo_reference;
  
    if (photoRef) {
      return photoRef;
    } else {
      console.warn("No photo reference found for place:", placeName);
      return null;
    }
  };
  