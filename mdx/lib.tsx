import { Button, Title, Text, List } from '@mantine/core'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import Image from 'next/image'
import Link from 'next/link'
import { Buttons } from '../components/Buttons'


export type StaticProps = {
    source: MDXRemoteSerializeResult
    lngDict: Record<string, string>
}

export const components = {
    img: (props) => (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image
            {...props}
        />
    ),
    Button: (props) => (
        <Link
            href={props.href} passHref
        >
            <Button
                {...props}
            />
        </Link>
    ),
    Buttons: (props) => <Buttons {...props} />,
    h1: (props) => (
        <Title
            {...props}
            order={1}
            style={{ display: 'inline' }}
        />
    ),
    Text: (props) => <Text {...props} />,
    ul: (props) => <List {...props} />,
    li: (props) => <List.Item {...props} />,
}