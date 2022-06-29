import { CrowdHero } from '../components/CrowdHero'
import { CrowdText } from '../components/CrowdText'
import { PageLayout } from '../components/PageLayout'

export default function HomePage() {
    return (
        <PageLayout>
            <CrowdHero />
            <CrowdText />
        </PageLayout>
    )
}