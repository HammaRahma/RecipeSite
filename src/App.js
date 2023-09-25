import { useState } from 'react';
import './App.css';
//import RecipeUpdate from './Components/CRUD/UpDate/RecipeUpDate';
import NavigationBar from './Components/NavigationBar';
//import StarterFood from './Components/StarterFood';
import RecipeDetail from './Pages/RecipeDetail';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import CardInLineList from './Pages/CardInLineList';
import SearchComponent from './Components/SerachComponent/SearchComponent';


function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [inputSearch, setInputSearch] = useState('')

  
  return (
    <div className="App">
     <NavigationBar inputSearch={inputSearch} setInputSearch={setInputSearch}/>
      <Routes>
        <Route path='/search' element={<SearchComponent />} />
        <Route path='/RecipeDetail/:id' element={<RecipeDetail  />} />
        <Route path='/*' element={<ErrorPage  />} />
        <Route path='/' element={<Home inputSearch={inputSearch} setInputSearch={setInputSearch} />}/>
        <Route path='/AllRecipes' element={<CardInLineList />} />
        
      </Routes>
     <Footer />
     
    </div>
  );
}

export default App;
// <Routes>
//         <Route path='/*' element={<ErrorPage />} />
//         <Route path='/RecipeDetail/:id' element={<RecipeDetail />} />
//      </Routes>



// <div className='Main'>
//      <BackgroundVideo />
     
//      <h1 style={{textAlign:"center", padding:"5%"}}>Recipes</h1>
    
//      <RecipeList inputSearch = {inputSearch}/>
     
//      <Button variant="outline-secondary" style={{border:'none', textAlign: 'center', hover:'none'}} onClick={handleShow}>
//      <h4 >... Add new Recipe</h4>
//      </Button>

//      <Modal show={show} onHide={handleClose}>
//           <RecipeCreate />
//      </Modal>