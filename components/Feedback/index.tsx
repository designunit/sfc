import { createStyles, Group, Container, Text, Overlay, Stack, Title } from '@mantine/core'
import Image from 'next/image'
import { Form } from './form'
import feedback from '/public/feedback.svg'

const useStyles = createStyles((theme) => ({
    container: {
        position: 'relative',
        maxWidth: 1220,
        minHeight: 440,
        marginTop: '4rem',
    },
    overlay: {
        padding: '42px 80px',

        [theme.fn.smallerThan('sm')]: {
            position: 'relative',
            padding: theme.spacing.md,
        },
    },

    bg: {
        background: 'linear-gradient(90.09deg, rgba(48, 69, 79, 0.12) 0.08%, rgba(139, 197, 64, 0.16) 98.45%)',
        borderRadius: theme.defaultRadius,
    },

    group: {
        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
            alignContent: 'center',
        },
    },
    stack: {
        [theme.fn.smallerThan('sm')]: {
            maxWidth: 'unset',
        },
    }
}))

export const Feedback = () => {
    const { classes: s } = useStyles()

    return (
        <>
            <Container
                className={s.container}
            >
                <Overlay
                    color='transparent'
                    opacity={1}
                    className={s.overlay}
                >
                    <Group
                        grow
                        align='flex-start'
                        className={s.group}
                    >
                        <Stack
                            spacing='xl'
                            align='flex-start'
                            className={s.stack}
                        >
                            <Title order={1}>
                                <Text
                                    variant='gradient'
                                    gradient={{ from: 'primary', to: 'secondary' }}
                                    inherit
                                >
                                    Лучшие предложения
                                </Text>
                            </Title>
                            <Title
                                order={3}
                                style={{
                                    fontWeight: 'normal'
                                }}
                            >
                                Ваши лучшие предложения войдут<br />
                                в мастер-план города, который будет<br />
                                реализовываться при поддержке<br />
                                федеральных органов власти.
                            </Title>
                            <Title>
                                <Text
                                    inherit
                                    variant='gradient'
                                    gradient={{ from: 'primary', to: 'secondary' }}
                                >
                                    <span
                                        style={{
                                            fontSize: '.7em'
                                        }}
                                    >
                                        Оставлять свои идеи можно<br />
                                    </span>
                                    до 14 июля 2022.
                                </Text>
                            </Title>
                            <Text
                                size='sm'
                                color='dimmed'
                            >
                                *Внимание! Предложения проходят техническую премодерацию!
                            </Text>
                        </Stack>

                        <Stack
                            className={s.stack}
                        >
                            <Title order={1}>
                                <Text
                                    variant='gradient'
                                    gradient={{ from: 'primary', to: 'secondary' }}
                                    inherit
                                >
                                    Есть вопрос? Задавай!
                                </Text>
                            </Title>
                            <Form />
                        </Stack>
                    </Group>
                </Overlay>

                <Image
                    src={feedback}
                    objectFit='contain'
                    layout='fill'
                    objectPosition={'bottom right'}
                    quality={100}
                    className={s.bg}
                />
            </Container>
        </>
    )
}
