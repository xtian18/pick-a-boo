import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

class Review extends Component {
    constructor(props) {
        super(props);

        this.state = {
            meal: '',
            snack: '',
            friesSize: '',
            addSundae: '',
            drink: '',
            drinkSize: '',
            addPie: ''
        };
    }

    componentWillMount() {
        const { steps } = this.props;
        const { meal, snack, friesSize, addSundae, drink, drinkSize, addPie } = steps;

        this.setState({ meal, snack, friesSize, addSundae, drink, drinkSize, addPie });
    }

    render() {
        const { meal, snack, friesSize, addSundae, drink, drinkSize, addPie } = this.state;
        return (
            <div>
                <h3>Summary</h3>
                <p>---------------</p>
                <ul>
                    <li>1x {meal.value}</li>
                    {snack && <li>1x {snack.value === 'Fries' ? friesSize.value + ' ' + snack.value : snack.value}</li>}
                    {addSundae && <li>{addSundae.value === 'yes' && '1x Sundae'}</li>}
                    <li>1x {drinkSize.value + ' ' + drink.value}</li>
                    {addPie.value === 'yes' && <li>1x Pie</li>}
                </ul>
            </div>
        );
    }
}

Review.propTypes = {
    steps: PropTypes.object,
};

Review.defaultProps = {
    steps: undefined,
};

class App extends Component {
    render() {
        return (
            <div className='home'>
                <div className='nav-bar'><h1>Pick-A-Boo Foods</h1></div>
                    <div className='container'>
                        <div className="card">
                            <img src="https://i.postimg.cc/SRmXSpD6/burger-meal.png" alt="Avatar"></img>
                                <div className="card-bot">
                                    <h3><b>Burger Meal</b></h3>
                                    <ol>
                                        <li>Double Patty Burger</li>
                                        <li>Fries/Sundae</li>
                                        <li>Drinks</li>
                                        <li>(you can add sundae and pie)</li>
                                    </ol>
                                </div>
                        </div>
                        <div className="card">
                            <img src="https://i.postimg.cc/C1kDM7Yg/liasta-meal.png" alt="Avatar"></img>
                                <div className="card-bot">
                                    <h3><b>Pasta Meal</b></h3>
                                    <ol>
                                        <li>Filipino Style Spaghetti</li>
                                        <li>Fries/Sundae</li>
                                        <li>Drinks</li>
                                        <li>(you can add sundae and pie)</li>
                                    </ol>
                                </div>
                        </div>
                        <div className="card">
                            <img src="https://i.postimg.cc/DZHCHB63/chicken-meal.png" alt="Avatar"></img>
                                <div className="card-bot">
                                    <h3><b>Chicken Meal</b></h3>
                                    <ol>
                                        <li>Crispy Fried Chicken</li>
                                        <li>Drinks</li>
                                        <li>(you can add pie)</li>
                                        <br />
                                    </ol>
                                </div>
                        </div>
                    </div>
                <ChatBot
                    headerTitle="Chat with Me"
                    floating={true}
                    steps={[
                        {
                            id: 1,
                            message: 'Hello there 👋! Are you in the mood for some delicious food today?',
                            trigger: 2,
                        },
                        {
                            id: 2,
                            options: [
                                { value: 'yes', label: 'Yes, please!', trigger: 3 },
                                { value: 'no', label: 'No, thanks!', trigger: 'end-message' },
                            ]
                        },
                        {
                            id: 3,
                            message: 'What would you like for your meal?',
                            trigger: 'meal',
                        },
                        {
                            id: 'meal',
                            options: [
                                { value: 'Burger', label: 'Burger', trigger: 4 },
                                { value: 'Pasta', label: 'Pasta', trigger: 4 },
                                { value: 'Chicken', label: 'Chicken', trigger: 7 }
                            ]
                        },
                        {
                            id: 4,
                            message: 'How about for your snacks?',
                            trigger: 'snack',
                        },
                        {
                            id: 'snack',
                            options: [
                                { value: 'Fries', label: 'Fries', trigger: 5 },
                                { value: 'Sundae', label: 'Sundae', trigger: 7 }
                            ]
                        },
                        {
                            id: 5,
                            message: 'Great! Would you like to upgrade  your fries?',
                            trigger: 'friesSize',
                        },
                        {
                            id: 'friesSize',
                            options: [
                                { value: 'Medium', label: 'Medium', trigger: 6 },
                                { value: 'Large', label: 'Large', trigger: 6 },
                                { value: 'Small', label: 'No, Thanks!', trigger: 6 }
                            ]
                        },
                        {
                            id: 6,
                            message: 'Would you like to add a sundae?',
                            trigger: 'addSundae',
                        },
                        {
                            id: 'addSundae',
                            options: [
                                { value: 'yes', label: 'Yes, please!', trigger: 7 },
                                { value: 'no', label: 'No, thanks!', trigger: 7 }
                            ]
                        },
                        {
                            id: 7,
                            message: 'What would you like for your drinks?',
                            trigger: 'drink',
                        },
                        {
                            id: 'drink',
                            options: [
                                { value: 'Soft Drinks', label: 'Soft Drinks', trigger: 8 },
                                { value: 'Iced Tea', label: 'Iced Tea', trigger: 8 }
                            ]
                        },
                        {
                            id: 8,
                            message: 'Great! Would you like to upgrade  your drinks?',
                            trigger: 'drinkSize',
                        },
                        {
                            id: 'drinkSize',
                            options: [
                                { value: 'Medium', label: 'Medium', trigger: 9 },
                                { value: 'Large', label: 'Large', trigger: 9 },
                                { value: 'Small', label: 'No, Thanks!', trigger: 9 }
                            ]
                        },
                        {
                            id: 9,
                            message: 'Would you like to add a pie?',
                            trigger: 'addPie',
                        },
                        {
                            id: 'addPie',
                            options: [
                                { value: 'yes', label: 'Yes, please!', trigger: 10 },
                                { value: 'no', label: 'No, thanks!', trigger: 10 }
                            ]
                        },
                        {
                            id: 10,
                            message: 'Thank you for your order! Check out your summary',
                            trigger: 'review',
                        },
                        {
                            id: 'review',
                            component: <Review />,
                            asMessage: true,
                            end: true
                        },
                        {
                            id: 'end-message',
                            message: "Thank you for choosing our restaurant. Don't hesitate to reach out if you have any questions or concerns. Have a great day!",
                            end: true
                        }
                    ]}
                />
            </div>
        );
    }
}

export default App;