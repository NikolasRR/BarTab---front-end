import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import TableDataContext from  "./contexts/tableContext.js";

import SignUp from "./pages/Sign-Up/SignUp.js";
import SignInScreen from "./pages/Sign-In/SignIn.js";
import PersistentTable from "./services/PersistTable.js";
import TableStart from "./pages/CreateTable/TableStart.js";
import ParticipantsAddition from "./pages/AddParticipants/ParticipantsAddition.js";

function App() {
    const [tableData, setTableData] = useState({});

    return (
        <>
            <TableDataContext.Provider value={{ tableData, setTableData }}>
                    <BrowserRouter>
                        <PersistentTable />
                        <Routes>
                            <Route path="/" element={<TableStart />} />
                            <Route path="/participants" element={<ParticipantsAddition />} />
                            <Route path="/items" element={<TableStart />} />
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