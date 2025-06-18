import './styles.css';

type Props = {
    title: string;
}

export default function PageCard({ title }: Props) {
    return(
        <div className="page-card">
            <h2>{title}</h2>
        </div>
    );
}