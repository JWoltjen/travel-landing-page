import logo from './logo.svg';
import './App.css';
import tw from "twin.macro"
import { TopSection } from './containers/homepage';


const AppContainer = tw.div`
  flex
  w-full
  h-full
  overflow-hidden
`
function App() {
  return <AppContainer>
      <TopSection/>
     </AppContainer>
}

export default App;
