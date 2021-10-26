import logo from './logo.svg';
import './App.css';
import tw from "twin.macro"
import { TopSection } from './containers/homepage';
import ExploreSection from './containers/homepage/ExploreSection'


const AppContainer = tw.div`
  flex
  flex-col
  w-full
  h-full
  overflow-hidden
`
function App() {
  return <AppContainer>
      <TopSection/>
      <ExploreSection/>
     </AppContainer>
}

export default App;
