import { createStyles, Container, Stack, Text, List, Button } from '@mantine/core'
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
    container: {
        position: 'relative',
        maxWidth: 1220,
        marginTop: '2rem',
    },
}))


export const CrowdText = () => {
    const { classes: s } = useStyles()

    return (
        <>
            <Container
                className={s.container}
            >
                <Stack spacing='lg'>
                    <Text>
                        Crowdforce - вебприложение, которое помогает сообществам системно ухаживать за своими садами. Crowdforce помогает навести порядок в расписании садовых работ и создает возможность каждому внести свой вклад в общее дело. Чат-бот оповещает всех членов сообщества о задачах, которые есть в саду. Чтобы каждый могу найти себе занятие по душе и в то время, которое ему удобно.
                    </Text>

                    {/* <div>
                        <Link href={'https://www.facebook.com/seeds.for.communities'}>
                            <Button
                                component='a'
                                href='https://www.facebook.com/seeds.for.communities'
                                variant='outline'
                            >
                                FB-группа проекта c лонгридами
                            </Button>
                        </Link>
                    </div> */}
                </Stack>
            </Container>
        </>
    )
}
