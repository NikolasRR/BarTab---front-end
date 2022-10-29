import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import TableDataContext from "./contexts/tableContext.js";
import ModalContext from "./contexts/modalContext.js";

import SignUp from "./pages/Sign-Up/SignUp.js";
import SignInScreen from "./pages/Sign-In/SignIn.js";
import TableStart from "./pages/CreateTable/TableStart.js";
import ParticipantsAddition from "./pages/AddParticipants/ParticipantsAddition.js";
import Header from "./components/Header/Header.js";
import Persistency from "./services/Persistence/index.js";
import ItemsAddition from "./pages/AddItems/ItemsAddition.js";
import Tab from "./pages/Tab/Tab.js";

function App() {
    const [tableData, setTableData] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <TableDataContext.Provider value={{ tableData, setTableData }}>
                <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
                    <BrowserRouter>
                        <Persistency />
                        <Header />
                        <Routes>
                            <Route path="/" element={<TableStart />} />
                            <Route path="/participants" element={<ParticipantsAddition />} />
                            <Route path="/items" element={<ItemsAddition />} />
                            <Route path="/tab" element={<Tab />} />
                            <Route path="/sign-in" element={<SignInScreen />} />
                            <Route path="/sign-up" element={<SignUp />} />
                        </Routes>
                    </BrowserRouter>
                </ModalContext.Provider>
            </TableDataContext.Provider>
        </>
    )
}

export default App;