import * as React from 'react'

class ExperienceConcentrate extends React.Component {

  render() {
    return (
      <section className="experience-concentrate u-content-wrapper">
        <div className="experience-concentrate__content u-content">
          <img className="experience-concentrate__title__image u-image" src="/assets/experience-concentrate-title.jpg" />
          <h2 className="u-title">TAKING IN THE EXPERIENCE CONCENTRATE</h2>
          <p className="u-text u-text--bold">
            In just 3 months the participants undergo a highly intensive experience. The idea is to let the students live the life of an agile team player while gaining the knowledge and confidence they would usually collect within one or two years working in a cross-functional team or a lean start-up.
          </p>
          <div className="experience-concentrate__content__description">
            <div>
              <p className="u-text">
                To enrich that experience, the DPS teams are not only solving problems through creating digital products – they also extend their professional knowledge and skills in workshops held by domain experts from all over the world.
                <br /><br />
                During the whole Program the DPS core team will mentor all participants, give guidance and react to challenges that come up at short notice.
              </p>
              <a className="u-button u-button__apply" href="https://utum.typeform.com/to/qkkFHF">
                Apply Now
              </a>
            </div>
            <img className="experience-concentrate__content__description__image u-image" src="/assets/experience-concentrate-desc.jpg" />
          </div>
        </div>
      </section>
    );
  }
}

export default ExperienceConcentrate;
