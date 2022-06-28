import { createStyles, Container, Overlay, Center, Title } from '@mantine/core'
import hero from '/public/hero.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import one from '/public/index/photo_2021-07-12_16-12-24 (2).jpg'
import two from '/public/index/mesto_io_1.png'
import three from '/public/index/Gk_X4epiITU.jpg'
import four from '/public/index/VW2G97fzdcs.jpg'

const useStyles = createStyles((theme) => ({
    container: {
        position: 'relative',
        maxWidth: 1220,
        minHeight: 500,
        maxHeight: 500,
        marginTop: '8rem',
        display: 'flex',
        justifyContent: 'center',

        [theme.fn.smallerThan('sm')]: {
            maxHeight: 'unset',
            padding: 'unset',
        },
    },
    swiper: {
        flex: '1 0 100%',
    },
    img: {
        borderRadius: '1rem',
    },
}))

const data = [
    {
        src: one,
        content: 'TEXT',
        href: '/'
    },
    {
        src: two,
        content: 'TEXT',
        href: '/'
    },
    {
        src: three,
        content: 'TEXT',
        href: '/'
    },
    {
        src: four,
        content: 'TEXT',
        href: '/'
    },
]

export const IndexHero = () => {
    const { classes: s } = useStyles()

    return (
        <>
            <Container
                className={s.container}
            >
                <Swiper
                    className={s.swiper}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop
                >
                    {data.map((x, i) => (
                        <SwiperSlide>
                            <Link
                                href={x.href}
                            >
                                <a
                                    style={{
                                        display: 'block',
                                        position: 'relative',
                                        height: '100%',
                                        width: '100%',
                                    }}
                                >
                                    <Image
                                        src={x.src}
                                        className={s.img}
                                        objectFit='cover'
                                        layout='fill'
                                        quality={100}
                                    />
                                    <Overlay
                                        opacity={1}
                                        color='transeparent'
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Title>
                                            {x.content}
                                        </Title>
                                    </Overlay>
                                </a>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </>
    )
}
