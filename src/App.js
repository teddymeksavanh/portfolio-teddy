import React from 'react';
import logo from './images/logo.png';
import computer from './images/computer.gif';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css';

const App = () => {
    const ref = React.useRef(),
          section1css = { background: 'red' },
          section2css = { background: 'red' },
          section3css = { background: 'red' };
    return (
		<>
			<nav class="navbar navbar-expand-lg fixed-top">
  				<span class="navbar-brand mb-0 h1">
					<img src={logo} alt="Logo" height="25" />
				</span>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarText">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item active">
							<a class="nav-link text-white mx-4" href="#">#</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-white mx-4" href="#">about me</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-white mx-4" href="#">projects</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-white mx-4" href="#">curiculum vitae</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-white mx-4" href="#">contact</a>
						</li>
					</ul>
				</div>
			</nav>
			<Parallax ref={ref} pages={3}>
				<ParallaxLayer offset={0} speed={0}>
					<div style={{backgroundColor: '#51b4bf', height: '100%'}} />
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={-0.2}>
					<div className="container h-100">
						<div className="row h-100">
							<div className="col-lg-6 col-md-6 align-self-center">
								<img src={computer} alt="Computer" className="img-fluid" />
							</div>
							<div className="col-lg-6 col-md-6 align-self-center"/>
						</div>
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.8}>
					<div className="container h-100">
						<div className="row h-100">
							<div className="col-lg-6 col-md-6 align-self-center"/>
							<div className="col-lg-6 col-md-6 align-self-center">
								<h1 className="text-white space-mono">
									Hello, <br/>
									I'm Teddy, <br/>
									<span className="primary-bg-color">Software Engineer.</span>
								</h1>
							</div>
						</div>
					</div>
				</ParallaxLayer>
				{/* <ParallaxLayer offset={2} speed={0.5}>
					<span
						onClick={() => {
							ref.current.scrollTo(1)
						}}>
						Layers can contain anything
					</span>
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={0.5}>
					<span
						onClick={() => {
							ref.current.scrollTo(1)
						}}>
						Layers can contain anything
					</span>
				</ParallaxLayer> */}
			</Parallax>
		</>
    );
}

export default App;
