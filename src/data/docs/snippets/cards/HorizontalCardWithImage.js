// import node module libraries
import { Container } from "react-bootstrap";

// import custom components
import BlogCardFullWidth from "components/marketing/common/cards/BlogCardFullWidth";

// import required media files
import BlogPost2 from 'assets/images/blog/blogpost-2.jpg';
import Avatar6 from 'assets/images/avatar/avatar-6.jpg';

export const HorizontalCardWithImage = () => {
    const data = [
        {
            id: 1,
            blogpostimage: BlogPost2,
            category: 'Courses',
            title: 'Getting started the Web App JavaScript in 2020',
            slug: 'getting-started-the-web-app-javascript-in-2020',
            details: 'Debitis ipsam ratione molestias dolores qui asperiores consequatur facilis error.',
            authorname: 'Dustin Warren',
            authorimage: Avatar6,
            postedon: 'September 13, 2020',
            readinglength: 6
        }
    ];
    return (
        <section className="py-6 bg-light">
            <Container>
                <BlogCardFullWidth item={data[0]} />
            </Container>
        </section>
    )
}

export const HorizontalCardWithImageCode = `
// import node module libraries
import { Container } from "react-bootstrap";

// import custom components
import BlogCardFullWidth from "components/marketing/common/cards/BlogCardFullWidth";

// import required media files
import BlogPost2 from 'assets/images/blog/blogpost-2.jpg';
import Avatar6 from 'assets/images/avatar/avatar-6.jpg';

export const HorizontalCardWithImageExample = () => {
    const data = [
        {
            id: 1,
            blogpostimage: BlogPost2,
            category: 'Courses',
            title: 'Getting started the Web App JavaScript in 2020',
            slug: 'getting-started-the-web-app-javascript-in-2020',
            details: 'Debitis ipsam ratione molestias dolores qui asperiores consequatur facilis error.',
            authorname: 'Dustin Warren',
            authorimage: Avatar6,
            postedon: 'September 13, 2020',
            readinglength: 6
        }
    ];
    return (
        <section className="py-6 bg-light">
            <Container>
                <BlogCardFullWidth item={data[0]} />
            </Container>
        </section>
    )
}
`.trim();
