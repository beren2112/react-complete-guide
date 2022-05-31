import classes from './MealsSummary.module.css';

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Shisan Sushi Bar</h2>
            <p>
                Tα Shisan Sushi bars ιδρύθηκαν το 2014 με σκοπό να προσφέρουν μια μοναδική γευστική εμπειρία sushi σε μοναδική τιμή.
            </p>
            <p>
                Στα εστιατόρια μας μπορείτε να απολαύσετε παραδοσιακή και fusion Ιαπωνική κουζίνα σε έναν αξεπέραστο συνδυασμό ποιότητας
                και τιμής μέσα στον όμορφο και άνετο χώρο των εστιατορίων μας ή στον χώρο σας μέσω delivery ή take away.
            </p>
        </section>
    );
};

export default MealsSummary;