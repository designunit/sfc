import { createStyles, Container, SimpleGrid, AspectRatio } from '@mantine/core'
const useStyles = createStyles((theme) => ({
    container: {
        position: 'relative',
        maxWidth: 1220,
        marginTop: '2rem',
    },
}))

const data = [
    {
        src: 'https://www.youtube.com/embed/mhFH6RU3fdg',
    },
    {
        src: 'https://www.youtube.com/embed/-440dFcPfG8',
    },
    {
        src: 'https://www.youtube.com/embed/bSq4xQMM6RQ',
    },
    {
        src: 'https://www.youtube.com/embed/aWClMwk2POU',
    },
    {
        src: 'https://www.youtube.com/embed/jiICpLUoNiQ',
    },
    {
        src: 'https://www.youtube.com/embed/VQY88Y9WSjA',
    },
    {
        src: 'https://www.youtube.com/embed/BjKAXh_86Qk',
    },
    {
        src: 'https://www.youtube.com/embed/5YOg2RElYBE',
    },
    {
        src: 'https://www.youtube.com/embed/luZ61rhASQQ',
    },
    {
        src: 'https://www.youtube.com/embed/tLWzx02MblQ',
    },
    {
        src: 'https://www.youtube.com/embed/JHMN4L6pC7Q',
    },
    {
        src: 'https://www.youtube.com/embed/21_AL8Uzhq8',
    },
    {
        src: 'https://www.youtube.com/embed/HuLN8pqZI1Y',
    },
    {
        src: 'https://www.youtube.com/embed/tM39N2rlVbw',
    },
]

export const CitiesVideos = () => {
    const { classes: s } = useStyles()

    return (
        <>
            <Container
                className={s.container}
            >
                <SimpleGrid
                    cols={3}
                    breakpoints={[
                        { maxWidth: 'md', cols: 3 },
                        { maxWidth: 'sm', cols: 2 },
                        { maxWidth: 'xs', cols: 1 },
                    ]}
                >
                    {data.map((x, i) => (
                        <AspectRatio ratio={16 / 9} >
                            <iframe src={x.src} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        </AspectRatio>
                    ))}
                </SimpleGrid>
            </Container>
        </>
    )
}
