import { Text, Stack, TextInput, Button, Title, Center, Select, createStyles, Group, Textarea, Checkbox, Input, Tooltip } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import { ContextModalProps, useModals } from '@mantine/modals'
import { useRouter } from 'next/router'
import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { FormContext } from '../../contexts/form'

export type IdeaModalProps = {
    defaultValues?: { [key: string]: any }
}

const states = {
    start: 'Оставить предложение',
    fetch: 'Отправка...',
    ok: 'Готово',
    error: 'Ошибка, еще раз?'
}

const useStyles = createStyles((theme) => ({
    title: {
        color: theme.colors.lime[6],
    },
    dropzone: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: theme.colors.lime[6],
        padding: '8px 18px',
    }
}))

export const IdeaModal = ({ context, id, innerProps }: ContextModalProps<IdeaModalProps>) => {
    const modals = useModals()
    const formContext = useContext(FormContext)

    const { handleSubmit, control, getValues } = useForm({
        mode: 'onChange',
        defaultValues: innerProps.defaultValues
    })
    const [text, setText] = useState(states.start)

    const [userId, setUserId] = useLocalStorage({ key: 'userId', defaultValue: (Math.random() * 100000).toFixed(0) })

    const onSubmit = async data => {

        setText(states.fetch)

        const { coords, images } = formContext.data

        const formData = new FormData()
        if (images) {
            formData.append(`files.images`, images.item(0))
        }

        const dataFormatted = {
            publishedAt: null,
            feature: {
                "type": "Feature",
                "properties": {
                    data,
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        coords?.lng ?? 0,
                        coords?.lat ?? 0,
                    ]
                }
            },
            description: data.description,
            comments: [],
            likes: 0,
            client: userId,
        }

        formData.append('data', JSON.stringify(dataFormatted))

        await fetch(
            'https://neryungri.tmshv.com/api/submissions', // WARNING ! ! !
            // '/api/submission',
            {
                method: 'POST',
                body: formData,
            }
        )
            .then(async res => {
                const isResOk = res.status == 200

                setText(isResOk ? states.ok : states.error)

                if (!isResOk) { return }

                formContext.setData({})

                modals.closeModal('idea')
                modals.openModal({
                    centered: true,
                    withCloseButton: false,
                    children: (
                        <Stack
                            spacing='xl'
                        >
                            <Center>
                                <Title order={1}>
                                    <Text
                                        inherit
                                        className={s.title}
                                    >
                                        Спасибо!
                                    </Text>
                                </Title>
                            </Center>
                            <Center>
                                <Text
                                    size='xl'
                                    align='center'
                                >
                                    Ваше предложение принято и после<br />
                                    модерации его увидят другие пользователи.
                                </Text>
                            </Center>
                        </Stack>
                    ),
                    onClose: () => modals.closeAll()
                })
            })
            .catch(async e => {
                setText(states.error)
                console.log(e)
            })
    }

    const onClickCoords = useCallback(() => {
        formContext.setData({
            ...formContext.data,
            ...getValues(),
        })
        modals.closeModal('idea')
        formContext.setAddMode(true)
    },
        [formContext.data]
    )

    const router = useRouter()
    useEffect(() => {
        if (router.pathname == '/') {
            modals.closeAll()
        }
    }, [router.pathname])

    const { classes: s } = useStyles()

    const onFile = e => {
        formContext.setData({
            ...formContext.data,
            images: e.target.files
        })
    }

    const ref = useRef(null)

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
        >
            <Stack
                spacing='xl'
            >
                <Center>
                    <Title order={1}>
                        <Text
                            inherit
                            className={s.title}
                        >
                            Ваше предложение
                        </Text>
                    </Title>
                </Center>

                <Controller
                    control={control}
                    name='type'
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Select
                            {...field}
                            required
                            label='Выберите, к какой сфере относится ваше предложение'
                            placeholder='Выберете из списка'
                            data={[
                                'Жилые дома и дворы',
                                'Общественные пространства, природа и экология',
                                'Дороги и транспорт',
                                'Инженерные системы города',
                                'Производство, торговля и услуги',
                                'Здоровье, образование, спорт и культура',
                                'Другое',
                            ]}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name='description'
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Textarea
                            {...field}
                            required
                            minRows={4}
                            label='Опишите вашу идею'
                            placeholder='Описание вашей идеи'
                        />
                    )}
                />
                <Controller
                    control={control}
                    name='money'
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Select
                            {...field}
                            required
                            label='За счет каких средств может быть сделан проект'
                            placeholder='Выберете из списка'
                            data={[
                                'Бюджетные',
                                'Частные',
                                'Краудфандинг',
                                'Пока не знаю',
                            ]}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name='participation'
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Select
                            {...field}
                            required
                            label='Будете ли вы сами и ваши друзья участвовать в реализации?'
                            placeholder='Выберете из списка'
                            data={[
                                'Да',
                                'Нет',
                            ]}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name='contactName'
                    rules={{ required: true }}
                    render={({ field }) => (
                        <TextInput
                            {...field}
                            required
                            label='Ваш никнейм'
                            placeholder='Ваш никнейм'
                        />
                    )}
                />
                <Controller
                    control={control}
                    name='age'
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Select
                            {...field}
                            required
                            label='Сколько вам лет '
                            placeholder='Выберете из списка'
                            data={[
                                'До 25',
                                '25-40',
                                '40-65',
                                'Более 65',
                            ]}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name='time'
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Select
                            {...field}
                            required
                            label='Сколько лет вы живете в городе '
                            placeholder='Выберете из списка'
                            data={[
                                'С рождения',
                                'Более 5 лет',
                                'Менее 5 лет',
                                'Я здесь временно',
                            ]}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name='contacts'
                    render={({ field }) => (
                        <TextInput
                            {...field}
                            label='Если вы хотите, чтобы с вами могли связаться для реализации вашей идеи, оставьте, пожалуйста, свою контактную информацию'
                            placeholder='Ваш email'
                        />
                    )}
                />

                <Group
                    grow
                >
                    <Tooltip
                        label='Точка добавлена'
                        opened={Boolean(formContext.data.coords)}
                        color={'lime'}
                        placement='center'
                        withArrow

                        style={{
                            width: '100%',
                        }}
                    >
                        <Button
                            onClick={onClickCoords}
                            variant='outline'
                            fullWidth
                            disabled={Boolean(formContext.data.coords)}

                            styles={{
                                label: {
                                    whiteSpace: 'pre-line',
                                }
                            }}
                        >
                            Добавить точку на карте
                        </Button>
                    </Tooltip>

                    <Tooltip
                        label='Фото добавлено'
                        opened={formContext.data.images?.length > 0}
                        color={'lime'}
                        placement='center'
                        withArrow

                        style={{
                            width: '100%',
                        }}
                    >
                        <Button
                            variant='outline'
                            fullWidth
                            onClick={() => ref.current?.click()}
                            disabled={formContext.data.images?.length > 0}
                        >
                            Добавить Фото
                        </Button>
                    </Tooltip>
                </Group>

                <Input // hidden file input for photos
                    ref={ref}
                    type='file'
                    onChange={onFile}
                    accept='image/*'

                    style={{
                        display: 'none',
                    }}
                />

                <Controller
                    control={control}
                    name='mailList'
                    render={({ field }) => (
                        <Checkbox
                            {...field}
                            label='Вы согласны получать рассылку?'
                        />
                    )}
                />

                <Button
                    disabled={[states.fetch, states.ok].includes(text)}
                    type='submit'
                >
                    {text}
                </Button>

                <Text
                    color='dimmed'
                    align='center'
                >
                    Внимание! Предложения проходят техническую премодерацию.
                </Text>
            </Stack>
        </form>
    )
}
