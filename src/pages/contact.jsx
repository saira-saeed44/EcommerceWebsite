import React from 'react'
import ContactForm from '../components/contact/contactForm';
import FeaturesSection from '../components/common/featuressection';
import HeroBreadCrumbOne from '../components/common/heroBreadCrumbOne';
import Layout from '../components/common/layout';
const Contact = () => {
  return (
    <div>
      <Layout>
      <HeroBreadCrumbOne route={"Contact"}/>
      <ContactForm/>
      <FeaturesSection/>
      </Layout>
    </div>
  )
}
export default Contact;