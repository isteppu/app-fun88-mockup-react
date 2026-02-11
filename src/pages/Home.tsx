import BannerCarousel from "../components/Banner"
import CategoriesCarousel from "../components/Categories"
import ProviderCarousel from "../components/Providers"
import MainLayout from "../layouts/MainLayout"

const Home = () => {
  return (
    <div>
      <MainLayout >
        <BannerCarousel />
        <ProviderCarousel />
        <CategoriesCarousel />
      </MainLayout>
    </div>
  )
}

export default Home