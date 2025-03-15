// this is our main page that shows all user data
import ePalette from "../utilities/ePalette";

// MUI imports
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

function CalTest() {
    return (
        <>
            <h1>Calendar Test Page</h1>
            <DateCalendar />
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                {Object.entries(ePalette).map(([emotion, color], index) => (
                    <div key={index} style={{ backgroundColor: color, width: "100px", height: "100px" }}>
                        {emotion}
                    </div>
                ))}
            </div>
        </>
    )
}

export default CalTest;