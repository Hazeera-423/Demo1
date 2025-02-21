import {Typography} from "@mui/material";
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

const Form=()=>{
    return(
        <div>
            <h1>Hello world</h1>
            <Typography variant="h3" component="h2"> h3. Heading</Typography>
            <form>
            <Box component="section" sx={{ width:'100%' , maxWidth:500, background:'pink', padding:10,borderRadius:10,alignItems:'center'}}>
             
              <Typography variant="h3" component="h2" color="primary" butterbottom>Fill The Form</Typography>
              <TextField id="outlined-required" label='name' type="text" fullWidth  sx={{margin:3}} required/>
              <TextField id="outlined-required" label='Email' type="Email" fullWidth sx={{margin:3}} required/>
              <TextField id="outlined-required" label='Number' type="number" fullWidth sx={{margin:3}} required/>
              <TextField id="outlined-required" label='Password' type="password" fullWidth sx={{margin:3}} required/>
           
              <Button variant="contained" type="submit" fullWidth sx={{margin:1}}>Submit</Button>
             
              </Box>
              </form>
        </div>
    )
}
export default Form