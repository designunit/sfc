import { GetServerSideProps } from 'next'
import { components, StaticProps } from '../mdx/lib'
import { CrowdHero } from '../components/CrowdHero'
import { PageLayout } from '../components/PageLayout'
import { getPageBySlug } from '../server/lib'
import { serialize } from 'next-mdx-remote/serialize'
import { Container, createStyles } from '@mantine/core'
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
            <CrowdHero />
            <Container
                className={s.container}
            >
                <MDXRemote {...source} components={components} />
            </Container>
        </PageLayout>
    )
}

export const getStaticProps: GetServerSideProps<StaticProps> = async ({ locale = 'ru' }) => {
    const source = await getPageBySlug(locale, 'crowdforce')
    const mdxSource = await serialize(source)
    const { default: lngDict = {} } = await import(`../locales/${locale}.json`)

    return {
        props: {
            source: mdxSource,
            lngDict,
        },
    }
}