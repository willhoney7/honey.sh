import { GetStaticProps } from 'next';
import Head from 'next/head';
import invariant from 'tiny-invariant';

import Date from '@/components/Date';
import Layout from '@/components/Layout';
import { getAllPostIds, getPostData, PostData } from '@/lib/posts';
import utilStyles from '@/styles/utils.module.css';

export default function Post({ postData }: { postData: PostData }) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<h1 className={utilStyles.headingXl}>{postData.title}</h1>
				<div className={utilStyles.lightText}>
					<Date dateString={postData.date} />
				</div>
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</article>
		</Layout>
	);
}

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	invariant(params?.id && typeof params.id === 'string', 'params.id must be defined');
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
};
