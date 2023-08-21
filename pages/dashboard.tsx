import { PostAddRounded } from "@mui/icons-material";
import { Button, Card, CardContent, List } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export default function Dashboard () {
  return (
    <>
      <div className="flex flex-col items-center">
        <div>
          <h1>Hello User</h1>
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>
          </div>
        </div>

        <Card sx={{width: '80%'}}>
          <CardContent>
            <h2>Available Spaces:</h2>

            <List></List>
          </CardContent>
        </Card>

        <Button variant="contained" startIcon={<PostAddRounded />} sx={{
          textTransform: 'none'
         }}>
          Post new
        </Button>
      </div>
    </>
  )
}
