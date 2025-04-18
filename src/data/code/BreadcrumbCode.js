export const BasicBreadcrumb = `   
<Breadcrumb>
    <Breadcrumb.Item active>Home</Breadcrumb.Item>
</Breadcrumb>
<Breadcrumb>
    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
    <Breadcrumb.Item active>Library</Breadcrumb.Item>
</Breadcrumb>
<Breadcrumb>
    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
    <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
    <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
    `.trim();


export const BreadcrumbDivider = `
<div className='slash-breadcrumb'>
    <Breadcrumb>
        <Breadcrumb.Item active>Home</Breadcrumb.Item>
    </Breadcrumb>
    <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Library</Breadcrumb.Item>
    </Breadcrumb>
    <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
</div>
`.trim();

export default BasicBreadcrumb;
