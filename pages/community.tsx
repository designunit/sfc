import { CommunityHero } from '../components/CommunityHero'
import { CommunityText } from '../components/CommunityText'
import { PageLayout } from '../components/PageLayout'

export default function HomePage() {
    return (
        <PageLayout>
            <CommunityHero />

            <CommunityText />
        </PageLayout>
    )
}