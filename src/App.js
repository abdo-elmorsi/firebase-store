import React, { useState, createContext } from 'react';

import RouterComponent from "./comps/RouterComponent"
export const User = createContext();
export const ImageSelected = createContext();
function App() {
  const [user, setUser] = useState(localStorage.getItem('user'));
  const [selectedImage, setSelectedImage] = useState('')
  return (
    <div className="App">
      <User.Provider value={[user, setUser]}>
        <ImageSelected.Provider value={[selectedImage, setSelectedImage]}>
          <RouterComponent />
        </ImageSelected.Provider>
      </User.Provider>
    </div>
  );
}
export default App;