import BannerCarousel from "../components/Banner"
import ProviderCarousel from "../components/Providers"
import MainLayout from "../layouts/MainLayout"

const Home = () => {
  return (
    <div>
      <MainLayout >
        <BannerCarousel />
        <ProviderCarousel />
      </MainLayout>
    </div>
  )
}

export default Home