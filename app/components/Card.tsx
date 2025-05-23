
import Card from 'react-bootstrap/Card';
import MintComponent from './MintComponent';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
function BasicExample() {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="/run1.gif" />
      <Card.Body>
        <Card.Title>Run on Base</Card.Title>
        <Card.Text>
          Run on Base is a thrilling mini-app game on Farcaster where users compete to earn points and climb the leaderboard. The higher you rank, the more rewards you unlock. Points can be redeemed for crypto assets or future airdrop programs. Play now, rise to the top, and turn your skill into real value!
       <br></br> <b><center>Mint your early PASS! </center></b></Card.Text>
        <MintComponent /> <br></br>
          <Button variant="primary" href="https://art.fun/coin/0x43ea68aead83b0f33971fe8cb3e629c6d41803d0">Buy $RUN</Button> 
          <Button variant="primary" href="https://art.fun/coin/0x43ea68aead83b0f33971fe8cb3e629c6d41803d0">Buy $RUN</Button> 
          <Button variant="primary" href="https://art.fun/coin/0x43ea68aead83b0f33971fe8cb3e629c6d41803d0">Buy $RUN</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;