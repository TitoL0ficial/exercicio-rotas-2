import Button from "../../components/Button";
import PageCard from "../../components/PageCard";
import { Link } from 'react-router-dom';

export default function Subscription() {
    return(
        <main>
            <section>
                <div className="container">
                    <h2 className="section-title">Faça sua inscrição!</h2>
                    <div>
                        <PageCard title="Página de inscrição"/>
                    </div>
                    <div className="dflex">
                        <Link to="/promotion">
                            <Button text="Ver promoção"/>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}