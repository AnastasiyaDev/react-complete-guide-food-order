import DUMMY_MEALS from '../../assets/dummy-meals';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const dummyMeals = DUMMY_MEALS.map(meal => (
      <MealItem
          id={ meal.id }
          key={ meal.id }
          name={ meal.name }
          description={ meal.description }
          price={ meal.price }
      />
  ));

  return (
      <section className={ classes.meals }>
        <Card>
          <ul>
            { dummyMeals }
          </ul>
        </Card>
      </section>
  )
}

export default AvailableMeals;