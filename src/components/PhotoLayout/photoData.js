const getImageParams = (url) => ({
  src: `https://res.cloudinary.com/aparinsite/image/upload/${url}`,
  sizes: `
        (max-width: 360px) 320px,
        (max-width: 432px) 360px,
        (max-width: 600px) 500px,
        (max-width: 768px) 640px,
        1440px`,
  srcset: `
        https://res.cloudinary.com/aparinsite/image/upload/w_640/${url} 640w,
        https://res.cloudinary.com/aparinsite/image/upload/w_720/${url} 720w,
        https://res.cloudinary.com/aparinsite/image/upload/w_1000/${url} 1000w,
        https://res.cloudinary.com/aparinsite/image/upload/w_1280/${url} 1280w,
        https://res.cloudinary.com/aparinsite/image/upload/${url} 1440w`,
});

const SOURCE_LINKS = [
  "v1632275355/photographer_assets/figma/compressed/1-min_h4fdno.jpg",
  "v1632275355/photographer_assets/figma/compressed/2-min_u6ktfu.jpg",
  "v1632275356/photographer_assets/figma/compressed/3-min_m6cxc6.jpg",
  "v1632275356/photographer_assets/figma/compressed/4-min_zhe82t.jpg",
  "v1632275356/photographer_assets/figma/compressed/5-min_bbbxus.jpg",
  "v1632275356/photographer_assets/figma/compressed/6-min_dt92di.jpg",
  "v1632275356/photographer_assets/figma/compressed/7-min_dtdgny.jpg",
  "v1632275356/photographer_assets/figma/compressed/8-min_gjteqj.jpg",
  "v1632275356/photographer_assets/figma/compressed/9-min_yp2o1m.jpg",
  "v1632275355/photographer_assets/figma/compressed/10-min_drajqx.jpg",
  "v1632275355/photographer_assets/figma/compressed/11-min_g1bund.jpg",
  "v1632275355/photographer_assets/figma/compressed/12-min_tkwmdm.jpg",
];

const IMAGES_PARAMS = SOURCE_LINKS.map((url) => getImageParams(url));

export default IMAGES_PARAMS;
