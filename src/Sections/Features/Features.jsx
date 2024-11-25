import './Features.css';
import { Container, SectionHeader, Description, FeatureExplore } from '../../Components';

const Features = () => {

  return (
    <section className='features'>
      <Container>
        <SectionHeader section={"features"}>
          Explor the full story
        </SectionHeader>
        <div className='features-content'>
          <div className='features-title'>
            <h2>iPhone</h2>
            <h2>Forged in titanium</h2>
          </div>
          <FeatureExplore />
          <div className='features-text'>
            <Description section='features'>
              iPhone 15 Pro is {' '} 
              <span>
                the first iPhone to frature an aerospace-grade titanium design, 
              </span> {' '}
              using the same alloy that spacecraft use for missions to mars
            </Description>
            <Description section='features'>
              Titanium has one of the best strength-to-weight ratios of any metal, making these our {' '} 
              <span>
                lightest Pro models ever. 
              </span> {' '}
              You'll notice the difference the moment you pick one up
            </Description>
          </div> 
        </div>
      </Container>
    </section>
  )
}

export default Features