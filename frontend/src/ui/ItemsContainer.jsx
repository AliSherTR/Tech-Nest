import Item from "./Item";
import { PRODUCTS, SUPPORT, Useful_links } from "./Menus";
const ItemsContainer = () => {
    return (
        <div className="grid grid-cols-1 mx-20 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:px-8 px-5 py-16">
            <Item Links={PRODUCTS} title="PRODUCTS" />
            <Item Links={Useful_links} title="RESOURCES" />
            <Item Links={SUPPORT} title="SUPPORT" />
            <Item Links={SUPPORT} title="SUPPORT" />
        </div>
    );
};

export default ItemsContainer;
