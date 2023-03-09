import Brand from "./Brand";
import ItemListContainer from "./ItemListContainer";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <header>
            <div className="containerBrand">
                <Brand/>
            </div>
        
            <nav className="containerItemList">
                <ItemListContainer
                    ItemUno = "Remeras"
                    ItemDos = "Hoddies"
                    ItemTres = "Pantalon"
                    ItemCuatro = "Accesorios"
                />
            </nav>

            <div className="containerCart">
                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar;
