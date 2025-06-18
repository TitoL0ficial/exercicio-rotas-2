import Button from "../../components/Button";
import Header from "../../components/Header";
import PageCard from "../../components/PageCard";

export default function Subscription() {
    return(
        <>
        <Header/>
        <main>
            <section>
                <div className="container">
                    <div>
                        <PageCard title="Página de inscrição"/>
                    </div>
                    <div className="dflex">
                        <Button text="Ver promoçào"/>
                    </div>
                </div>
            </section>
        </main>
        </>
    );
}