import React from 'react';
import Card from '../UI/Card/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'SHISAN ROLL HAWAIIAN ROLL',
        description: '8 Τεμάχια. Με αγγούρι, αβοκάντο,καρότο & σουσάμι',
        price: 4.50,
    },
    {
        id: 'm2',
        name: 'SHISAN ROLL CALIFORNIA ',
        description: '8 Τεμάχια. Με surimi καβουριού, αβοκάντο, αυγά χελιδονόψαρου και mayo sauce',
        price: 5.70,
    },
    {
        id: 'm3',
        name: 'SHISAN ROLL SALMON TERIYAKI ',
        description: '8 Τεμάχια. Με φιλέτο σολομού, αβοκάντο, αγγούρι, teriyaki sauce & σουσάμι',
        price: 6.90,
    },
    {
        id: 'm4',
        name: 'SHISAN ROLL AZZUMA',
        description: '8 Τεμάχια. Με surimi καβουριού,spicy mayo sauce , αβοκάντο & αυγά χελιδονόψαρου',
        price: 6.20,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));
    return <section className={classes.meals}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>
    </section>;

};

export default AvailableMeals;
