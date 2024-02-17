import React, { useState } from 'react';
import './App.css';
import SearchComponent from './SearchComponent';
import ShowCourseComponent from './ShowCourseComponent';
import UserCartComponent from './UserCartComponent';

function App() {
	const [courses, setCourses] = useState([
		{ id: 1, 
		name: 'T-shirt', 
		price: 499,
    rating: 4.9, 
		image: 
'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISERESERESEQ8REhERDw8QERERERASGBQZGRgUGBgcIS4lHB4sHxgYJzgmKy8xNTU1GiQ7Qjs0Py40NTEBDAwMEA8QGhISHTElIyQ2NDQ3NTQ1NzQ/NDY/NDU0NTE0MTQ0NDE0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NP/AABEIAQMAwgMBIgACEQEDEQH/xAAcAAADAAIDAQAAAAAAAAAAAAAAAQIGBwMEBQj/xABCEAACAQIDBAcFBQUGBwAAAAABAgADEQQSIQUxQVEGEyJhcYGRBzJyobEUQlKSwSRigrLRFSMlNUPhVHOUs8Li8P/EABkBAQEBAQEBAAAAAAAAAAAAAAABBAMCBf/EACARAQEAAwADAQEBAQEAAAAAAAABAgMREiExIkEyEwT/2gAMAwEAAhEDEQA/AOcCUBGBKAkUgJQEYEYEBASgIwJVoEhZQWUBHaBIEoCO08jpPtD7PhmKm1SoRSp9zNe7eShj4gQOltjpTToEqoLkGxItYnkOfjPLfps5QumHXS1w7kHUnkJi+1XBZKaAs9lBtrqdyjmf6wfDVFRVZGBIuRl1Aud/9I6crJ8N7QFvarhmC/ipOHP5WA+sy3Zm0qOJTrKNQOBow1DoeTKdR+s086Cxsb27iD6Gc2yNpVMLWWoh1Bsy8HS+qn/7QwjdFoWk4SutSmlRDdHUOp5gi85bQJtC0u0LSiLR2lWjtAi0LS7QtCotFaXaFoEWjlWhA6IEYEYEoCQICUBGBKAgICMCUBGBAQEYEoCMCBNprzp3tDPiqdK/ZoLmfXTO9ib+ChfzGbEdgoJOgAJJ5ATSW0cWa9arVP8AqOzD4SeyPIWHlKMz9nWylxOIqYqovZptZPjI/p9ZmW2qFMkqVUjnYaTHujO0jgcFStSp1Qy9Y46wq6lje50sNNPLfO9/b1PEAkI9MjVlcDd3EaGZdlt9tmuScjEekOzaaKzqoVjy463mHgazMuk+0qToVRrve1gDMSr6btRvv9Z11d8fbhu55emzPZ9jOswrUye1RqFR8DDMvzzDymWWmsPZ5jcmL6smy1qbLbmy9pfkH9ZtC06uJWhaVaFoE2haVaFoE2haVaFoVNoWlWhaBNopdo4HQAlgQAlASBASgIwJQEBASgIwJQEokCO0YEdoHg9M8WaWBrke86ikuttXOUnyBJ8pq/YeD67EU0I7LOFJtoNCdfT5zYntGX9hPdVpH5kfrME6KYjLi6Cm2VnJud4fIwWx87WnnLvjePWHPKdbd2n0bw1aiiKFXKipmygmwN99wQfAyH2FQw2DqhQGfq3Ysd9ybgDlacuHqa2Zso533TodIse9Nero1Kbq4BK3p5kAGt9bsSToOQmTtyjbyStYY7Z7MzMLncVAIta2s8esCCQd40tMsxyHq9NDa/8AWYpiG7eu/iZo12/GXbjJ7jn2Zi2oVadVd9N1cD8QB1XzFx5zedGoHVWU3V1VlPAgi4M0Oo3Aa33TeOxsKaOGoUiSSlJEOa1wQouDblu8p1cXatHaVaFoE2haVaFoE2haVaFoVFo7SrQtKItCVaEDpgSgIwJQEgQEoCMCMCAgI7SgIwICAjtHaO0DFfaEP2FhzqU7eTA/QGaluVYMCQwOYEaFWB3j0m2/aEv7Ee6oh8gGmp6g7N+JJ1kG09mYo4mhSNUAdYgLD7jm3aH+08zbeFtp9kphPuvRqNT8yi6Ge10YwgbZ9BW40lb11Ex3auCrU3YBnKcM1/S8x95bI39vjK8vFYgU0bOxO+wY3Y90xVmLMTxJ3fpPS2tSbQte+u+edQNmBPAg252mnXJJ1k2W28ZD0WwSVsZSpsdFfPb8WQg5flfwBm55oTZ+MehVWom8G++3HgeB7/rum5eju3KWLpgpUVqigdYgurKeZU7r+Y0Nid86OT17QtHaFoCtC0doWgK0VpVoWlUrRWlWhaBNoSrQgdQCMCAEYEgAJQEAJQEAAjAjAjAgFo7R2nBi8XTornqulNOBdgLnkBvJ7hCPP6S7OOIwlamvvsjZOHa3geBIE1VszYlTFXooLVadQBgwPZVgoJPK2UnytMz2307sWp4Smc2l61UCw3HsoDyP3rW5Tg6M9L8PQp5K9OqtRnqPUr0UpuaruxYu92U5tbbjoBu3DzlbJ+Y94SW+76ZtQ2d1VKmi+6iKi87ItgfQToNsdnJZhddTc7vATpV+n2BA7AxbHUWFOmLgjd2nFp5eM9pDBcuGwwFhZXxDlrfwJb+aZZqyt+Nf/bCT64do9HCUeo9lAuxLkIqLzLHQTAcbRQORTN1B94Xse8X1tPT2ptfEYk3r1WcA3VNFRfBFsL9+/vnQImjXruP2s2zZMvkdQUzPR2VtKvhXFSi+RgCNQrrY7xY8NBOACBnRyZbgfaFikYdclKqn3gimm9u43K+RHpNi7M2hSxVJa1FsyNpyZGG9WHBhy/SaJYzIugm2jhsWtN2th8QRTcE9lXOiP62Unkx5QNv2haVaFoE2haVaFpRNoWlWitCptCVaEDqARgRgRgSAEoRAShAAIwIAShCPF6U7b+x0A6rnqu2SktwADYkue4D5kDjeaxxONq1y1Ws5d27KEr+/mCArYjU6a2FjPY6f4/rMZ1d7Jh1WmCd2d1V3bTxUfwTwc9wQLnqx2GCsQb5dGXlo2p5i/eHBUJ4klhYNc3JNibjgeBPElt+8yXtfS5HAnjpOVaze6zaE/eLBd5PbtvXMQTx0nHUy37JJGh1AFri9tCefOURCEIBEYzAwJMhjGTIYwJdpxgXZh+7+ohUO7xEdL32+E/USDd/RDav2vB0qjG9VB1Vfn1iWBY/EMrfxT27TVHs32v1OKbDubU8SAq33LWW+Q92YZl7zl5TbNoE2il2ilVMJVorQFCO0IHVtHaKVICMQgBAYlgSQJRcKCx3KCx8ALwjR+2q5qYvFOfvYisR8Odso9LThR+yRwa3kQRr37iPM99+pnJ7R1ZtWPMnUzmoNp4GUW0kymMgmAQEBCAGSxjJnE5gSzSLxtJgS+8eIhhz2/IyXMeG9/wBZB2C7IyuhKujBkYb1ZTcEeBAm+NhbSGKw1HECwNRAXUfdcdl18mBmiag0mdeyza5V6mEc9lwa1G/B1ADqPFQG/gaBsuFo7QtKpWhaOKAWhCEI6to47QtIoEcLR2gAnS2/VyYPFuN64auV+Lq2t87TvgTxOm1bJs3FH8Son56iIfkxhGmDCi9mI7oGcTnKwPkfCUdwmRaCn6RrAYiJgTFAU42nIZxOYEmSY4jIOOpFhj2hKYTvYDZ7ZqBqXSnWRnpsLHOquyG3LtIw1/USW8nVk7ePawOzkIBYXJ3k8PCZn0E6OYdHqYr362cpTVh2aAKi5XmTc68Bpzv4SYTIAVYsO+15knQ3E2q1KZ3VEzD4kO70ZvScMM7cvbVs1yYep8ZhCOE0sibQtKhaFTaEq0IR1IWlWjtIpARgR2jAgAExj2hU6r4RadGlUql6qFxTR3KooZrkKCfeyfOZSBKAhHz3XpsjZXVkfeUdSjj+E6zr17Wm8emGzRisMlImwNZDm4qAGJtMI2v0JoU0LJVqBgNxKsD8p4uzHG8rpjqyynYwig/ZHO1j6/7S8046lLISl72Yw3Akz3HNWfWWJ16ALHuE7VpRDTiecjTiaACSZQktIJM2HtTZH+B7PxCDt4Vesa3GlWcl/RmQ9wzTXZm6tiVkq7Gw6MMy1cK2Hy3sTlDU2PdaxMmVkl69Yy2yRj+yqXWUQx4iXs2oaeLosOFRFPwscrfImd3EhaaBF0CiwE8kuQwYakEEDmb3ExY39dfQyn55W0YpRhN75qYR2haAoRwhXWjtASgICAjAjjAgAEoCAjgdLaXuoP37+gP9RMU6SYsU6FR2+6LAc2Oij1mWYo3Y8kX5sdfkBNYdP8QWq06I0VEWo/Iu1wPQA/mma4+WxqmXjqYbYuxO8k3JkYg3IReH1nYfsKeZnHhqdu0d53TQyOREyi0po5LSjjcziJl1DOJYFiQ0sTjqGQOlSaoy00Us7sFUDezE6CbZ2XhPsmFp0WfO9NTfW4UsxdgvddjPF6IbDGGT7RXW2Icf3SMNaKkbyODEeg04mehjcSWO+ZduflfGfG7Tr8Z5ZfXFiapYz1+jWxzUda1QWpI10B/1HB/lB9TpznV2DshsQ92uKKnttuzH8Cnn9PSZ6iBQFUBVUAKo0AA3AT1q1/2vG7b/ACHCEJpZChHCFKEcIHXAgICMQGJQiEoQCMQjHfu4wjx8RV0dubsL9wOUfITTu1MWa1arVJvnclfgGiD8oE2ftLElMHUqHetN3t35Sbes1ITw5Thq925NO/1McXE1Mk3Y+U5I7xTuzAzjMpjIaBwvrALachsvK/eQJ2tibKq4ustKmRc6vUIJSmvFm/QcTpJbJ9WS28jpICWAAJZiAFAJJJ3ADiZnOwujIoZcRiQGrDtU6OhWkeBY/eYeg7zu97Y3RjDYAmsWNasBlV2UALfflUbieZJNuO+/X2lii7HhbcoP1mbPZ31i16tMx/WX1xYjFE8ZwbOalUxdHDO5DVS2iWJUKjPryvlsPHdPC2ttgU8yIQ1Xczb1p/1bu4fKef0Qqn+08GzNdmxNMFmOpLnLqfOXXr/tTbu/kb6oUUpoqU1CoosqjcBLhCaWQoRwgKELQhRCEIHXEoRCUIDEcIxAYnDjGtTqHlTqEeOU2nNOttNrUaneAvqwH6zzleSrjO5SMK6Y1smBZb2LtTQfmDEeima1ma+0XEZVw1PXXO504gKB/MZgbVDyJ9BPGqcxdN97m7AiZp1WrvwUDx1nE1Rzx+QnVxdh6wHeZ13rEyQCd8pVkEhCZsHoJtKhSpPRJC4hmuC2gqLbgfxDUW5WtxmCqYnaecsfKcesMrjexs/au17kqrWVTa/O3LzmO7TxzJSeoD2iQqdzHj32Fz5TFFxdRdBUcDgMxt6Qq4p6gAdywXcDuHkJzmnld8t/ZyRwB+e/jO1gMT1VWlWGppVKdWw45HDW+U6jT0+juxq2OrDD0cuYqzszmyU0GhZra7yB4kTszPokEHUag6g8xC0jD0siIl79WiJmtbNlUC/ynLKIhHCFKEIQCEIQOAShJEqA4xFKEBidHax/uwv43RfTtf8AjO8J5m1anbpryDufIAD9Zz2XmNe9U7lGrvaFXzYimvBEaw5Xb/1ExIvPZ6V4nrMU/wC72Z4pjD/MNv8AqkXiJgRJtPbmoWlC04o7wOS4km0m8IAQJMqIwMs9mmFpVdodXWSlUU0KpFOtTWorMCpFgwNiBmN+QPObmweAo0QVoUaVFWILCjTSmGI3EhQLzQvRDGdTtDCVN4FZEb4XvTY+jGfQcAhCEoJMqECYQhClCEIHCI4hKgOOIRwhieDtQk137qaqPAgn6kz3p4DvmqVHPu9YVB7l7I+k47r+eNH/AJ5+rWoOktFkxVYFSq5xlvx7K3Pzv5zypnPtJprmoVAAC2ZbjeeOvPd85gpnrC9xjltnMqLxRQvPbwI7SSYwYDtGFjEcBWkkS5BgOnUKMrr7yMHU/vKbj6T6ZJvrz1nzE24+B+k+maPuJ8K/SBcIQlBCEIBJMqTCiEIQOERxCOEUIxFGIE1agRWY7lBY+Q3TCOkuIqU6VJKfarVKtMKi+87lxlQeJsPOZpi6AqI9MkqHUrmG9TwI8DMBxlHLVwrVjZcPi6HXtnC5CtVe2S2mQHKxv90HUb5x2TtjRpvMbz68L2g1ajdSGTIqliRvK37JzctTaYSZtfb2y62IxNRGTNQrLjKKPbsip1L4imL/ABIhv4TVF7i/PWe8JzFz23uXUmF4GS09OYzSlMkTtbLwNXE1koUFz1XzZEzKubKpY6sQNynjA4xHKqUmRmR1KujMjod6spsynvBBkwCS0qS0AppmIXcWIW/K5t+s+mQgXQbhoPAT5swFIvWooPeerTQeLOAPrPpVjqfEwJhCEoIQhAIQhCiEIQOuJUkSpEOMRRiUExDpZseq1Q1KdIVqDqPtFIavcaFgu83Ft1zeZfHPOWMynHrHK43sax2BtRsHUUtWevgE6zq8O9mrYdguXs31NkUra9rEi0wHa2HFLEYimNFp161NQd4Cuygegn0LicBRqhhUpU6gb3s9NGzeNxNIdPqGTaeMA+9USp5vTRz82MmMs+0yyl+TjHDJaUZLT08pBmZ+yjDh9pq530qNZ18SBT+jmYXM39krgbSIJ1bDVQvecyN9AfSB1faBhTT2nitLK7JVX94Oikt+bP5gzHJs32u7PH7LihoxLYZ+8WLp6dv1HKayMBXkmMyTA9Ho+CcZhAN5xWGA8etSfRc+eOiiFtoYFR/xeHbyWorH5CfQ0AhCEoIQhAJMCZN4U7wivCBxyoQkQ4xCEBiAhCA5pL2mf5pX+DD/APZSEIGImIwhAgzKvZif8XwneMQD/wBNUihA2J7WFH9nIeIxVK3d/d1RNOGEIEmSYQge50I/zLA/85R6qZv+EIBCEJQSYQgIxGEIEwhCB//Z'
		},
		{ id: 2, 
		name: 'Bag', 
		price: 699, 
    rating: 4.3,
		image: 
'data:image/jpeg;base64,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'
		},
		{ id: 3, 
		name: 'watch', 
		price: 799, 
    rating: 3.4,
		image: 
'data:image/jpeg;base64,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'
		}
	]);

	const [cartCourses, setCartCourses] = useState([]);
	const [searchCourse, setSearchCourse] = useState('');

	const addCourseToCartFunction = (course) => {
		const alreadyCourses = cartCourses
							.find(item => item.product.id === course.id);
		if (alreadyCourses) {
			const latestCartUpdate = cartCourses.map(item =>
				item.product.id === course.id ? { 
				...item, quantity: item.quantity + 1 } 
				: item
			);
			setCartCourses(latestCartUpdate);
		} else {
			setCartCourses([...cartCourses, {product: course, quantity: 1}]);
		}
	};

	const deleteCourseFromCartFunction = (Course) => {
		const updatedCart = cartCourses
							.filter(item => item.product.id !== Course.id);
		setCartCourses(updatedCart);
	};

	const totalAmountCalculationFunction = () => {
		return cartCourses
			.reduce((total, item) => 
						total + item.product.price * item.quantity,0);
	};

	const courseSearchUserFunction = (event) => {
		setSearchCourse(event.target.value);
	};

	const filterCourseFunction = courses.filter((course) =>
		course.name.toLowerCase().includes(searchCourse.toLowerCase())
	);

	return (
		<div className="App">
			<SearchComponent searchCourse={searchCourse} 
							courseSearchUserFunction=
								{courseSearchUserFunction} />
			<main className="App-main">
				<ShowCourseComponent
					courses={courses}
					filterCourseFunction={filterCourseFunction}
					addCourseToCartFunction={addCourseToCartFunction}
				/>

				<UserCartComponent
					cartCourses={cartCourses}
					deleteCourseFromCartFunction={deleteCourseFromCartFunction}
					totalAmountCalculationFunction={
						totalAmountCalculationFunction
					}
					setCartCourses={setCartCourses}
				/>
			</main>
		</div>
	);
}

export default App;
