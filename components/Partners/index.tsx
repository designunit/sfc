import { createStyles, Group, Container, Stack, Title } from '@mantine/core'
import Image from 'next/image'
import logoDom from '/public/logoDom.svg'
import siburblab from '/public/partners/sul.png'
import sakhara from '/public/partners/sakhara.svg'
import neryungri from '/public/partners/neryungri.png'
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
    container: {
        position: 'relative',
        maxWidth: 1220,
        padding: '4rem 0 10rem 0',
    },
    h1: {
        fontWeight: 'normal',
    },

    group: {
        '& > a': {
            position: 'relative',
            display: 'block',
            width: 150,
            height: 150,
        },
        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
            alignContent: 'center',
            gap: '4rem',

            '& > a': {
                height: 150,
                width: '50%',
                maxWidth: 'unset',
            }
        },
    }
}))

export const Partners: React.FC = () => {
    const { classes: s } = useStyles()

    return (
        <>
            <Container
                className={s.container}
            >
                <Stack>
                    <Title
                        order={1}
                    >
                        <span className={s.h1}>
                            При{' '}
                        </span>
                        поддержке
                    </Title>

                    <Group
                        grow
                        position='apart'
                        align='stretch'
                        style={{
                            marginTop: '4rem',
                        }}
                        className={s.group}
                    >
                        <Link href={'https://дом.рф/'}>
                            <a>
                                <Image
                                    src={logoDom}
                                    objectFit='contain'
                                    layout='fill'
                                />
                            </a>
                        </Link>
                        <Link href={'https://www.sakha.gov.ru/'}>
                            <a>
                                <Image
                                    src={sakhara}
                                    objectFit='contain'
                                    layout='fill'
                                />
                            </a>
                        </Link>
                        <Link href={'http://www.neruadmin.ru/'}>
                            <a>
                                <Image
                                    src={neryungri}
                                    objectFit='contain'
                                    layout='fill'
                                />
                            </a>
                        </Link>
                        <Link href={'https://siburbanlab.ru/'}>
                            <a>
                                <Image
                                    src={siburblab}
                                    objectFit='contain'
                                    layout='fill'
                                />
                            </a>
                        </Link>
                    </Group>
                </Stack>
            </Container>
        </>
    )
}
