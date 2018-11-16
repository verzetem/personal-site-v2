import React from 'react';
import { Card, CardTitle, CardText, Container, Row, Col } from 'reactstrap';


const Header = () => {
	
	return (
		<div className='App'>
			<Container>
				<Row>
					<Col lg={{ size: 12, offset: 0 }}>
						<Card body inverse style={{ backgroundColor: '#333', borderColor: '#282828' }} className='about-card'>
			        <CardTitle>About Me</CardTitle>
			        <CardText>
				        <img className="me" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/18738348_10154743353413261_5922272697087745045_o.jpg?_nc_cat=109&_nc_ht=scontent-sjc3-1.xx&oh=28c139942f63c58c3119aa74a0ff2506&oe=5C6C8F70" alt='me'/>
				        <p>
				        Since I was young, I've loved technology. I have many memories of my father building PCs and programming Control4
				        and AMX systems for home automation. It is thanks to him that I am so interested in the world of technology and
				        programming.
				        </p> 

				        <p>I am currently a student at Galvanize Inc. in Denver. My skillset includes UI/UX design using Bootstrap, CSS3 and
				        HTML5 (see <a className='resume-link' href='#'>resume</a> for more). I have a solid foundation in ReactJS and strive to learn more daily.</p> 
			        </CardText>
			      </Card>
		  		</Col>
		  	</Row>
		  </Container>
			



		</div>


	)
}

export default Header;


