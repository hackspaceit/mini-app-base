
import Card from 'react-bootstrap/Card';
import MintComponent from './MintComponent';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
function BasicExample() {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="/run1.gif" />
      <Card.Body>
         <iframe width="100%"
                        height="690"
                        src=
"https://testnet.kizzy.io/" >
                </iframe>
                
        <MintComponent /> <br></br>
        <center>  <Button variant="primary" href="https://art.fun/coin/0x43ea68aead83b0f33971fe8cb3e629c6d41803d0">BUY RUN</Button> {" "}
          <Button variant="primary" href="https://art.fun/coin/0x43ea68aead83b0f33971fe8cb3e629c6d41803d0">PLAY AGAME TEST</Button> {" "}
          <Button variant="primary" href="https://art.fun/coin/0x43ea68aead83b0f33971fe8cb3e629c6d41803d0">SHARE</Button></center>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;