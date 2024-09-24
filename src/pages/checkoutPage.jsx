import FeaturesSection from "../components/common/featuressection";
import HeroBreadCrumbOne from "../components/common/heroBreadCrumbOne";
import Layout from "../components/common/layout";
import Checkout from "../components/chcekcOutPage/checkOutComp";
function CheckOutPage(){
    return(
        <div>
            <Layout>
            <HeroBreadCrumbOne route={"Checkout"}/>
            <Checkout/>
            <FeaturesSection/>
            </Layout>
        </div>
    )
}
export default CheckOutPage;