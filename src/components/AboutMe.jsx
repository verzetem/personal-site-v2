import React from 'react';
import { Card, CardTitle, CardText, Container, Row, Col } from 'reactstrap';


const Header = () => {
	
	return (
		<div className='App'>
			<Container>
				<Row>
					<Col lg={{ size: 8, offset: 2 }}>
						<Card body inverse style={{ backgroundColor: '#333', borderColor: '#282828' }}>
			        <CardTitle>About Me</CardTitle>
			        <CardText>
				        <img className="me" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/18738348_10154743353413261_5922272697087745045_o.jpg?_nc_cat=109&_nc_ht=scontent-sjc3-1.xx&oh=28c139942f63c58c3119aa74a0ff2506&oe=5C6C8F70" alt='me'/>
				        With supporting text below as a natural lead-in to additional content.
			        </CardText>
			      </Card>
		  		</Col>
		  	</Row>
		  </Container>
			



		</div>


	)
}

export default Header;


