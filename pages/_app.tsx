import { GetServerSidePropsContext } from 'next'
import { useState } from 'react'
import { AppProps } from 'next/app'
import { getCookie, setCookies } from 'cookies-next'
import Head from 'next/head'
import { MantineProvider, ColorScheme, ColorSchemeProvider, Global } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { NextSeo } from 'next-seo'
import { ModalsProvider } from '@mantine/modals'
import { IdeaModal } from '../components/IdeaModal'
import { FormContextProvider } from '../contexts/form'
import { NavbarContextProvider } from '../contexts/navbar'

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
    const { Component, pageProps } = props
    const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme)

    const toggleColorScheme = (value?: ColorScheme) => {
        const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark')
        setColorScheme(nextColorScheme)
        setCookies('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 })
    }

    return (
        <>
            <Head>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </Head>
            <NextSeo
                title='TITLE'
                description='DESCRIPTION'
                openGraph={{
                    images: [
                        {
                            url: '/hero.svg',
                            width: 397,
                            height: 277,
                        },
                    ]
                }}
            />

            <Global
                styles={theme => ({
                    '*': {
                        boxSizing: 'border-box',
                    },
                    '#__next': {
                        height: '100%',
                    },
                })}
            />

            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <MantineProvider
                    withGlobalStyles
                    withNormalizeCSS
                    theme={{
                        colorScheme,
                        // fontFamily: 'ObjectSans',
                        // fontSizes: {
                        //     'lg': 12,
                        //     'md': 12,
                        //     'sm': 12,
                        //     'xl': 12,
                        //     'xs': 12,
                        // },
                        // headings: {
                        //     fontFamily: 'ObjectSans',
                        //     h1: {
                        //         fontSize: 37,
                        //     },
                        // },
                        primaryColor: 'green',
                        // defaultRadius: 8,
                    }}
                    styles={{
                        // Text: theme => ({
                        //     root: {
                        //         color: theme.colors.secondary[0],
                        //     }
                        // }),
                        // Title: theme => ({
                        //     root: {
                        //         color: theme.colors.secondary[0],
                        //     }
                        // }),
                    }}
                >
                    <FormContextProvider>
                        <NavbarContextProvider>
                            <ModalsProvider modals={{ idea: IdeaModal }}>
                                <NotificationsProvider>
                                    <Component {...pageProps} />
                                </NotificationsProvider>
                            </ModalsProvider>
                        </NavbarContextProvider>
                    </FormContextProvider>
                </MantineProvider>
            </ColorSchemeProvider>
        </>
    )
}

App.getStaticProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
    colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
})
