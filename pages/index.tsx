import { PageLayout } from '../components/PageLayout'
import { IndexHero } from '../components/IndexHero'
import { IndexText } from '../components/IndexText'
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