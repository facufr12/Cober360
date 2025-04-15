// import custom components
import JustifiedGallery from 'components/marketing/common/gallery/JustifiedGallery';

// import media files
import GalleryImage1 from 'assets/images/about/geeksui-img-1.jpg';
import GalleryImage2 from 'assets/images/about/geeksui-img-2.jpg';
import GalleryImage3 from 'assets/images/about/geeksui-img-3.jpg';
import GalleryImage4 from 'assets/images/about/geeksui-img-4.jpg';
import GalleryImage5 from 'assets/images/about/geeksui-img-5.jpg';
import GalleryImage6 from 'assets/images/about/geeksui-img-6.jpg';

export const ImageGrid3 = () => {
    const GalleryImages = [
        { id: 1, image: GalleryImage1 },
        { id: 2, image: GalleryImage2 },
        { id: 3, image: GalleryImage3 },
        { id: 4, image: GalleryImage4 },
        { id: 5, image: GalleryImage5 },
        { id: 6, image: GalleryImage6 }
    ];
    return <JustifiedGallery images={GalleryImages} />;
}

export const ImageGrid3Code = `
// import custom components
import JustifiedGallery from 'components/marketing/common/gallery/JustifiedGallery';

// import media files
import GalleryImage1 from 'assets/images/about/geeksui-img-1.jpg';
import GalleryImage2 from 'assets/images/about/geeksui-img-2.jpg';
import GalleryImage3 from 'assets/images/about/geeksui-img-3.jpg';
import GalleryImage4 from 'assets/images/about/geeksui-img-4.jpg';
import GalleryImage5 from 'assets/images/about/geeksui-img-5.jpg';
import GalleryImage6 from 'assets/images/about/geeksui-img-6.jpg';

export const ImageGrid3Example = () => {
    const GalleryImages = [
        { id: 1, image: GalleryImage1 },
        { id: 2, image: GalleryImage2 },
        { id: 3, image: GalleryImage3 },
        { id: 4, image: GalleryImage4 },
        { id: 5, image: GalleryImage5 },
        { id: 6, image: GalleryImage6 }
    ];
    return <JustifiedGallery images={GalleryImages} />;
}`.trim();