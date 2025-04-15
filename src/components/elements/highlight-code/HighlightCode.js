// import node module libraries
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Highlight, themes } from 'prism-react-renderer';
import { Card } from 'react-bootstrap';

const HighlightCode = ({ code }) => {
	const copyAction = (event) => {
		event.target.innerHTML = 'Copied';
		setTimeout(() => {
			event.target.innerHTML = 'Copy';
		}, 3000);
	};
	return (
		<Card className='code-highlight-box'>
			<Card.Body className='p-0'>
				<CopyToClipboard text={code}>
					<button className="copy-button" onClick={copyAction}>
						Copy
					</button>
				</CopyToClipboard>
				<Highlight theme={themes.nightOwl} code={code} language="jsx" >
					{({ className, style, tokens, getLineProps, getTokenProps }) => (
						<pre className={className} style={style}>
							{tokens.map((line, i) => (
								<div key={i} {...getLineProps({ line })}>
									{line.map((token, key) => (
										<span key={key} {...getTokenProps({ token })} />
									))}
								</div>
							))}
						</pre>
					)}
				</Highlight>
			</Card.Body>
		</Card>
	);
};
export default HighlightCode;
