
import Card from 'react-bootstrap/Card';
import MintComponent from './MintComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
function BasicExample() {
  return (
    <Card style={{ width: '26rem' }}>
      <Card.Img variant="top" src="/run1.gif" />
      <Card.Body>
        <Card.Title>Run on Base</Card.Title>
        <Card.Text>
          Run on Base is a thrilling mini-app game on Farcaster where users compete to earn points and climb the leaderboard. The higher you rank, the more rewards you unlock. Points can be redeemed for crypto assets or future airdrop programs. Play now, rise to the top, and turn your skill into real value!
       <br></br> Mint early to join! </Card.Text>
        <MintComponent />
        
      </Card.Body>
    </Card>
  );
}

export default BasicExample;