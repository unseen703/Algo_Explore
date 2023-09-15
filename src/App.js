// eslint-disable-next-line
import { Card, CardContent,CardHeader,Grid,Grow, Typography, Container ,Button,ButtonBase, CardMedia} from '@mui/material';

import "./App.css";

function App() {

  return (
    <>
    
    <Grow in>
    <Container maxWidth="xl"  className="container">
      <Typography variant = 'h1' className="header" >
      ALGOXPLORE
      </Typography >

    
        <Card  className="card" elevation={0} >
      <img  src={require(`./assets/sudoku_solver.jpg`)} className="img-responsive" alt='credit-card.png' />

      <CardHeader  varant ='h3' title="Sudoku Solver" />
            <CardContent className='content'>
            A sudoku solver  which lets user make their own sudoku and
also solves the sudoku using backtracking algorithm
            </CardContent>

        <Button variant="contained" href='https://unseen703.github.io/Sudoku-Solver/'>
        Solve Puzzle
        </Button>
        
      </Card>

        <Card  className="card" elevation={0} >
      <img  src={require(`./assets/sorting.38780fe7a3d79244394d.jpg`)} className="img-responsive" alt='Sorting_visualizer.png' />

      <CardHeader  varant ='h3' title="Sorting Visualizer" />
            <CardContent className='content'>
            A Sorting visualizer to visualize and understand the sorting algorithms and understand the time complexity of them.
            </CardContent>

        <Button variant="contained" href='https://unseen703.github.io/Sorting_Visualizer/'>
        Visualize
        </Button>
        
      </Card>

        <Card  className="card" elevation={0} >
      <img  src={require(`./assets/credit_card.png`)} className="img-responsive" alt='credit-card.png' />

      <CardHeader  varant ='h3' title="Credit card validator" />
            <CardContent className='content'>
            A sudoku solver  which lets user make their own sudoku and
also solves the sudoku using backtracking algorithm
            </CardContent>

        <Button variant="contained" href='https://credit-card-validator-ak.netlify.app/'>
        Validate Credit Card
        </Button>
        
      </Card>

      <Card   className="card" elevation={0} >
      <img  src={require(`./assets/tictactoe.png`)} className="img-responsive" alt='credit-card.png' />
      <CardHeader  varant ='h3' title="Tic Tac Toe" />
            <CardContent className='content'>
            A user-friendly web page demonstrating Tic Tac Toe Game using the minimax
algorithm to build an unbeatable tic tac toe.
            </CardContent>
        <Button variant ='contained'  href= "https://unseen703.github.io/Tic-Tac-Toe/">
          Let's Play
        </Button>
        </Card>
      <Card   className="card" elevation={0} >
      <img  src={require(`./assets/snack_mania.jpeg`)} className="img-responsive" alt='credit-card.png' />
      <CardHeader  varant ='h3' title="Snack Mania" />
            <CardContent className='content'>
             A snack Mania application lets user to play around with snack using strok of the arrow keys
            </CardContent>
        <Button variant ='contained'  href= "https://unseen703.github.io/SnakeGame/">
          Let's Play
        </Button>
        </Card>



    </Container>
    </Grow>
    </>
  );
}

export default App;
