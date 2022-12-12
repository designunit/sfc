import { PageLayout } from '../components/PageLayout'
import { TreeHero } from '../components/TreeHero'
import { getPageBySlug } from '../server/lib'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { Container, createStyles } from '@mantine/core'
import { components, StaticProps } from '../client/lib'
import { GetServerSideProps } from 'next'

const useStyles = createStyles((theme) => ({
    container: {
        position: 'relative',
        maxWidth: 1220,
        marginTop: '2rem',
    },
}))

export default function HomePage({ source }) {
    const { classes: s } = useStyles()
    return (
        <PageLayout>
            <TreeHero />
            <Container
                className={s.container}
            >
                <MDXRemote {...source} components={components} />
            </Container>
        </PageLayout>
    )
}

export const getStaticProps: GetServerSideProps<StaticProps> = async ({ locale = 'ru' }) => {
    const source = await getPageBySlug(locale, 'tree-cartography')
    const mdxSource = await serialize(source)

    const { default: lngDict = {} } = await import(`../locales/${locale}.json`)

    return {
        props: {
            source: mdxSource,
            lngDict,
        },
    }
}