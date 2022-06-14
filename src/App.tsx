import React, { createContext, useContext } from "react";
import "./App.css";
import { GridComponet } from "./components/GridComponent/GridComponent";
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent";
import { ListComponent } from "./components/ListComponent/ListComponent";
import { UNIFARM_DATA } from "./unifarmData";
import { ViewProvider } from "./Context/contextView";
import { View } from "./components/ViewComponent/View";


// const ContextView =  createContext();

function App() {
  return (
    <ViewProvider>
      <div className="App">
        <HeaderComponent />
        
        <View/>
    
      </div>
    </ViewProvider>
  );
}

export default App;
