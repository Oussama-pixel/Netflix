import "./watch.scss";
import { ArrowBackOutlined } from '@material-ui/icons';
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function Watch() {
    const location = useLocation()
    const {movie} = location;
    return (
        <div className="watch">
            <Link to="/">
                <div className="back">
                    <ArrowBackOutlined/>
                    Home
                </div>
            </Link>
            <video src={movie.video} className="video" autoPlay progress controls></video>
        </div>
    )
}
