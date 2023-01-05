import ProgressBar from 'react-bootstrap/ProgressBar';

export default class MySkills {
    public getMySkillsContents() {
        let htmlSkill: number = Math.round(Math.random() * 100);
        let CSSSkill: number = Math.round(Math.random() * 100);
        let javascriptSkill: number = Math.round(Math.random() * 100);
        let typeScriptSkill: number = Math.round(Math.random() * 100);
        let reactSkill: number = Math.round(Math.random() * 100);
        let bootStrapSkill: number = Math.round(Math.random() * 100);
        return (
            <section id='myskill-section'>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-sm-6">
                            <h4>Make beauty Things With Passion.</h4>
                            <p>Praesent posuere sodales lectus sed faucibus. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Pellentesque iaculis egestas ligula, in tempus ex sagittis eu.
                                Maecenas sit amet venenatis arcu. Praesent luctus lacus iaculis semper sodales. Pellentesque
                                a tortor non est convallis porttitor. Suspendisse lacinia rutrum laoreet. Quisque imperdiet
                                egestas diam, sed venenatis elit blandit auctor. Mauris suscipit pretium molestie. Sed urna justo,
                                feugiat sed mauris in, dapibus maximus sapien. Vivamus at purus vitae nunc lobortis aliquet quis
                                ut quam.</p>
                        </div>
                        <div className="col-sm-6">
                            <h6><span>HTML</span> <span className='text-secondary fs-6'>{htmlSkill}</span></h6>
                            <ProgressBar now={htmlSkill} />
                            <h6><span>CSS/SCSS</span> <span className='text-secondary fs-6'>{CSSSkill}</span></h6>
                            <ProgressBar now={CSSSkill} />
                            <h6><span>Javascript</span> <span className='text-secondary fs-6'>{javascriptSkill}</span></h6>
                            <ProgressBar now={javascriptSkill} />
                            <h6><span>Typescript</span> <span className='text-secondary fs-6'>{typeScriptSkill}</span></h6>
                            <ProgressBar now={typeScriptSkill} />
                            <h6><span>React</span> <span className='text-secondary fs-6'>{reactSkill}</span></h6>
                            <ProgressBar now={reactSkill} />
                            <h6><span>BootStrap</span> <span className='text-secondary fs-6'>{bootStrapSkill}</span></h6>
                            <ProgressBar now={bootStrapSkill} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}