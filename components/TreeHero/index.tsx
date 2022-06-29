import { createStyles, Container, Center, Title, Stack, Text, Group, List, Button, SimpleGrid, AspectRatio } from '@mantine/core'
import hero from '/public/hero.svg'
import Image from 'next/image'
import Link from 'next/link'

import one from '/public/tree/mesto_io.png'
import two from '/public/tree/mesto_io_1 (1).png'

const useStyles = createStyles((theme) => ({
    container: {
        position: 'relative',
        maxWidth: 1220,
        marginTop: '4rem',
    },
    images: {
        [theme.fn.smallerThan('sm')]: {
            flexFlow: 'column',
            '& > div': {
                minWidth: '100%',
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
        minHeight: 300,
        '& > span': {
            borderRadius: '1rem',
        }
    },
}))
export const TreeHero = () => {
    const { classes: s } = useStyles()

    return (
        <>
            <Container
                className={s.container}
            >
                <Stack spacing='lg'>
                    <Title>
                        Картирование деревьев
                    </Title>

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
                            />
                        </div>
                        <div
                            className={s.img}
                        >
                            <Image
                                src={two}
                                layout='fill'
                                objectFit='cover'
                            />
                        </div>
                    </Group>
                </Stack>
            </Container>
        </>
    )
}
