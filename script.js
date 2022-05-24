(() => {
  const techSkils = ['Javascript', 'React', 'Angular', 'Redux'];
  const gitHubsProject = [
    {
      name: 'TestProject',
      language: 'Javascript',
      description: 'Some description about the project',
    },
    {
      name: 'TestProject2',
      language: 'Javascript',
      description: 'Some description about the project',
    },
    {
      name: 'TestProject3',
      language: 'Javascript',
      description: 'Some description about the project',
    },
    {
      name: 'TestProject4',
      language: 'Javascript',
      description: 'Some description about the project',
    },
  ];

  const propfessionalExp = [
    {
      tenure: 'March 2014 - Present',
      designation: 'Software engineer II',
      company: 'CDK Global, Pune',
    },
    {
      tenure: 'March 2014 - Present',
      designation: 'Software engineer I',
      company: 'Fiserv, Pune',
    },
    {
      tenure: 'March 2014 - Present',
      designation: 'Software engineer I',
      company: 'Cybage, Pune',
    },
  ];

  const socialProfiles = {
    country: 'India',
    company: 'CDK Global',
    gitHub: 'Link',
    linkedIn: 'Link',
    faceBook: 'Link',
  };

  const createTechStackComponent = () => {
    const techStackContainer = document.querySelector('#tech-stack-container');
    const template = `<div>Tech Stack</div>
                    <div class="stack-list">
                      ${techSkils
                        .map((sk) => `<span class="tech-skill">${sk}</span>`)
                        .join(' ')}
                    </div>`;
    techStackContainer.innerHTML = template;
  };

  const createSocialComponent = () => {
    const socialProfileContainer = document.querySelector(
      '#social-profile-container'
    );
    const template = Object.entries(socialProfiles)
      .map(([key, value]) => {
        return `
          <div class="profile-row">
            <div>${key}:</div>
            <div>${value}</div>
          </div>`;
      })
      .join(' ');
    socialProfileContainer.innerHTML = template;
  };

  const createGitProjectComponent = () => {};
  createTechStackComponent();
  createSocialComponent();
})();
