import { createStyles, Container, Stack, Text, List, Button } from '@mantine/core'
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
    container: {
        position: 'relative',
        maxWidth: 1220,
        marginTop: '2rem',
    },
}))


export const CommunityText = () => {
    const { classes: s } = useStyles()

    return (
        <>
            <Container
                className={s.container}
            >
                <Stack spacing='lg'>
                    <Text>
                        Мы верим в силу сообществ, коллективного разума и самоорганизации. И ценим живое общение и диалог с единомышленниками, которые помогают перенимать опыт и практику у друг друга. Поэтому мы создаем площадки для общения всех, кто вносит вклад в озеленение городов.
                    </Text>
                    <Text>
                        В 2021 году при поддержке Фонда Фридриха Эберта и программы “Зеленые города” в Санкт-Петербурге прошла [не]конференция GREENDATING, на которой участники и эксперты из разных городов России, чаще чем что-то еще, говорили друг другу: “Привет! Я подписан/на на тебя в Фейсбуке!”
                    </Text>
                    <Text>
                        Мы надеемся, что в 2022 году мы найдем формат, который поможет сообществу людей, объединенных заботой о природе в городах оставаться на связи и поддерживать инициативы друг друга.
                    </Text>

                    <div>
                        <Link href={'https://forms.gle/Hca8mAZx6xKkkMyVA'}>
                            <Button
                                component='a'
                                href='https://forms.gle/Hca8mAZx6xKkkMyVA'
                                variant='outline'
                                target="_blank"
                            >
                                Записаться в базу экспертов сообщества
                            </Button>
                        </Link>
                    </div>
                </Stack>
            </Container>
        </>
    )
}
