import NavBar from './Components/NavBar';
import AboutMe from './Components/AboutMe';
import DetailedAboutme from './Components/DetailedAboutMe';
import SectionCounter from './Components/SectionCounter';
import Services from './Components/Services';
import MySkills from './Components/MySkills';
import Portfolio from './Components/Portfolio';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import LastestNews from './Components/LastestNews';
function App() {
  let mySkills = new MySkills();
  let portfolio = new Portfolio();
  let testimonial = new Testimonial();
  let lastestnews = new LastestNews();
  let contact = new Contact();
  return (
    <>
      <NavBar />
      <AboutMe />
      <DetailedAboutme />
      <SectionCounter />
      <Services unusedText = {""}/>
      {mySkills.getMySkillsContents()}
      {portfolio.getPortfolioContents()}
      {testimonial.getTestimonialContents()}
      {lastestnews.getLastestNewContents()}
      {contact.getContactContents()}
    </>
  );
}

export default App;
