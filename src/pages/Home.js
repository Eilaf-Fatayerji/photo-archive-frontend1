import Header from '../components/home/Header';
import Content from '../components/home/Content';
import Section from '../components/home/Section';
import Section2 from '../components/home/Section2';
import Footer from '../components/home/Footer';
import Section3 from '../components/home/Section3';
 function Home (){
    return (
        <div>
            <Header/>
            <Content/>
            <Section3/>
            <Section/>
            <Section2/>
            <Footer/>
        </div>
    );
}
export default Home;