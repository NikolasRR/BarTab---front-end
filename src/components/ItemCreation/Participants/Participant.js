import { useState } from "react";

import { Box, Name } from "./style";

function Participant({ participant }) {
    const [selected, setSelected] = useState(false);

    return (
        <Box onClick={() => setSelected(!selected)} selected={selected}>
            <Name>{participant.name}</Name>
        </Box>
    )
}

export default Participant;