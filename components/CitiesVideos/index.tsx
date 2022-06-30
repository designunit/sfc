import { createStyles, Container, SimpleGrid, AspectRatio, Modal } from '@mantine/core'
import Image from 'next/image'
import { useState } from 'react'

const useStyles = createStyles((theme) => ({
    container: {
        position: 'relative',
        maxWidth: 1220,
        marginTop: '2rem',
    },
}))

const data = [
    {
        src: 'https://img.youtube.com/vi/mhFH6RU3fdg/hqdefault.jpg',
        url: 'https://www.youtube.com/embed/mhFH6RU3fdg'
    },
    {
        src: 'https://img.youtube.com/vi/-440dFcPfG8/hqdefault.jpg',
        url: 'https://www.youtube.com/embed/-440dFcPfG8'
    },
    {
        src: 'https://img.youtube.com/vi/bSq4xQMM6RQ/hqdefault.jpg',
        url: 'https://www.youtube.com/embed/bSq4xQMM6RQ'
    },
    {
        src: 'https://img.youtube.com/vi/aWClMwk2POU/hqdefault.jpg',
        url: 'https://www.youtube.com/embed/aWClMwk2POU'
    },
    {
        src: 'https://img.youtube.com/vi/jiICpLUoNiQ/hqdefault.jpg',
        url: 'https://www.youtube.com/embed/jiICpLUoNiQ'
    },
    {
        src: 'https://img.youtube.com/vi/VQY88Y9WSjA/hqdefault.jpg',
        url: 'https://www.youtube.com/embed/VQY88Y9WSjA'
    },
    {
        src: 'https://img.youtube.com/vi/BjKAXh_86Qk/hqdefault.jpg',
        url: 'https://www.youtube.com/embed/BjKAXh_86Qk'
    },
    {
        src: 'https://img.youtube.com/vi/5YOg2RElYBE/hqdefault.jpg',
        url: 'https://www.youtube.com/embed/5YOg2RElYBE'
    },
    {
        src: 'https://img.youtube.com/vi/luZ61rhASQQ/hqdefault.jpg',
        url: 'https://www.youtube.com/embed/luZ61rhASQQ'
    },
    {
        src: 'https://img.youtube.com/vi/tLWzx02MblQ/hqdefault.jpg',
        url: 'https://www.youtube.com/embed/tLWzx02MblQ'
    },
    {
        src: 'https://img.youtube.com/vi/JHMN4L6pC7Q/hqdefault.jpg',
        url: 'https://www.youtube.com/embed/JHMN4L6pC7Q'
    },
    {
        src: 'https://img.youtube.com/vi/21_AL8Uzhq8/hqdefault.jpg',
        url: 'https://www.youtube.com/embed/21_AL8Uzhq8'
    },
    {
        src: 'https://img.youtube.com/vi/HuLN8pqZI1Y/hqdefault.jpg',
        url: 'https://www.youtube.com/embed/HuLN8pqZI1Y'
    },
    {
        src: 'https://img.youtube.com/vi/tM39N2rlVbw/hqdefault.jpg',
        url: 'https://www.youtube.com/embed/tM39N2rlVbw'
    },

    {
        src: 'https://img.youtube.com/vi/UZy3hv3ReK0/hqdefault.jpg',
        url: 'https://www.youtube.com/embed/UZy3hv3ReK0'
    },
    {
        src: 'https://img.youtube.com/vi/ErTRvDmX0nA/hqdefault.jpg',
        url: 'https://www.youtube.com/embed/ErTRvDmX0nA'
    },
    {
        src: 'https://img.youtube.com/vi/aF1uYXbHv_8/hqdefault.jpg',
        url: 'https://www.youtube.com/embed/aF1uYXbHv_8'
    },
]

export const CitiesVideos = () => {
    const { classes: s } = useStyles()
    const [opened, setOpened] = useState(false)
    const [url, setUrl] = useState(data[0].url)

    return (
        <>

            <Modal
                centered
                opened={opened}
                onClose={() => setOpened(false)}
                withCloseButton={false}
                size='calc(min(100%, 1200px))'
            >

                <AspectRatio ratio={16 / 9}>
                    <iframe src={url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </AspectRatio>
            </Modal>

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
                        <AspectRatio ratio={16 / 9}
                            style={{
                                cursor: 'pointer',
                            }}
                            onClick={() => {
                                setOpened(true)
                                setUrl(x.url)
                            }}
                        >
                            <Image
                                src={x.src}
                                layout='fill'
                                objectFit='cover'
                                style={{
                                    borderRadius: '1rem'
                                }}
                            />
                            <svg xmlns="http://www.w3.org/2000/svg"
                                style={{
                                    position: 'absolute',
                                    top: 'calc(50% - 24px)',
                                    left: 'calc(50% - 24px)',
                                    fill: '#37b24d',
                                    stroke: 'white',
                                    strokeWidth: 2,
                                    width: 48,
                                    height: 48,
                                }}
                            ><path d="M18.4 37.85q-1.25.75-2.45.075-1.2-.675-1.2-2.075v-24q0-1.4 1.2-2.075 1.2-.675 2.45.075L37.2 21.9q1.15.7 1.15 1.975 0 1.275-1.15 1.925Z" /></svg>
                        </AspectRatio>
                    ))}
                </SimpleGrid>
            </Container>
        </>
    )
}
