import { PageLayout } from '../components/PageLayout'
import { CitiesHero } from '../components/CitiesHero'
import { CitiesText } from '../components/CitiesText'
import { CitiesVideos } from '../components/CitiesVideos'

export default function HomePage() {
    return (
        <PageLayout>
            <CitiesHero />
            <CitiesText />
            <CitiesVideos />
        </PageLayout>
    )
}