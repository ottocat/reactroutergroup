const getState = ({ getStore, setStore }) => {
	return {
		store: {
			cart: [
				{
					productName: "Dancershoe",
					productDescription: "Black Diamond dancing shoes",
					price: 180
				},
				{
					productName: "Dancershoe",
					productDescription: "Black Diamond dancing shoes",
					price: 180
				}
			],
			product: [
				{
					id: 1,
					productName: "Dancershoe",
					productDescription: "Black Diamond dancing shoes",
					price: 180
				},
				{
					productName: "Dancershoe",
					productDescription: "Black Diamond dancing shoes"
				}
			]
		},
		actions: {
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
