import { PageLayout } from '../components/PageLayout'
import { IndexHero } from '../components/IndexHero'
import { IndexText } from '../components/IndexText'
import { GetServerSideProps } from 'next/types'
import { MDXRemote } from 'next-mdx-remote'
import { getPageBySlug } from '../server/lib'
import { serialize } from 'next-mdx-remote/serialize'
import { components, StaticProps } from '../client/lib'
import { useI18n } from 'next-localization'
import { Container, createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
    container: {
        position: 'relative',
        maxWidth: 1220,
        marginTop: '2rem',
    },
}))

export default function HomePage({ source }) {
    const { classes: s } = useStyles()
    const { t } = useI18n()
    return (
        <PageLayout>
            <IndexHero />

            <Container
                className={s.container}
            >
                <MDXRemote {...source} components={components} />
            </Container>
        </PageLayout>
    )
}

export const getStaticProps: GetServerSideProps<StaticProps> = async ({ locale = 'ru' }) => {
    const source = await getPageBySlug(locale, 'index')
    const mdxSource = await serialize(source)
    // {
    //     mdxOptions: {
    //         rehypePlugins: [
    //             [rehypeImgSize, { dir: "public" }],
    //         ],
    //     },
    // }
    const { default: lngDict = {} } = await import(`../locales/${locale}.json`)

    return {
        props: {
            source: mdxSource,
            lngDict,
        },
    }
}