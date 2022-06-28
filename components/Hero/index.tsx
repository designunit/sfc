import { createStyles, Group, Container, Text, Overlay, Stack, Title, Button } from '@mantine/core'
import hero from '/public/hero.svg'
import Image from 'next/image'
import Link from 'next/link'
import { globals } from '../../globals'

const useStyles = createStyles((theme) => ({
    container: {
        position: 'relative',
        maxWidth: 1220,
        minHeight: 600,
        maxHeight: 600,
        borderBottom: `solid 2px ${theme.colors.secondary[0]}`,
        display: 'flex',
        marginTop: '8rem',

        [theme.fn.smallerThan('sm')]: {
            maxHeight: 'unset',
            padding: 'unset',
        },
    },
    overlay: {
        paddingBottom: 30,

        [theme.fn.smallerThan('sm')]: {
            position: 'relative',
        },
    },
    h1: {
        fontWeight: 'normal',
    },
    h1Green: {
        fontWeight: 'bold',
        color: theme.colors.lime[6],
    },
    bg: {
        width: '100%',
        hegiht: '100%',
        position: 'relative',
        flexFlow: 'row nowrap',
        alignItems: 'stretch',

        [theme.fn.smallerThan(globals.mobileBreakpoint)]: {
            display: 'none',
        },
    }
}))

export const Hero = () => {
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
                    <Stack
                        spacing={56}
                        align='flex-start'
                    >
                        <Title
                            order={1}
                            className={s.h1}
                        >
                            Нерюнгри,<br />
                            <span className={s.h1Green} >
                                о котором мы мечтаем
                            </span>
                        </Title>
                        <div
                            style={{
                                maxWidth: 475,
                            }}
                        >
                            <Stack>
                                <Text
                                    style={{
                                        fontSize: '1.25em',
                                    }}
                                >
                                    <b>Дорогие нерюнгринцы!</b>
                                </Text>
                                <Text>
                                    Каждый из нас думает о будущем нашего города. Все мечтают о разном – например, об аквапарке, развлекательном центре, современном образовании и качественной медицинской помощи. Расскажите о ваших желаниях, чтобы мы включили их в <b>новый документ – мастер-план Нерюнгри.</b>
                                </Text>
                                <Text>
                                    <b>Мастер-план</b> – это документ стратегического планирования города. Его разработка ведется при активном участии экспертов и горожан. Главная ценность мастер-плана – стратегия и образ будущего города в долгосрочной перспективе.
                                </Text>
                                <Text>
                                    Этот сайт создан для того, чтобы любой житель Нерюнгри мог поделиться идеями и проектами для города в разных сферах: благоустройство, социальные услуги, бизнес, культура, спорт и других. Свои предложения можно оставлять до <b>14 июля 2022 года.</b> Лучшие предложения будут учтены в мастер-плане города Нерюнгри.
                                </Text>
                            </Stack>
                        </div>
                        <Group>
                            <Link
                                href={globals.mapHref}
                            >
                                <Button
                                    size='xl'
                                    component='a'
                                    href={globals.mapHref}
                                >
                                    Оставить предложение
                                </Button>
                            </Link>
                            <Text
                                style={{
                                    fontSize: '1.25em'
                                }}
                            >
                                <b>до 14 июля 2022 года</b>
                            </Text>
                        </Group>
                    </Stack>
                </Overlay>

                <Group
                    className={s.bg}
                    grow
                    position='apart'
                    spacing='xs'
                >
                    <div style={{
                        maxWidth: '35%',
                    }} />
                    <div style={{
                        position: 'relative',
                        maxWidth: 'unset',
                    }}>
                        <Image
                            src={hero}
                            objectFit='contain'
                            layout='fill'
                            objectPosition={'bottom right'}
                            quality={100}
                        />
                    </div>
                </Group>
            </Container>
        </>
    )
}
