import Button from "./Button";

const Main = () => {
    return (
        <main className="main">
            <section className="wrapper">
                <div className="main-left">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Button text="Reserve a table" />
                </div>
                <div className="main-right">
                    <img src="/images/banner.jpg" alt="Banner" />
                </div>
            </section>

        </main>
    );
}

export default Main;