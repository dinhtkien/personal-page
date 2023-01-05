import NavBar from './Components/NavBar';
import AboutMe from './Components/AboutMe';
import DetailedAboutme from './Components/DetailedAboutMe';
import SectionCounter from './Components/SectionCounter';
import Services from './Components/Services';
import MySkills from './Components/MySkills';
import Portfolio from './Components/Portfolio';
function App() {
  let navbar = new NavBar();
  let aboutMe = new AboutMe();
  let detailedAboutMe = new DetailedAboutme();
  let sectionCounter = new SectionCounter();
  let services = new Services();
  let mySkills = new MySkills();
  let portfolio = new Portfolio();

  return (
    <>
      {navbar.getNavBarContent()}
      {aboutMe.getAbouMeContent()}
      {detailedAboutMe.getDetailedAboutMeContent()}
      {sectionCounter.getSectionCounterContent()}
      {services.getServicesContent()}
      {mySkills.getMySkillsContents()}
      {portfolio.getPortfolioContents()}
    </>
  );
}

export default App;
