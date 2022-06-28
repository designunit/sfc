import { PageLayout } from '../components/PageLayout'
import { IndexHero } from '../components/IndexHero'
import { IndexText } from '../components/IndexText'
import { Button, Group } from '@mantine/core'
import Link from 'next/link'
import { IndexButtons } from '../components/IndexButtons'

export default function HomePage() {
    return (
        <PageLayout>
            <IndexHero />

            <IndexText />
            
            <IndexButtons />
        </PageLayout>
    )
}