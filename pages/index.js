import Layout from '../components/layout'
import Header from '../components/header'
import SubmitForm from '../components/form'
import Organizer from '../components/organizer'
import Projects from '../components/projects'
import Description from '../components/description'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

export default () => (
  <Layout>
    <Navbar />
    <Header />
    <Description />
    <SubmitForm />
    <Projects />
    <Organizer />
    <Footer />
  </Layout>
)