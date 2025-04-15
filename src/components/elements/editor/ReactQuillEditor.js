// import node module libraries
import { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'quill/dist/quill.snow.css';

const ReactQuillEditor = (props) => {
	const [value, setValue] = useState(props.initialValue);
	return <ReactQuill theme="snow" value={value} onChange={setValue} />;
};

export default ReactQuillEditor;
