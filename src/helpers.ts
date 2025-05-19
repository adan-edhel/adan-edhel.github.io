export default class Helpers {

    static preloadImages = (urls: string[]) => {
        urls.forEach(url => {
            Helpers.preloadImage(url);
        });
    }

    private static preloadImage = (url: string) => {
        const image = new Image(); 
        image.src = url; 
    }

static getSketchfabThumbnail = (modelUID: string, project: { iconUrl: string }): string => {
  const placeholder = "img/loading-thumbnail.png"; // Your fallback image

  fetch(`https://sketchfab.com/v3/models/${modelUID}`)
    .then((res) => res.json())

    .then((data) => {
    const images = data?.thumbnails?.images as { width: number; url: string }[] | undefined;
    const best = images?.sort((a, b) => b.width - a.width)[0]?.url;
    if (best) {
            project.iconUrl = best;
            Helpers.preloadImage(best); // Optional: preload to avoid flicker
        }
    })
    
    .catch((err) => console.error("Error fetching Sketchfab thumbnail:", err));

  return placeholder;

  };
}
