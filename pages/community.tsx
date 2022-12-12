import { Container, createStyles } from '@mantine/core'
import { GetServerSideProps } from 'next'
import { components, StaticProps } from '../client/lib'
import { CommunityHero } from '../components/CommunityHero'
import { CommunityText } from '../components/CommunityText'
import { PageLayout } from '../components/PageLayout'
import { getPageBySlug } from '../server/lib'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

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
            <CommunityHero />
            <Container
                className={s.container}
            >
                <MDXRemote {...source} components={components} />
            </Container>
        </PageLayout>
    )
}

export const getStaticProps: GetServerSideProps<StaticProps> = async ({ locale = 'ru' }) => {
    const source = await getPageBySlug(locale, 'community')
    const mdxSource = await serialize(source)

    const { default: lngDict = {} } = await import(`../locales/${locale}.json`)

    return {
        props: {
            source: mdxSource,
            lngDict,
        },
    }
}