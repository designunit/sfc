import { createStyles, Header, Footer, Group, Container, Text, AppShell, Navbar, MediaQuery, Burger, Center, Stack, Button, Drawer } from '@mantine/core'
import logo from '/public/logo.svg'
import logoDom from '/public/logoDom.svg'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import mosty from '/public/partners/bridge it logo.png'
import mrl from '/public/partners/MRL-Logo-w1200-color Kopie.png'
import midGerm from '/public/partners/AA_DTP_CMYK_russ.svg'
import goroda from '/public/partners/Seeds-of-community-3.png'

const items = [
    {
        content: 'программа Зеленые Города',
        href: '/green-cities'
    },
    {
        content: 'Картирование деревьев',
        href: '/tree-cartography'
    },
    {
        content: 'Croudforce',
        href: '/crowdforce',
    },
    {
        content: 'наше сообщество',
        href: '/community',
    },
]

const useStyles = createStyles((theme) => ({
    header: {
        zIndex: 500,

        [theme.fn.smallerThan('xs')]: {
            height: 64,
        },
    },
    footer: {
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
    }
}))

export const PageLayout: React.FC = ({ children }) => {
    const { classes: s, cx, } = useStyles()

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
                                <a>
                                    {/* <Image
                                        src={logo}
                                    /> */}
                                    ЛОГО
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
                                    spacing={24}
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
                                </Group>
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
                                    <Image
                                        src={mosty}
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                </div>
                                <div>
                                    <Image
                                        src={mrl}
                                        layout='fill'
                                        objectFit='contain'
                                    />
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

            // navbar={
            //     <MediaQuery largerThan={'sm'} styles={{ display: 'none' }}>
            //         <Navbar
            //             hiddenBreakpoint={'sm'}
            //             hidden={!opened}
            //             fixed
            //             style={{
            //                 zIndex: 400,
            //                 height: '100%',
            //                 paddingLeft: '1rem',
            //                 paddingTop: '1rem',
            //             }}
            //         >
            //             <Stack
            //                 spacing={24}
            //             >
            //                 {items.map((x, i) => (
            //                     <a
            //                         key={i}
            //                         href={x.href}
            //                         className={s.button}
            //                         onClick={() => setOpened(false)}
            //                     >
            //                         {x.content}
            //                     </a>
            //                 ))}
            //             </Stack>
            //         </Navbar>
            //     </MediaQuery>
            // }
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
                                paddingRight: '1.5rem',
                                textAlign: 'right',
                            }}
                        >
                            {items.map((x, i) => (
                                <a
                                    key={i}
                                    href={x.href}
                                    className={s.button}
                                    onClick={() => setOpened(false)}
                                >
                                    {x.content}
                                </a>
                            ))}
                        </Stack>
                    </Drawer>
                </MediaQuery>
                {children}
            </AppShell>
        </>
    )
}
