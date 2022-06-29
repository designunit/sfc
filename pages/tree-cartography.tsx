import { PageLayout } from '../components/PageLayout'
import { TreeHero } from '../components/TreeHero'
import { TreeText } from '../components/TreeText'

export default function HomePage() {
    return (
        <PageLayout>
            <TreeHero />
            <TreeText />
        </PageLayout>
    )
}