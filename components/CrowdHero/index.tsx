import { createStyles, Container, Title, Stack, Group } from '@mantine/core'
import Image from 'next/image'

import one from '/public/crowdforce/Screenshot 2022-06-30 181725.png'

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
export const CrowdHero = () => {
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
