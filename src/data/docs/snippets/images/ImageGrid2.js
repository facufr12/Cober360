// import custom components
import CollageGallery from 'components/marketing/common/gallery/CollageGallery';

// import media files
import Avatar1 from 'assets/images/avatar/avatar-1.jpg';
import Avatar2 from 'assets/images/avatar/avatar-2.jpg';
import Avatar3 from 'assets/images/avatar/avatar-3.jpg';
import Avatar4 from 'assets/images/avatar/avatar-4.jpg';
import Avatar5 from 'assets/images/avatar/avatar-5.jpg';
import Avatar6 from 'assets/images/avatar/avatar-6.jpg';
import Avatar7 from 'assets/images/avatar/avatar-7.jpg';
import Avatar8 from 'assets/images/avatar/avatar-8.jpg';
import Avatar10 from 'assets/images/avatar/avatar-10.jpg';
import Avatar11 from 'assets/images/avatar/avatar-11.jpg';
import Avatar12 from 'assets/images/avatar/avatar-12.jpg';
import Avatar13 from 'assets/images/avatar/avatar-13.jpg';
import Avatar14 from 'assets/images/avatar/avatar-14.jpg';

export const ImageGrid2 = () => {
    const images = [
        Avatar1, Avatar3, Avatar2,
        Avatar4, Avatar5, Avatar7,
        Avatar6, Avatar8, Avatar10,
        Avatar11, Avatar12, Avatar13,
        Avatar14
    ]
    return <CollageGallery images={images} />
}

export const ImageGrid2Code = `
// import custom components
import CollageGallery from 'components/marketing/common/gallery/CollageGallery';

// import media files
import Avatar1 from 'assets/images/avatar/avatar-1.jpg';
import Avatar2 from 'assets/images/avatar/avatar-2.jpg';
import Avatar3 from 'assets/images/avatar/avatar-3.jpg';
import Avatar4 from 'assets/images/avatar/avatar-4.jpg';
import Avatar5 from 'assets/images/avatar/avatar-5.jpg';
import Avatar6 from 'assets/images/avatar/avatar-6.jpg';
import Avatar7 from 'assets/images/avatar/avatar-7.jpg';
import Avatar8 from 'assets/images/avatar/avatar-8.jpg';
import Avatar10 from 'assets/images/avatar/avatar-10.jpg';
import Avatar11 from 'assets/images/avatar/avatar-11.jpg';
import Avatar12 from 'assets/images/avatar/avatar-12.jpg';
import Avatar13 from 'assets/images/avatar/avatar-13.jpg';
import Avatar14 from 'assets/images/avatar/avatar-14.jpg';

export const ImageGrid2Example = () => {
    const images = [
        Avatar1, Avatar3, Avatar2,
        Avatar4, Avatar5, Avatar7,
        Avatar6, Avatar8, Avatar10,
        Avatar11, Avatar12, Avatar13,
        Avatar14
    ]
    return <CollageGallery images={images} />
}`.trim();