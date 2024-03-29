import { createStyles, Header, Footer, Group, Container, Text, AppShell, Navbar, MediaQuery, Burger, Center, Stack, Button, Drawer, Title, Select } from '@mantine/core'
import logo from '/public/logo.svg'
import logoDom from '/public/logoDom.svg'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import mosty from '/public/partners/bridge it logo.png'
import mrl from '/public/partners/MRL-Logo-w1200-color Kopie.png'
import midGerm from '/public/partners/AA_DTP_CMYK_russ.svg'
import goroda from '/public/partners/Seeds-of-community-3.png'
import { useI18n } from 'next-localization'
import { useRouter } from 'next/router'

const useStyles = createStyles((theme) => ({
    header: {
        zIndex: 500,

        [theme.fn.smallerThan('xs')]: {
            height: 64,
        },
    },
    footer: {
        marginTop: 40,
        paddingTop: 20,
        marginBottom: 20,
    },
    container: {
        height: '100%',
        maxWidth: 1220,
        display: 'flex',
        justifyContent: 'space-between',
    },
    button: {

    },
    containerFooter: {
        height: '100%',
        maxWidth: 1220,
        display: 'flex',
        flexWrap: 'nowrap',
    },
    groupFooter: {
        width: '100%',

        '& > div': {
            minWidth: 100,
            height: '100%',
            position: 'relative',

            [theme.fn.smallerThan('xs')]: {
                minWidth: 75,
            },
        }
    },

    logo: {
        [theme.fn.smallerThan('lg')]: {
            fontSize: '1rem !important',
        }
    },
}))

export const PageLayout: React.FC = ({ children }) => {
    const { classes: s, cx, } = useStyles()
    const { t } = useI18n()
    const router = useRouter()

    const items = [
        {
            content: t("menu_green-cities"),
            href: '/green-cities'
        },
        {
            content: t("menu_tree-cartography"),
            href: '/tree-cartography'
        },
        {
            content: t("menu_crowdforce"),
            href: '/crowdforce',
        },
        {
            content: t("menu_community"),
            href: '/community',
        },
    ]

    const [opened, setOpened] = useState(false)
    return (
        <>
            <AppShell
                header={(
                    <Header
                        height={60}
                        className={s.header}
                        fixed
                    >
                        <Container
                            fluid
                            className={s.container}
                        >
                            <Link href='/'>
                                <a
                                    style={{
                                        textDecoration: 'none',
                                    }}
                                    onClick={() => setOpened(false)}
                                >
                                    <Title
                                        style={{
                                            height: '100%',
                                        }}
                                        className={s.logo}
                                    >
                                        <Text
                                            inherit
                                            variant='gradient'
                                            gradient={{ from: 'green', to: 'lime' }}
                                            style={{
                                                height: '100%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                whiteSpace: 'nowrap',
                                            }}
                                        >
                                            {t("logo")}
                                        </Text>
                                    </Title>
                                </a>
                            </Link>

                            <MediaQuery largerThan={'sm'} styles={{ display: 'none' }}>
                                <Center>
                                    <Burger
                                        opened={opened}
                                        onClick={() => setOpened((o) => !o)}
                                        ml="xl"
                                        color='#2F444E'
                                    />
                                </Center>
                            </MediaQuery>
                            <MediaQuery smallerThan={'sm'} styles={{ display: 'none' }}>
                                <Group
                                    spacing={12}
                                >
                                    {items.map((x, i) => (
                                        <Link
                                            key={i}
                                            href={x.href}
                                        >
                                            <Button
                                                variant='subtle'
                                                component='a'
                                                className={s.button}
                                            >
                                                {x.content}
                                            </Button>
                                        </Link>
                                    ))}

                                    <a href='https://www.facebook.com/seeds.for.communities'
                                        target="_blank"
                                    >
                                        <Button
                                            variant='outline'
                                            styles={{
                                                root: {
                                                    padding: '0 10px',
                                                }
                                            }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                                            </svg>
                                        </Button>
                                    </a>
                                </Group>
                            </MediaQuery>

                            <MediaQuery smallerThan={'sm'} styles={{ display: 'none' }}>
                                <Select
                                    sx={{
                                        maxWidth: "4.5rem",
                                        alignSelf: 'center',
                                        marginBottom: 2,
                                        marginLeft: '1rem',
                                    }}
                                    zIndex={501}
                                    defaultValue={router.locale}
                                    onChange={value => router.push("/", "/", { locale: value })}
                                    data={[
                                        { value: "ru", label: "RU" },
                                        { value: "en", label: "EN" },
                                        { value: "de", label: "DE" },
                                        { value: "ar", label: "AR" },
                                    ]}
                                />
                            </MediaQuery>

                        </Container>
                    </Header>
                )}
                footer={(
                    <Footer
                        height={100}
                        className={s.footer}
                    >
                        <Container
                            fluid
                            className={s.containerFooter}
                        >
                            <Group
                                grow
                                spacing={'lg'}
                                className={s.groupFooter}
                                position='apart'
                            >
                                <div>
                                    <a href='http://obmen.org/' target='_blank'>
                                        <Image
                                            src={mosty}
                                            layout='fill'
                                            objectFit='contain'
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href='http://mensch-raum-land.org/' target='_blank'>
                                        <Image
                                            src={mrl}
                                            layout='fill'
                                            objectFit='contain'
                                        />
                                    </a>
                                </div>
                                <div>
                                    <Image
                                        src={midGerm}
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                </div>
                                <div>
                                    <Image
                                        src={goroda}
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                </div>
                            </Group>
                        </Container>
                    </Footer>
                )}
            >
                <MediaQuery largerThan={'sm'} styles={{ display: 'none' }}>
                    <Drawer
                        opened={opened}
                        onClose={() => setOpened(false)}
                        size='calc(min(100%, 500px))'
                        position='right'
                    >
                        <Stack
                            spacing={24}
                            style={{
                                paddingTop: 40,
                                paddingRight: '.5rem',
                                alignItems: 'flex-end'
                            }}
                        >
                            {items.map((x, i) => (
                                <Link
                                    key={i}
                                    href={x.href}
                                >
                                    <Button
                                        variant='subtle'
                                        component='a'
                                        className={s.button}
                                        onClick={() => setOpened(false)}
                                    >
                                        {x.content}
                                    </Button>
                                </Link>
                            ))}
                            <Select
                                sx={{
                                    maxWidth: "4.5rem",
                                    marginBottom: 2,
                                }}
                                zIndex={501}
                                defaultValue={router.locale}
                                onChange={value => router.push("/", "/", { locale: value })}
                                data={[
                                    { value: "ru", label: "RU" },
                                    { value: "en", label: "EN" },
                                    { value: "de", label: "DE" },
                                    { value: "ar", label: "AR" },
                                ]}
                            />
                        </Stack>
                    </Drawer>
                </MediaQuery>
                {children}
            </AppShell>
        </>
    )
}
