import { createStyles, Container, Title, Stack, Text } from '@mantine/core'

const useStyles = createStyles((theme) => ({
    container: {
        position: 'relative',
        maxWidth: 1220,
        marginTop: '2rem',
    },
}))

export const IndexText = () => {
    const { classes: s } = useStyles()

    return (
        <>
            <Container
                className={s.container}
            >
                <Text
                    size='lg'
                >
                    <Stack>
                        <div>
                            <Title style={{ display: 'inline' }}>Зеленые города</Title> - международная программа обмена опытом и практиками об устойчивом развитии городов на основе кооперации, заботы и ответственности.
                        </div>

                        <div>
                            Мы поддерживаем всех жителей городов, кто вносит вклад в озеленение городов, помогаем найти единомышленников и познакомиться с практиками озеленения в других городах.
                        </div>

                        <div>
                            Наше сообщество растет вместе с его участниками и дает каждому возможность обмениваться знаниями, учиться действовать сообща, чтобы наши города становились зеленее, экологичнее, устойчивее.
                        </div>

                        <div>
                            <i>
                                Организаторы: Mensch Raum Land e.V. и Мосты при поддержке МИД Германии
                            </i>
                        </div>
                    </Stack>
                </Text>
            </Container>
        </>
    )
}
