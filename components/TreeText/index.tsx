import { createStyles, Container, Stack, Text, List, Button, Group } from '@mantine/core'
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
    container: {
        position: 'relative',
        maxWidth: 1220,
        marginTop: '2rem',
    },
}))


export const TreeText = () => {
    const { classes: s } = useStyles()

    return (
        <>
            <Container
                className={s.container}
            >
                <Stack spacing='lg'>
                    <Text>
                        В рамках программы «Зеленые города» на платформе для городских исследований качества городской среды разработано <a href='https://mesto.io/BCQEKSXSGI265YHO'>IT-решение</a> для подсчета деревьев.
                    </Text>
                    <Text>
                        <b>Почему важно считать деревья в городе?</b>
                    </Text>
                    <Text>
                        Мы заметили, что развитие городов это не только новые кварталы, чудесное преображение площадей и улиц, но и причина утраты многих деревьев. К сожалению, не в каждой городской администрации есть электронная карта деревьев, которая бы помогла сохранить информацию о каждом дереве.
                    </Text>
                    <Text>
                        Поэтому мы сделали приложение, которое помогает горожанам сохранить информацию о деревьях.
                    </Text>
                    <Text>
                        После отметки деревьев в приложении вы можете выгрузить информацию об обозначенных деревьях (в виде слоя с данными в формате GeoJSON) для того, чтобы при проектировании нового проекта благоустройства ландшафтные специалисты смогли учесть расположение существующих деревьев.
                    </Text>
                    <Text>
                        Воспользоваться приложением можно в 4 городах России Санкт-Петербург, Краснодар, Саратов и Пермь, кураторы каждого города подскажут вам как внести свой вклад в общее дело. Если вы готовы присоединиться к картированию деревьев - заполняйте
                    </Text>

                    <div>
                        <Group>
                            <Link href={'https://mesto.io/BCQEKSXSGI265YHO '}>
                                <Button
                                    component='a'
                                    href='https://mesto.io/BCQEKSXSGI265YHO '
                                    variant='subtle'
                                >
                                    Приложение для Саратова
                                </Button>
                            </Link>

                            <Link href={'https://forms.gle/TVD8zRbwyRTkkEHc9'}>
                                <Button
                                    component='a'
                                    href='https://forms.gle/TVD8zRbwyRTkkEHc9'
                                    variant='subtle'
                                >
                                    присоединиться к инвентаризации
                                </Button>
                            </Link>
                        </Group>
                    </div>
                </Stack>
            </Container>
        </>
    )
}
