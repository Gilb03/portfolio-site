import Layout from '../components/layout'
import Header from '../components/header'
import About from '../components/about'
import Projects from '../components/projects'
import Description from '../components/description'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

export default () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Description />
    <Projects />
    <Footer />
  </Layout>
)