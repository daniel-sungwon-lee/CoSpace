import { CalendarMonthRounded, GroupsRounded } from '@mui/icons-material'
import { Avatar, Card, CardContent, List, ListItem, ListItemAvatar } from '@mui/material'
import { useEffect } from 'react'

export default function Schedule () {
  useEffect(() => {

  })

  return (
    <>
      <div>Schedules loaded here...meetings? idk</div>
      <div>
        <Card sx={{width: '100%'}}>
          <CardContent sx={{background: 'rgb(216, 87, 93)', color: 'white'}}>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{background: 'rgb(230, 158, 69)'}}>
                    <CalendarMonthRounded />
                  </Avatar>
                </ListItemAvatar>

                <div>
                  <h1 className='text-xl'>Meeting with Client</h1>
                  <h2 className='text-lg'>idk something here</h2>
                </div>
              </ListItem>

              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{background: 'rgb(230, 158, 69)'}}>
                    <GroupsRounded />
                  </Avatar>
                </ListItemAvatar>

                <div>
                  <h1 className='text-xl'>Accept request</h1>
                  <h2 className='text-lg'>A customer wants to connect to your space!</h2>
                </div>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
