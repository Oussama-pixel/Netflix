import './list.scss'
import { Link,useLocation } from 'react-router-dom';

export default function List() {
    const location = useLocation();
    const list = location.list;
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">List</h1>
                <Link to="/newProduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={list.img} alt="" className="productInfoImg" />
                        <span className="productName">{list.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{list._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">genre:</span>
                            <span className="productInfoValue">{list.genre}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">type:</span>
                            <span className="productInfoValue">{list.type}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>List Title</label>
                        <input type="text" placeholder={list.title} />
                        <label>Genre</label>
                        <input type="text" placeholder={list.genre} />
                        <label>Type</label>
                        <input type="text" placeholder={list.type} />
                    </div>
                    <div className="productFormRight">
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
