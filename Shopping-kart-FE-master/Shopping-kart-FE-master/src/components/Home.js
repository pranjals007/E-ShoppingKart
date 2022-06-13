import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
import axios from "axios";

function Home() {
	const [posts, setPosts] = useState({ product: [] })

	useEffect(() => {
		const fetchPostList = async () => {
			const { data } = await axios("http://localhost:8082/products/getproducts")

			setPosts({ product: data })
			console.log(data)
		}
		fetchPostList()
	}, [setPosts])

	return (
		<div className="home">
			<div className="home__container">
			<div className="home__row">
			{
						posts.product && posts.product.map(p => (
							<Product
								productId={p.productId}
								productName={p.productName}
								price={p.price}
								image={p.image}
								rating={p.rating}
							/>
						))
					}



					{/* <Product
						id="3"
						title="NoteBooks | Books | Pen/Pencil"
						price={50}
						image="https://www.bigbasket.com/media/uploads/p/l/40200597_1-luxor-executive-pens-set-combo.jpg"
						rating={5}
					/>
					<Product
						id="4"
						title="OTG | OVEN| MICROWAVE"
						price={19000}
						image="https://www.lg.com/in/images/microwave-ovens/md07536273/gallery/MC2886BHT-Microwave-ovens-Front-view-with-logo-D-01.jpg"
						rating={4}
					/>
					<Product
						id="5"
						title="Home Theatre | T.V. | Speakers"
						price={125000}
						image="https://www.mrright.in/ideas/wp-content/uploads/2014/10/HTS.jpg"
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						id="3"
						title="Candels set | Stick Candels "
						price={520}
						image="https://m.media-amazon.com/images/I/81rhors4KNL._SL1500_.jpg"
						rating={5}
					/>
					<Product
						id="4"
						title="Samsung s21fe | s21"
						price={75000}
						image="https://www.mytrendyphone.eu/images/Samsung-Galaxy-S21-5G-128GB-Phantom-Grey-8806090892776-18012021-01-p.jpg"
						rating={4}
					/>
					<Product
						id="5"
						title="Apple iphone | Iphone 13 pro "
						price={125000}
						image="https://m.media-amazon.com/images/I/61jLiCovxVL._SL1500_.jpg"
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						id="3"
						title="Amazon echo | Amazon echo dot "
						price={4200}
						image="https://m.media-amazon.com/images/I/61WUqJd4dfS._SX679_.jpg"
						rating={5}
					/>
					<Product
						id="4"
						title="Boat air pod | Bluetooth wireless"
						price={2500}
						image="https://m.media-amazon.com/images/I/51HBom8xz7L._SX522_.jpg"
						rating={3}
					/>
					<Product
						id="5"
						title="Reebok Men's Speed Riser Running Shoe "
						price={1750}
						image="https://m.media-amazon.com/images/I/71ftzWAoUEL._UX695_.jpg"
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						id="3"
						title="MuscleBlaze 100% Whey Protein, Ultra Premium Whey Blend (Rich Milk Chocolate, 1 kg / 2.2 lb, 30 Servings)"
						price={2050}
						image="https://m.media-amazon.com/images/I/612Cs7-cFTL._SX679_.jpg"
						rating={5}
					/>
					<Product
						id="4"
						title="Head & Shoulders Smooth and Silky Anti Dandruff Shampoo, 650ml"
						price={155}
						image="https://m.media-amazon.com/images/I/61cktkNgAgL._SX522_.jpg"
						rating={3}
					/>
					<Product
						id="5"
						title="Fossil Analog Blue Dial Men's Watch-BQ2311"
						price={12500}
						image="https://m.media-amazon.com/images/I/61unvalTpAL._UX522_.jpg"
						rating={4}
					/> */}
				</div>
				
			</div>
		</div>
	);
}

export default Home; 