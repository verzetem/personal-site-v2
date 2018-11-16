import React from 'react';
import SkillsCarousel from './SkillsCarousel';
import { Container, Row, Col } from 'reactstrap';

const MySkills = () => {
	
	return (
		<div>
		<Container>
				<Row>
					<Col lg={{ size: 10, offset: 1 }}>
						<SkillsCarousel />
		  		</Col>
		  	</Row>
		  </Container>

				
		

			

		</div>


	)
}

export default MySkills;