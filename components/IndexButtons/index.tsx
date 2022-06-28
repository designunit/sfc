import { createStyles, Container, Button, Group } from '@mantine/core'
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
    container: {
        position: 'relative',
        marginTop: '4rem',
    },
}))

export const IndexButtons = () => {
    const { classes: s } = useStyles()

    return (
        <>
            <Container
                className={s.container}
            >
                <Group>
                    <Link
                        href='https://www.facebook.com/seeds.for.communities'
                    >
                        <Button
                            component='a'
                            variant='subtle'
                            href='https://www.facebook.com/seeds.for.communities'
                        >
                            FB
                        </Button>
                    </Link>

                    <Link
                        href='https://forms.gle/Hca8mAZx6xKkkMyVA'
                    >
                        <Button
                            component='a'
                            variant='subtle'
                            href='https://forms.gle/Hca8mAZx6xKkkMyVA'
                        >
                            форма у базу экспертов
                        </Button>
                    </Link>

                    <Link
                        href='https://mesto.io/BCQEKSXSGI265YHO'
                    >
                        <Button
                            component='a'
                            variant='subtle'
                            href='https://mesto.io/BCQEKSXSGI265YHO'
                        >
                            инвентаризация деревьев
                        </Button>
                    </Link>
                </Group>
            </Container>
        </>
    )
}
