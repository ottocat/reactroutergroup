// import Dance from "https://www.hubbardstreetdance.com/media/1149/hsd160707_0409-isolated-dancer-only.jpg?anchor=center&mode=crop&width=1140&height=600&rnd=131617969130000000";
import diMaria from "../../img/DIMARIA.jpg";
import GreatWall from "../../img/greatWall.jpg";
import Boris from "../../img/Coding.jpg";
import Cooks from "../../img/Cooking.jpg";
const getState = ({ getStore, setStore }) => {
	return {
		store: {
			cart: [
				{
					productName: "Dancing shoe's",
					productDescription: "Black Diamond dancing shoes",
					price: 180
				},
				{
					productName: "Dancing shoe's",
					productDescription: "Black Diamond dancing shoes",
					price: 180
				}
			],
			product: [
				{
					id: 1,
					productName: "Dancing shoe's",
					productDescription: "Black Diamond dancing shoes",
					price: 180
				},
				{
					productName: "Dancing shoe's",
					productDescription: "Black Diamond dancing shoes"
				}
			],
			// put all blog info in one array on final project
			blogs: [
				{
					title: "Featured Blog",
					description: "More stuff",
					date: "01/01/0001",
					liked: false
				}
			],
			blogs2: [
				{
					title: "Extra Time",
					description:
						"A blog proving hindsight really is 20/20, nitpickingevery big game",
					image: diMaria,
					date: "1/24/19",
					liked: false
				},
				{
					title: "Card number 2",
					description:
						"Seeing the world, and still finding the time to code",
					image: GreatWall,
					date: "01/10/10",
					style: " mt-3",
					liked: false
				}
			],
			blogs3: [
				{
					title: "Cooking Blog",
					description: "Cooking while coding: a comprehensive guide.",
					image: Cooks,
					date: "01/10/10",
					liked: false
				},
				{
					title: "Boris' Bootcamp",
					description:
						"A look through former bond villain and elite hacker, Boris' eyes into the world of tech from the 90s",
					image: Boris,
					date: "01/10/10",
					style: " mt-3",
					liked: false
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
			},
			featuredLikeClicked: index => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const blogs = store.blogs.map((elm, i) => {
					if (i === index) elm.liked = !elm.liked;
					return elm;
				});

				//reset the global store
				setStore({ blogs: blogs });
			},
			featuredLikeClicked2: index => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const blogs2 = store.blogs2.map((elm, i) => {
					if (i === index) elm.liked = !elm.liked;
					return elm;
				});

				//reset the global store
				setStore({ blogs2: blogs2 });
			},
			featuredLikeClicked3: index => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const blogs3 = store.blogs3.map((elm, i) => {
					if (i === index) elm.liked = !elm.liked;
					return elm;
				});

				//reset the global store
				setStore({ blogs3: blogs3 });
			}
		}
	};
};

export default getState;
