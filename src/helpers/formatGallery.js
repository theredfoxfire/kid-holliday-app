// @flow

type GalleryPhoto = {
  photo: string;
  photo_thumb: string;
  primary: boolean;
};
type GalleryData = {
  data: Array<GalleryPhoto>;
  message: string;
};

export default function formatGallery(gallery: GalleryData) {
  let {data} = gallery;
  if (data.length > 0) {
    let tempGallery = [];
    for (let i = 0; i < data.length; i++) {
      tempGallery.push({
        photo: {uri: data[i].photo},
        photoThumb: {uri: data[i].photo_thumb},
        primary: true,
      });
    }
    return tempGallery;
  } else {
    return [];
  }
}
