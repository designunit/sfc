import { createStyles, Container, Button, Group } from '@mantine/core'
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
    container: {
        position: 'relative',
        maxWidth: 1220,
        marginTop: '2rem',
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
                    {/* <Link
                        href='https://www.facebook.com/seeds.for.communities'
                    >
                        <Button
                            component='a'
                            variant='outline'
                            href='https://www.facebook.com/seeds.for.communities'
                        >
                            FB
                        </Button>
                    </Link> */}

                    <Link
                        href='https://forms.gle/Hca8mAZx6xKkkMyVA'
                    >
                        <Button
                            component='a'
                            variant='outline'
                            href='https://forms.gle/Hca8mAZx6xKkkMyVA'
                            target="_blank"
                        >
                            Записаться в базу экспертов сообщества
                        </Button>
                    </Link>

                    <Link
                        href='https://mesto.io/BCQEKSXSGI265YHO'
                    >
                        <Button
                            component='a'
                            variant='outline'
                            href='https://mesto.io/BCQEKSXSGI265YHO'
                            target="_blank"
                        >
                            Перейти к картированию деревьев
                        </Button>
                    </Link>
                </Group>
            </Container>
        </>
    )
}
