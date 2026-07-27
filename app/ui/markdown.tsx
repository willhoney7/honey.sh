import type { Content, PhrasingContent, Root } from 'mdast';
import type { Handle, RemixNode } from 'remix/ui';

export function Markdown(handle: Handle<{ content: Root }>) {
	return () => handle.props.content.children.map(renderBlock);
}

function renderBlock(node: Content, index: number): RemixNode {
	switch (node.type) {
		case 'paragraph':
			return <p key={index}>{node.children.map(renderPhrasing)}</p>;
		case 'heading': {
			let Tag = `h${node.depth}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
			return <Tag key={index}>{node.children.map(renderPhrasing)}</Tag>;
		}
		case 'blockquote':
			return <blockquote key={index}>{node.children.map(renderBlock)}</blockquote>;
		case 'list':
			return node.ordered ? (
				<ol key={index}>{node.children.map(renderListItem)}</ol>
			) : (
				<ul key={index}>{node.children.map(renderListItem)}</ul>
			);
		case 'thematicBreak':
			return <hr key={index} />;
		case 'code':
			return (
				<pre key={index}>
					<code className={node.lang ? `language-${node.lang}` : undefined}>
						{node.value}
					</code>
				</pre>
			);
		default:
			return null;
	}
}

function renderListItem(node: Content, index: number): RemixNode {
	if (node.type !== 'listItem') return null;
	return <li key={index}>{node.children.map(renderBlock)}</li>;
}

function renderPhrasing(node: PhrasingContent, index: number): RemixNode {
	switch (node.type) {
		case 'text':
			return node.value;
		case 'emphasis':
			return <em key={index}>{node.children.map(renderPhrasing)}</em>;
		case 'strong':
			return <strong key={index}>{node.children.map(renderPhrasing)}</strong>;
		case 'delete':
			return <del key={index}>{node.children.map(renderPhrasing)}</del>;
		case 'link':
			return (
				<a key={index} href={node.url} title={node.title ?? undefined}>
					{node.children.map(renderPhrasing)}
				</a>
			);
		case 'image':
			return (
				<img
					key={index}
					src={node.url}
					alt={node.alt ?? ''}
					title={node.title ?? undefined}
				/>
			);
		case 'inlineCode':
			return <code key={index}>{node.value}</code>;
		case 'break':
			return <br key={index} />;
		default:
			return null;
	}
}
