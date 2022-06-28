import { createStyles, Group, Container, Text, Stack, Title } from '@mantine/core'

const useStyles = createStyles((theme) => ({
    container: {
        maxWidth: 1220,
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        padding: '70px 0 0 0',

        '&>div': {
            maxWidth: '75%',

            [theme.fn.smallerThan('sm')]: {
                maxWidth: 'unset',
            },
        }
    },
    h1: {
        fontWeight: 'normal',
    },
    h1Green: {
        fontWeight: 'bold',
    },

    br: {
        display: 'none',
        [theme.fn.smallerThan('sm')]: {
            display: 'inline'
        },
    }
}))

export const About = () => {
    const { classes: s } = useStyles()

    return (
        <>
            <Container
                className={s.container}
            >
                <Group
                    grow
                    spacing='xs'
                >
                    <Stack
                        spacing={56}
                        align='flex-start'
                    >
                        <Title
                            order={1}
                            className={s.h1}
                        >
                            Что такое{' '} <br className={s.br} />
                            <span className={s.h1Green} >
                                Мастер-план?
                            </span>
                        </Title>
                        <div>
                            <Text>
                                Мастер-план — это документ стратегического пространственного планирования города. Такое планирование носит долгосрочный характер и фокусируется на ограниченном числе целей и задач. Разрабатывается стратегический мастер-план публичной властью, но при активном участии экспертов и горожан. С одной стороны, это действительно всего лишь документ, эффективность которого зависит от тех, кто им пользуется. С другой — главное отличие мастер-плана от существующего  генплана в том, что у мастер-плана есть концептуальная часть — стратегия, которая рисует то, каким будет город в перспективе. И это дарит ему множество преимуществ.
                            </Text>
                        </div>
                    </Stack>
                </Group>
            </Container>
        </>
    )
}
