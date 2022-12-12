import { createStyles, Container, Center, Title, Stack, Text, Group, List, Button, SimpleGrid, AspectRatio } from '@mantine/core'
import hero from '/public/hero.svg'
import Image from 'next/image'
import Link from 'next/link'

import one from '/public/cities/photo_2021-07-12_16-12-21 (20).jpg'
// import two from '/public/cities/green-cities.png'

const useStyles = createStyles((theme) => ({
    container: {
        position: 'relative',
        maxWidth: 1220,
        marginTop: '6rem',
    },
    images: {
        [theme.fn.smallerThan('sm')]: {
            flexFlow: 'column',
            '& > div': {
                minWidth: '100%',
                minHeight: 300,
            }
        },
        [theme.fn.smallerThan('xs')]: {
            '& > div': {
                minHeight: 200,
            }
        }
    },
    img: {
        position: 'relative',
        minHeight: 500,
        '& > span': {
            borderRadius: '1rem',
        }
    },
}))

export const CitiesHero = () => {
    const { classes: s } = useStyles()

    return (
        <>
            <Container
                className={s.container}
            >
                <Stack spacing='lg'>
                    <Group
                        grow
                        className={s.images}
                    >
                        <div
                            className={s.img}
                        >
                            <Image
                                src={one}
                                layout='fill'
                                objectFit='cover'
                                quality={100}
                            />
                        </div>
                    </Group>
                </Stack>
            </Container>
        </>
    )
}
