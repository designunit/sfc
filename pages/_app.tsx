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
                title='Зеленые города'
                description='Зеленые города - международная программа обмена опытом и практиками об устойчивом развитии городов на основе кооперации, заботы и ответственности.'
                openGraph={{
                    images: [
                        {
                            url: '/meta.jpeg',
                            width: 182,
                            height: 156,
                        },
                    ]
                }}
            />

            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500;700;900&display=swap" rel="stylesheet"></link>

            <Global
                styles={theme => ({
                    '*': {
                        boxSizing: 'border-box',
                    },
                    '#__next': {
                        height: '100%',
                    },

                    'main': {
                        padding: '0 !important',
                    },
                    'b': {
                        fontWeight: '900 !important' as 'bolder',
                    },
                    'h1,h2,h3,h4,h5,h6': {
                        letterSpacing: .5,
                        fontWeight: '900 !important' as 'bolder',
                    }
                })}
            />

            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <MantineProvider
                    withGlobalStyles
                    withNormalizeCSS
                    theme={{
                        colorScheme,
                        fontFamily: 'Roboto',
                        headings: {
                            fontFamily: 'Roboto',
                        },
                        primaryColor: 'green',
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
