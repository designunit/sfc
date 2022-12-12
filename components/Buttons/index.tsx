import { createStyles, Container, Group } from '@mantine/core'

const useStyles = createStyles((theme) => ({
    container: {
        position: 'relative',
        maxWidth: 1220,
        marginTop: '2rem',
        padding: 'unset'
    },
}))

export const Buttons = ({ children }) => {
    const { classes: s } = useStyles()

    return (
        <>
            <Container
                className={s.container}
            >
                <Group>
                    {children}
                    {/* <Button
                        component='a'
                        variant='outline'
                        href='https://forms.gle/Hca8mAZx6xKkkMyVA'
                        target="_blank"
                    >
                        Записаться в базу экспертов сообщества
                    </Button>

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
                    </Link> */}
                </Group>
            </Container>
        </>
    )
}
