import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
			<div className="home__row">
					<Product
						id="3"
						title="NoteBooks | Books | Pen/Pencil/Rulers"
						price={50}
						image="https://cdn.fcglcdn.com/brainbees/images/products/438x531/10004377a.jpg"
						rating={5}
					/>
					<Product
						id="4"
						title="OTG | OVEN| MICROWAVE"
						price={75000}
						image="https://cdn.fcglcdn.com/brainbees/images/products/438x531/10004377a.jpg"
						rating={3}
					/>
					<Product
						id="5"
						title="Home Theatre | T.V. | Speakers"
						price={125000}
						image="https://cdn.fcglcdn.com/brainbees/images/products/438x531/10004377a.jpg"
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						id="3"
						title="NoteBooks | Books | Pen/Pencil/Rulers"
						price={50}
						image="https://cdn.fcglcdn.com/brainbees/images/products/438x531/10004377a.jpg"
						rating={5}
					/>
					<Product
						id="4"
						title="OTG | OVEN| MICROWAVE"
						price={75000}
						image="https://cdn.fcglcdn.com/brainbees/images/products/438x531/10004377a.jpg"
						rating={3}
					/>
					<Product
						id="5"
						title="Home Theatre | T.V. | Speakers"
						price={125000}
						image="https://cdn.fcglcdn.com/brainbees/images/products/438x531/10004377a.jpg"
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						id="3"
						title="NoteBooks | Books | Pen/Pencil/Rulers"
						price={50}
						image="https://cdn.fcglcdn.com/brainbees/images/products/438x531/10004377a.jpg"
						rating={5}
					/>
					<Product
						id="4"
						title="OTG | OVEN| MICROWAVE"
						price={75000}
						image="https://cdn.fcglcdn.com/brainbees/images/products/438x531/10004377a.jpg"
						rating={3}
					/>
					<Product
						id="5"
						title="Home Theatre | T.V. | Speakers"
						price={125000}
						image="https://cdn.fcglcdn.com/brainbees/images/products/438x531/10004377a.jpg"
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						id="3"
						title="NoteBooks | Books | Pen/Pencil/Rulers"
						price={50}
						image="https://cdn.fcglcdn.com/brainbees/images/products/438x531/10004377a.jpg"
						rating={5}
					/>
					<Product
						id="4"
						title="OTG | OVEN| MICROWAVE"
						price={75000}
						image="https://cdn.fcglcdn.com/brainbees/images/products/438x531/10004377a.jpg"
						rating={3}
					/>
					<Product
						id="5"
						title="Home Theatre | T.V. | Speakers"
						price={125000}
						image="https://cdn.fcglcdn.com/brainbees/images/products/438x531/10004377a.jpg"
						rating={4}
					/>
				</div>
				
			</div>
		</div>
	);
}

export default Home; 