import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import TableDataContext from  "./contexts/tableContext.js";

import SignUp from "./pages/Sign-Up/SignUp.js";
import SignInScreen from "./pages/Sign-In/SignIn.js";
import TableStart from "./pages/CreateTable/TableStart.js";
import ParticipantsAddition from "./pages/AddParticipants/ParticipantsAddition.js";
import Header from "./components/Header/Header.js";
import Persistency from "./services/Persistence/index.js";
import ItemsAddition from "./pages/AddItems/ItemsAddition.js";

function App() {
    const [tableData, setTableData] = useState({});

    return (
        <>
            <TableDataContext.Provider value={{ tableData, setTableData }}>
                    <BrowserRouter>
                        <Persistency />
                        <Header />
                        <Routes>
                            <Route path="/" element={<TableStart />} />
                            <Route path="/participants" element={<ParticipantsAddition />} />
                            <Route path="/items" element={<ItemsAddition />} />
                            <Route path="/tab" element={<TableStart />} />
                            <Route path="/sign-in" element={<SignInScreen />} />
                            <Route path="/sign-up" element={<SignUp />} />
                        </Routes>
                    </BrowserRouter>
            </TableDataContext.Provider>
        </>
    )
}

export default App;