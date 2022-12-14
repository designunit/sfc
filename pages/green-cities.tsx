import { PageLayout } from '../components/PageLayout'
import { CitiesHero } from '../components/CitiesHero'
import { CitiesText } from '../components/CitiesText'
import { CitiesVideos } from '../components/CitiesVideos'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { Container, createStyles } from '@mantine/core'
import { components, StaticProps } from '../mdx/lib'
import { GetServerSideProps } from 'next'
import { getPageBySlug } from '../server/lib'

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
            <CitiesHero />
            <Container
                className={s.container}
            >
                <MDXRemote {...source} components={components} />
            </Container>
            <CitiesVideos />
        </PageLayout>
    )
}

export const getStaticProps: GetServerSideProps<StaticProps> = async ({ locale = 'ru' }) => {
    const source = await getPageBySlug(locale, 'green-cities')
    const mdxSource = await serialize(source)

    const { default: lngDict = {} } = await import(`../locales/${locale}.json`)

    return {
        props: {
            source: mdxSource,
            lngDict,
        },
    }
}