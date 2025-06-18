import Button from "../../components/Button";
import Header from "../../components/Header";
import PageCard from "../../components/PageCard";

export default function Promotion() {
    return(
        <>
        <Header/>
        <main>
            <section>
                <div className="container">
                    <div>
                        <PageCard title="Página de promoção"/>
                    </div>
                    <div className="dflex">
                        <Button text="Quero participar"/>
                    </div>
                </div>
            </section>
        </main>
        </>
    );
}