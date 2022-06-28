import { Button, Overlay, Stack, Textarea, TextInput, Text, Center, Title, Modal, Dialog } from '@mantine/core'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

const states = {
    start: 'Отправить',
    fetch: 'Отправка...',
    ok: 'Готово',
    error: 'Ошибка, еще раз?'
}

export const Form: React.FC = () => {
    const { handleSubmit, control } = useForm({
        mode: 'onChange',
    })
    const [text, setText] = useState(states.start)
    const [dialog, setDialog] = useState(true)

    const onSubmit = async data => {
        setText(states.fetch)

        const bodyObject: any = {
            '_subject': `Мастер-план Нерюнгри: Форма обратной связи`,
            ...data,
        }
        delete bodyObject.rules
        const body = JSON.stringify(bodyObject)

        await fetch(
            'https://formsubmit.co/ajax/qwdshxrj@gmail.com',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                method: 'POST',
                body,
            }
        )
            .then(async res => {
                setText(res.ok ? states.ok : states.error)
            })
            .catch(async e => {
                setText(states.error)
                console.log(e)
            })
    }
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
        >
            <Dialog
                opened={text == states.ok && dialog}
                withCloseButton
                size='xs'
                onClose={() => setDialog(false)}
            >
                <Text
                    style={{
                        marginLeft: '1rem',
                    }}
                >
                    Готово, ваш вопрос отправлен!
                </Text>
            </Dialog>
            <Stack>
                <Controller
                    control={control}
                    name='name'
                    rules={{ required: true }}
                    render={({ field }) => <TextInput {...field} required placeholder='*Ваше Имя' />}
                />
                <Controller
                    control={control}
                    name='email'
                    rules={{ required: true }}
                    render={({ field }) => <TextInput {...field} required placeholder='*Ваша электронная почта' />}
                />
                <Controller
                    control={control}
                    name='question'
                    rules={{ required: true }}
                    render={({ field }) => <Textarea {...field} required placeholder='*Ваш вопрос'
                        minRows={5}
                    />}
                />

                <Button
                    disabled={[states.fetch, states.ok].includes(text)}
                    type='submit'
                    style={{
                        width: 'fit-content',
                        paddingLeft: '3rem',
                        paddingRight: '3rem',
                        alignSelf: 'flex-end'
                    }}
                >
                    {text}
                </Button>
            </Stack>
        </form>
    )
}